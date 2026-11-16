# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 19:03:55 · 7 min · 7 page(s) · audit standard

## Résumé

- Statut : **INCOMPLET : 19 contrôle(s) requis n’ont pas tourné (voir « Non lancé ») ; ne vaut pas pour une livraison**
- Passe : `20261113-175644-standard` · version ?v=1
- Échecs : **0**
- À regarder : **9**
- Non lancé : **20**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (77), balayage (6), films d’ouverture (11), films de transition (10)

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
| **20261113-175644-standard** (celle-ci) | standard | toutes | toutes | 0 | 9 | 20 | INCOMPLET |

## Échecs

Aucun.

## À regarder

### photo moyenne affichée en très grand (3)

- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 100 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 62 % de l'écran) : une image notée 4 ou 5 à cette taille _(1920×1080 normal)_
- **photo moyenne affichée en très grand** — `/seances` — div.conteneur > figure.media.registre-bandeau > picture > img « Patrick bras tendus sur une colline couverte d'arb » — seance-colline (3/5, 66 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 343 ms (différence 36 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 76 ms (différence 54 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 112 ms (différence 32 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — section#debut > figure.pose.ouv-figure > canvas.pose-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 53 ms (différence 28 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 60 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

- **film de l'ouverture /seances 1366×768** : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page (3 tentatives)
- **film de la transition depuis /patrick-campo 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /seances 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /contact 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /fitness-seniors 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /formules 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /patrick-campo 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /seances 1366×768** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1920×1080** : page.evaluate: Target page, context or browser has been closed (3 tentatives)
- **parcours:intro** : browser.newContext: Target page, context or browser has been closed
- **parcours:menu** : browser.newContext: Target page, context or browser has been closed
- **parcours:liens** : browser.newContext: Target page, context or browser has been closed
- **parcours:hauteur** : browser.newContext: Target page, context or browser has been closed
- **ecran** : browser.newContext: Target page, context or browser has been closed
- **fluidite** : browser.newContext: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
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
- Ouverture / (1366×768) : 2825 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2496 ms depuis le premier octet
- Ouverture /fitness-seniors (1366×768) : 2496 ms depuis le premier octet
- film de l'ouverture /fitness-seniors 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formules (1366×768) : 2474 ms depuis le premier octet
- Ouverture /patrick-campo (1366×768) : 2473 ms depuis le premier octet
- Ouverture / (390×844) : 2715 ms depuis le premier octet
- Ouverture /contact (390×844) : 2492 ms depuis le premier octet
- Ouverture /fitness-seniors (390×844) : 2483 ms depuis le premier octet
- Ouverture /formules (390×844) : 2503 ms depuis le premier octet
- Ouverture /patrick-campo (390×844) : 2488 ms depuis le premier octet
- Ouverture /seances (390×844) : 2459 ms depuis le premier octet
- Bords de l’écran : 0 images d’intro, 0 de voile et 0 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,films,bords,parcours,ecran,fluidite,mouvement,vitesse,captures
```
