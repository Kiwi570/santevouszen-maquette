/* Fitness seniors · monde « blanc chaud et braise ». Ouverture en écran partagé : compteur géant de la série à gauche,
   photo du lac à droite. Signature : on compte la série avec Patrick (on touche, le chiffre monte, la jauge se remplit). */
import { html } from '../../outils/gabarit.mjs';
import { img, point } from '../gabarits/outils.mjs';

export const page = { cle: 'fitness-seniors', fichier: 'fitness-seniors', imagePartage: 'fitness-lac-1280.webp' };

export default (c) => html`
<section class="fit-ouv monde-chaud" id="debut">
  <div class="fit-ouv-texte">
    <p class="surtitre">${c.t('fitness.sur')}</p>
    <h1 class="fit-titre" data-anime="lignes" data-grille="typo">${c.t('fitness.titre')}</h1>
    <p class="fit-chapo">${c.t('fitness.chapo')}</p>
    <p class="fit-actions">${c.lien('formules', { classe: 'bouton', texte: c.t('fitness.action'), attrs: 'data-action-principale' })}<span class="mono fit-info" data-info-cle>${c.t('fitness.info')}</span></p>
  </div>
  ${img(c, 'fitness-lac', { priorite: true, classe: 'fit-photo', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
</section>

<section class="serie monde-chaud" id="serie" data-serie data-effet="compteur-serie" data-fini="${c.s('fitness.serie.fini')}">
  <div class="conteneur serie-grille">
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('fitness.serie.titre')}</h2>
      <p data-anime>${c.t('fitness.serie.texte')}</p>
      <p class="serie-message" data-serie-message aria-live="polite"></p>
    </div>
    <div class="serie-compteur">
      <svg viewBox="0 0 240 240" class="serie-anneau" aria-hidden="true"><circle cx="120" cy="120" r="104" class="sa-fond"/><circle cx="120" cy="120" r="104" class="sa-plein" data-serie-anneau/></svg>
      <p class="serie-chiffre mono" data-indicateur><b data-serie-n>0</b><span>/ 20</span></p>
      <button type="button" class="bouton serie-bouton" data-serie-bouton data-grille="retour">${c.t('fitness.serie.bouton')}</button>
      <button type="button" class="bouton bouton--contour serie-reprendre" data-serie-reprendre hidden>${c.t('fitness.serie.reprendre')}</button>
    </div>
  </div>
  ${img(c, 'fitness-etirements', { classe: 'serie-photo', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '16 / 9', attrs: 'data-fx="zoom"' })}
</section>

<section class="modules monde-chaud" id="modules">
  <div class="conteneur">
    <p class="surtitre">${c.t('fitness.modules.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('fitness.modules.titre')}</h2>
    <ol class="modules-liste" data-anime="cascade">
      ${c.donnees.fitness.map((m, i) => html`<li class="module" id="${m.cle}" data-fx="vitesse" data-fx-force="2">
        ${img(c, ['fitness-jambes', 'fitness-equilibre', 'fitness-psoas'][i], { sizes: '(max-width: 760px) 90vw, 30vw', ratio: '21 / 9' })}
        <p class="module-num mono">0${i + 1}</p>
        <h3>${m.titre}</h3>
        <dl class="module-infos">
          <div><dt>${c.t('fitness.modules.duree')}</dt><dd class="mono">${m.duree}</dd></div>
          <div><dt>${c.t('fitness.modules.cibles')}</dt><dd>${m.cibles}</dd></div>
          <div><dt>${c.t('fitness.modules.materiel')}</dt><dd>${m.materiel}</dd></div>
        </dl>
        <ul class="module-exos">${m.exemples.map(([n, r]) => html`<li><span>${n}</span><b class="mono">${r}</b></li>`)}</ul>
      </li>`)}
    </ol>
    <p class="prudence">${c.t('fitness.prudence')}</p>
  </div>
</section>

<section class="fin-page monde-chaud" id="commencer">
  ${img(c, 'fitness-salle', { classe: 'fin-page-photo', sizes: '(max-width: 760px) 100vw, 45vw', ratio: '4 / 3', attrs: 'data-anime="rideau"' })}
  <div>
    <h2 class="titre-section" data-anime="lignes">${c.t('fitness.appel.titre')}</h2>
    <p data-anime>${c.lien('formules', { classe: 'bouton', texte: c.t('fitness.appel.action') })}</p>
  </div>
</section>
`;
