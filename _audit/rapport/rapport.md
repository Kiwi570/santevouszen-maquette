# Rapport d’audit

Projet : `santevouszen-maquette` · 17/11/2026 13:50:32 · 2 min · 1 page(s) · audit standard ciblé sur / (étapes : fichiers, mesures, ecran, mouvement, fluidite)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261117-124824-standard-cible-partiel` · version ?v=5
- Échecs : **0**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (11), balayage (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (13), souris immobile (2)

## Échecs

Aucun.

## À regarder

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 5 de donnees/site.json

### photo moyenne affichée en très grand (2)

- **photo moyenne affichée en très grand** — `/` — div.conteneur.etapes-grille > figure.media.etapes-photo > picture > img « Patrick en méditation, mains jointes, sur une plag » — meditation-plage (3/5, 61 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/` — div.conteneur.etapes-grille > figure.media.etapes-photo > picture > img « Patrick en méditation, mains jointes, sur une plag » — meditation-plage (3/5, 41 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### fluidité (1)

- **fluidité** — `/` — 7 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — a.bouton — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=5
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 122 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
