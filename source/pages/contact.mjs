/* Contact · monde « rivière claire ». Ouverture : le numéro en très grand sur la rivière à galets. */
import { html } from '../../outils/gabarit.mjs';
import { img, point } from '../gabarits/outils.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/riviere-galets-1280.webp' };

export default (c) => html`
<section class="con-ouv" id="debut">
  ${img(c, 'grok/riviere-galets', { priorite: true, classe: 'con-fond', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
  <div class="conteneur con-ouv-texte">
    <p class="surtitre">${c.t('contact.sur')}</p>
    <h1 class="con-titre" data-anime="lettres" data-grille="typo">${c.t('contact.titre')}</h1>
    <p class="con-chapo">${c.t('contact.chapo')}</p>
    <p><a class="con-tel" href="tel:${c.site.contact.telephoneLien}" data-action-principale data-iris-centre>${c.site.contact.telephone}</a></p>
    <p class="con-mail" data-info-cle><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
  </div>
</section>

<section class="con-form" id="message">
  ${point(2, 2)}
  <div class="conteneur con-grille">
    <form class="formulaire" data-formulaire novalidate>
      <h2 class="titre-section" data-anime="lignes">${c.t('contact.form.titre')}</h2>
      <div class="champ"><label for="c-nom">${c.t('contact.form.nom')}</label><input id="c-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="c-email">${c.t('contact.form.email')}</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="c-tel">${c.t('contact.form.tel')}</label><input id="c-tel" name="tel" type="tel" autocomplete="tel"></div>
      <div class="champ"><label for="c-sujet">${c.t('contact.form.sujet')}</label><select id="c-sujet" name="sujet">
        <option value="formule">${c.t('contact.form.s1')}</option><option value="stages">${c.t('contact.form.s2')}</option><option value="fitness">${c.t('contact.form.s3')}</option><option value="autre">${c.t('contact.form.s4')}</option></select></div>
      <div class="champ"><label for="c-message">${c.t('contact.form.message')}</label><textarea id="c-message" name="message" rows="5" required></textarea></div>
      <p class="champ-donnees">${c.t('contact.form.donnees')}</p>
      <button class="bouton" type="submit" data-grille="retour">${c.t('contact.form.envoyer')}</button>
      <p data-message-envoi aria-live="polite" data-texte="${c.s('contact.envoye')}"></p>
    </form>
    <aside class="con-cote">
      ${img(c, 'geste-riviere', { sizes: '(max-width: 760px) 100vw, 35vw', ratio: '4 / 5', attrs: 'data-anime="rideau"' })}
      <p class="con-zone" data-anime>${c.t('contact.zone')}</p>
      <h2 class="con-reseaux-titre">${c.t('contact.reseaux.titre')}</h2>
      <ul class="con-reseaux">
        <li><a href="https://www.youtube.com/@santevouszen974" target="_blank" rel="noopener">${c.t('contact.reseaux.youtube')}</a></li>
        <li><a href="https://www.facebook.com/patrick.campo.7/" target="_blank" rel="noopener">${c.t('contact.reseaux.facebook')}</a></li>
      </ul>
    </aside>
  </div>
</section>
`;
