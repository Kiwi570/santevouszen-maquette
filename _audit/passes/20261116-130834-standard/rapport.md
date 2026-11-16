# Rapport d’audit

Projet : `santevouszen-maquette` · 16/11/2026 14:13:52 · 5 min · 7 page(s) · audit standard

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-130834-standard` · version ?v=1
- Échecs : **1**
- À regarder : **3**
- Non lancé : **41**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (77), balayage (6)

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
| 20261113-180247-standard | standard | toutes | toutes | 0 | 12 | 1 | complet |
| 20261113-183646-standard-cible | standard | / | toutes | 0 | 8 | 1 | complet |
| 20261116-124956-complet-partiel | complet | toutes | mesures, ecran | 10 | 3 | 0 | échecs |
| 20261116-130527-complet-cible-partiel | complet | /,/fitness-seniors,/formules | fichiers, mesures | 7 | 2 | 0 | échecs |
| **20261116-130834-standard** (celle-ci) | standard | toutes | toutes | 1 | 3 | 41 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/contact` — section#message > div.conteneur.con-grille > form.formulaire > p.champ-donnees:nth-of-type(1) « Vos données servent seulement à vous répondre. La  » — coupé par main#contenu « Illustration générée CONTACT Une question ? Appele » _(320×568 normal, 320×568 sansJs)_

## À regarder

### photo moyenne affichée en très grand (3)

- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 100 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 62 % de l'écran) : une image notée 4 ou 5 à cette taille _(1920×1080 normal)_
- **photo moyenne affichée en très grand** — `/seances` — div.conteneur > figure.media.registre-bandeau > picture > img « Patrick bras tendus sur une colline couverte d'arb » — seance-colline (3/5, 66 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

## Non lancé

- **film de l'ouverture / 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /contact 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /fitness-seniors 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /formules 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /patrick-campo 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /seances 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis / 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /contact 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /fitness-seniors 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /formules 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /patrick-campo 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /seances 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture / 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /contact 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /fitness-seniors 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /formules 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /patrick-campo 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de l'ouverture /seances 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis / 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /contact 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /fitness-seniors 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **film de la transition depuis /formules 390×844** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
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
- Journal v1 : 7 étape(s) notée(s), 319 min de travail pour 135 min de budget, 38 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Journal : « construction : contact et page de catégorie » 36 min pour 10 prévues.
- Audit standard : étapes lourdes sur /, /contact, /fitness-seniors, /formules, /patrick-campo, /seances.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
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
node _audit/audit.mjs --seulement=fichiers,mesures,films,bords,parcours,ecran,fluidite,mouvement,vitesse,captures
```
