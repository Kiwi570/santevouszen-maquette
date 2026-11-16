# Analyse complète de la maquette Santé Vous Zen (v2, ?v=2)

Regard d'un directeur artistique et expert UX qui n'a pas vu la construction. Fait le 16 novembre 2026 sur les six pages, en 1440×900 et en 390×844, avec `_audit/visiteur.mjs`, des gestes ciblés (souris, doigt, curseurs, filtres) et les mosaïques des films de l'accueil. Aucun fichier du site n'a été modifié.

Les captures citées sont dans `_audit/visiteur/` :
- `an-<page>-<taille>/etape-k.png` : parcours de haut en bas, un geste de défilement (0,85 écran) entre deux captures ;
- `an-accueil2-*` : l'accueil rejoué seul, car le premier passage `an-accueil-*` tournait en même temps que onze autres navigateurs ;
- `an-inscription*`, `an-menu-*` : l'action principale et le menu ;
- `an-gestes/` : les essais d'interaction (souris sur l'ouverture, compteur fitness, filtres, glissement au doigt).

## Résumé

1. **Les deux remarques du propriétaire sont à moitié réglées.** Deux sections pleine image ne se suivent plus nulle part. L'accueil explique enfin l'offre (« Ce que vous trouvez ici » et « Comment ça marche »). Mais le premier écran du téléphone ne dit toujours pas ce qui est vendu, et la galerie de quatre photos plein écran reste un long tunnel d'images.
2. **Le site tourne en rond sur dix photos.** Patrick sur le ponton de Nosy Be (Madagascar) revient cinq fois sur quatre pages, et la rivière, les bambous, le groupe des rochers trois fois chacun. Les beaux paysages de La Réunion du relevé (lave, littoral, plaine) restent sous-employés.
3. **L'action principale fonctionne.** Le parcours S'abonner → formule → inscription préremplie se fait en six gestes, les prix sont exacts et le choix de la durée par le geste est la meilleure idée du site. Il reste des étiquettes de boutons incohérentes (« Rejoindre le live » mène aux formules), six cartes à faire défiler sur téléphone, et sur ordinateur une confirmation d'inscription qui s'affiche hors de l'écran.
4. **La finition est inégale.** Plusieurs cadrages sont ratés : un ciel vide au téléphone, une tête coupée, des bandeaux rouges incrustés et coupés sur la page fitness. Le tracé « axe du corps » de la page Patrick tombe à côté du corps, un compteur est sans Patrick, et le point lumineux recouvre un surtitre. Le « Q » de « Qi Gong » se lit « Oi ».
5. **Verdict d'ensemble : AJUSTER.** La structure est juste et les données sont fidèles, mais les images et le premier écran doivent changer avant de montrer la maquette au client.

## Ce que disent les deux remarques, page par page

| Page | « Que des images, on ne comprend rien » | « Deux sections plein écran à la suite » |
|---|---|---|
| Accueil ordinateur | Mieux : l'offre et les trois étapes arrivent dès le deuxième écran. Mais la galerie épinglée fait défiler quatre photos plein écran sur environ 2,5 écrans, avec peu de texte et sans bouton (`an-gestes/acc-2600` à `acc-5000`). | Réglé : ouverture, galerie et appel final sont séparés par des sections sombres. |
| Accueil téléphone | Raté pour le premier écran : la phrase « Renforcer le corps… 107 séances… » n'y est pas (`an-accueil2-390x844/etape-0`). On voit « Le geste lent. » et une date de live, sans savoir ce qu'on achète. | Réglé. |
| Séances | Réussi : la liste des séances est concrète, avec titres, durées et filtres. | Réglé. |
| Fitness seniors | Moyen : une grande photo floue de dos, sans légende, suit le compteur (`an-fitness-1440x900/etape-4`). | Réglé. |
| Patrick Campo | Réussi : un texte par section, les photos sont des preuves. | Réglé. |
| Formules | Réussi : six vraies cartes avec leurs prix. | Réglé, mais la page se termine sur une grande photo de groupe juste avant le pied de page, qui fait doublon avec celle de l'accueil. |
| Contact | Réussi : le numéro est en très grand. | Réglé. |

---

## 1. Accueil

Captures : `an-accueil2-1440x900/etape-0` à `etape-22`, `an-accueil2-390x844/etape-0` à `etape-28`, mosaïques `_audit/apercu/images-ordinateur.jpg` et `images-telephone.jpg`, essais `an-gestes/hero-*`, `choix-*`, `telhero-*`, `telgal-*`. Hauteur : 10,2 écrans sur ordinateur, 12,3 sur téléphone (`vides.json`, aucun écran vide mesuré).

**Compréhension (5 secondes).**
- Ordinateur (`etape-0`) : le titre « Le geste lent. » ne dit rien de l'offre. C'est la ligne de 16 px en dessous qui explique (« 107 séances à suivre chez vous, et le live du jeudi »). On ne voit ni le prix (« à partir de 84 € » n'arrive qu'au troisième écran, `etape-4`), ni pour qui c'est : « seniors » et « débutants » n'apparaissent pas.
- Téléphone (`an-accueil2-390x844/etape-0`) : il manque aussi la phrase d'explication. On ne comprend pas qu'il s'agit de cours en ligne avec abonnement.
- Le relevé place « est-ce pour moi (âge, niveau) » en tête des questions du visiteur. Elle n'a pas de réponse dans le premier écran.

**Parcours.**
- « Choisir ma formule » mène à /formules#avec-live, et « Essayer gratuitement » à la chaîne YouTube dans un nouvel onglet. C'est clair.
- « Rejoindre le live » (`etape-14`) promet un accès au Zoom mais mène aux formules (`/formules?avec=live`). C'est trompeur.
- Sur téléphone, la barre du bas « Appeler / S'abonner » est toujours là et ne cache rien d'important. C'est bien.
- Sur ordinateur, l'en-tête disparaît en descendant : aucun bouton S'abonner ne reste visible pendant les huit écrans suivants.

**Hiérarchie.**
- Les titres tiennent et le contraste est bon sur fond sombre.
- Les surtitres de la galerie (« 01 · SUR LA COULÉE DE LAVE », « 02 · SUR LE LITTORAL ») disparaissent sur le ciel (`an-accueil2-1440x900/etape-6`, `an-gestes/acc-2600`).
- Le sous-titre du rendez-vous se coupe en « 18 h à Paris · 21 / h chez Patrick » (`etape-14`) : il manque une espace insécable entre « 21 » et « h ».
- Le bouton « Rejoindre le live » colle au paragraphe.
- Le point lumineux qui relie les sections se pose sur le « U » de « QUI VOUS GUIDE » (`etape-14`, bas de l'écran).

**Composition et rythme.**
- La suite est logique : ouverture, offre en 3 cartes, 3 étapes, galerie, rendez-vous, Patrick, choix de la formule, YouTube.
- Mais les trois sections « texte + photo arrondie » se suivent (rendez-vous, Patrick, choix : `etape-14`, `etape-16`, `etape-18`), avec la même composition à gauche puis à droite. C'est monotone.
- La galerie épinglée reste la partie la plus longue de la page (environ 2 600 px de défilement pour quatre panneaux), sans aucun bouton.

**Visuels.**
- Les images viennent de vidéos et sont molles en grand : l'ouverture, les poumons avec des doubles mains (`an-gestes/acc-3100`), la plage noire où Patrick, en noir à contre-jour, n'a pas de visage (`etape-14`).
- La photo du ponton de Nosy Be sert trois fois sur l'accueil : ouverture, « Comment ça marche », choix de la formule.
- Sur téléphone, « Comment ça marche » ne montre qu'un ciel et un palmier : Patrick, penché, est sorti du cadre (`an-accueil2-390x844/etape-8`).
- Sur téléphone, le panneau « Les stages » coupe Patrick en deux sur le bord gauche (`an-gestes/telgal-03sw2`).
- Le relevé note la lave (beauté 4) et le littoral comme « son vrai matériau » à La Réunion. Or l'ouverture, qui ouvre un site « depuis La Réunion », se passe à Madagascar.

**Animations et interactions.**
- L'intro (logo, arc, iris) dure environ 2,5 s. Le geste se joue seul et se lit comme un vrai Ba Duan Jin (mosaïque, ligne 1).
- À la souris, les bras suivent la hauteur du pointeur. Trop vite, une bulle « Plus lentement… le geste se brouille » apparaît (`an-gestes/hero-00` à `hero-04vite`). C'est juste et propre au métier.
- Mais rien ne dit qu'on peut jouer : le cercle « ↑ » flotte dans le ciel sans légende.
- Au téléphone, les bras sont déjà en haut après la démonstration. Glisser la poignée vers le haut ne change donc rien de visible (`an-gestes/telhero-00` à `03`).
- Le choix de la formule est très réussi : le curseur fait monter les mains, et le vrai prix et le nombre de lives changent (`an-gestes/choix-00` à `02`).
- Les compteurs « 20 / 15 » passent par des valeurs fausses pendant le défilement (17 et 13 sur `an-accueil2-1440x900/etape-16`, 18 et 12 sur la mosaïque du téléphone).
- **Fragilité** : lors du premier passage, avec un processeur chargé, la galerie ne s'est pas épinglée. La page faisait alors 7 501 px au lieu de 9 175 et laissait un demi-écran noir avec la seule barre « 04 / 04 » (`an-accueil-1440x900/etape-8`).

**Téléphone.**
- Les consignes se contredisent : « Faites défiler… ↓ », puis « Glissez → » dans la galerie (`an-accueil2-390x844/etape-10`, `etape-12`).
- Le repère « 01 / 04 » se casse sur deux lignes.
- Le texte « Pendule, oiseau… » est posé sur le bord de la photo de lave, ce qui le rend difficile à lire.
- Le pied de page fait près de trois écrans et répète tout le menu.

**Exactitude.**
- Les données sont justes : 107 = 42 + 52 + 13 ; de 12 à 36 lives ; 84 € ; jeudi 18 h - 19 h 15 et 21 h à La Réunion en hiver de métropole ; stages « terminés ».
- Un écart reste visible : « 20 ans » à côté de « 2003 » (2026 − 2003 = 23 ans). Un visiteur fait le calcul.
- Le live du dimanche, annoncé par le site actuel, est absent sans mention « à confirmer » (choix documenté dans le README, à faire valider).

## 2. Les séances

Captures : `an-seances-1440x900/etape-0` à `12`, `an-seances-390x844/etape-0` à `12`, `an-gestes/sea-*`.

- **Compréhension** : bonne. « 107 séances, à votre heure. », la répartition 42 / 52 / 13 et « de 84 € à 334 € » sont dans le premier écran (`etape-0`). La moitié droite du premier écran est vide sur ordinateur, avec un bouton isolé tout à droite.
- **Parcours** :
  - les filtres marchent et restent dans l'adresse (`?cat=…&saison=…`) ;
  - au survol, une vignette du lieu suit le pointeur (`sea-01survol`) ;
  - en revanche, choisir « Hiver » quand « Méditation » est actif bascule sans prévenir sur « Enseignement » (`sea-03hiver`) ;
  - la catégorie active est noire et la saison active orange : deux codes pour un même état.
- **Hiérarchie** :
  - le titre annonce 107 séances, mais la liste dit « 51 séances affichées ». L'explication n'arrive qu'en petite légende, deux écrans plus bas (`etape-6`) ;
  - les lignes de la liste sont décalées de 1 à 3 px les unes par rapport aux autres : la colonne des titres commence à 367, 362, 365, puis 359 px (`etape-2`, `sea-00`). Cela se voit comme un défaut d'alignement.
- **Composition** :
  - la page passe au thème clair, une rupture avec l'accueil sombre. Elle se défend comme « monde du catalogue », mais l'en-tête reste noir ;
  - la grande photo bord à bord, après la liste (`etape-6`), coupe Patrick au torse et n'apporte rien.
- **Visuels** :
  - la méditation « Sur la plage » est une incrustation visible : fond de plage plaqué, lumière qui ne correspond pas (`etape-8`) ;
  - la photo de la rivière (« Prêt à commencer ? ») est la même que dans la galerie de l'accueil et sur la page Contact.
- **Téléphone** : la liste se lit bien et les titres passent à la ligne proprement (`an-seances-390x844/etape-4`). Le survol disparaît, ce qui est normal. Le pied de page fait deux écrans.
- **Exactitude** : les titres et durées sont ceux du site. « Les méditations… de 12 à 24 minutes » correspond aux durées de la liste.

## 3. Fitness seniors

Captures : `an-fitness-1440x900/etape-0` à `12`, `an-fitness-390x844/etape-0` à `14`, `an-gestes/fit-*`.

- **Compréhension** :
  - « FITNESS SENIORS · Un muscle à la fois. », trois modules, « 18 à 43 min · un bâton, une chaise » : l'offre est claire ;
  - le prix n'est pas dit, et il n'est pas dit non plus que ces modules sont compris dans toutes les formules ;
  - au téléphone, le paragraphe d'introduction disparaît et la photo de l'ouverture ne montre que des dos (`an-fitness-390x844/etape-0`).
- **Parcours** : il y a deux boutons vers les formules (début et fin). C'est simple.
- **Hiérarchie** :
  - les cartes des modules sont lisibles : durée, travail, matériel, puis la liste des exercices avec leurs séries ;
  - la mention de prudence (« activité physique adaptée, pas un soin ») est bien placée (`etape-8`).
- **Composition** : après le compteur vient une grande photo de 1 280 px de large, de groupe vu de dos, floue, sans légende. Elle est suivie d'une bande vide d'environ 220 px (`etape-4`).
- **Visuels** :
  - les vignettes des modules et la photo finale montrent les bandeaux rouges incrustés de la vidéo, coupés en plein mot (« JAMBES - 1 1X10 », « MOLLETS-ÉPAULES 2X15 » et « BRE 2 - FESSIERS / G ET D / COMME POUR RAMASSER… » : `etape-6`, `etape-10`). Le relevé les classe à 2 en grand ;
  - Patrick n'est reconnaissable sur aucune grande image de la page.
- **Interactions** :
  - le compteur « 0 / 20 » avance d'un pas à chaque clic sur « Je monte sur la pointe des pieds », puis affiche « Série terminée : 20 sur 20. Respirez. » (`fit-00` à `fit-0220`) ;
  - mais l'arc rouge est plus long à 0 qu'à 3, ce qui se lit comme un bug ;
  - et « avec lui » ne montre pas Patrick : la photo voisine ne bouge pas. Il faut cliquer vingt fois sur un bouton, ce qui n'est pas un exercice.
- **Exactitude** : 43:23, 24:41 et 18:21 correspondent aux 43, 25 et 18 minutes du relevé. Le matériel est juste.

## 4. Patrick Campo

Captures : `an-patrick-1440x900/etape-0` à `12`, `an-patrick-390x844/etape-0` à `16`, `an-gestes/pat-*`.

- **Compréhension** : très bonne. Nom, « 20 ans / 15 ans », La Réunion, « Centre de rééducation Sainte-Clotilde depuis 2003 » et « Lui poser une question » sont dans le premier écran.
- **Parcours** : la page se termine sur « Voir les formules » et « Le contacter ». C'est juste.
- **Hiérarchie** : le parcours chronologique avec un filet rouge, les diplômes en liste et la citation en grand forment une bonne page de confiance. Ce sont les preuves que le relevé demande.
- **Composition** : le fond généré (lave et fougères, mention « Illustration générée »), la photo réelle et des traits blancs posés dessus donnent un effet de collage.
- **Visuels** :
  - les tracés « axe du corps / appuis » ne tombent pas sur Patrick : la verticale traverse son bras levé, la ligne des appuis flotte sous le rocher et un arc rouge entoure le vide (`an-gestes/pat-00` à `02`). On dirait un schéma raté ;
  - le portrait de studio (fond peint, micro-cravate) est découpé en cercle et rogné sur le bord (`etape-2`, `etape-4`, et en bas au téléphone `an-patrick-390x844/etape-4`) ;
  - la photo des bambous est la troisième occurrence du site, celle de la rivière (ouverture) la deuxième. Les trois photos de terrain (stade, rochers, Cantal) sont bonnes.
- **Exactitude** : diplômes, ministères, pensée chinoise et philosophie bouddhiste sont justes. « 2e degré » s'écrit « 2ᵉ degré ». Même écart « 20 ans » / « 2003 » que sur l'accueil.

## 5. Formules

Captures : `an-formules-1440x900/etape-0` à `14`, `an-formules-390x844/etape-0` à `18`, `an-inscription-*`, `an-inscription2-*`.

- **Compréhension** : excellente. « Six formules, de 84 € à 334 €. » et la phrase qui explique ce que toutes comprennent sont dans le premier écran (`etape-0`).
- **Parcours** :
  - S'abonner (en-tête) → défiler → « Choisir ESSENTIEL » → formulaire prérempli « ESSENTIEL · 234 € · 7 mois » → nom et e-mail → « Valider mon inscription » : six gestes en environ 14 s ;
  - sur ordinateur, le bouton Valider est au ras du bas de l'écran, et le message « Inscription simulée… » s'affiche en dessous, hors de l'écran (`an-inscription2-1440x900/etape-8`). Le visiteur croit qu'il ne s'est rien passé ;
  - sur téléphone, le message se voit juste sous le bouton (`an-inscription2-390x844/etape-10`).
- **Hiérarchie** :
  - les cartes sont claires et l'onglet connaissance est barré quand il manque. Aucune formule n'est mise en avant : rien ne dit quelle formule choisir quand on débute ;
  - la famille « À mon heure » contient Argent et Or, qui comprennent 12 lives : le nom contredit le contenu (`etape-4`) ;
  - la durée d'engagement (paiement unique ou mensuel) n'est pas dite. Elle est inconnue chez le client : à faire préciser.
- **Composition** :
  - dans l'ouverture, la photo du ponton (quatrième fois sur le site) porte trois encarts autour du titre : le curseur dans son cadre, le bouton, et la pastille « À partir de 84 € pour 4 mois » qui ressemble à un bouton sans en être un ;
  - le curseur reprend celui de l'accueil, en doublon ;
  - la vue aérienne du Cantal entre les deux familles est belle ;
  - la photo de groupe bord à bord, juste avant le pied de page, répète celle de la galerie de l'accueil.
- **Téléphone** : les six cartes empilées font environ cinq écrans (`an-formules-390x844/etape-2` à `etape-10`), et comparer oblige à remonter. Dans l'ouverture, « LES FORMULES » est posé sur la photo, au niveau du visage de Patrick (`etape-0`).
- **Exactitude** : les six prix, les durées, les nombres de lives et les entretiens (téléphone, ou visio pour Premium) correspondent au relevé.

## 6. Contact

Captures : `an-contact-1440x900/etape-0` à `8`, `an-contact-390x844/etape-0` à `10`.

- **Compréhension** : très bonne. « Une question ? Appelez Patrick. », le numéro en très grand, l'e-mail, et deux horloges La Réunion / Paris qui marquent le créneau du live sont dans le premier écran (`etape-0`).
- **Parcours** : le lien tel: est en +262, juste. Le formulaire est simple, avec un sujet à choisir.
- **Visuels** :
  - l'ouverture est le ponton de Nosy Be pour la cinquième fois. Patrick y est penché, le visage coupé par l'ombre, et le numéro géant est posé sur son corps ;
  - la photo de la rivière est la troisième occurrence (`etape-2`) ;
  - au téléphone, la photo de l'ouverture est si sombre qu'on ne la voit plus, et les horloges chevauchent le bas de l'écran (`an-contact-390x844/etape-0`).
- **Exactitude** : « vous inscrire à un stage » alors que les deux stages 2026 sont passés. À remplacer par « demander les prochaines dates de stage ».

---

## Le site entier

- **Compréhension** : bonne sur les pages intérieures, faible sur le premier écran de l'accueil, surtout au téléphone.
- **Parcours** :
  - la navigation est simple : six entrées, la page en cours est soulignée, et le menu du téléphone est clair, avec un bouton Appeler (`an-menu-390x844/etape-3`) ;
  - en revanche, la même action porte sept noms différents : S'abonner, Choisir ma formule, Voir les formules, Les formules avec live, Comparer les formules, Choisir cette formule, Rejoindre le live.
- **Rythme** : chaque page alterne bien les fonds. Aucune page n'enchaîne deux sections pleine image. La répétition vient des photos, pas des sections.
- **Cohérence** : l'accueil, Patrick, Formules et Contact sont sombres ; Séances est clair ; Fitness est crème. La couleur par « monde » se défend, mais l'en-tête noir est posé sur le clair sans transition.
- **Visuels** : une dizaine de photos font tout le site (liste des fichiers par page).

  | Photo | Pages |
  |---|---|
  | ponton de Nosy Be (deux poses) | accueil ×3, formules, contact |
  | rivière | accueil, séances, contact |
  | bambous | accueil, séances, Patrick |
  | groupe des rochers | accueil, Patrick |
  | stage en Corse | accueil, formules |
  | lac du Cantal | accueil, fitness |

  Les images tirées de vidéos sont molles en grand.
- **Typographie** :
  - le « Q » de la police des titres a sa queue détachée sous la lettre, et « Qi Gong » se lit « O̲i Gong » (`an-accueil2-1440x900/etape-2`). C'est le mot le plus important du site ;
  - aucun texte ne descend sous 13 px.
- **Animations** : l'ouverture et le choix de la durée sont de vrais gestes du métier. Le reste est sage ou décoratif : tracés de la page Patrick, compteur du fitness, chiffres qui comptent.

---

## Liste des corrections (du plus grave au moins grave)

1. **Accueil, téléphone puis ordinateur. Le premier écran ne dit ni quoi, ni pour qui, ni combien** (`an-accueil2-390x844/etape-0`, `an-accueil2-1440x900/etape-0`).
   - Garder « Le geste lent. » en titre, mais mettre la phrase d'explication sur le téléphone aussi : « Qi Gong en ligne avec Patrick Campo : 107 séances chez vous et le live du jeudi ».
   - Ajouter dans la pastille du live : « Débutants et seniors · dès 84 € pour 4 mois ».
2. **Tout le site, les deux formats. La même photo du ponton de Nosy Be revient cinq fois, et l'ouverture d'un site « depuis La Réunion » se passe à Madagascar** (`an-accueil2-1440x900/etape-0`, `etape-4`, `etape-18`, `an-formules-1440x900/etape-0`, `an-contact-1440x900/etape-0`).
   - Garder le ponton pour l'ouverture et le choix de la durée, où le geste a un sens.
   - « Comment ça marche » : la coulée de lave (seance-5-methode-docteur, beauté 4) ou le littoral de basalte (qi-gong-poumons-gros, 4).
   - Ouverture de Contact : Patrick sur sa pierre à la rivière, ou le littoral.
   - Ouverture de Formules : la vue aérienne du Cantal (qi-gong-meditation-entrainement, 4) ou la terrasse de Corse (bienvenue-site-sante-vous, 4).
3. **Accueil, ordinateur. La galerie épinglée fait défiler quatre photos plein écran sur environ 2,5 écrans sans un bouton : c'est encore « des images qui se suivent »** (`an-gestes/acc-2600` à `acc-5000`).
   - Réduire la course à environ un écran et demi.
   - Ajouter sur chaque panneau un lien « Voir cette séance dans le catalogue » (vers /seances, filtré sur Pleine nature) et la durée en gros.
   - Sur le dernier panneau (stages), « Demander les prochaines dates ».
4. **Accueil, téléphone. L'image de « Comment ça marche » ne montre qu'un ciel et un palmier, Patrick est hors cadre** (`an-accueil2-390x844/etape-8`). Recadrer en portrait sur Patrick, ou utiliser la version téléphone d'une autre photo, par exemple la lave.
5. **Formules, ordinateur. Après « Valider mon inscription », le message de confirmation s'affiche hors de l'écran** (`an-inscription2-1440x900/etape-8`). Faire défiler jusqu'au message, ou remplacer le formulaire par le message à la même place, avec le récapitulatif « Essentiel · 234 € · 7 mois · 24 lives ».
6. **Fitness seniors, les deux formats. Les vignettes et la dernière photo gardent les bandeaux rouges de la vidéo, coupés en plein mot, et la grande photo du milieu est floue et de dos** (`an-fitness-1440x900/etape-4`, `etape-6`, `etape-10`).
   - Recadrer chaque vignette au-dessus du bandeau (ou prendre une image de la vidéo sans incrustation).
   - Remplacer la grande photo floue par Patrick qui montre l'exercice au bord du lac (série du Cantal), ou la supprimer.
7. **Tout le site. Sept étiquettes pour la même action, et « Rejoindre le live » mène aux formules au lieu du Zoom** (`an-accueil2-1440x900/etape-14`).
   - Deux libellés seulement : « Choisir ma formule » pour aller aux formules, « S'inscrire » sur les cartes.
   - Renommer « Rejoindre le live » en « Les formules avec live ».
8. **Accueil et Patrick Campo, les deux formats. « 20 ans » est affiché à côté de « 2003 », soit 23 ans en 2026** (`an-accueil2-1440x900/etape-16`, `an-patrick-1440x900/etape-0`). Écrire « plus de 20 ans », ou garder « depuis 2003 » seul, puis le faire confirmer par Patrick.
9. **Patrick Campo, les deux formats. Les tracés « axe du corps / appuis » tombent à côté du corps, sur un fond généré** (`an-gestes/pat-00` à `02`). Les supprimer, ou les caler sur la posture réelle (pied d'appui sur la pierre, axe passant par la tête). Remplacer le fond généré par une photo réelle floutée (forêt ou rivière du relevé).
10. **Accueil, téléphone. On ne peut pas savoir que l'ouverture se manipule, et la poignée ne fait rien car les bras sont déjà levés** (`an-gestes/telhero-00` à `03`, `hero-00`).
    - Après la démonstration, faire redescendre les mains au ventre.
    - Écrire sous la poignée « Glissez lentement : soutenez le ciel avec Patrick » (au téléphone) ou « Montez la souris lentement » (sur ordinateur).
11. **Formules, les deux formats. La famille « À mon heure » contient Argent et Or, qui ont 12 lives, et sur téléphone les six cartes s'empilent sur cinq écrans** (`an-formules-1440x900/etape-4`, `an-formules-390x844/etape-2` à `10`).
    - Renommer en « Sans live ou presque » ou en « Accès libre (+ 12 lives pour Argent et Or) ».
    - Au téléphone, réutiliser le curseur de l'ouverture (façon et durée) pour n'afficher qu'une carte à la fois, avec « Comparer les six » en tableau dépliable.
12. **Tout le site, les deux formats. Le « Q » de la police des titres fait lire « Oi Gong »** (`an-accueil2-1440x900/etape-2`, `an-seances-1440x900/etape-2`). Activer la variante de Q à queue attachée si la police en a une. Sinon, composer « Qi » dans la police du texte, comme pour les zéros.
13. **Accueil, les deux formats. Les surtitres de la galerie sont illisibles sur le ciel et les textes sont posés sur la lave** (`an-accueil2-1440x900/etape-6`, `an-gestes/acc-2600`, `telgal-00`). Ajouter un voile sombre sous le bloc de texte, du bas vers le haut, ou placer le surtitre dans la bande sombre sous le titre.
14. **Séances, ordinateur. Le titre dit 107 séances, la liste en affiche 51 ; les lignes sont décalées les unes des autres ; la moitié droite du premier écran est vide** (`an-seances-1440x900/etape-0`, `etape-2`).
    - Écrire sous le compteur « 51 séances détaillées sur 107 (52 séances d'entraînement à venir) ».
    - Aligner la colonne des titres.
    - Remonter la photo de Patrick en rouge à droite du titre, au lieu de la bande de photo sous le premier écran.
15. **Accueil, ordinateur. Le sous-titre du rendez-vous se coupe en « 21 / h », et le point lumineux recouvre « QUI VOUS GUIDE »** (`an-accueil2-1440x900/etape-14`). Mettre des espaces insécables entre « 18 » et « h » et entre « 21 » et « h », et décaler le point du surtitre ou le faire passer derrière.
16. **Fitness seniors, ordinateur. Le compteur « avec lui » ne montre pas Patrick, et l'arc est plus long à 0 qu'à 3** (`an-gestes/fit-00`, `fit-013`).
    - Afficher à côté les images de Patrick qui monte sur la pointe des pieds (série « mollets » au bord du lac), qui avancent à chaque pas.
    - Partir d'un arc vide à 0.
17. **Contact, les deux formats. L'ouverture montre Patrick penché, visage dans l'ombre, sous le numéro géant ; « vous inscrire à un stage » alors que les stages sont passés** (`an-contact-1440x900/etape-0`, `an-contact-390x844/etape-0`).
    - Prendre une photo où il regarde l'objectif ou fait un geste ouvert (littoral, rochers).
    - Écrire « demander les prochaines dates de stage ».
18. **Accueil, ordinateur. Trois sections « texte + photo arrondie » de suite, et la photo de la plage noire où Patrick n'a pas de visage** (`an-accueil2-1440x900/etape-14`, `etape-16`, `etape-18`).
    - Faire du rendez-vous une bande large avec les deux horloges de la page Contact (la vraie preuve : « jeudi 18 h Paris · 21 h chez Patrick »).
    - Remplacer la photo par le littoral de basalte (beauté 4).
19. **Patrick Campo, les deux formats. Le portrait de studio est rogné en cercle sur le bord** (`an-patrick-1440x900/etape-2`, `etape-4`, `an-patrick-390x844/etape-4`). Le mettre en rectangle entier, en petite vignette, ou le remplacer par une photo de terrain (rochers face à la mer, beauté 4).
20. **Séances, ordinateur. Choisir « Hiver » quand « Méditation » est actif bascule sans prévenir sur « Enseignement », et les deux états actifs n'ont pas la même couleur** (`an-gestes/sea-02medit`, `sea-03hiver`).
    - Griser les saisons quand Méditation est choisi (les méditations n'ont pas de saison).
    - Utiliser une seule couleur pour l'état actif.
21. **Accueil, bouton « Essayer gratuitement » et appel final. Ils ouvrent la chaîne YouTube en général, pas une séance.** Pointer vers une vidéo publique précise et belle, déjà utilisée dans la maquette : Ba Duan Jin à Nosy Be (H2ZrM1Zx5Lc) ou le kata du Dr Yayama (0oxqhwKH1fU). Afficher sa durée.
22. **Accueil, téléphone. Les consignes « Faites défiler ↓ » puis « Glissez → » se contredisent, « 01 / 04 » se casse sur deux lignes, et Patrick est coupé dans le panneau des stages** (`an-accueil2-390x844/etape-10`, `etape-12`, `an-gestes/telgal-03sw2`).
    - Une seule consigne : « Glissez → ».
    - Le compteur sur une ligne.
    - Recadrer le panneau des stages sur Patrick et le groupe.
23. **Tout le site, téléphone. Le pied de page fait deux à trois écrans et répète le menu** (`an-accueil2-390x844/etape-26`, `etape-28`, `an-fitness-390x844/etape-12`, `etape-14`). Le réduire à une colonne : téléphone, e-mail, live du jeudi, YouTube, Facebook, mentions. Retirer le « Sommaire », déjà dans le menu.
24. **Accueil, ordinateur. Si la page charge lentement, la galerie ne s'épingle pas et laisse un demi-écran noir avec la seule barre « 04 / 04 »** (`an-accueil-1440x900/etape-8`, page à 7 501 px au lieu de 9 175). Recalculer la hauteur de la galerie une fois les images chargées, et prévoir à défaut une galerie simple (panneaux empilés), jamais un vide.
25. **Accueil, les deux formats. Les compteurs « 20 / 15 » s'affichent faux pendant qu'ils comptent** (17 et 13 sur `an-accueil2-1440x900/etape-16`, 18 et 12 sur `_audit/apercu/images-telephone.jpg`). Afficher directement les vrais chiffres. Le mouvement peut passer par le trait qui se dessine sous les chiffres.
