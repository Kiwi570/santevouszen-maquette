/* Page 404 aux couleurs du client : champ de lave désert. */
import { html } from '../../outils/gabarit.mjs';
import { img } from '../gabarits/outils.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${img(c, 'grok/404', { priorite: true, classe: 'introuvable-photo', attrs: 'data-fx="zoom" data-iris-centre' })}
  <div class="introuvable-texte conteneur">
    <p class="surtitre">404</p>
    <h1 data-anime="lignes" data-grille="typo">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
  </div>
</section>
`;
