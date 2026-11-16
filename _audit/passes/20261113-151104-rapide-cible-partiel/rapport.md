# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 16:11:31 · 0 min · 3 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/contact,/formules (étapes : fichiers, mesures)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261113-151104-rapide-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (18)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-142205-rapide-cible | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | toutes | 83 | 13 | 34 | échecs |
| 20261113-144739-rapide-cible | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | toutes | 88 | 22 | 1 | échecs |
| 20261113-150652-rapide-cible-partiel | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | fichiers, mesures | 19 | 5 | 0 | échecs |
| 20261113-150911-rapide-cible-partiel | rapide | /,/contact,/fitness-seniors,/formules,/seances | fichiers, mesures | 16 | 5 | 0 | échecs |
| 20261113-151017-rapide-cible-partiel | rapide | /,/contact,/fitness-seniors,/formules | fichiers, mesures | 6 | 4 | 0 | échecs |
| **20261113-151104-rapide-cible-partiel** (celle-ci) | rapide | /,/contact,/formules | fichiers, mesures | 2 | 4 | 0 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — avec div.ouv-texte > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.ouv-texte > p.ouv-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « Choisir ma formule » _(390×844 sansJs, 320×568 sansJs)_

## À regarder

### contraste sur image (4)

- **contraste sur image** — `/` — section#debut > div.ouv-texte > p.surtitre.ouv-sur:nth-of-type(1) « QI GONG EN LIGNE · PATRICK CAMPO » — 4.49:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(390×844 normal)_
- **contraste sur image** — `/` — section#debut > div.ouv-texte > p.surtitre.ouv-sur:nth-of-type(1) « QI GONG EN LIGNE · PATRICK CAMPO » — 2.29:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — section#debut > div.ouv-texte > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — 2.29:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.ouv-texte > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » — 2.77:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 82 min de travail pour 100 min de budget, 12 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /, /contact, /formules.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/ --seulement=fichiers,mesures
```
