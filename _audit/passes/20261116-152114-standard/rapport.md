# Rapport d’audit

Projet : `santevouszen-maquette` · 16/11/2026 16:40:31 · 19 min · 7 page(s) · audit standard

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261116-152114-standard` · version ?v=3
- Échecs : **2**
- À regarder : **18**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (6), liens vers la page en cours (6), changements de hauteur (6), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (14), souris immobile (1), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil et 1 autre(s) page(s) |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 6 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 6 page(s) |
| 6. La scène est un geste du métier | ✓ présent | geste du métier sur / |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact, /fitness-seniors, /formules, / |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — article#geste-1 > div.ench-texte > p.ench-lien:nth-of-type(5) > a.lien-fleche « Voir la séance dans le catalogue » — avec section#enchainement > div.ench-cadre > div.ench-pied:nth-of-type(2) > span.ench-aide.ench-aide--doigt:nth-of-type(4) « Glissez : quatre séances, quatre paysages → » _(320×568 normal, 320×568 sansJs)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] trace-geste — l’image change encore 0.8 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## À regarder

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 3 de donnees/site.json

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/formules` — 305 × 48 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### photo moyenne affichée en très grand (3)

- **photo moyenne affichée en très grand** — `/` — div.conteneur.etapes-grille > figure.media.etapes-photo > picture > img « Patrick en méditation, mains jointes, sur une plag » — meditation-plage (3/5, 61 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/` — div.conteneur.etapes-grille > figure.media.etapes-photo > picture > img « Patrick en méditation, mains jointes, sur une plag » — meditation-plage (3/5, 41 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/seances` — div.conteneur > figure.media.registre-bandeau > picture > img « Patrick bras tendus sur une colline couverte d'arb » — seance-colline (3/5, 66 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### typographie française (1)

- **typographie française** — `/contact` — section#debut > div.horloges:nth-of-type(2) > p.horloges-live.mono « Prochain live : jeudi 19 novembre, 18 h à Paris, 2 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 345 ms (différence 37 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 118 ms (différence 29 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — section#debut > figure.pose.ouv-figure > canvas.pose-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 47 ms (différence 23 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 70 ms (différence 24 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/` — 8 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (6)

- **effet qui ne bouge pas au défilement** — `/` — a.bouton — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/contact` — div.horloges — horloges : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/fitness-seniors` — section#serie.serie.monde-chaud — compteur-serie : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/formules` — article.billet.billet--recap — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/seances` — section#registre.registre.monde-clair — registre-seances : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/seances` — ol.registre-liste — index-survol : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=3
- Audit standard : étapes lourdes sur /, /contact, /fitness-seniors, /formules, /patrick-campo, /seances.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2818 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2514 ms depuis le premier octet
- Ouverture /fitness-seniors (1366×768) : 2498 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2554 ms depuis le premier octet
- Ouverture /patrick-campo (1366×768) : 2486 ms depuis le premier octet
- film de l'ouverture /patrick-campo 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /seances (1366×768) : 2586 ms depuis le premier octet
- Ouverture / (390×844) : 2765 ms depuis le premier octet
- Ouverture /contact (390×844) : 2504 ms depuis le premier octet
- Ouverture /fitness-seniors (390×844) : 2544 ms depuis le premier octet
- Ouverture /formules (390×844) : 2481 ms depuis le premier octet
- Ouverture /patrick-campo (390×844) : 2566 ms depuis le premier octet
- Ouverture /seances (390×844) : 2490 ms depuis le premier octet
- Bords de l’écran : 519 images d’intro, 42 de voile et 171 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /fitness-seniors : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /patrick-campo : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 129, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 1366×768 (molette) : 0 % d'images lentes sur 224, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 0 % d'images lentes sur 273, tâche la plus longue 0 ms
- Fluidité /patrick-campo 1366×768 (molette) : 0 % d'images lentes sur 243, tâche la plus longue 0 ms
- Fluidité /seances 1366×768 (molette) : 0 % d'images lentes sur 237, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 110 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /patrick-campo 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /seances 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 1.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /fitness-seniors : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /patrick-campo : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /seances : 0.54 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures,mouvement
```
