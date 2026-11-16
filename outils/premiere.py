# Image fixe de la pose longue (sans JavaScript, et première image affichée) : le fond et le corps du premier instant.
import sys, json
from PIL import Image
d = '/home/claude/work/santevouszen-maquette/assets/images/chrono'
nom, b, bm = sys.argv[1], json.loads(sys.argv[2]), json.loads(sys.argv[3])
for suf, bb in (('', b), ('-m', bm)):
    f = Image.open(f'{d}/{nom}{suf}-fond.webp').convert('RGBA'); W, H = f.size
    c = Image.open(f'{d}/{nom}{suf}-p01.webp').convert('RGBA')
    t = Image.new('RGBA', (W, H)); t.paste(c, (round(bb[0] * W), round(bb[1] * H)))
    Image.alpha_composite(f, t).convert('RGB').save(f'{d}/{nom}{suf}-image.webp', quality=76)
