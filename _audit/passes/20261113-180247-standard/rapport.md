# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 19:22:07 · 19 min · 7 page(s) · audit standard

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261113-180247-standard` · version ?v=1
- Échecs : **0**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (4), liens vers la page en cours (6), changements de hauteur (6), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (10), souris immobile (2), vitesse (6), captures (1)

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
| 20261113-144739-rapide-cible | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | toutes | 88 | 22 | 1 | échecs |
| 20261113-150652-rapide-cible-partiel | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | fichiers, mesures | 19 | 5 | 0 | échecs |
| 20261113-150911-rapide-cible-partiel | rapide | /,/contact,/fitness-seniors,/formules,/seances | fichiers, mesures | 16 | 5 | 0 | échecs |
| 20261113-151017-rapide-cible-partiel | rapide | /,/contact,/fitness-seniors,/formules | fichiers, mesures | 6 | 4 | 0 | échecs |
| 20261113-151104-rapide-cible-partiel | rapide | /,/contact,/formules | fichiers, mesures | 2 | 4 | 0 | échecs |
| 20261113-151158-rapide-cible-partiel | rapide | / | fichiers, mesures | 0 | 4 | 0 | complet |
| 20261113-152303-standard | standard | toutes | toutes | 12 | 6 | 17 | échecs |
| 20261113-153140-standard-cible | standard | /seances,/fitness-seniors,/patrick-campo,/formules,/contact,/404 | toutes | 11 | 8 | 1 | échecs |
| 20261113-154721-standard-cible-partiel | standard | /404,/contact,/fitness-seniors,/formules,/patrick-campo,/seances | fichiers, mesures | 2 | 3 | 0 | échecs |
| 20261113-154926-standard-cible-partiel | standard | /404 | fichiers, mesures | 6 | 0 | 0 | échecs |
| 20261113-161240-standard-cible | standard | / | toutes | 6 | 6 | 1 | échecs |
| 20261113-162558-standard-cible | standard | / | toutes | 3 | 7 | 1 | échecs |
| 20261113-163253-standard-cible | standard | / | toutes | 2 | 7 | 1 | échecs |
| 20261113-163849-standard-cible-partiel | standard | / | fluidite, mouvement | 0 | 3 | 0 | complet |
| 20261113-164023-standard-cible-partiel | standard | / | fluidite, mouvement | 0 | 3 | 0 | complet |
| 20261113-164200-standard | standard | toutes | toutes | 2 | 12 | 1 | échecs |
| 20261113-170312-standard-cible-partiel | standard | /,/404 | fichiers, mesures, mouvement | 0 | 1 | 0 | complet |
| 20261113-172852-standard-cible | standard | / | toutes | 7 | 7 | 1 | échecs |
| 20261113-173618-standard-cible | standard | / | toutes | 2 | 6 | 1 | échecs |
| 20261113-174219-standard-cible | standard | / | toutes | 1 | 7 | 1 | échecs |
| 20261113-174743-standard-cible-partiel | standard | / | fichiers, vitesse, mouvement | 0 | 1 | 0 | complet |
| 20261113-174835-standard-cible-partiel | standard | / | fichiers, vitesse, mouvement | 0 | 1 | 0 | complet |
| 20261113-175644-standard | standard | toutes | toutes | 0 | 9 | 20 | INCOMPLET |
| **20261113-180247-standard** (celle-ci) | standard | toutes | toutes | 0 | 12 | 1 | complet |

## Échecs

Aucun.

## À regarder

### photo moyenne affichée en très grand (3)

- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 100 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 62 % de l'écran) : une image notée 4 ou 5 à cette taille _(1920×1080 normal)_
- **photo moyenne affichée en très grand** — `/seances` — div.conteneur > figure.media.registre-bandeau > picture > img « Patrick bras tendus sur une colline couverte d'arb » — seance-colline (3/5, 66 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 259 ms (différence 36 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 62 ms (différence 54 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 92 ms (différence 32 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — section#debut > figure.pose.ouv-figure > canvas.pose-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 47 ms (différence 28 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 55 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### fluidité (1)

- **fluidité** — `/` — 6 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (2)

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
- Journal v1 : 6 étape(s) notée(s), 142 min de travail pour 135 min de budget, 38 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Journal : « construction : contact et page de catégorie » 36 min pour 10 prévues.
- Audit standard : étapes lourdes sur /, /contact, /fitness-seniors, /formules, /patrick-campo, /seances.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2826 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2487 ms depuis le premier octet
- Ouverture /fitness-seniors (1366×768) : 2452 ms depuis le premier octet
- film de l'ouverture /fitness-seniors 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formules (1366×768) : 2485 ms depuis le premier octet
- Ouverture /patrick-campo (1366×768) : 2528 ms depuis le premier octet
- Ouverture /seances (1366×768) : 2496 ms depuis le premier octet
- Ouverture / (390×844) : 2714 ms depuis le premier octet
- Ouverture /contact (390×844) : 2469 ms depuis le premier octet
- Ouverture /fitness-seniors (390×844) : 2523 ms depuis le premier octet
- Ouverture /formules (390×844) : 2500 ms depuis le premier octet
- Ouverture /patrick-campo (390×844) : 2517 ms depuis le premier octet
- Ouverture /seances (390×844) : 2477 ms depuis le premier octet
- bords de l’écran /patrick-campo 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /seances 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 563 images d’intro, 41 de voile et 178 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /fitness-seniors : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /patrick-campo : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 130, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 1366×768 (molette) : 0 % d'images lentes sur 227, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 0 ms
- Fluidité /patrick-campo 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité /seances 1366×768 (molette) : 0 % d'images lentes sur 231, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 1 % d'images lentes sur 1329, tâche la plus longue 114 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /patrick-campo 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /seances 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 1.83 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /fitness-seniors : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /patrick-campo : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /seances : 0.44 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
