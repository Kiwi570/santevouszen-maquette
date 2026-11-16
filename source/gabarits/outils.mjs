/* Petits outils communs aux pages du projet. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Image du plan des images : alt et cadrages tirés de donnees/images.json (produire.mjs). */
export function img(c, nom, o = {}) {
  const fiche = (c.donnees.images || {})[nom] || {};
  return c.media({
    nom,
    alt: o.alt ?? fiche.alt ?? '',
    cadrage: o.cadrage ?? fiche.cadrage ?? '50% 50%',
    cadrageMobile: o.cadrageMobile ?? (fiche.mobile && fiche.mobile.cadrage) ?? undefined,
    sizes: o.sizes ?? '100vw',
    priorite: o.priorite ?? false,
    classe: o.classe ?? '',
    ratio: o.ratio,
    legende: o.legende,
    attrs: o.attrs ?? '',
  });
}

/* Prix en euros, à la française (espace insécable). */
export const euros = (n) => `${n} €`;

/* Point de lumière qui relie les sections (grille wouahou, point 4). x, y : position dans la section, en %. */
export const point = (x = 8, y = 20, arc = 'haut') => html`<span class="point-fil" data-grille="fil" data-effet="point-fil" data-arc="${arc}" style="--px:${x}%;--py:${y}%" aria-hidden="true"><i></i></span>`;

/* Données pour un attribut data-… : JSON brut, apostrophes échappées (aucune typographie appliquée). */
export const json = (o) => brut(JSON.stringify(o).replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/</g, '&lt;'));

/* Pose longue en plein cadre (donnees/poses.json) : image fixe du premier instant, puis la toile qui superpose
   le fond propre et le corps de chaque instant. La version téléphone est un recadrage 9:16 centré sur Patrick. */
export function pose(c, nom, o = {}) {
  const P = (c.donnees.poses || {})[nom];
  const d = '/assets/images/chrono/';
  const charge = o.priorite ? 'fetchpriority="high"' : 'loading="lazy"';
  return html`<figure class="pose ${o.classe ?? ''}" data-pose='${json({ nom, ...P })}' data-visuel ${brut(o.attrs ?? '')}>
    <picture><source media="(max-width: 760px)" srcset="${d}${nom}-m-image.webp" width="${(P.telTaille || [540, 960])[0]}" height="${(P.telTaille || [540, 960])[1]}"><img src="${d}${nom}-image.webp" width="1600" height="900" alt="${o.alt ?? ''}" ${brut(charge)} decoding="async"></picture>
    <canvas class="pose-toile" aria-hidden="true"></canvas>
  </figure>`;
}
