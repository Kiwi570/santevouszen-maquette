# Pose longue en plein cadre : un fond propre (médiane des images alignées) + le corps en mouvement de chaque instant,
# détouré par différence avec ce fond, en calques transparents recadrés sur la zone du geste.
# usage : fantomes.py video debut duree n nom sx0 sx1 cx_mobile boite(x,y,w,h en px source)
import cv2, numpy as np, sys, json
src, ss, dur, n, nom = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), int(sys.argv[4]), sys.argv[5]
sx0, sx1, cx_m = float(sys.argv[6]), float(sys.argv[7]), float(sys.argv[8])
out = '/home/claude/work/santevouszen-maquette/assets/images/chrono'
cap = cv2.VideoCapture(src)
frames = []
for k in range(n):
    cap.set(cv2.CAP_PROP_POS_MSEC, (ss + dur * k / (n - 1)) * 1000); ok, f = cap.read()
    assert ok, 'lecture impossible'
    frames.append(f)
H, W = frames[0].shape[:2]
bx, by, bw, bh = [int(v) for v in sys.argv[9].split(',')] if len(sys.argv) > 9 else (0, 0, W, H)
# alignement (la caméra peut bouger un peu)
mask = np.full((H, W), 255, np.uint8); mask[:, int(W * sx0):int(W * sx1)] = 0
orb = cv2.ORB_create(4000); bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
k0, d0 = orb.detectAndCompute(cv2.cvtColor(frames[0], cv2.COLOR_BGR2GRAY), mask)
al = [frames[0]]
for f in frames[1:]:
    k1, d1 = orb.detectAndCompute(cv2.cvtColor(f, cv2.COLOR_BGR2GRAY), mask)
    m = sorted(bf.match(d1, d0), key=lambda x: x.distance)[:600]
    M, _ = cv2.estimateAffinePartial2D(np.float32([k1[x.queryIdx].pt for x in m]), np.float32([k0[x.trainIdx].pt for x in m]), method=cv2.RANSAC, ransacReprojThreshold=3)
    al.append(cv2.warpAffine(f, M, (W, H), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT))
import os
# Tache à corriger (JAUNE=x0,y0,x1,y1 en px source) : le jaune vif ramené à la teinte des planches.
if os.environ.get('JAUNE'):
    jx0, jy0, jx1, jy1 = [int(v) for v in os.environ['JAUNE'].split(',')]
    for f in al:
        z = cv2.cvtColor(f[jy0:jy1, jx0:jx1], cv2.COLOR_BGR2HSV).astype(np.float32)
        m = ((z[..., 0] > 16) & (z[..., 0] < 38) & (z[..., 1] > 110)).astype(np.float32)
        m = cv2.GaussianBlur(m, (0, 0), 3)
        r = z.copy(); r[..., 0] = 9; r[..., 1] = z[..., 1] * 0.45; r[..., 2] = z[..., 2] * 0.82
        z = z * (1 - m[..., None]) + r * m[..., None]
        f[jy0:jy1, jx0:jx1] = cv2.cvtColor(z.clip(0, 255).astype(np.uint8), cv2.COLOR_HSV2BGR)
pile = np.stack(al).astype(np.float32)
fond = np.median(pile, axis=0)
# masque de chaque instant : ce qui diffère du fond, dans la bande du sujet seulement
bande = np.zeros((H, W), np.float32); bande[:, int(W * sx0):int(W * sx1)] = 1
bande = cv2.GaussianBlur(bande, (0, 0), W * 0.01)
# Sous la taille (TAILLE, fraction de la hauteur source), les jambes ne bougent pas : pas de fantômes, le fond suffit.
if os.environ.get('TAILLE'):
    ty = float(os.environ['TAILLE']) * H
    v = np.clip((ty + 0.03 * H - np.arange(H)) / (0.06 * H), 0, 1).astype(np.float32)
    bande *= v[:, None]
alphas = []
for f in pile:
    d = np.abs(f - fond).max(axis=2)
    a = np.clip((d - 22) / 30, 0, 1) * bande
    a = cv2.morphologyEx(a, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    a = cv2.dilate(a, np.ones((9, 9), np.uint8))
    a = cv2.GaussianBlur(a, (0, 0), 2.5)
    alphas.append(a)
union = (np.max(np.stack(alphas), axis=0) > 0.05).astype(np.uint8)

def sortie(x0, y0, w, h, ow, oh, suffixe, q):
    cv2.imwrite(f'{out}/{nom}{suffixe}-fond.webp', cv2.resize(fond[y0:y0+h, x0:x0+w], (ow, oh), interpolation=cv2.INTER_AREA).astype(np.uint8), [cv2.IMWRITE_WEBP_QUALITY, q])
    u = union[y0:y0+h, x0:x0+w]; ys, xs = np.nonzero(u)
    if not len(xs): return None
    ux0, ux1, uy0, uy1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1
    if os.environ.get('TAILLE'): uy1 = h   # l'instant net descend jusqu'aux pieds : pas de raccord à la taille
    s = ow / w
    for k, (f, a) in enumerate(zip(pile, alphas)):
        c = np.dstack([f[y0:y0+h, x0:x0+w], a[y0:y0+h, x0:x0+w] * 255])[uy0:uy1, ux0:ux1]
        c = cv2.resize(c, (max(1, round((ux1 - ux0) * s)), max(1, round((uy1 - uy0) * s))), interpolation=cv2.INTER_AREA)
        cv2.imwrite(f'{out}/{nom}{suffixe}-{k+1:02d}.webp', c.clip(0, 255).astype(np.uint8), [cv2.IMWRITE_WEBP_QUALITY, q])
        # Instant net : l'image entière dans la zone du geste, bords fondus (le fond est le même partout ailleurs).
        hh, ww = uy1 - uy0, ux1 - ux0
        fx = np.clip(np.minimum(np.arange(ww), ww - 1 - np.arange(ww)) / (0.06 * ww), 0, 1)
        fy = np.clip(np.minimum(np.arange(hh), hh - 1 - np.arange(hh)) / (0.04 * hh), 0, 1)
        if uy0 == 0: fy[:hh // 2] = 1
        if uy1 == h: fy[hh // 2:] = 1
        pl = np.dstack([f[y0:y0+h, x0:x0+w][uy0:uy1, ux0:ux1], (fy[:, None] * fx[None, :]) * 255])
        pl = cv2.resize(pl, (c.shape[1], c.shape[0]), interpolation=cv2.INTER_AREA)
        cv2.imwrite(f'{out}/{nom}{suffixe}-p{k+1:02d}.webp', pl.clip(0, 255).astype(np.uint8), [cv2.IMWRITE_WEBP_QUALITY, q])
    return [round(ux0 / w, 4), round(uy0 / h, 4), round((ux1 - ux0) / w, 4), round((uy1 - uy0) / h, 4)]

r = {'n': n, 'ordi': sortie(bx, by, bw, bh, 1600, round(1600 * bh / bw), '', 74)}
rt = float(sys.argv[10]) if len(sys.argv) > 10 else 9 / 16   # rapport largeur/hauteur de la version téléphone
cw = int(H * rt); mx = int(min(max(cx_m * W - cw / 2, 0), W - cw))
tw, th = (600, 800) if rt > 0.7 else (540, 960)
r['tel'] = sortie(mx, 0, cw, H, tw, th, '-m', 72); r['telTaille'] = [tw, th]
r['telX'] = mx / W; r['telL'] = cw / W
# où sont les mains à la fin du geste (centre haut du masque de la dernière image), en fraction du cadre ordinateur
a = alphas[-1][by:by+bh, bx:bx+bw]; ys, xs = np.nonzero(a > 0.5)
if len(xs): r['mains'] = [round(float(np.median(xs[ys < ys.min() + 40])) / bw, 4), round(float(ys.min() + 20) / bh, 4)]
print(json.dumps(r))
