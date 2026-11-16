# Rapport d’audit

Projet : `santevouszen-maquette` · 13/11/2026 16:50:07 · 1 min · 2 page(s) · audit standard ciblé sur /404 (étapes : fichiers, mesures)

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261113-154926-standard-cible-partiel` · version ?v=1
- Échecs : **6**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (22), balayage (1)

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
| **20261113-154926-standard-cible-partiel** (celle-ci) | standard | /404 | fichiers, mesures | 6 | 0 | 0 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte:nth-of-type(2) > h1.ouv-titre > span.ouv-l1:nth-of-type(1) « Le geste » — avec div.ouv-texte:nth-of-type(2) > h1.ouv-titre > span.ouv-l2:nth-of-type(2) > span.ouv-lent « lent. » _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +3)_
- **textes qui se chevauchent** — `/` — section#debut > p.ouv-consigne:nth-of-type(1) > span « Glissez vers le haut, lentement : ses bras montent » — avec section#debut > p.ouv-legende.masque-ecran-bas:nth-of-type(2) « Soutenir le ciel des deux mains · Ba Duan Jin, ens » _(768×1024 normal, 1920×1080 normal)_

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/` — section#patrick > figure.media.patrick-moitie-photo > picture > img « Patrick Campo, une main levée, en équilibre sur un » — patrick-equilibre (4/5, faible, 71 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — section#patrick > figure.media.patrick-moitie-photo > picture > img « Patrick Campo, une main levée, en équilibre sur un » — patrick-equilibre (4/5, faible, 58 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/` — section#patrick > figure.media.patrick-moitie-photo > picture > img « Patrick Campo, une main levée, en équilibre sur un » — patrick-equilibre (4/5, faible, 59 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.introuvable-texte.conteneur > p:nth-of-type(3) > a.bouton « Revenir à l'accueil » _(768×1024 normal, 1920×1080 normal)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 82 min de travail pour 100 min de budget, 38 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 17 min pour 5 prévues.
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
node _audit/audit.mjs --pages=/,/404 --seulement=fichiers,mesures
```
