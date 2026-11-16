# Rapport d’audit

Projet : `santevouszen-maquette` · 16/11/2026 15:41:44 · 1 min · 2 page(s) · audit standard ciblé sur /,/formules (étapes : films)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261116-144042-standard-cible-partiel` · version ?v=2
- Échecs : **0**
- À regarder : **6**
- Non lancé : **0**
- Contrôles passés : films d’ouverture (4), films de transition (4)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-135531-standard | standard | toutes | toutes | 7 | 12 | 5 | échecs |
| 20261116-141452-standard | standard | toutes | toutes | 6 | 17 | 2 | échecs |
| 20261116-143745-standard-cible-partiel | standard | /formules,/contact | fichiers, mesures | 2 | 2 | 0 | échecs |
| 20261116-143923-standard-cible-partiel | standard | /,/formules,/contact | fichiers, mesures | 0 | 2 | 0 | complet |
| **20261116-144042-standard-cible-partiel** (celle-ci) | standard | /,/formules | films | 0 | 6 | 0 | complet |

## Échecs

Aucun.

## À regarder

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 395 ms (différence 37 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 78 ms (différence 53 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 129 ms (différence 30 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### au retour arrière, élément qui réapparaît en s’animant (1)

- **au retour arrière, élément qui réapparaît en s’animant** — `/` — section#debut > figure.pose.ouv-figure > canvas.pose-toile _(1366×768 retour arrière, 390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/seances` — à 43 ms (différence 28 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/seances` — à 40 ms (différence 21 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /, /formules.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2815 ms depuis le premier octet
- Ouverture /formules (1366×768) : 2529 ms depuis le premier octet
- film de l'ouverture /formules 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2694 ms depuis le premier octet
- Ouverture /formules (390×844) : 2527 ms depuis le premier octet

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
