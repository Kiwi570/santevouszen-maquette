/* Santé Vous Zen · « Le geste lent ». Effets propres au client (chacun marqué data-effet="nom-du-plan").
   Le socle gère l'ouverture, le voile en iris, l'en-tête, le menu, les boucles, les mesures et les effets génériques. */
import { demarrer, boucle, versObjet, quand, partir } from './socle/index.js?v=2';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const telephone = () => window.matchMedia('(max-width: 760px)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* ---------- Repère de la photo : un point de l'image d'origine (en %) vers l'écran ---------- */
/* L'effet lit l'image affichée (currentSrc) et son object-position réel, jamais une valeur supposée. */
function repere(fig) {
  const im = fig && fig.querySelector('img');
  if (!im) return null;
  const r = fig.getBoundingClientRect();
  const mobile = /-mobile-/.test(im.currentSrc || '');
  const nw = im.naturalWidth || +im.getAttribute('width') || 1920;
  const nh = im.naturalHeight || +im.getAttribute('height') || 1080;
  const pos = getComputedStyle(im).objectPosition.split(' ').map((v) => parseFloat(v) / 100);
  const s = Math.max(r.width / nw, r.height / nh);
  const w = nw * s, h = nh * s;
  const ox = (r.width - w) * (isNaN(pos[0]) ? 0.5 : pos[0]);
  const oy = (r.height - h) * (isNaN(pos[1]) ? 0.5 : pos[1]);
  /* Version téléphone : recadrage 9:16 d'une photo 16:9, centré sur --cadrage-mobile. */
  let cx = 0, cw = 1;
  if (mobile) {
    const cm = (fig.style.getPropertyValue('--cadrage-mobile') || '50% 50%').trim().split(' ').map((v) => parseFloat(v) / 100);
    cw = (9 / 16) / (16 / 9);
    cx = (1 - cw) * (isNaN(cm[0]) ? 0.5 : cm[0]);
  }
  return (ux, uy) => ({ x: ox + ((ux / 100 - cx) / cw) * w, y: oy + (uy / 100) * h });
}

/* ---------- Pose longue : le vrai geste de Patrick, en plein cadre (effet signature, grille wouahou point 1) ----------
   Chaque séance de pleine nature est filmée caméra fixe. Un fond propre (médiane des images) porte le décor ; par-dessus,
   le corps de chaque instant, détouré par différence avec ce fond. L'instant en cours est net, les précédents restent en
   fantômes : la pose longue se fait sur le vrai paysage, sans franges. Données : donnees/poses.json. */
const CHRONO = '/assets/images/chrono/';
function poseLongue(fig) {
  const conf = JSON.parse(fig.dataset.pose);
  const toile = $('.pose-toile', fig), ctx = toile.getContext('2d'), img = $('img', fig);
  const st = { variante: null, fond: null, calques: [], pret: false, W: 0, H: 0, dpr: 1, cadre: null, p: -1, flou: -1 };
  const variante = () => fig.dataset.variante || (telephone() ? 'tel' : 'ordi');
  function charger() {
    const v = variante();
    if (st.variante === v) return st.promesse;
    st.variante = v; st.pret = false;
    const suf = v === 'tel' ? '-m' : '';
    const ch = (s) => { const im = new Image(); im.decoding = 'async'; im.src = `${CHRONO}${conf.nom}${suf}-${s}.webp`; return im; };
    st.fond = ch('fond');
    /* Les fantômes viennent après : le geste net joue déjà pendant qu'ils arrivent (calcul au chargement réduit). */
    const plusTard = window.requestIdleCallback || ((f) => setTimeout(f, 600));
    st.calques = [];
    plusTard(() => { if (st.variante === v) st.calques = Array.from({ length: conf.n }, (_, i) => ch(String(i + 1).padStart(2, '0'))); });
    st.nets = Array.from({ length: conf.n }, (_, i) => ch(`p${String(i + 1).padStart(2, '0')}`));
    st.promesse = Promise.all([st.fond, ...st.nets].map((im) => (im.decode ? im.decode().catch(() => {}) : null))).then(() => {
      if (st.variante !== v) return;
      st.pret = true; mesurer(); st.p = -1; fig.classList.add('pose-prete');
    });
    return st.promesse;
  }
  function mesurer() {
    st.dpr = Math.min(window.devicePixelRatio || 1, telephone() ? 1.5 : 1); // les images font 1600 px : au-delà, rien de plus net, et plus lent
    st.W = fig.clientWidth; st.H = fig.clientHeight; // taille de mise en page, hors zoom de plongée
    toile.width = Math.round(st.W * st.dpr); toile.height = Math.round(st.H * st.dpr);
    st.off = st.off || document.createElement('canvas'); st.off.width = toile.width; st.off.height = toile.height; st.octx = st.off.getContext('2d'); st.cle = '';
    const tel = st.variante === 'tel';
    const nw = (st.fond && st.fond.naturalWidth) || (tel ? 540 : 1600), nh = (st.fond && st.fond.naturalHeight) || (tel ? 960 : 900);
    const pos = getComputedStyle(img).objectPosition.split(' ').map((v) => parseFloat(v) / 100);
    const s = Math.max(st.W / nw, st.H / nh), w = nw * s, h = nh * s;
    st.cadre = { x: (st.W - w) * (isNaN(pos[0]) ? 0.5 : pos[0]), y: (st.H - h) * (isNaN(pos[1]) ? 0.5 : pos[1]), w, h };
    st.p = -1; st.plein = false;
  }
  /* Point du cadre d'origine (fractions) vers la boîte de la figure. */
  const versBoite = (fx, fy) => (st.cadre ? { x: st.cadre.x + fx * st.cadre.w, y: st.cadre.y + fy * st.cadre.h } : { x: 0, y: 0 });
  function zone() { const b = conf[st.variante || variante()] || [0, 0, 1, 1], a = versBoite(b[0], b[1]); return { x: a.x, y: a.y, w: b[2] * (st.cadre ? st.cadre.w : 0), h: b[3] * (st.cadre ? st.cadre.h : 0) }; }
  function dessiner(p, flou = 0) {
    if (!st.pret || !st.cadre) return;
    p = clamp(p, 0, 1);
    if (Math.abs(p - st.p) < 0.006 && Math.abs(flou - st.flou) < 0.05) return;
    st.p = p; st.flou = flou;
    const c = st.cadre, z = zone(), n = conf.n;
    ctx.setTransform(st.dpr, 0, 0, st.dpr, 0, 0);
    ctx.globalAlpha = 1;
    /* Le fond ne change pas : après le premier dessin, on ne repeint que la zone du geste (bien moins de pixels). */
    if (!st.plein) { ctx.drawImage(st.fond, c.x, c.y, c.w, c.h); st.plein = true; }
    else {
      const m = 16, fw = st.fond.naturalWidth / c.w, fh = st.fond.naturalHeight / c.h;
      const x0 = Math.max(c.x, z.x - m), y0 = Math.max(c.y, z.y - m), x1 = Math.min(c.x + c.w, z.x + z.w + m), y1 = Math.min(c.y + c.h, z.y + z.h + m);
      ctx.drawImage(st.fond, (x0 - c.x) * fw, (y0 - c.y) * fh, (x1 - x0) * fw, (y1 - y0) * fh, x0, y0, x1 - x0, y1 - y0);
    }
    const f = p * (n - 1), k = Math.floor(f), a = f - k;
    /* L'instant le plus proche est net (l'image entière dans la zone du geste), son voisin passe en fondu. */
    const proche = a < 0.5 ? k : Math.min(n - 1, k + 1), voisin = a < 0.5 ? Math.min(n - 1, k + 1) : k;
    const fondu = a < 0.5 ? a * 1.2 : (1 - a) * 1.2;
    ctx.globalAlpha = 1; ctx.drawImage(st.nets[proche], z.x, z.y, z.w, z.h);
    const fc = conf.fondu ?? 0.5; // fondu entre deux instants : 0 = une suite de poses nettes
    if (voisin !== proche && fondu > 0.02 && fc > 0) { ctx.globalAlpha = fondu * fc; ctx.drawImage(st.nets[voisin], z.x, z.y, z.w, z.h); }
    const trace = st.variante === 'tel' && conf.traceTel != null ? conf.traceTel : conf.trace ?? 0.88;
    if (!k || !trace || fig.dataset.fantomes === 'non' || st.calques.length < n) { ctx.globalAlpha = 1; return; }
    /* Fantômes : les instants passés, détourés, plus pâles à mesure qu'ils s'éloignent ; trop vite, ils se brouillent.
       Sur l'ouverture, ni visage ni buste en fantôme (donnees/poses.json, masques) : seuls les bras et les mains laissent leur trace. */
    /* Les fantômes ne changent qu'avec l'instant (k) : composés une fois sur une toile à part, puis recopiés. */
    const g = st.octx, cle = `${k}|${Math.round(flou * 10)}|${st.variante}`;
    if (cle !== st.cle) {
      st.cle = cle;
      g.setTransform(st.dpr, 0, 0, st.dpr, 0, 0); g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
      g.clearRect(z.x - 30, z.y - 30, z.w + 60, z.h + 60);
      if (conf.lisse) g.filter = `blur(${conf.lisse}px)`; // trace courte et lisse, sans grain
      for (let i = 0; i < k; i++) {
        const age = (k - i) / (n - 1);
        if (!st.calques[i].complete) continue;
        g.globalAlpha = Math.max(0, 0.3 - (age * 0.3) / trace) * (1 - flou * 0.3);
        if (g.globalAlpha > 0.005) g.drawImage(st.calques[i], z.x + flou * (i % 2 ? 12 : -12), z.y, z.w, z.h);
      }
      g.globalAlpha = 1;
      g.filter = 'none';
      if (conf.masques) {
        g.globalCompositeOperation = 'destination-out';
        for (const [mx, my, rx, ry] of conf.masques) {
          const q = versBoite(...versCadre(mx, my)), sx = rayon(rx, 'x'), sy = rayon(ry, 'y');
          g.save(); g.translate(q.x, q.y); g.scale(1, sy / sx);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, sx);
          gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(0.86, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
          g.fillStyle = gr; g.fillRect(-sx, -sx, sx * 2, sx * 2); g.restore();
        }
        g.globalCompositeOperation = 'source-over';
      }
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1;
    const d = st.dpr, x0 = Math.max(0, (z.x - 30) * d), y0 = Math.max(0, (z.y - 30) * d), w0 = Math.min(st.off.width - x0, (z.w + 60) * d), h0 = Math.min(st.off.height - y0, (z.h + 60) * d);
    if (w0 > 0 && h0 > 0) ctx.drawImage(st.off, x0, y0, w0, h0, x0, y0, w0, h0);
    ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  /* Point de la vidéo d'origine (fractions de l'image source) vers le cadre de la variante, et rayons. */
  const SRC = [1920, 1080];
  function versCadre(sx, sy) {
    if (st.variante === 'tel') return [(sx - conf.telX) / conf.telL, sy];
    const b = conf.boite || [0, 0, SRC[0], SRC[1]];
    return [(sx * SRC[0] - b[0]) / b[2], (sy * SRC[1] - b[1]) / b[3]];
  }
  function rayon(r, axe) {
    const c = st.cadre, b = conf.boite || [0, 0, SRC[0], SRC[1]];
    if (axe === 'x') return (st.variante === 'tel' ? r / conf.telL : (r * SRC[0]) / b[2]) * c.w;
    return (st.variante === 'tel' ? r : (r * SRC[1]) / b[3]) * c.h;
  }
  window.addEventListener('resize', () => { if (st.variante !== variante()) { fig.classList.remove('pose-prete'); charger(); } else mesurer(); });
  return { charger, mesurer, dessiner, zone, versBoite, conf, get pret() { return st.pret; } };
}

/* ---------- 1. L'ouverture : soutenir le ciel des deux mains, sur le ponton de Nosy Be ----------
   Le geste se déroule seul en 2 s après l'intro, puis respire. À la souris, les bras suivent la hauteur du pointeur ;
   au doigt, la poignée se glisse vers le haut. Trop vite, les fantômes se brouillent. */
function chrono() {
  const ouv = $('[data-ouv]'), fig = $('.ouv-figure', ouv || document), poignee = $('[data-poignee]');
  if (!ouv || !fig) return;
  const P = poseLongue(fig);
  const consigne = $('[data-consigne-texte]'), boite = $('[data-consigne]');
  const fin = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const textes = { base: fin ? consigne.textContent : ouv.dataset.doigt, vite: ouv.dataset.vite, fin: ouv.dataset.fin };
  consigne.textContent = textes.base;
  const st = { p: 0, cible: 0, saisi: false, survol: false, auto: true, lance: null, vitesse: 0, flou: 0, fini: 0 };
  P.charger().then(() => { rep = null; placer(); ouv.classList.add('chrono-pret'); });
  /* Repères posés une fois (et au redimensionnement) ; à chaque image, seule la hauteur de la poignée change, si elle change. */
  let rep = null, dernierePy = '';
  function mesurerRepere() {
    const z = P.zone(), m = P.conf[telephone() ? 'mainsTel' : 'mains'] || [0.5, 0.1], q = P.versBoite(m[0], m[1]);
    const r = ouv.getBoundingClientRect(), f = fig.getBoundingClientRect(), dx = f.left - r.left, dy = f.top - r.top;
    ouv.style.setProperty('--mx', `${q.x + dx}px`); ouv.style.setProperty('--my', `${q.y + dy}px`);
    poignee.style.setProperty('--px', `${Math.min(z.x + z.w * 0.5 + Math.max(120, z.w * 0.36), f.width - 48) + dx}px`);
    rep = { z, dy }; dernierePy = '';
  }
  function placer() {
    if (!rep) mesurerRepere();
    const py = `${Math.round(rep.dy + rep.z.y + rep.z.h * (0.46 - 0.34 * st.p))}px`;
    if (py !== dernierePy) { dernierePy = py; poignee.style.setProperty('--py', py); }
  }
  window.addEventListener('resize', () => { rep = null; });
  function dire(cle) { if (consigne.dataset.cle === cle) return; consigne.dataset.cle = cle; consigne.textContent = textes[cle]; boite.classList.toggle('alerte', cle === 'vite'); boite.classList.toggle('discret', fin && cle === 'base'); }
  dire('base');
  boucle(fig, (dt, t) => {
    if (st.lance === true) st.lance = t;
    if (st.reprendre) { st.reprendre = false; st.lance = t - 2.2 - ((1 - st.p) / 0.75) / 2 / 0.11; }
    if (st.auto && typeof st.lance === 'number' && !st.saisi && !st.survol) {
      const u = t - st.lance;
      const ph = ((u - 2.2) * 0.11) % 1;
      st.cible = u < 2.2 ? 1 : 1 - 0.75 * (1 - Math.abs(2 * ph - 1)); // respiration lente, à vitesse égale
    }
    const maxV = st.saisi || st.survol ? 0.9 : 0.5;
    st.p += clamp(st.cible - st.p, -maxV * dt, maxV * dt);
    st.flou += ((st.vitesse > 1.4 ? 1 : 0) - st.flou) * Math.min(1, dt * 5);
    st.vitesse *= Math.pow(0.02, dt);
    if (st.saisi || st.survol) dire(st.vitesse > 1.4 ? 'vite' : 'base');
    if (st.p > 0.985 && !st.auto && !st.fini) { st.fini = t; dire('fin'); }
    if (st.fini && t - st.fini > 6 && !st.saisi && !st.survol) { st.fini = 0; st.auto = true; st.lance = t - 2.3; dire('base'); }
    placer();
    P.dessiner(st.p, st.flou);
  });
  /* À la souris : la hauteur du pointeur sur la silhouette règle la hauteur des bras (du ventre au ciel). */
  let dernierY = 0, dernierT = 0;
  const mesureVitesse = (y) => { const now = performance.now(), d = Math.max(8, now - dernierT) / 1000; st.vitesse = Math.max(st.vitesse * 0.6, Math.abs(y - dernierY) / d / Math.max(1, P.zone().h * 0.4)); dernierY = y; dernierT = now; };
  /* La souris quitte Patrick : les bras restent posés cinq secondes, puis le geste reprend seul en respirant. */
  let attente = 0;
  function lacherSurvol() {
    if (!st.survol) return; st.survol = false; clearTimeout(attente);
    attente = setTimeout(() => { if (!st.survol && !st.saisi && !st.fini) { st.auto = true; st.reprendre = true; } }, 5000);
  }
  if (fin) {
    ouv.addEventListener('pointermove', (e) => {
      if (st.lance === null || st.saisi || e.target.closest('.ouv-texte, .entete')) return;
      const f = fig.getBoundingClientRect(), z = P.zone(), x = e.clientX - f.left, y = e.clientY - f.top;
      /* Partout sauf sur le texte (et la marge du bord, par où la souris entre) : là, le geste continue de respirer seul. Souris arrêtée sur lui : les bras restent où elle les a mis. */
      const bt = $('.ouv-texte', ouv).getBoundingClientRect(), dansTexte = e.clientX >= bt.left - 12 && e.clientX <= bt.right + 12 && e.clientY >= bt.top - 12;
      if (dansTexte || x < bt.left - f.left - 12) { lacherSurvol(); return; } // tout l'écran, sauf le bloc de texte et la marge du bord
      st.survol = true; st.auto = false;
      st.cible = clamp((z.y + z.h * 0.5 - y) / (z.h * 0.42), 0, 1);
      mesureVitesse(e.clientY);
    });
    ouv.addEventListener('pointerleave', lacherSurvol);
  }
  /* Au doigt (et au clavier) : la poignée. Le défilement de la page reste libre ailleurs. */
  let y0 = 0, p0 = 0;
  poignee.addEventListener('pointerdown', (e) => { st.saisi = true; st.auto = false; y0 = e.clientY; p0 = st.p; st.cible = st.p; dernierY = e.clientY; dernierT = performance.now(); document.documentElement.classList.add('saisie-trace'); try { poignee.setPointerCapture(e.pointerId); } catch {} e.preventDefault(); });
  poignee.addEventListener('pointermove', (e) => { if (!st.saisi) return; st.cible = clamp(p0 + (y0 - e.clientY) / (P.zone().h * 0.4), 0, 1); mesureVitesse(e.clientY); });
  const lacher = () => { if (!st.saisi) return; st.saisi = false; document.documentElement.classList.remove('saisie-trace'); if (!st.fini) dire('base'); };
  poignee.addEventListener('pointerup', lacher); poignee.addEventListener('pointercancel', lacher);
  poignee.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { st.auto = false; st.cible = clamp(st.cible + 0.1, 0, 1); e.preventDefault(); }
    if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { st.auto = false; st.cible = clamp(st.cible - 0.1, 0, 1); e.preventDefault(); }
    if (e.key === 'Enter' || e.key === ' ') { st.auto = false; st.cible = 1; e.preventDefault(); }
  });
  traceGeste.lancer = () => { if (st.auto) st.lance = true; };
  traceGeste.final = () => { st.p = st.cible = 0.6; st.lance = true; };
}
function traceGeste() { chrono(); }

/* ---------- Titre « lent. » : la largeur respire, et se resserre quand on va vite (point 5) ---------- */
function titreLent() {
  const el = $('.ouv-lent');
  if (!el) return;
  el.style.fontStretch = '100%';
  const large = el.getBoundingClientRect().width;
  el.style.fontStretch = '';
  el.style.minWidth = `${Math.ceil(large)}px`;
  let derniere = window.scrollY, v = 0, e = 76;
  boucle(el, (dt, t) => {
    const y = window.scrollY;
    v = v * 0.85 + Math.abs(y - derniere) / Math.max(dt, 0.008) * 0.15; derniere = y;
    const repos = 82 + 14 * (0.5 + 0.5 * Math.sin(t * 0.9)); // respiration lente, 82 à 96 %
    const cible = clamp(repos - v / 40, 75, 100);
    e += (cible - e) * Math.min(1, dt * 3);
    el.style.setProperty('--etire', `${e.toFixed(1)}%`);
  });
}

/* ---------- 2. L'enchaînement : lecture de côté et plongée d'un paysage à l'autre ----------
   Les panneaux filmés (lave, littoral) sont des poses longues : le défilement déroule le geste quand le panneau arrive,
   et la souris le fait jouer de gauche à droite. Les autres panneaux sont de vraies photos, sans dessin ajouté. */
function enchainement() {
  const sec = $('[data-ench]');
  if (!sec || !gsap || !window.ScrollTrigger) return;
  const piste = $('[data-ench-piste]', sec), panneaux = $$('.ench-panneau', sec);
  const n = panneaux.length, compte = $('[data-ench-n]', sec), barre = $('[data-ench-progres]', sec);
  const poses = panneaux.map((p) => { const f = $('.pose', p); return f ? poseLongue(f) : null; });
  const etats = panneaux.map(() => ({ f: 0, defil: 0, main: null, quand: 0, vu: false }));
  /* On charge une pose quand son panneau approche. */
  const charge = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { const i = +e.target.dataset.panneau; if (poses[i]) poses[i].charger(); charge.unobserve(e.target); } }), { rootMargin: '0px 100% 0px 100%' });
  panneaux.forEach((p) => charge.observe(p));
  panneaux.forEach((p, i) => {
    if (!poses[i]) return;
    p.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      const r = p.getBoundingClientRect();
      etats[i].main = clamp((e.clientX - r.left - r.width * 0.15) / (r.width * 0.7), 0, 1); etats[i].quand = performance.now();
    });
    p.addEventListener('click', () => { if (telephone()) gsap.fromTo(etats[i], { f: 0 }, { f: 1, duration: 3, ease: 'sine.inOut' }); });
  });
  boucle(sec, (dt) => {
    panneaux.forEach((p, i) => {
      if (!poses[i]) return;
      const s = etats[i];
      const recent = s.main != null && performance.now() - s.quand < 2500;
      if (!telephone() || recent) s.f += ((recent ? s.main : s.defil) - s.f) * Math.min(1, dt * (recent ? 4 : 3));
      poses[i].dessiner(s.f);
      p.classList.toggle('geste-fait', s.f > 0.97);
    });
  });
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    const st = window.ScrollTrigger.create({
      trigger: sec, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
      onRefresh: () => poses.forEach((q) => q && q.mesurer()),
      onUpdate(s) {
        const x = s.progress * (n - 1);
        gsap.set(piste, { x: -x * window.innerWidth });
        panneaux.forEach((p, i) => {
          const d = x - i;
          const plonge = d > 0 ? 1 + Math.min(d, 1) * 0.45 : 1 + Math.min(-d, 1) * 0.12;
          p.querySelector(poses[i] ? '.ench-photo' : '.ench-photo img').style.setProperty('--plonge', plonge.toFixed(3));
          etats[i].defil = clamp(1 - Math.abs(d + 0.35) * 1.3, 0, 1);
        });
        compte.textContent = String(Math.round(x) + 1).padStart(2, '0');
        barre.style.transform = `scaleX(${s.progress})`;
      },
    });
    return () => { st.kill(); gsap.set(piste, { clearProps: 'transform' }); };
  });
  mm.add('(max-width: 760px)', () => {
    const triggers = [window.ScrollTrigger.create({
      trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true,
      onUpdate(s) { panneaux.forEach((p, i) => { if (!poses[i]) p.querySelector('.ench-photo img').style.setProperty('--plonge', (1.18 - 0.18 * Math.min(1, s.progress * 2)).toFixed(3)); }); },
    })];
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const i = +e.target.dataset.panneau;
      panneaux.forEach((q) => q.classList.toggle('actif', q === e.target));
      if (poses[i]) poses[i].charger().then(() => gsap.fromTo(etats[i], { f: 0 }, { f: 1, duration: 3, ease: 'sine.inOut' }));
      compte.textContent = String(i + 1).padStart(2, '0');
      barre.style.transform = `scaleX(${(i + 1) / n})`;
    }), { root: piste, threshold: 0.6 });
    panneaux.forEach((p) => io.observe(p));
    return () => { triggers.forEach((t) => t.kill()); io.disconnect(); };
  });
}

/* ---------- Point de lumière qui relie les sections (fil, point 4) ---------- */
function pointsFil() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('.point-fil').forEach((el) => {
    const sens = el.dataset.arc === 'bas' ? 1 : -1;
    gsap.fromTo(el, { x: -40 * sens, y: -30 }, {
      x: 40 * sens, y: 30, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      modifiers: { y: (y) => `${parseFloat(y) - Math.sin((parseFloat(y) + 30) / 60 * Math.PI) * 24}px` },
    });
  });
}

/* ---------- Le live : horloges Paris et La Réunion, prochain jeudi, jauge de la saison ---------- */
function heureLocale(zone, d = new Date()) {
  const f = new Intl.DateTimeFormat('fr-FR', { timeZone: zone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' });
  const o = Object.fromEntries(f.formatToParts(d).map((p) => [p.type, p.value]));
  return { h: +o.hour % 24, m: +o.minute, s: +o.second, jour: o.weekday, date: `${o.year}-${o.month}-${o.day}` };
}
/* Instant UTC de « date à hh:mm, heure de Paris ». */
function instantParis(date, hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const essai = new Date(`${date}T${hhmm}:00Z`);
  const p = heureLocale('Europe/Paris', essai);
  const ecart = (p.h * 60 + p.m) - (h * 60 + m);
  return new Date(essai.getTime() - ecart * 60000);
}
function prochainLive(L, maintenant = new Date()) {
  const fin = instantParis(L.fin, L.heureFin);
  if (maintenant > fin) return { etat: 'fini' };
  let d = new Date(`${L.debut}T12:00:00Z`);
  const aujourd = new Date(maintenant.getTime());
  if (d < aujourd) d = new Date(Date.UTC(aujourd.getUTCFullYear(), aujourd.getUTCMonth(), aujourd.getUTCDate(), 12));
  for (let k = 0; k < 15; k++) {
    const iso = d.toISOString().slice(0, 10);
    if (new Date(`${iso}T12:00:00Z`).getUTCDay() === L.jour) {
      const debut = instantParis(iso, L.heure), finS = instantParis(iso, L.heureFin);
      if (maintenant < finS) return { etat: maintenant >= debut ? 'direct' : 'avenir', debut, fin: finS, iso };
    }
    d = new Date(d.getTime() + 86400000);
  }
  return { etat: 'fini' };
}
const fmtHeure = (date, zone) => new Intl.DateTimeFormat('fr-FR', { timeZone: zone, hour: '2-digit', minute: '2-digit' }).format(date).replace(':', ' h ').replace(/ h 00$/, ' h');
const fmtJour = (date) => new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', weekday: 'long', day: 'numeric', month: 'long' }).format(date);
function texteLive(L) {
  const p = prochainLive(L);
  if (p.etat === 'fini') return { long: 'Le programme d’automne s’est terminé le 3 décembre 2026 : le programme d’hiver sera annoncé ici.', court: 'Programme d’hiver bientôt annoncé', p };
  const auj = heureLocale('Europe/Paris').date === p.iso;
  const quand = auj ? 'ce soir' : fmtJour(p.debut);
  const hp = fmtHeure(p.debut, 'Europe/Paris'), hr = fmtHeure(p.debut, 'Indian/Reunion');
  if (p.etat === 'direct') return { long: `En direct maintenant, jusqu’à ${fmtHeure(p.fin, 'Europe/Paris')} (heure de Paris).`, court: `En direct maintenant sur Zoom`, p };
  const min = Math.round((p.debut - new Date()) / 60000);
  const dans = min < 60 ? `dans ${min} min` : min < 1440 ? `dans ${Math.floor(min / 60)} h ${String(min % 60).padStart(2, '0')}` : '';
  return { long: `Prochain live\u00a0: ${quand}, ${hp} à Paris, ${hr} à La Réunion${dans ? `, ${dans}` : ''}.`, compte: dans ? `Le prochain live commence ${dans}.` : `Le prochain live est ${quand}, en direct sur Zoom.`, court: `Prochain live ${quand} · ${hp} Paris · ${hr} Réunion`, p };
}
function horlogeLive() {
  const sec = $('[data-live]');
  const L = sec ? JSON.parse(sec.dataset.live) : null;
  const courts = $$('[data-live-court]');
  if (!L) return;
  const jour = $('[data-live-jour]', sec), heures = $('[data-live-heures]', sec), statut = $('[data-live-statut]', sec), lumiere = $('[data-live-lumiere]', sec);
  let t = null;
  const maj = () => {
    t = texteLive(L);
    if (statut) statut.textContent = t.p && t.p.etat === 'avenir' ? t.compte : t.long;
    courts.forEach((c) => { c.textContent = t.court; });
    if (t.p && t.p.debut) {
      const j = fmtJour(t.p.debut);
      jour.textContent = j.charAt(0).toUpperCase() + j.slice(1);
      heures.textContent = `${fmtHeure(t.p.debut, 'Europe/Paris')} à Paris · ${fmtHeure(t.p.debut, 'Indian/Reunion')} chez Patrick`;
    }
  };
  maj();
  setInterval(maj, 30000);
  /* Une lumière passe sous la date, lentement, comme le souffle : elle va d'un fuseau à l'autre. */
  boucle(lumiere, (dt, temps) => { lumiere.style.transform = `translateX(${(116 + 116 * Math.sin(temps * 0.5)).toFixed(2)}%)`; });
}
/* Pages sans la section « live » : la ligne courte du premier écran est calculée aussi. */
function liveCourt() {
  if ($('[data-live]')) return;
  const el = $$('[data-live-court]');
  if (!el.length) return;
  const L = { debut: '2026-09-03', fin: '2026-12-03', jour: 4, heure: '18:00', heureFin: '19:15' };
  const t = texteLive(L);
  el.forEach((c) => { c.textContent = t.court; });
}

/* ---------- Formules : durée et façon de pratiquer, prix qui roulent, billet qui file (point 7) ---------- */
function choixFormule() {
  const sec = $('[data-choix]');
  if (!sec) return;
  const F = JSON.parse(sec.dataset.choix);
  const curseur = $('[data-duree-curseur]', sec), figure = $('.duree-pose', sec);
  const mois = [4, 7, 12];
  /* La durée réemploie le geste de l'ouverture : 4 mois les mains au ventre, 7 au visage, 12 jointes au-dessus de la tête. */
  const P = figure ? poseLongue(figure) : null, hauteur = { p: 0.5, cible: 0.5 };
  if (P) {
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { P.charger(); o.disconnect(); } }, { rootMargin: '300px' }).observe(figure);
    boucle(figure, (dt) => { hauteur.p += clamp(hauteur.cible - hauteur.p, -0.8 * dt, 0.8 * dt); P.dessiner(hauteur.p); });
    /* Glisser sur Patrick, de bas en haut, change la durée. */
    let y0 = null, v0 = 1;
    figure.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; y0 = e.clientY; v0 = +curseur.value; try { figure.setPointerCapture(e.pointerId); } catch {} });
    figure.addEventListener('pointermove', (e) => { if (y0 == null) return; const v = clamp(Math.round(v0 + (y0 - e.clientY) / 70), 0, 2); if (v !== +curseur.value) { curseur.value = v; maj(); } });
    const lache = () => { y0 = null; }; figure.addEventListener('pointerup', lache); figure.addEventListener('pointercancel', lache);
  }
  let actuelle = null;
  const ecr = (sel, txt) => { const el = $(sel, sec); if (el) el.textContent = txt; };
  function maj(anime = true) {
    const mode = $('input[name="mode"]:checked', sec).value, m = mois[+curseur.value];
    const f = F.find((x) => x.famille === mode && x.mois === m);
    if (!f) return;
    curseur.setAttribute('aria-valuetext', `${m} mois`);
    hauteur.cible = [0.1, 0.5, 1][+curseur.value]; // sur des instants exacts : une seule image nette, sans fondu
    if (!anime) hauteur.p = hauteur.cible;
    $$('.duree-reperes li', sec).forEach((li, k) => li.classList.toggle('actif', k === +curseur.value));
    const prix = $('[data-b-prix]', sec);
    const nouveau = `${f.prix} €`;
    if (gsap && anime && actuelle && actuelle.prix !== f.prix) {
      const monte = f.prix > actuelle.prix ? -1 : 1;
      gsap.timeline().to(prix, { yPercent: 100 * monte, duration: 0.22, ease: 'power2.in' })
        .call(() => { prix.textContent = nouveau; })
        .fromTo(prix, { yPercent: -100 * monte }, { yPercent: 0, duration: 0.35, ease: 'power3.out' });
    } else prix.textContent = nouveau;
    ecr('[data-b-nom]', f.nom);
    ecr('[data-b-duree]', `${f.mois} mois d’accès`);
    const live = $('[data-b-live]', sec);
    live.textContent = f.live ? `${f.live} séances en direct sur Zoom` : 'Sans séance en direct';
    live.classList.toggle('moins', !f.live); // « Sans séance en direct » se lit tel quel, jamais barré
    const plus = $('[data-b-plus]', sec); plus.classList.toggle('absent', !f.connaissance);
    const ent = $('[data-b-entretien]', sec); ent.textContent = f.entretien || 'Sans entretien'; ent.classList.toggle('absent', !f.entretien);
    const lien = $('[data-b-lien]', sec);
    lien.href = lien.href.replace(/formule=[a-z]+/, `formule=${f.cle}`);
    actuelle = f;
  }
  curseur.addEventListener('input', () => maj());
  $$('.duree-reperes li', sec).forEach((li, k) => li.addEventListener('click', () => { curseur.value = k; maj(); }));
  $$('input[name="mode"]', sec).forEach((r) => r.addEventListener('change', () => maj()));
  const p = new URLSearchParams(location.search);
  if (p.get('avec') === 'libre') $('input[value="libre"]', sec).checked = true;
  maj(false);
  billetQuiFile($('[data-b-lien]', sec), () => (actuelle ? actuelle.nom : ''));
}
function billetQuiFile(lien, nom) {
  if (!lien) return;
  let parti = false;
  lien.addEventListener('click', (e) => {
    if (!gsap || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    if (parti) return; parti = true;
    const entete = $('[data-entete]');
    document.documentElement.classList.remove('entete-cache'); entete && entete.classList.remove('entete-cache');
    const cible = $('.entete-actions .bouton') || $('[data-menu-bouton]');
    const a = lien.getBoundingClientRect(), b = cible.getBoundingClientRect();
    const vol = document.createElement('div');
    vol.className = 'billet-vol'; vol.textContent = nom(); vol.setAttribute('aria-hidden', 'true');
    document.body.appendChild(vol);
    const x0 = a.left + a.width / 2 - 60, y0 = a.top + a.height / 2 - 32, x1 = b.left + b.width / 2 - 60, y1 = b.top + b.height / 2 - 32;
    gsap.timeline({ onComplete: () => { vol.remove(); parti = false; partir(new URL(lien.href, location.href), lien.dataset.libelle, { x: b.left + b.width / 2, y: b.top + b.height / 2 }); } })
      .fromTo(vol, { x: x0, y: y0, scale: 1, rotation: 0 }, { x: x1, duration: 0.8, ease: 'power1.inOut' }, 0)
      .fromTo(vol, { y: y0 }, { y: Math.min(y0, y1) - 120, duration: 0.4, ease: 'power2.out' }, 0)
      .to(vol, { y: y1, duration: 0.4, ease: 'power2.in' }, 0.4)
      .to(vol, { scale: 0.25, rotation: -8, opacity: 0.2, duration: 0.25 }, 0.6)
      .fromTo(cible, { scale: 1 }, { scale: 1.18, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out' }, 0.78);
  });
}


/* ---------- v2 · Formules : la durée en ouverture, sur le geste de Nosy Be ----------
   Le curseur (ou un glissement vertical sur Patrick, à la souris) choisit 4, 7 ou 12 mois : ses mains montent du ventre
   au ciel, et la formule avec live qui correspond s'affiche, avec son vrai prix. */
function dureeOuverture() {
  const sec = $('[data-for-duree]');
  if (!sec) return;
  const F = JSON.parse(sec.dataset.forDuree), mois = [4, 7, 12], fig = $('.for-pose', sec), curseur = $('[data-fd-curseur]', sec);
  const P = poseLongue(fig), h = { p: 0.5, cible: 0.5 };
  P.charger();
  boucle(fig, (dt) => { h.p += clamp(h.cible - h.p, -0.8 * dt, 0.8 * dt); P.dessiner(h.p); });
  function maj() {
    const v = +curseur.value, f = F.find((x) => x.mois === mois[v]);
    h.cible = [0.1, 0.5, 1][v];
    curseur.setAttribute('aria-valuetext', `${mois[v]} mois`);
    $$('.duree-reperes li', sec).forEach((li, k) => li.classList.toggle('actif', k === v));
    if (!f) return;
    $('[data-fd-nom]', sec).textContent = f.nom;
    $('[data-fd-prix]', sec).textContent = `${f.prix} €`;
    $('[data-fd-live]', sec).textContent = `${f.live} lives du jeudi`;
    $('[data-fd-lien]', sec).href = `#formule-${f.cle}`;
  }
  curseur.addEventListener('input', maj);
  $$('.duree-reperes li', sec).forEach((li, k) => li.addEventListener('click', () => { curseur.value = k; maj(); }));
  let y0 = null, v0 = 1;
  fig.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') return; y0 = e.clientY; v0 = +curseur.value; try { fig.setPointerCapture(e.pointerId); } catch {} });
  fig.addEventListener('pointermove', (e) => { if (y0 == null) return; const v = clamp(Math.round(v0 + (y0 - e.clientY) / 80), 0, 2); if (v !== +curseur.value) { curseur.value = v; maj(); } });
  const lache = () => { y0 = null; }; fig.addEventListener('pointerup', lache); fig.addEventListener('pointercancel', lache);
  maj(); h.p = h.cible;
}

/* ---------- v2 · Contact : deux horloges, La Réunion et Paris, et l'arc du prochain live ---------- */
function horloges() {
  const box = $('[data-horloges]');
  if (!box) return;
  const L = { debut: '2026-09-03', fin: '2026-12-03', jour: 4, heure: '18:00', heureFin: '19:15' };
  const arc = (a0, a1) => { const pt = (a) => [50 + 40 * Math.sin(a), 50 - 40 * Math.cos(a)]; const [x0, y0] = pt(a0), [x1, y1] = pt(a1); return `M${x0.toFixed(2)} ${y0.toFixed(2)} A40 40 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`; };
  const angle = (hh, mm) => ((hh % 12) + mm / 60) / 12 * Math.PI * 2;
  function maj() {
    const now = new Date(), p = prochainLive(L, now);
    $$('.horloge', box).forEach((f) => {
      const t = heureLocale(f.dataset.zone, now);
      $('[data-h-heure]', f).setAttribute('transform', `rotate(${((t.h % 12) + t.m / 60) * 30} 50 50)`);
      $('[data-h-minute]', f).setAttribute('transform', `rotate(${(t.m + t.s / 60) * 6} 50 50)`);
      $('[data-h-texte]', f).textContent = `${String(t.h).padStart(2, '0')} h ${String(t.m).padStart(2, '0')}`;
      /* L'arc lumineux du live, à l'heure de chaque ville (18 h-19 h 15 à Paris). */
      if (p.debut) { const a = heureLocale(f.dataset.zone, p.debut), b = heureLocale(f.dataset.zone, p.fin); $('[data-h-live]', f).setAttribute('d', arc(angle(a.h, a.m), angle(b.h, b.m) + (angle(b.h, b.m) < angle(a.h, a.m) ? Math.PI * 2 : 0))); }
    });
    const el = $('[data-h-prochain]', box);
    if (p.etat === 'direct') el.textContent = 'Le live est en cours sur Zoom';
    else if (p.debut) el.textContent = `Prochain live : ${fmtJour(p.debut)}, ${fmtHeure(p.debut, 'Europe/Paris')} à Paris, ${fmtHeure(p.debut, 'Indian/Reunion')} à La Réunion`;
    else el.textContent = "Le programme d'hiver sera annoncé ici";
  }
  maj(); setInterval(maj, 15000);
}

/* ---------- v2 · Séances : au survol d'une séance, son lieu apparaît sous le pointeur ---------- */
function indexSurvol() {
  const sec = $('[data-registre]'), ap = $('[data-apercu]');
  if (!sec || !ap || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const liste = $('[data-registre-liste]', sec);
  const st = { x: 0, y: 0, cx: 0, cy: 0, actif: false, cat: '' };
  liste.addEventListener('pointermove', (e) => {
    const l = e.target.closest('.ligne-seance');
    st.x = e.clientX; st.y = e.clientY;
    if (!l) return;
    if (!st.actif) { st.cx = st.x; st.cy = st.y; }
    st.actif = true;
    if (l.dataset.cat !== st.cat) { st.cat = l.dataset.cat; $$('[data-apercu-cat]', ap).forEach((d) => d.classList.toggle('vu', d.dataset.apercuCat === st.cat)); }
    ap.classList.add('visible');
  });
  liste.addEventListener('pointerleave', () => { st.actif = false; ap.classList.remove('visible'); });
  boucle(sec, (dt) => {
    if (!st.actif) return;
    const k = Math.min(1, dt * 9), vx = st.x - st.cx;
    st.cx += (st.x - st.cx) * k; st.cy += (st.y - st.cy) * k;
    ap.style.transform = `translate3d(${st.cx + 28}px, ${st.cy - 110}px, 0) rotate(${clamp(vx * 0.05, -6, 6)}deg)`;
  });
}

/* ---------- Séances : le registre filtrable (filtres gardés dans l'adresse) ---------- */
function registre() {
  const sec = $('[data-registre]');
  if (!sec) return;
  const lignes = $$('.ligne-seance', sec), n = $('[data-registre-n]', sec), tot = $('[data-registre-total]', sec);
  const etat = { cat: '', saison: '' };
  const p = new URLSearchParams(location.search);
  if (p.get('cat')) etat.cat = p.get('cat');
  if (p.get('saison')) etat.saison = p.get('saison');
  const ancre = location.hash.slice(1);
  if (['enseignement', 'pleine-nature', 'meditation'].includes(ancre)) etat.cat = ancre;
  const liste = $('[data-registre-liste]', sec), plus = $('[data-registre-plus]', sec);
  const MAX = 12;
  let deplie = false;
  if (plus) plus.addEventListener('click', () => { deplie = !deplie; plus.setAttribute('aria-expanded', String(deplie)); plus.textContent = deplie ? plus.dataset.moins : plus.dataset.plus; appliquer(false); });
  function appliquer(anime) {
    $$('[data-filtre="cat"] .filtre', sec).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.valeur === etat.cat)));
    $$('[data-filtre="saison"] .filtre', sec).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.valeur === etat.saison)));
    let k = 0, m = 0;
    const visibles = [];
    lignes.forEach((l) => {
      const ok = (!etat.cat || l.dataset.cat === etat.cat) && (!etat.saison || l.dataset.saison === etat.saison);
      if (ok) { k++; m += +l.dataset.min; visibles.push(l); }
      l.hidden = !ok || (!deplie && k > MAX && ok);
    });
    if (plus) plus.hidden = k <= MAX;
    n.textContent = k;
    tot.textContent = `${Math.floor(m / 60)} h ${String(Math.round(m % 60)).padStart(2, '0')} de pratique`;
    if (anime && gsap) gsap.fromTo(visibles.slice(0, 14), { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.025, ease: 'power2.out', clearProps: 'opacity,transform' });
    const q = new URLSearchParams(location.search);
    etat.cat ? q.set('cat', etat.cat) : q.delete('cat');
    etat.saison ? q.set('saison', etat.saison) : q.delete('saison');
    const s = q.toString();
    history.replaceState(history.state, '', location.pathname + (s ? `?${s}` : '') + location.hash);
    window.dispatchEvent(new Event('resize'));
  }
  $$('.filtre', sec).forEach((b) => b.addEventListener('click', () => {
    const f = b.closest('[data-filtre]').dataset.filtre;
    etat[f] = etat[f] === b.dataset.valeur && f === 'saison' ? '' : b.dataset.valeur;
    if (f === 'saison' && etat.saison) etat.cat = 'enseignement';
    appliquer(true);
  }));
  appliquer(false);
  /* Le registre glisse un peu au défilement : chaque ligne arrive comme un geste. */
  if (gsap && window.ScrollTrigger) {
    gsap.fromTo($('[data-registre-liste]', sec), { x: 0 }, { x: 0, scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true,
      onUpdate: (s) => { lignes.forEach((l, i) => { if (!l.hidden && i < 40) l.style.transform = `translateX(${(Math.sin(s.progress * Math.PI * 2 + i * 0.35) * 6).toFixed(1)}px)`; }); } } });
  }
}

/* ---------- Fitness : compter la série avec Patrick ---------- */
function serie() {
  const sec = $('[data-serie]');
  if (!sec) return;
  const b = $('[data-serie-bouton]', sec), r = $('[data-serie-reprendre]', sec), nEl = $('[data-serie-n]', sec), anneau = $('[data-serie-anneau]', sec), msg = $('[data-serie-message]', sec);
  const total = 20, L = 653.5;
  let n = 0;
  const maj = () => { nEl.textContent = n; anneau.style.strokeDashoffset = `${L * (1 - n / total)}`; };
  b.addEventListener('click', () => {
    if (n >= total) return;
    n++; maj();
    if (gsap) gsap.fromTo(nEl, { yPercent: 30, opacity: 0.3 }, { yPercent: 0, opacity: 1, duration: 0.35, ease: 'power3.out' });
    if (n === total) { msg.textContent = sec.dataset.fini; b.hidden = true; r.hidden = false; if (gsap) gsap.fromTo(anneau, { scale: 1 }, { scale: 1.06, transformOrigin: '50% 50%', yoyo: true, repeat: 1, duration: 0.3 }); r.focus(); }
  });
  r.addEventListener('click', () => { n = 0; maj(); msg.textContent = ''; r.hidden = true; b.hidden = false; b.focus(); });
  /* L'anneau se remplit seul une première fois au défilement, pour montrer le geste. */
  if (gsap && window.ScrollTrigger) {
    window.ScrollTrigger.create({ trigger: sec, start: 'top 70%', end: 'bottom 30%', scrub: true,
      onUpdate: (s) => { if (n === 0) anneau.style.strokeDashoffset = `${L * (1 - Math.sin(s.progress * Math.PI) * 0.35)}`; } });
  }
  maj();
}

/* ---------- Formules : « Choisir » fait filer le billet jusqu'au récapitulatif de l'inscription ---------- */
function inscription() {
  const recap = $('[data-recap]');
  if (!recap) return;
  const choix = $('[data-recap-choix]');
  const p = new URLSearchParams(location.search);
  if (p.get('formule') && choix.querySelector(`option[value="${p.get('formule')}"]`)) choix.value = p.get('formule');
  const maj = (pose) => {
    const o = choix.selectedOptions[0];
    $('[data-recap-nom]').textContent = o.textContent.split(' · ')[0];
    $('[data-recap-prix]').textContent = `${o.dataset.prix} €`;
    $('[data-recap-duree]').textContent = `${o.dataset.mois} mois`;
    if (pose) { recap.classList.remove('posee'); void recap.offsetWidth; recap.classList.add('posee'); }
  };
  choix.addEventListener('change', () => maj(true));
  maj(false);
  $$('[data-choisir]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    choix.value = a.dataset.choisir;
    const depart = a.getBoundingClientRect();
    const vol = document.createElement('div');
    vol.className = 'billet-vol'; vol.textContent = a.dataset.nom; vol.setAttribute('aria-hidden', 'true');
    document.body.appendChild(vol);
    history.replaceState(history.state, '', `${location.pathname}?formule=${a.dataset.choisir}#inscription`);
    const cible = $('#inscription');
    const finir = () => { vol.remove(); maj(true); const champ = $('#i-nom'); champ && champ.focus({ preventScroll: true }); };
    if (!gsap) { cible.scrollIntoView(); finir(); return; }
    gsap.set(vol, { x: depart.left + depart.width / 2 - 60, y: depart.top - 70 });
    const y0 = window.scrollY, y1 = cible.getBoundingClientRect().top + y0 - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72);
    const o = { t: 0 };
    gsap.to(o, { t: 1, duration: 1.1, ease: 'power2.inOut', onUpdate() {
      window.scrollTo(0, y0 + (y1 - y0) * o.t);
      const r = recap.getBoundingClientRect();
      gsap.set(vol, { x: depart.left + (r.left + 40 - depart.left) * o.t, y: (depart.top - 70) * (1 - o.t) + (r.top + 20) * o.t - Math.sin(o.t * Math.PI) * 120, rotation: -6 * Math.sin(o.t * Math.PI) });
    }, onComplete: finir });
  }));
}

/* ---------- Démarrage ---------- */
demarrer({
  preparer() {
    try { traceGeste(); } catch (e) { console.error(e); }
    try { titreLent(); } catch (e) { console.error(e); }
    try { enchainement(); } catch (e) { console.error(e); }
    try { pointsFil(); } catch (e) { console.error(e); }
    try { horlogeLive(); liveCourt(); } catch (e) { console.error(e); }
    try { choixFormule(); } catch (e) { console.error(e); }
    try { registre(); } catch (e) { console.error(e); }
    try { dureeOuverture(); } catch (e) { console.error(e); }
    try { horloges(); } catch (e) { console.error(e); }
    try { indexSurvol(); } catch (e) { console.error(e); }
    try { serie(); } catch (e) { console.error(e); }
    try { inscription(); } catch (e) { console.error(e); }
    if (window.__projet && window.__projet.preparer) window.__projet.preparer();
  },
  /* Intro (moins de 3 s) : un point de lumière dessine l'arc au-dessus du nom, puis glisse jusqu'aux mains de Patrick
     et l'écran s'ouvre depuis elles (versObjet). Le titre se pose pendant l'ouverture, la trace monte juste après. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-arc path', { strokeDashoffset: 800 }, { strokeDashoffset: 0, duration: 0.85, ease: 'sine.inOut' }, 0)
      .fromTo('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.1)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-arc', { opacity: 0, duration: 0.3 }, 0.85);
    versObjet(tl, { a: 1.0 });
    if ($('.ouv-titre')) {
      tl.fromTo('.ouv-l1, .ouv-l2', { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 1.6)
        .fromTo('.ouv-chapo, .ouv-live, .ouv-actions', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, 1.75)
        .call(() => traceGeste.lancer && traceGeste.lancer(), null, 1.9);
    }
    if (window.__projet && window.__projet.jouer) window.__projet.jouer(tl);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.ouv-l1, .ouv-l2, .ouv-chapo, .ouv-actions, .ouv-live', { clearProps: 'transform,opacity' });
    $$('.ouv-l1, .ouv-l2, .ouv-chapo, .ouv-actions, .ouv-live').forEach((el) => { el.style.opacity = '1'; });
    traceGeste.final && traceGeste.final();
    if (window.__projet && window.__projet.etatFinal) window.__projet.etatFinal();
  },
  arrivee() {
    if (!gsap) return;
    if ($('.ouv-titre')) {
      gsap.fromTo('.ouv-l1, .ouv-l2', { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.15 });
      gsap.fromTo('.ouv-chapo, .ouv-live, .ouv-actions', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.3 });
      setTimeout(() => traceGeste.lancer && traceGeste.lancer(), 500);
    }
    if (window.__projet && window.__projet.arrivee) window.__projet.arrivee();
  },
});
