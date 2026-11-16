/* Formules (page de catégorie : inscription) · monde « océan profond ». Ouverture : l'océan à l'aube, prix d'appel en grand.
   Signature : les six formules en deux familles ; « Choisir » fait filer le billet vers l'inscription (retour physique). */
import { html } from '../../outils/gabarit.mjs';
import { img, euros, point, json, pose } from '../gabarits/outils.mjs';

export const page = { cle: 'formules', fichier: 'formules', imagePartage: 'geste-lagon-1280.webp' };

export default (c) => {
  const F = c.donnees.formules;
  const carte = (f) => html`<li class="formule${f.conseil ? ' formule--conseil' : ''}" id="formule-${f.cle}" data-fx="vitesse" data-fx-force="2">
    ${f.conseil ? html`<p class="formule-conseil mono">${c.t('formules.conseil')}</p>` : ''}
    <p class="formule-nom mono">${f.nom}</p>
    <p class="formule-prix" data-prix>${euros(f.prix)}</p>
    <p class="formule-duree">${f.mois} ${c.t('formules.mois')}</p>
    <ul>
      <li${f.live ? '' : html` class="moins"`}>${f.live ? html`${f.live} ${c.t('formules.live')}` : c.t('formules.sansLive')}</li>
      <li>Entraînement (52), enseignement (42), méditation (13)</li>
      <li${f.connaissance ? '' : html` class="absent"`}>${c.t('formules.connaissance')}</li>
      ${f.entretien ? html`<li>${f.entretien}</li>` : ''}
    </ul>
    <a class="bouton" href="${c.url('formules', 'inscription', `formule=${f.cle}`)}" data-choisir="${f.cle}" data-nom="${f.nom}" data-libelle="${c.libelle('formules')}">${c.t('formules.choisir')} ${f.nom}</a>
  </li>`;
  return html`
<section class="for-ouv for-ouv--pose" id="debut" data-for-duree='${json(F.filter((f) => f.famille === 'live'))}'>
  ${pose(c, 'ouv', { classe: 'for-pose', alt: c.s('formules.duree.alt'), priorite: true, attrs: 'data-fantomes="non" data-effet="duree-ouverture"' })}
  <div class="conteneur for-ouv-texte">
    <p class="surtitre">${c.t('formules.sur')}</p>
    <h1 class="for-titre" data-anime="lignes" data-grille="typo">${c.t('formules.titre')}</h1>
    <p class="for-chapo">${c.t('formules.chapo')}</p>
    <div class="for-duree" data-grille="manipuler">
      <p class="for-duree-titre mono">${c.t('formules.duree.titre')}</p>
      <input class="for-duree-curseur" type="range" min="0" max="2" step="1" value="1" data-fd-curseur aria-label="${c.s('formules.duree.titre')}" aria-valuetext="7 mois">
      <ol class="duree-reperes"><li>4 mois</li><li class="actif">7 mois</li><li>12 mois</li></ol>
      <p class="for-duree-sortie" aria-live="polite"><b data-fd-nom>ESSENTIEL</b> <span class="for-duree-prix" data-fd-prix>${euros(234)}</span> <span data-fd-live>24 ${c.t('formules.duree.live')}</span> <a class="lien-fleche" href="#formule-essentiel" data-fd-lien>${c.t('formules.duree.voir')}</a></p>
    </div>
    <p class="for-actions"><a class="bouton" href="#avec-live" data-action-principale>${c.t('formules.action')}</a><span class="mono for-info" data-info-cle data-iris-centre>${c.t('formules.info')}</span></p>
  </div>
</section>

<section class="familles" id="avec-live">
  <div class="conteneur">
    <div class="famille">
      <header class="famille-tete"><h2 class="titre-section" data-anime="lignes">${c.t('formules.avec.titre')}</h2><p>${c.t('formules.avec.texte')}</p></header>
      <ol class="formules-liste" data-anime="cascade">${F.filter((f) => f.famille === 'live').map(carte)}</ol>
      ${img(c, 'cantal-lac', { classe: 'famille-photo', sizes: '100vw', ratio: '21 / 6', attrs: 'data-fx="parallaxe"' })}
    </div>
    <div class="famille" id="a-mon-heure">
      <header class="famille-tete"><h2 class="titre-section" data-anime="lignes">${c.t('formules.libre.titre')}</h2><p>${c.t('formules.libre.texte')}</p></header>
      <ol class="formules-liste" data-anime="cascade">${F.filter((f) => f.famille === 'libre').map(carte)}</ol>
    </div>
    <p class="choix-note">${c.t('accueil.choix.note')}</p>
  </div>
</section>

<section class="inscription" id="inscription">
  <div class="conteneur inscription-grille">
    <div>
      <p class="surtitre">${c.t('formules.inscription.sur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('formules.inscription.titre')}</h2>
      <p data-anime>${c.t('formules.inscription.texte')}</p>
      <article class="billet billet--recap" data-recap data-grille="retour" data-effet="billet-live" data-visuel>
        <p class="billet-nom mono" data-recap-nom>ESSENTIEL</p>
        <p class="billet-prix"><span data-recap-prix>${euros(234)}</span></p>
        <p class="billet-duree" data-recap-duree>7 mois</p>
      </article>
    </div>
    <form class="formulaire" data-formulaire novalidate>
      <div class="champ"><label for="i-formule">${c.t('formules.inscription.formule')}</label>
        <select id="i-formule" name="formule" required data-recap-choix>${F.map((f) => html`<option value="${f.cle}" data-prix="${f.prix}" data-mois="${f.mois}"${f.cle === 'essentiel' ? html` selected` : ''}>${f.nom} · ${euros(f.prix)} · ${f.mois} mois</option>`)}</select></div>
      <div class="champ"><label for="i-nom">${c.t('formules.inscription.nom')}</label><input id="i-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="i-email">${c.t('formules.inscription.email')}</label><input id="i-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="i-tel">${c.t('formules.inscription.tel')}</label><input id="i-tel" name="tel" type="tel" autocomplete="tel"></div>
      <div class="champ"><label for="i-message">${c.t('formules.inscription.message')}</label><textarea id="i-message" name="message" rows="3"></textarea></div>
      <p class="champ-donnees">${c.t('formules.inscription.donnees')}</p>
      <button class="bouton" type="submit">${c.t('formules.inscription.envoyer')}</button>
      <p data-message-envoi tabindex="-1" aria-live="polite" data-texte="${c.s('formules.inscription.envoye')}"></p>
    </form>
  </div>
</section>

<section class="faq-page" id="faq">
  <div class="conteneur faq-grille">
    <h2 class="titre-section" data-anime="lignes">${c.t('formules.faq.titre')}</h2>
    <div>${c.donnees.faq.map((f) => html`<details class="faq-item" data-anime><summary>${f.q}</summary><p>${f.r}</p></details>`)}</div>
  </div>
  ${img(c, 'geste-ensemble', { classe: 'faq-photo', sizes: '100vw', ratio: '21 / 9', attrs: 'data-fx="parallaxe"' })}
</section>
`;
};
