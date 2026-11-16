/* Patrick Campo · monde « lave et fougères ». Ouverture : sa photo à droite, axes de posture qui se tracent sur lui
   (la rééducation), nom en très grand lettre à lettre. Signature : la frise du parcours dont le trait se dessine. */
import { html } from '../../outils/gabarit.mjs';
import { img, point } from '../gabarits/outils.mjs';

export const page = { cle: 'patrick-campo', fichier: 'patrick-campo', imagePartage: 'patrick-palmiers-1280.webp' };

export default (c) => html`
<section class="pat-ouv" id="debut">
  ${img(c, 'ouverture-lave', { classe: 'pat-fond', sizes: '100vw', alt: '', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="pat-ouv-grille conteneur">
    <div class="pat-ouv-texte">
      <p class="surtitre">${c.t('patrick.sur')}</p>
      <h1 class="pat-titre" data-anime="lettres" data-grille="typo">${c.t('patrick.titre')}</h1>
      <p class="pat-chapo">${c.t('patrick.chapo')}</p>
      <p class="pat-actions">${c.lien('contact', { classe: 'bouton', texte: c.t('patrick.action'), attrs: 'data-action-principale' })}</p>
      <p class="pat-info mono" data-info-cle>${c.t('patrick.info')}</p>
    </div>
    <figure class="pat-portrait">
      ${img(c, 'geste-foret', { priorite: true, classe: 'pat-photo', sizes: '(max-width: 760px) 100vw, 42vw', ratio: '4 / 5', attrs: 'data-iris-centre' })}
    </figure>
  </div>
</section>

<section class="parcours" id="parcours">
  ${point(4, 8)}
  <div class="conteneur">
    <p class="surtitre">${c.t('patrick.parcours.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('patrick.parcours.titre')}</h2>
    <div class="frise-grille">
    <div class="frise">
      <svg class="frise-trait" viewBox="0 0 10 1000" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M5 0 L5 1000"/></svg>
      <ol class="frise-liste" data-anime="cascade">
        ${c.donnees.parcours.map((p) => html`<li><p class="frise-date mono">${p.date}</p><h3>${p.titre}</h3><p>${p.texte}</p></li>`)}
      </ol>
    </div>
    ${img(c, 'stage-groupe', { classe: 'frise-portrait', sizes: '(max-width: 760px) 90vw, 30vw', ratio: '4 / 3', attrs: 'data-anime="rideau"' })}
    </div>
  </div>
</section>

<section class="diplomes" id="diplomes">
  <div class="conteneur diplomes-grille">
    <div>
      <p class="surtitre">${c.t('patrick.diplomes.sur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('patrick.diplomes.titre')}</h2>
      <ul class="diplomes-liste" data-anime="cascade">${c.donnees.diplomes.map((d) => html`<li>${d}</li>`)}</ul>
    </div>
    <div>
    ${img(c, 'seance-bambous', { sizes: '(max-width: 760px) 100vw, 40vw', ratio: '16 / 9', attrs: 'data-fx="zoom"' })}
    <blockquote class="but" data-anime>
      <p class="but-citation">${c.t('patrick.but.titre')}</p>
      <p>${c.t('patrick.but.texte')}</p>
    </blockquote>
    </div>
  </div>
</section>

<section class="terrain" id="terrain">
  ${point(95, 10, 'bas')}
  <div class="conteneur">
    <p class="surtitre">${c.t('patrick.groupe.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('patrick.groupe.titre')}</h2>
    <ul class="terrain-photos" data-anime="cascade">
      ${['groupe-stade', 'groupe-rochers', 'stage-cantal'].map((n, i) => html`<li data-fx="vitesse" data-fx-force="2">${img(c, n, { sizes: '(max-width: 760px) 90vw, 30vw', ratio: '3 / 2', legende: c.t(`patrick.groupe.g${i + 1}`) })}</li>`)}
    </ul>
  </div>
</section>

<section class="fin-page" id="pratiquer">
  ${img(c, 'stage-corse', { classe: 'fin-page-photo', sizes: '(max-width: 760px) 100vw, 45vw', ratio: '4 / 3', attrs: 'data-anime="rideau"' })}
  <div>
    <h2 class="titre-section" data-anime="lignes">${c.t('patrick.appel.titre')}</h2>
    <p data-anime>${c.lien('formules', { classe: 'bouton', texte: c.t('patrick.appel.action') })} ${c.lien('contact', { classe: 'bouton bouton--contour', texte: c.t('patrick.appel.contact') })}</p>
  </div>
</section>
`;
