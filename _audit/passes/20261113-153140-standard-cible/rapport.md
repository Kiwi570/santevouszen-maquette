# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 16:46:34 · 15 min · 6 page(s) · audit standard ciblé sur /seances,/fitness-seniors,/patrick-campo,/formules,/contact,/404

## Résumé

- Statut : **11 échec(s)**
- Passe : `20261113-153140-standard-cible` · version ?v=1
- Échecs : **11**
- À regarder : **8**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (10), vitesse (5), captures (1)

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
| **20261113-153140-standard-cible** (celle-ci) | standard | /seances,/fitness-seniors,/patrick-campo,/formules,/contact,/404 | toutes | 11 | 8 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > p:nth-of-type(3) > a.bouton « Revenir à l'accueil » _(844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > p.fit-actions:nth-of-type(3) > a.bouton « Voir les formules » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-actions:nth-of-type(3) > a.bouton « Comparer les formules » _(1366×768 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/404` — section#debut > div.introuvable-texte.conteneur > p.surtitre:nth-of-type(1) « 404 » — 1.80:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/404` — section#debut > div.introuvable-texte.conteneur > h1 « Ce geste n'existe pas encore. » — 2.26:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### élément recouvert (1)

- **élément recouvert** — `/contact` — section#message > div.conteneur.con-grille > form.formulaire > h2.titre-section « Ou laissez un message » — par section#message > span.point-fil _(768×1024 normal)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.con-ouv-texte > p.con-mail:nth-of-type(4) « santevouszen@gmail.com » _(1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > p.fit-actions:nth-of-type(3) > span.mono.fit-info « 3 modules · 18 à 43 minutes » _(1366×768 sansJs)_
- **premier écran : information clé hors de l’écran** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-actions:nth-of-type(3) > span.mono.for-info « À partir de 84 € pour 4 mois » _(1366×768 sansJs)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/patrick-campo` — section#debut > div.pat-ouv-grille.conteneur > div.pat-ouv-texte > p.surtitre:nth-of-type(1) « QUI VOUS GUIDE » — avec section#debut > div.pat-ouv-grille.conteneur > div.pat-ouv-texte > h1.pat-titre « Patrick Campo » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/seances` — section#debut > div.conteneur.sea-ouv-tete > p.surtitre « LE CATALOGUE » — avec section#debut > div.conteneur.sea-ouv-tete > h1.sea-titre « 107 séances, à votre heure. » _(1920×1080 normal)_

## À regarder

### photo moyenne affichée en très grand (3)

- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 100 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 62 % de l'écran) : une image notée 4 ou 5 à cette taille _(1920×1080 normal)_
- **photo moyenne affichée en très grand** — `/seances` — div.conteneur > figure.media.registre-bandeau > picture > img « Patrick bras tendus sur une colline couverte d'arb » — seance-colline (3/5, 66 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### transition : changement brusque (1)

- **transition : changement brusque** — `/contact → /seances` — à 1284 ms (différence 21 %) (films/transition-contact-vers-seances-1366.png) _(1366×768 film)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 72 ms (différence 44 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 64 ms (différence 34 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/contact` — à 63 ms (différence 50 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### effet qui ne bouge pas au défilement (1)

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
- Journal v1 : 4 étape(s) notée(s), 82 min de travail pour 100 min de budget, 38 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Audit standard : étapes lourdes sur /contact, /fitness-seniors, /formules, /patrick-campo, /seances.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture /contact (1366×768) : 2469 ms depuis le premier octet
- Ouverture /fitness-seniors (1366×768) : 2498 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2496 ms depuis le premier octet
- Ouverture /patrick-campo (1366×768) : 2482 ms depuis le premier octet
- Ouverture /seances (1366×768) : 2491 ms depuis le premier octet
- film de l'ouverture /seances 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2534 ms depuis le premier octet
- Ouverture /fitness-seniors (390×844) : 2515 ms depuis le premier octet
- Ouverture /formules (390×844) : 2531 ms depuis le premier octet
- Ouverture /patrick-campo (390×844) : 2549 ms depuis le premier octet
- Ouverture /seances (390×844) : 2478 ms depuis le premier octet
- bords de l’écran /patrick-campo 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 479 images d’intro, 37 de voile et 149 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun lien profond vers une section d’une autre page.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /fitness-seniors : aucune section épinglée ou plein écran.
- Tient dans l'écran /formules : aucune section épinglée ou plein écran.
- Tient dans l'écran /patrick-campo : aucune section épinglée ou plein écran.
- Tient dans l'écran /seances : aucune section épinglée ou plein écran.
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 128, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 1366×768 (molette) : 0 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /formules 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 0 ms
- Fluidité /patrick-campo 1366×768 (molette) : 0 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /seances 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /fitness-seniors 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /formules 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /patrick-campo 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /seances 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Vitesse /contact : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /fitness-seniors : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /formules : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /patrick-campo : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /seances : 0.41 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/contact,/fitness-seniors,/formules,/patrick-campo,/seances --seulement=fichiers,mesures
```
