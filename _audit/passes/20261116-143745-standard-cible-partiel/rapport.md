# Rapport d’audit

Projet : `santevouszen-maquette` · 16/11/2026 15:38:29 · 1 min · 2 page(s) · audit standard ciblé sur /formules,/contact (étapes : fichiers, mesures)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261116-143745-standard-cible-partiel` · version ?v=2
- Échecs : **2**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (22), balayage (2)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261116-135531-standard | standard | toutes | toutes | 7 | 12 | 5 | échecs |
| 20261116-141452-standard | standard | toutes | toutes | 6 | 17 | 2 | échecs |
| **20261116-143745-standard-cible-partiel** (celle-ci) | standard | /formules,/contact | fichiers, mesures | 2 | 2 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-actions:nth-of-type(3) > a.bouton « Comparer les formules » _(320×568 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-actions:nth-of-type(3) > span.mono.for-info « À partir de 84 € pour 4 mois » _(320×568 normal, 844×390 normal, 1366×768 normal, 1366×768 sansWebgl)_

## À regarder

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### typographie française (1)

- **typographie française** — `/contact` — section#debut > div.horloges:nth-of-type(2) > p.horloges-live.mono « Prochain live : jeudi 19 novembre, 18 h à Paris, 2 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Audit standard : étapes lourdes sur /contact, /formules.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/formules --seulement=fichiers,mesures
```
