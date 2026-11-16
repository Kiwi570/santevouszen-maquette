# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 16:07:43 · 1 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact (étapes : fichiers, mesures)

## Résumé

- Statut : **19 échec(s)**
- Passe : `20261113-150652-rapide-cible-partiel` · version ?v=1
- Échecs : **19**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (36)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261113-142205-rapide-cible | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | toutes | 83 | 13 | 34 | échecs |
| 20261113-144739-rapide-cible | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | toutes | 88 | 22 | 1 | échecs |
| **20261113-150652-rapide-cible-partiel** (celle-ci) | rapide | /,/seances,/fitness-seniors,/patrick-campo,/formules,/contact | fichiers, mesures | 19 | 5 | 0 | échecs |

## Échecs

### premier écran : titre hors de l’écran (3)

- **premier écran : titre hors de l’écran** — `/` — section#debut > div.ouv-texte > h1.ouv-titre « Le geste lent. » — haut 338 px, bas 417 px, zone 65–390 px _(844×390 normal)_
- **premier écran : titre hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > h1.fit-titre « Un muscle à la fois. » — haut 741 px, bas 787 px, zone 65–779 px _(390×844 sansJs)_
- **premier écran : titre hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > h1.fit-titre « Un muscle à la fois. » — haut 429 px, bas 511 px, zone 65–503 px _(320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.ouv-texte > p.ouv-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Choisir ma formule » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div.conteneur.con-ouv-texte > p:nth-of-type(3) > a.con-tel « 0692 09 05 13 » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > p.fit-actions:nth-of-type(3) > a.bouton « Voir les formules » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (6)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte > p.ouv-live:nth-of-type(4) « Prochain live jeudi 19 novembre · 18 h Paris · 21  » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte > p.ouv-live:nth-of-type(4) « Live Zoom chaque jeudi · 18 h Paris » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.con-ouv-texte > p.con-mail:nth-of-type(4) « santevouszen@gmail.com » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/fitness-seniors` — section#debut > div.fit-ouv-texte > p.fit-actions:nth-of-type(3) > span.mono.fit-info « 3 modules · 18 à 43 minutes » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/formules` — section#debut > div.conteneur.for-ouv-texte > p.for-actions:nth-of-type(3) > span.mono.for-info « À partir de 84 € pour 4 mois » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/seances` — div.conteneur.sea-ouv-tete > div.sea-ouv-bas > p.sea-actions:nth-of-type(2) > span.sea-info.mono « Accès 24 h sur 24 · de 84 € à 334 € » _(320×568 sansJs)_

### texte coupé (2)

- **texte coupé** — `/` — div.choix-grille > article.billet.billet--sombre > p.billet-prix:nth-of-type(2) > span.rouleau « 234 € » — coupé par div.conteneur > div.choix-grille > article.billet.billet--sombre > p.billet-prix:nth-of-type(2) « 234 € » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/formules` — div > article.billet.billet--recap > p.billet-prix:nth-of-type(2) > span « 234 € » — coupé par div.conteneur.inscription-grille > div > article.billet.billet--recap > p.billet-prix:nth-of-type(2) « 234 € » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — avec div.ouv-texte > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — article.moitie:nth-of-type(2) > figure.media.moitie-photo > picture > img « Patrick Campo en tenue blanche au bord d'une riviè » — moitie-heure (4/5, faible, 95 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — article.moitie:nth-of-type(2) > figure.media.moitie-photo > picture > img « Patrick Campo en tenue blanche au bord d'une riviè » — moitie-heure (4/5, faible, 60 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### élément recouvert (2)

- **élément recouvert** — `/` — section#debut > button.ouv-poignee « Guider la trace de lumière : glisser vers le haut, » — par section#debut > p.ouv-consigne:nth-of-type(1) > span « Prenez la lumière et montez lentement » _(390×844 normal)_
- **élément recouvert** — `/fitness-seniors` — section#serie > div.conteneur.serie-grille > div:nth-of-type(1) > h2.titre-section « Comptez la série avec lui » — par section#serie > span.point-fil _(1366×768 normal)_

## À regarder

### contraste sur image (3)

- **contraste sur image** — `/` — section#debut > div.ouv-texte > p.surtitre.ouv-sur:nth-of-type(1) « QI GONG EN LIGNE · PATRICK CAMPO » — 2.24:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — section#debut > div.ouv-texte > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — 2.55:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_
- **contraste sur image** — `/` — div.ouv-texte > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » — 2.52:1 sur les 10 % de la photo les moins favorables (minimum 3:1), ombre portée à vérifier _(1366×768 normal)_

### photo moyenne affichée en très grand (2)

- **photo moyenne affichée en très grand** — `/fitness-seniors` — section#serie > figure.media.serie-photo > picture > img « Exercice des mollets en groupe sur la terrasse du  » — fitness-mollets (3/5, 100 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_
- **photo moyenne affichée en très grand** — `/seances` — div.conteneur > figure.media.registre-bandeau > picture > img « Patrick bras tendus sur une colline couverte d'arb » — seance-colline (3/5, 66 % de l'écran) : une image notée 4 ou 5 à cette taille _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 82 min de travail pour 100 min de budget, 12 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /, /contact, /fitness-seniors, /formules, /patrick-campo, /seances.
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
node _audit/audit.mjs --rapide --pages=/,/contact,/fitness-seniors,/formules,/seances --seulement=fichiers,mesures
```
