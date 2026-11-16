/* Les séances · page claire « ciel ». Ouverture : grand titre lettre à lettre, bandeau photo qui plonge.
   Signature : le registre des séances réelles, filtrable par catégorie et par saison (filtres dans l'adresse). */
import { html } from '../../outils/gabarit.mjs';
import { img, point } from '../gabarits/outils.mjs';

export const page = { cle: 'seances', fichier: 'seances', imagePartage: 'seances-plage-1280.webp' };

const minutes = (d) => { const p = d.split(':').map(Number); return p.length === 3 ? p[0] * 60 + p[1] + p[2] / 60 : p[0] + p[1] / 60; };

export default (c) => {
  const S = c.donnees.seances;
  const cats = ['enseignement', 'pleine-nature', 'meditation'];
  const saisons = ['printemps', 'été', 'automne', 'hiver'];
  return html`
<section class="sea-ouv monde-clair" id="debut">
  <div class="conteneur sea-ouv-tete">
    <p class="surtitre">${c.t('seances.sur')}</p>
    <h1 class="sea-titre" data-anime="lettres" data-grille="typo">${c.t('seances.titre')}</h1>
    <div class="sea-ouv-bas">
      <p class="sea-chapo">${c.t('seances.chapo')}</p>
      <p class="sea-actions">${c.lien('formules', { classe: 'bouton', texte: c.t('seances.action'), attrs: 'data-action-principale' })}<span class="sea-info mono" data-info-cle>${c.t('seances.info')}</span></p>
    </div>
  </div>
  ${img(c, 'seances-plage', { priorite: true, classe: 'sea-bandeau', sizes: '100vw', cadrage: '47% 18%', attrs: 'data-fx="zoom" data-fx-force="22" data-iris-centre' })}
</section>

<span id="enseignement"></span><span id="pleine-nature"></span>
<section class="registre monde-clair" id="registre" data-registre data-effet="registre-seances">
  ${point(96, 6, 'bas')}
  <div class="conteneur">
    <p class="surtitre">${c.t('seances.registre.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('seances.registre.titre')}</h2>
    <div class="registre-filtres" role="group" aria-label="${c.s('seances.registre.sur')}">
      <div class="filtres-rangee" data-filtre="cat">
        <button type="button" class="filtre" data-valeur="" aria-pressed="true">${c.t('seances.registre.tous')}</button>
        ${cats.map((k) => html`<button type="button" class="filtre" data-valeur="${k}" aria-pressed="false">${c.t(`seances.registre.${k}`)}</button>`)}
      </div>
      <div class="filtres-rangee" data-filtre="saison" aria-label="${c.s('seances.registre.saisons')}">
        ${saisons.map((k) => html`<button type="button" class="filtre filtre--saison" data-valeur="${k}" aria-pressed="false">${c.t(`seances.registre.${k}`)}</button>`)}
      </div>
    </div>
    <p class="registre-compte mono" aria-live="polite"><b data-registre-n>${S.length}</b> ${c.t('seances.registre.compte')} · <span data-registre-total></span></p>
    <p class="registre-apercu-aide mono">${c.t('seances.registre.apercu')}</p>
    <ol class="registre-liste" data-registre-liste data-replie data-effet="index-survol">
      ${S.map((s) => html`<li class="ligne-seance" data-cat="${s.cat}" data-saison="${s.saison || ''}" data-min="${minutes(s.duree).toFixed(1)}">
        <span class="ls-cat mono">${c.t(`seances.registre.${s.cat}`)}${s.saison ? html` · ${c.t(`seances.registre.${s.saison}`)}` : ''}${s.num ? html` · n° ${s.num}` : ''}</span>
        <span class="ls-titre">${s.titre}</span>
        <span class="ls-duree mono">${s.duree}</span>
      </li>`)}
    </ol>
    <div class="registre-apercu" data-apercu aria-hidden="true">${[['enseignement', 'seance-bambous'], ['pleine-nature', 'seance-riviere-foret'], ['meditation', 'meditation-foret']].map(([k, n]) => html`<div class="apercu-image" data-apercu-cat="${k}">${img(c, n, { sizes: '320px', ratio: '4 / 3' })}</div>`)}</div>
    <p class="registre-plus"><button type="button" class="bouton bouton--contour" data-registre-plus data-plus="${c.s('seances.registre.plus')}" data-moins="${c.s('seances.registre.moins')}" aria-expanded="false">${c.t('seances.registre.plus')}</button></p>
    ${img(c, 'seance-colline', { classe: 'registre-bandeau', sizes: '100vw', ratio: '21 / 7', attrs: 'data-fx="parallaxe"' })}
    <p class="registre-note">${c.t('seances.registre.note')}</p>
  </div>
</section>

<section class="chez monde-clair" id="meditation">
  ${point(4, 10)}
  <div class="conteneur chez-grille">
    <div>
      <p class="surtitre">${c.t('seances.chez.sur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('seances.chez.titre')}</h2>
      <p data-anime>${c.t('seances.chez.texte')}</p>
    </div>
    <ul class="chez-photos" data-anime="cascade">
      ${['meditation-riviere', 'meditation-plage', 'meditation-foret'].map((n, i) => html`<li data-fx="vitesse" data-fx-force="3">${img(c, n, { sizes: '(max-width: 760px) 90vw, 22vw', ratio: '3 / 4', legende: c.t(`seances.chez.m${i + 1}`) })}</li>`)}
    </ul>
  </div>
</section>

<section class="fin-page monde-clair" id="commencer">
  ${img(c, 'seance-riviere-foret', { classe: 'fin-page-photo', sizes: '(max-width: 760px) 100vw, 45vw', ratio: '4 / 3', attrs: 'data-anime="rideau"' })}
  <div>
    <h2 class="titre-section" data-anime="lignes">${c.t('seances.appel.titre')}</h2>
    <p data-anime>${c.t('seances.appel.texte')}</p>
    <p data-anime>${c.lien('formules', { classe: 'bouton', texte: c.t('seances.appel.action') })}</p>
  </div>
</section>
`;
};
