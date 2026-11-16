/* Contact · monde « rivière claire ». Ouverture : le numéro en très grand sur la rivière à galets. */
import { html } from '../../outils/gabarit.mjs';
import { img, point } from '../gabarits/outils.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'ouverture-ocean-1280.webp' };

export default (c) => html`
<section class="con-ouv" id="debut">
  ${img(c, 'ouverture-ocean', { priorite: true, classe: 'con-fond', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="8"' })}
  <div class="conteneur con-ouv-texte">
    <p class="surtitre">${c.t('contact.sur')}</p>
    <h1 class="con-titre" data-anime="lettres" data-grille="typo">${c.t('contact.titre')}</h1>
    <p class="con-chapo">${c.t('contact.chapo')}</p>
    <p><a class="con-tel" href="tel:${c.site.contact.telephoneLien}" data-action-principale data-iris-centre>${c.site.contact.telephone}</a></p>
    <p class="con-mail" data-info-cle><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
  </div>
  <div class="horloges" data-horloges data-effet="horloges" aria-label="${c.s('contact.horloges.titre')}">
    ${[['reunion', 'Indian/Reunion'], ['paris', 'Europe/Paris']].map(([k, z]) => html`<figure class="horloge" data-zone="${z}">
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="h-cadran" cx="50" cy="50" r="46"/>${Array.from({ length: 12 }, (_, i) => html`<line class="h-repere" x1="50" y1="8" x2="50" y2="${i % 3 ? 12 : 15}" transform="rotate(${i * 30} 50 50)"/>`)}<path class="h-live" data-h-live d=""/><line class="h-heure" data-h-heure x1="50" y1="50" x2="50" y2="27"/><line class="h-minute" data-h-minute x1="50" y1="50" x2="50" y2="14"/><circle class="h-centre" cx="50" cy="50" r="3"/></svg>
      <figcaption><span>${c.t(`contact.horloges.${k}`)}</span><b class="mono" data-h-texte>--:--</b></figcaption>
    </figure>`)}
    <p class="horloges-live mono" data-h-prochain>${c.t('contact.horloges.live')}</p>
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
      <p data-message-envoi tabindex="-1" aria-live="polite" data-texte="${c.s('contact.envoye')}"></p>
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
