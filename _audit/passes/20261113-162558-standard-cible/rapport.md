# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 17:31:11 · 5 min · 1 page(s) · audit standard ciblé sur /

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261113-162558-standard-cible` · version ?v=1
- Échecs : **3**
- À regarder : **7**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (11), balayage (1), films d’ouverture (2), films de transition (2), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (4), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (10), souris immobile (1), vitesse (1), captures (1)

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
| **20261113-162558-standard-cible** (celle-ci) | standard | / | toutes | 3 | 7 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.ouv-texte > p.ouv-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « Choisir ma formule » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — avec div.ouv-texte > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### fluidité (1)

- **fluidité** — `/` — 10 % d'images de plus de 50 ms, tâche la plus longue 301 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## À regarder

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 347 ms (différence 35 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 80 ms (différence 53 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 136 ms (différence 31 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — section#debut > figure.pose.ouv-figure > canvas.pose-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/seances` — à 47 ms (différence 22 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — a.bouton — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] trace-geste — léger changement (0.4 %) 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

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
- Journal v1 : 4 étape(s) notée(s), 82 min de travail pour 100 min de budget, 38 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2775 ms depuis le premier octet
- Ouverture / (390×844) : 2746 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 117 images d’intro, 12 de voile et 49 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1278, tâche la plus longue 118 ms
- Vitesse / : 1.16 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures,fluidite
```
