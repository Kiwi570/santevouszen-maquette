# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 18:34:05 · 5 min · 1 page(s) · audit standard ciblé sur /

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261113-172852-standard-cible` · version ?v=1
- Échecs : **7**
- À regarder : **7**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (11), balayage (1), films d’ouverture (2), films de transition (2), bords de l’écran (2), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (4), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (10), souris immobile (2), vitesse (1), captures (1)

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
| **20261113-172852-standard-cible** (celle-ci) | standard | / | toutes | 7 | 7 | 1 | échecs |

## Échecs

### texte coupé (4)

- **texte coupé** — `/` — section#formules > div.choix-colonne:nth-of-type(2) > h2.titre-section « Combien de temps voulez-vous pratiquer ? » — coupé par main#contenu « Le geste lent. Prochain live jeudi 19 novembre · 1 » _(320×568 normal)_
- **texte coupé** — `/` — div.choix-grille > article.billet.billet--sombre > p.billet-prix:nth-of-type(2) > span.rouleau « 234 € » — coupé par main#contenu « Le geste lent. Prochain live jeudi 19 novembre · 1 » _(320×568 normal)_
- **texte coupé** — `/` — section#formules > div.choix-colonne:nth-of-type(2) > h2.titre-section « Combien de temps voulez-vous pratiquer ? » — coupé par main#contenu « Le geste lent. Live Zoom chaque jeudi · 18 h Paris » _(320×568 sansJs)_
- **texte coupé** — `/` — div.choix-grille > article.billet.billet--sombre > p.billet-prix:nth-of-type(2) > span.rouleau « 234 € » — coupé par main#contenu « Le geste lent. Live Zoom chaque jeudi · 18 h Paris » _(320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/` — section#formules > div.choix-colonne:nth-of-type(2) > h2.titre-section « Combien de temps voulez-vous pratiquer ? » — par section#formules > span.point-fil _(768×1024 normal)_

### fluidité (1)

- **fluidité** — `/` — 8 % d'images de plus de 50 ms, tâche la plus longue 365 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### vitesse (1)

- **vitesse** — `/` — 3.43 s de calcul au chargement (2 s au plus) _(390×844 téléphone ralenti (processeur ÷4, réseau 4G))_

## À regarder

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 474 ms (différence 36 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 59 ms (différence 54 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 84 ms (différence 29 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — section#debut > figure.pose.ouv-figure > canvas.pose-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 56 ms (différence 28 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 48 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — a.bouton — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

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
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2779 ms depuis le premier octet
- Ouverture / (390×844) : 2713 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 142 images d’intro, 13 de voile et 50 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 390×844 (doigt) : 1 % d'images lentes sur 1327, tâche la plus longue 108 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures,fluidite,vitesse
```
