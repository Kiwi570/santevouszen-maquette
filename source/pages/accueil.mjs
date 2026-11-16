/* Accueil · « Le geste lent ». Plan : parcours horizontal (l'enchaînement des postures, épinglé, avance de côté).
   Grille wouahou : pose longue du vrai geste à faire jouer (manipuler), intro qui finit sur les mains de Patrick (data-iris-centre),
   voile en iris, point de lumière qui relie les sections (fil), titre « lent » qui s'étire (typo),
   enchaînement des cinq paysages (scène), billet du live qui file vers « S'abonner » (retour). */
import { html } from '../../outils/gabarit.mjs';
import { img, euros, point, json, pose } from '../gabarits/outils.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'ouverture-ocean-1280.webp' };

export default (c) => {
  const F = c.donnees.formules;
  const E = c.donnees.enchainement;
  const L = c.donnees.live;
  return html`
<section class="ouv ouv--pose" id="debut" data-ouv data-vite="${c.s('accueil.ouv.vite')}" data-fin="${c.s('accueil.ouv.fin')}" data-doigt="${c.s('accueil.ouv.consigneDoigt')}">
  ${pose(c, 'ouv', { classe: 'ouv-figure', alt: c.s('accueil.ouv.alt'), priorite: true, attrs: 'data-effet="trace-geste" data-souris' })}
  <span class="ouv-mains" data-iris-centre aria-hidden="true"></span>
  <button type="button" class="ouv-poignee" data-poignee data-grille="manipuler" aria-label="${c.s('accueil.ouv.poignee')}"><span></span></button>
  <p class="ouv-consigne" data-consigne aria-live="polite"><span data-consigne-texte>${c.t('accueil.ouv.consigne')}</span></p>
  <div class="ouv-texte">
    <p class="surtitre ouv-sur masque-ecran-tres-bas">${c.t('accueil.ouv.sur')}</p>
    <h1 class="ouv-titre" data-grille="typo"><span class="ouv-l1">${c.t('accueil.ouv.titre1')}</span> <span class="ouv-l2"><span class="ouv-lent" data-effet="titre-lent">${c.t('accueil.ouv.titre2')}</span></span></h1>
    <p class="ouv-chapo masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.ouv.chapo')}</p>
    <p class="ouv-live" data-info-cle data-anime="gsap"><span class="pastille" aria-hidden="true"></span><span data-live-court>${c.t('accueil.ouv.live')}</span></p>
    <p class="ouv-actions" data-anime="gsap">
      ${c.lien('formules', { ancre: 'avec-live', classe: 'bouton', texte: c.t('accueil.ouv.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="lien-fleche ouv-essai masque-ecran-tres-bas" href="https://www.youtube.com/@santevouszen974" target="_blank" rel="noopener">${c.t('accueil.ouv.essai')}</a>
    </p>
  </div>
  <p class="ouv-legende masque-ecran-bas">${c.t('accueil.ouv.legende')}</p>
</section>

<section class="offre" id="pratiquer">
  ${point(6, 8)}
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.offre.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.offre.titre')}</h2>
    <ul class="offre-liste" data-anime="cascade">
      ${[['a', 'seance-bambous', 'seances', ''], ['b', 'patrick-face', 'formules', 'avec-live'], ['c', 'fitness-lac', 'fitness-seniors', '']].map(([k, im, page, ancre]) => html`<li class="offre-carte">
        ${img(c, im, { classe: 'offre-photo', sizes: '(max-width: 760px) 92vw, 30vw', ratio: '4 / 3', attrs: 'data-fx="zoom" data-fx-force="8"' })}
        <p class="offre-chiffre">${c.t(`accueil.offre.${k}.chiffre`)}</p>
        <h3>${c.t(`accueil.offre.${k}.titre`)}</h3>
        <p>${c.t(`accueil.offre.${k}.texte`)}</p>
        ${c.lien(page, { ancre: ancre || undefined, classe: 'lien-fleche', texte: c.t(`accueil.offre.${k}.lien`) })}
      </li>`)}
    </ul>
  </div>
</section>

<section class="etapes" id="comment">
  <div class="conteneur etapes-grille">
    <div>
      <p class="surtitre">${c.t('accueil.etapes.sur')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.etapes.titre')}</h2>
      <ol class="etapes-liste" data-anime="cascade">
        ${['e1', 'e2', 'e3'].map((k, i) => html`<li><span class="etape-n" aria-hidden="true">${i + 1}</span><div><h3>${c.t(`accueil.etapes.${k}.titre`)}</h3><p>${c.t(`accueil.etapes.${k}.texte`)}</p></div></li>`)}
      </ol>
      <p class="etapes-actions">${c.lien('formules', { ancre: 'avec-live', classe: 'bouton', texte: c.t('accueil.etapes.action') })} <span>${c.t('accueil.etapes.question')} <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></span></p>
    </div>
    ${img(c, 'geste-lagon', { classe: 'etapes-photo', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 5', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  </div>
  <p class="etapes-suite mono" aria-hidden="true">${c.t('accueil.etapes.suite')} ↓</p>
</section>

<section class="ench" id="enchainement" style="--n:${E.length}" data-ench data-grille="scene" data-scene data-entete-cache aria-label="${c.s('accueil.ench.region')}">
  <div class="ench-cadre" data-collant>
    <div class="ench-piste" data-ench-piste data-effet="enchainement" tabindex="0" role="region" aria-label="${c.s('accueil.ench.region')}">
      ${E.map((p, i) => html`<article class="ench-panneau ench-panneau--${p.cote}${p.pose ? ' ench-panneau--pose' : ''}" data-panneau="${i}" id="geste-${i + 1}">
        ${p.pose ? pose(c, p.pose, { classe: 'ench-photo', alt: p.alt, attrs: 'data-effet="pose-longue"' }) : img(c, p.image, { classe: 'ench-photo', sizes: '100vw', attrs: 'data-effet="plongee"' })}
        <div class="ench-texte">
          <p class="surtitre">${String(i + 1).padStart(2, '0')} · ${p.lieu}</p>
          <h2 class="ench-forme">${p.forme}<span>${p.sous}</span></h2>
          <p class="ench-desc">${p.texte}</p>
          <p class="ench-meta" data-meta><span>${p.seance}</span>${p.duree ? html`<span class="mono">${p.duree}</span>` : ''}</p>
          ${p.jeu ? html`<p class="ench-jeu mono" data-jeu>${p.jeu}</p>` : ''}
        </div>
      </article>`)}
    </div>
    <div class="ench-pied" aria-hidden="true"><span class="ench-compte mono"><b data-ench-n>01</b> / ${String(E.length).padStart(2, '0')}</span><span class="ench-barre"><i data-ench-progres></i></span><span class="ench-aide ench-aide--souris masque-ecran-bas">${c.t('accueil.ench.aide')}</span><span class="ench-aide ench-aide--doigt">${c.t('accueil.ench.aideDoigt')}</span></div>
  </div>
</section>


<section class="live" id="live" data-live='${json(L)}'>
  ${img(c, 'live-plage', { classe: 'live-fond', sizes: '(max-width: 760px) 100vw, 62vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="conteneur live-texte">
    <p class="surtitre">${c.t('accueil.live.sur')}</p>
    <h2 class="live-grand" data-effet="horloge-live"><span class="live-jour" data-live-jour>${c.t('accueil.live.jour')}</span><span class="live-heures" data-live-heures>${c.t('accueil.live.heures')}</span><span class="live-ligne" aria-hidden="true"><i class="live-lumiere" data-live-lumiere></i></span></h2>
    <p class="live-saison">${c.t('accueil.live.texte')}</p>
    <p>${c.lien('formules', { classe: 'bouton', texte: c.t('accueil.live.action'), params: 'avec=live' })}</p>
  </div>
</section>

<section class="patrick patrick--moitie" id="patrick">
  ${img(c, 'patrick-equilibre', { classe: 'patrick-moitie-photo', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  <div class="patrick-texte">
    ${point(8, 8)}
    <p class="surtitre">${c.t('accueil.patrick.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.patrick.titre')}</h2>
    <p data-anime>${c.t('accueil.patrick.texte')}</p>
    <ul class="patrick-chiffres" data-anime="cascade">
      <li><b class="mono" data-compteur="20">20</b><span>${c.t('accueil.patrick.c1')}</span></li>
      <li><b class="mono" data-compteur="15">15</b><span>${c.t('accueil.patrick.c2')}</span></li>
      <li><b class="mono">2003</b><span>${c.t('accueil.patrick.c3')}</span></li>
    </ul>
    <p data-anime>${c.lien('patrick-campo', { classe: 'bouton bouton--contour', texte: c.t('accueil.patrick.lien') })}</p>
  </div>
</section>

<section class="choix choix--pose" id="formules" data-choix='${json(F)}'>
  ${point(94, 16, 'bas')}
  <div class="duree-cote">
    ${pose(c, 'ouv', { classe: 'duree-pose', alt: c.s('accueil.choix.alt'), attrs: 'data-variante="tel" data-fantomes="non" data-effet="trace-duree"' })}
  </div>
  <div class="choix-colonne">
    <p class="surtitre">${c.t('accueil.choix.sur')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.choix.titre')}</h2>
    <div class="choix-grille">
      <div class="choix-reglages" data-anime>
        <fieldset class="choix-mode">
          <legend>${c.t('accueil.choix.mode')}</legend>
          <label><input type="radio" name="mode" value="live" checked> ${c.t('accueil.choix.avec')}</label>
          <label><input type="radio" name="mode" value="libre"> ${c.t('accueil.choix.sans')}</label>
        </fieldset>
        <div class="duree" data-duree>
              <p class="duree-titre">${c.t('accueil.choix.duree')}</p>
              <div class="duree-scene">
                <input class="duree-curseur" type="range" min="0" max="2" step="1" value="1" data-duree-curseur aria-label="${c.s('accueil.choix.duree')}" aria-valuetext="7 mois">
              </div>
              <p class="duree-aide mono">${c.t('accueil.choix.aide')}</p>
              <ol class="duree-reperes"><li>4 mois</li><li>7 mois</li><li>12 mois</li></ol>
            </div>
      </div>
      <article class="billet billet--sombre billet--nu" data-billet>
        <p class="billet-nom mono" data-b-nom>ESSENTIEL</p>
        <p class="billet-prix" data-prix><span class="rouleau" data-b-prix>${euros(234)}</span></p>
        <p class="billet-duree" data-b-duree>7 mois d'accès</p>
        <ul class="billet-liste">
          <li data-b-live>24 séances en direct sur Zoom</li>
          <li>Entraînement (52), enseignement (42), méditation (13), 24 h sur 24</li>
          <li data-b-plus>Onglet connaissance (documents PDF)</li>
          <li data-b-entretien>1 entretien téléphonique</li>
        </ul>
        <p class="billet-actions">
          <a class="bouton" href="${c.url('formules', 'inscription', 'formule=essentiel')}" data-b-lien data-grille="retour" data-effet="billet-live" data-libelle="${c.libelle('formules')}">${c.t('accueil.choix.choisir')}</a>
          ${c.lien('formules', { classe: 'lien-fleche', texte: c.t('accueil.choix.comparer') })}
        </p>
      </article>
    </div>
    <p class="choix-note">${c.t('accueil.choix.note')}</p>
  </div>
</section>

<section class="appel" id="essayer">
  ${img(c, 'groupe-rochers', { classe: 'appel-photo', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="14"' })}
  <div class="conteneur appel-texte">
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.appel.titre')}</h2>
    <p data-anime>${c.t('accueil.appel.texte')}</p>
    <p class="appel-actions" data-anime>
      <a class="bouton" href="https://www.youtube.com/@santevouszen974" target="_blank" rel="noopener">${c.t('accueil.appel.youtube')}</a>
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('accueil.appel.tel')}</a>
    </p>
  </div>
</section>
`;
};
