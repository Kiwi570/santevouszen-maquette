# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 16:29:20 · 6 min · 7 page(s) · audit standard

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261113-152303-standard` · version ?v=1
- Échecs : **12**
- À regarder : **6**
- Non lancé : **17**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (77), balayage (6), films d’ouverture (12), films de transition (12)

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
| **20261113-152303-standard** (celle-ci) | standard | toutes | toutes | 12 | 6 | 17 | échecs |

## Échecs

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte:nth-of-type(2) > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — avec div.ouv-texte:nth-of-type(2) > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +3)_
- **textes qui se chevauchent** — `/patrick-campo` — section#debut > div.pat-ouv-grille.conteneur > div.pat-ouv-texte > p.surtitre:nth-of-type(1) « QUI VOUS GUIDE » — avec section#debut > div.pat-ouv-grille.conteneur > div.pat-ouv-texte > h1.pat-titre « Patrick Campo » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/seances` — section#debut > div.conteneur.sea-ouv-tete > p.surtitre « LE CATALOGUE » — avec section#debut > div.conteneur.sea-ouv-tete > h1.sea-titre « 107 séances, à votre heure. » _(1920×1080 normal)_

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

## À regarder

### photo moyenne affichée en très grand (3)

- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 100 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 62 % de l'écran) : une image notée 4 ou 5 à cette taille _(1920×1080 normal)_
- **photo moyenne affichée en très grand** — `/seances` — div.conteneur > figure.media.registre-bandeau > picture > img « Patrick bras tendus sur une colline couverte d'arb » — seance-colline (3/5, 66 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 93 ms (différence 47 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 75 ms (différence 35 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 76 ms (différence 53 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

## Non lancé

- **bords de l’écran / 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /contact 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /fitness-seniors 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /formules 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /patrick-campo 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran /seances 1366×768** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
- **bords de l’écran / 1920×1080** : browser.newContext: Target page, context or browser has been closed (3 tentatives)
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
- Journal v1 : 4 étape(s) notée(s), 82 min de travail pour 100 min de budget, 38 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /contact, /fitness-seniors, /formules, /patrick-campo, /seances.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2884 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2498 ms depuis le premier octet
- Ouverture /fitness-seniors (1366×768) : 2530 ms depuis le premier octet
- film de l'ouverture /fitness-seniors 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formules (1366×768) : 2493 ms depuis le premier octet
- Ouverture /patrick-campo (1366×768) : 2544 ms depuis le premier octet
- Ouverture /seances (1366×768) : 2492 ms depuis le premier octet
- Ouverture / (390×844) : 2781 ms depuis le premier octet
- Ouverture /contact (390×844) : 2507 ms depuis le premier octet
- Ouverture /fitness-seniors (390×844) : 2523 ms depuis le premier octet
- Ouverture /formules (390×844) : 2467 ms depuis le premier octet
- Ouverture /patrick-campo (390×844) : 2518 ms depuis le premier octet
- Ouverture /seances (390×844) : 2529 ms depuis le premier octet
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
node _audit/audit.mjs --seulement=fichiers,mesures,bords,parcours,ecran,fluidite,mouvement,vitesse,captures
```
