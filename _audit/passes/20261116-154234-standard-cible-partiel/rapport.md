# Rapport d’audit

Projet : `santevouszen-maquette` · 16/11/2026 16:43:42 · 1 min · 1 page(s) · audit standard ciblé sur / (étapes : fichiers, mesures, mouvement)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261116-154234-standard-cible-partiel` · version ?v=3
- Échecs : **1**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (11), balayage (1), mouvement (2), effets du plan (14), souris immobile (1)

## Passes de cette version (?v=3)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-152114-standard | standard | toutes | toutes | 2 | 18 | 1 | échecs |
| **20261116-154234-standard-cible-partiel** (celle-ci) | standard | / | fichiers, mesures, mouvement | 1 | 4 | 0 | échecs |

## Échecs

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] trace-geste — l’image change encore 1 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## À regarder

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 3 de donnees/site.json

### photo moyenne affichée en très grand (2)

- **photo moyenne affichée en très grand** — `/` — div.conteneur.etapes-grille > figure.media.etapes-photo > picture > img « Patrick en méditation, mains jointes, sur une plag » — meditation-plage (3/5, 61 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_
- **photo moyenne affichée en très grand** — `/` — div.conteneur.etapes-grille > figure.media.etapes-photo > picture > img « Patrick en méditation, mains jointes, sur une plag » — meditation-plage (3/5, 41 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — a.bouton — billet-live : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=3
- Audit standard : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mouvement
```
