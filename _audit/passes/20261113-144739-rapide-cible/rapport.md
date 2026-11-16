# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 16:04:55 · 17 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact

## Résumé

- Statut : **88 échec(s)**
- Passe : `20261113-144739-rapide-cible` · version ?v=1
- Échecs : **88**
- À regarder : **22**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (36), films d’ouverture (12), films de transition (12), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (4), liens vers la page en cours (6), changements de hauteur (6), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (10), souris immobile (2), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 6 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 6 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact, /fitness-seniors, /formules, / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-142205-rapide-cible | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | toutes | 83 | 13 | 34 | échecs |
| **20261113-144739-rapide-cible** (celle-ci) | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | toutes | 88 | 22 | 1 | échecs |

## Échecs

### image de partage (6)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `fitness-seniors.html` — fichier introuvable : /assets/partage/fitness-seniors-fr.jpg
- **image de partage** — `formules.html` — fichier introuvable : /assets/partage/formules-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `patrick-campo.html` — fichier introuvable : /assets/partage/patrick-campo-fr.jpg
- **image de partage** — `seances.html` — fichier introuvable : /assets/partage/seances-fr.jpg

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.ouv-texte > p.ouv-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Choisir ma formule » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div.conteneur.con-ouv-texte > p:nth-of-type(3) > a.con-tel « 0692 09 05 13 » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > p.fit-actions:nth-of-type(3) > a.bouton « Voir les formules » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte > p.ouv-live:nth-of-type(4) « Prochain live jeudi 19 novembre · 18 h Paris · 21  » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.con-ouv-texte > p.con-mail:nth-of-type(4) « santevouszen@gmail.com » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > p.fit-actions:nth-of-type(3) > span.mono.fit-info « 3 modules · 18 à 43 minutes » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### texte coupé (4)

- **texte coupé** — `/` — section#live > div.conteneur.live-texte > h2.live-grand > span.live-jour:nth-of-type(1) « Jeudi 19 novembre » — coupé par section#live > div.conteneur.live-texte > h2.live-grand « Jeudi 19 novembre 18 h à Paris · 21 h chez Patrick » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_
- **texte coupé** — `/` — div.choix-grille > article.billet.billet--sombre > p.billet-prix:nth-of-type(2) > span.rouleau « 234 € » — coupé par div.conteneur > div.choix-grille > article.billet.billet--sombre > p.billet-prix:nth-of-type(2) « 234 € » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/` — section#live > div.conteneur.live-texte > h2.live-grand > span.live-jour:nth-of-type(1) « Jeudi, 18 h à Paris » — coupé par section#live > div.conteneur.live-texte > h2.live-grand « Jeudi, 18 h à Paris 21 h chez Patrick, à La Réunio » _(390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/formules` — div > article.billet.billet--recap > p.billet-prix:nth-of-type(2) > span « 234 € » — coupé par div.conteneur.inscription-grille > div > article.billet.billet--recap > p.billet-prix:nth-of-type(2) « 234 € » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — avec div.ouv-texte > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/patrick-campo` — section#debut > div.pat-ouv-grille.conteneur > div.pat-ouv-texte > p.surtitre:nth-of-type(1) « QUI VOUS GUIDE » — avec section#debut > div.pat-ouv-grille.conteneur > div.pat-ouv-texte > h1.pat-titre « Patrick Campo » _(1366×768 normal)_
- **textes qui se chevauchent** — `/seances` — section#registre > div.conteneur > p.registre-compte.mono:nth-of-type(2) > b « 51 » — avec section#registre > div.conteneur > p.registre-compte.mono:nth-of-type(2) > span « 38 h 28 de pratique » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/seances` — section#debut > div.conteneur.sea-ouv-tete > p.surtitre « LE CATALOGUE » — avec section#debut > div.conteneur.sea-ouv-tete > h1.sea-titre « 107 séances, à votre heure. » _(1366×768 normal)_

### contraste insuffisant (30)

- **contraste insuffisant** — `/` — section#debut > div.ouv-texte > p.ouv-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Choisir ma formule » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#live > div.conteneur.live-texte > p:nth-of-type(4) > a.bouton « Rejoindre le live » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — div.choix-grille > article.billet.billet--sombre > p.billet-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « Choisir cette formule » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#essayer > div.conteneur.appel-texte > p.appel-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Une séance gratuite sur YouTube » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'abonner » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'abonner » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/contact` — section#message > div.conteneur.con-grille > form.formulaire > button.bouton « Envoyer » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/contact` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'abonner » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **contraste insuffisant** — `/contact` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'abonner » — 4.11:1 (minimum 4.5:1) _(844×390 normal, 1366×768 normal)_
- **contraste insuffisant** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > p.fit-actions:nth-of-type(3) > a.bouton « Voir les formules » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/fitness-seniors` — section#serie > div.conteneur.serie-grille > div.serie-compteur:nth-of-type(2) > button.bouton.serie-bouton:nth-of-type(1) « Je monte sur la pointe des pieds » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/fitness-seniors` — section#commencer > div > p > a.bouton « Choisir ma formule » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/fitness-seniors` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'abonner » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/fitness-seniors` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'abonner » — 4.11:1 (minimum 4.5:1) _(844×390 normal, 1366×768 normal)_
- **contraste insuffisant** — `/formules` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'abonner » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/formules` — li#formule-basic > a.bouton « Choisir BASIC » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — li#formule-essentiel > a.bouton « Choisir ESSENTIEL » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — li#formule-premium > a.bouton « Choisir PREMIUM » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — li#formule-bronze > a.bouton « Choisir BRONZE » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — li#formule-argent > a.bouton « Choisir ARGENT » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — li#formule-or > a.bouton « Choisir OR » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — section#inscription > div.conteneur.inscription-grille > form.formulaire > button.bouton « Valider mon inscription » — 4.11:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/formules` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'abonner » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/patrick-campo` — section#pratiquer > div > p > a.bouton:nth-of-type(1) « Voir les formules » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/patrick-campo` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'abonner » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/patrick-campo` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'abonner » — 4.11:1 (minimum 4.5:1) _(844×390 normal, 1366×768 normal)_
- **contraste insuffisant** — `/seances` — div.conteneur.sea-ouv-tete > div.sea-ouv-bas > p.sea-actions:nth-of-type(2) > a.bouton « Voir les formules » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/seances` — section#commencer > div > p:nth-of-type(2) > a.bouton « Choisir ma formule » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/seances` — body#haut > div:nth-of-type(4) > a.bouton:nth-of-type(2) « S'abonner » — 4.11:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **contraste insuffisant** — `/seances` — header > div.entete-rangee > div.entete-actions > a.bouton:nth-of-type(1) « S'abonner » — 4.11:1 (minimum 4.5:1) _(844×390 normal, 1366×768 normal)_

### photo faible affichée en grand (4)

- **photo faible affichée en grand** — `/` — article#geste-4 > figure.media.ench-photo > picture > img « Patrick Campo, un bras levé, sur une plage de sabl » — geste-cote (4/5, faible, 79 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article.moitie:nth-of-type(2) > figure.media.moitie-photo > picture > img « Patrick Campo, bras levés en chemise rouge, sur un » — moitie-heure (4/5, faible, 71 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article#geste-4 > figure.media.ench-photo > picture > img « Patrick Campo, un bras levé, sur une plage de sabl » — geste-cote (4/5, faible, 100 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — article.moitie:nth-of-type(2) > figure.media.moitie-photo > picture > img « Patrick Campo, bras levés en chemise rouge, sur un » — moitie-heure (4/5, faible, 60 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 1377 px pour un écran de 1366 px _(1366×768 normal)_

### élément recouvert (4)

- **élément recouvert** — `/` — section#debut > button.ouv-poignee « Guider la trace de lumière : glisser vers le haut, » — par section#debut > p.ouv-consigne:nth-of-type(1) « Prenez la lumière et montez lentement » _(390×844 normal)_
- **élément recouvert** — `/contact` — section#message > div.conteneur.con-grille > form.formulaire > h2.titre-section « Ou laissez un message » — par section#message > span.point-fil > i _(390×844 normal)_
- **élément recouvert** — `/fitness-seniors` — section#serie > div.conteneur.serie-grille > div:nth-of-type(1) > h2.titre-section « Comptez la série avec lui » — par section#serie > span.point-fil _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/formules` — div.conteneur > div.famille:nth-of-type(1) > header.famille-tete > h2.titre-section « Avec le live » — par section#avec-live > span.point-fil _(390×844 normal)_

### contraste sur image (9)

- **contraste sur image** — `/` — section#debut > div.ouv-texte > p.surtitre.ouv-sur:nth-of-type(1) « QI GONG EN LIGNE · PATRICK CAMPO » — 1.84:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — section#debut > div.ouv-texte > p.ouv-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Choisir ma formule » — 4.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.surtitre:nth-of-type(1) « LES FORMULES » — 1.24:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-chapo:nth-of-type(2) « Toutes donnent accès 24 h sur 24 aux séances d'ent » — 3.74:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-actions:nth-of-type(3) > a.bouton « Comparer les formules » — 4.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-actions:nth-of-type(3) > a.bouton « Comparer les formules » — 2.61:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/formules` — div.conteneur > div.famille:nth-of-type(1) > header.famille-tete > h2.titre-section « Avec le live » — 2.30:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/formules` — div.conteneur > div.famille:nth-of-type(1) > header.famille-tete > p « Les séances à la demande, plus le direct du jeudi  » — 1.00:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/patrick-campo` — div.pat-ouv-grille.conteneur > div.pat-ouv-texte > p.pat-actions:nth-of-type(3) > a.bouton « Lui poser une question » — 4.11:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal, 1366×768 normal)_

### accessibilité (axe) : color-contrast (10)

- **accessibilité (axe) : color-contrast** — `/` — a[data-action-principale=""] ; a[data-b-lien=""] ; div[data-barre-fixe=""] > .bouton[href$="formules"][data-libelle="Formules"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — a[data-action-principale=""] ; a[data-b-lien=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — button[type="submit"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/fitness-seniors` — a[data-action-principale=""] ; .serie-bouton ; .vu[data-anime=""] > .bouton[href$="formules"][data-libelle="Formules"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/fitness-seniors` — .entete-actions > .bouton[href$="formules"][data-libelle="Formules"] ; a[data-action-principale=""] ; .serie-bouton — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/formules` — a[data-choisir="basic"] ; a[data-choisir="essentiel"] ; a[data-choisir="premium"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal, 390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/patrick-campo` — .vu[data-anime=""] > .bouton[href$="formules"][data-libelle="Formules"] ; div[data-barre-fixe=""] > .bouton[href$="formules"][data-libelle="Formules"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/patrick-campo` — .vu[data-anime=""] > .bouton[href$="formules"][data-libelle="Formules"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/seances` — a[data-action-principale=""] ; .vu[data-anime=""]:nth-child(3) > .bouton[href$="formules"][data-libelle="Formules"] ; div[data-barre-fixe=""] > .bouton[href$="formules"][data-libelle="Formules"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/seances` — .entete-actions > .bouton[href$="formules"][data-libelle="Formules"] ; a[data-action-principale=""] ; .vu[data-anime=""]:nth-child(3) > .bouton[href$="formules"][data-libelle="Formules"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/contact` — section#debut > div.conteneur.con-ouv-texte > p.con-mail:nth-of-type(4) > a « santevouszen@gmail.com » — 232 × 24 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_

### premier écran : titre h1 invisible (1)

- **premier écran : titre h1 invisible** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > h1.fit-titre « Un muscle à la fois. » _(390×844 normal, 390×844 sansWebgl)_

### section sans visuel (6)

- **section sans visuel** — `/fitness-seniors` — section#modules « LES TROIS MODULES Ce qu'il y a dans chaque séance. » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formules` — section#avec-live « Avec le live Les séances à la demande, plus le dir » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formules` — section#inscription « INSCRIPTION Votre inscription Simulation : rien n' » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/patrick-campo` — section#parcours « LE PARCOURS La rééducation, puis le souffle. 2003  » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/patrick-campo` — section#diplomes « LES DIPLÔMES Ce qu'il a étudié. Master 2 en manage » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/seances` — section#registre « LE REGISTRE Choisissez une forme, une saison, une  » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### premier écran : titre hors de l’écran (2)

- **premier écran : titre hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > h1.fit-titre « Un muscle à la fois. » — haut 837 px, bas 884 px, zone 65–779 px _(390×844 sansJs)_
- **premier écran : titre hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > h1.fit-titre « Un muscle à la fois. » — haut 713 px, bas 806 px, zone 65–503 px _(320×568 sansJs)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `formules.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 254 × 51 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (4)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#live > figure.media.live-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.con-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/formules` — section#debut > figure.media.for-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/patrick-campo` — section#debut > figure.media.pat-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (1)

- **typographie française** — `/` — section#live > div.conteneur.live-texte > p.live-statut:nth-of-type(2) « Prochain live : jeudi 19 novembre, 18 h à Paris, 2 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### contraste sur image (2)

- **contraste sur image** — `/` — section#debut > div.ouv-texte > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — 2.64:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.ouv-texte > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » — 2.07:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 100 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### identifiant en double (1)

- **identifiant en double** — `/seances` — button#meditation « Méditation » — id="meditation" _(390×844 normal, 1366×768 normal, 390×844 sansJs)_

### retour arrière : changement brusque (4)

- **retour arrière : changement brusque** — `/` — à 77 ms (différence 56 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 170 ms (différence 26 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 58 ms (différence 54 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 104 ms (différence 28 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 63 ms (différence 32 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 49 ms (différence 29 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/` — 6 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/` — div.duree — trace-duree : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — a.bouton — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/formules` — article.billet.billet--recap — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 82 min de travail pour 100 min de budget, 12 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /, /contact, /fitness-seniors, /formules, /patrick-campo, /seances.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2840 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2483 ms depuis le premier octet
- Ouverture /fitness-seniors (1366×768) : 2524 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2516 ms depuis le premier octet
- Ouverture /patrick-campo (1366×768) : 2489 ms depuis le premier octet
- Ouverture /seances (1366×768) : 2519 ms depuis le premier octet
- Ouverture / (390×844) : 2747 ms depuis le premier octet
- Ouverture /contact (390×844) : 2483 ms depuis le premier octet
- Ouverture /fitness-seniors (390×844) : 2468 ms depuis le premier octet
- film de l'ouverture /fitness-seniors 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formules (390×844) : 2476 ms depuis le premier octet
- Ouverture /patrick-campo (390×844) : 2507 ms depuis le premier octet
- Ouverture /seances (390×844) : 2470 ms depuis le premier octet
- Bords de l’écran : 536 images d’intro, 38 de voile et 152 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /fitness-seniors : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /patrick-campo : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 130, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 1366×768 (molette) : 0 % d'images lentes sur 224, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 0 % d'images lentes sur 234, tâche la plus longue 0 ms
- Fluidité /patrick-campo 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /seances 1366×768 (molette) : 0 % d'images lentes sur 186, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1295, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /patrick-campo 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /seances 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.87 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /fitness-seniors : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /patrick-campo : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /seances : 0.56 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures
```
