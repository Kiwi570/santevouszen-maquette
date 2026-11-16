# Test « vrai visiteur » : Santé Vous Zen (maquette)

Persona : **Josiane, 63 ans, retraitée à Saint-Pierre de La Réunion.** Elle veut entretenir sa souplesse et son équilibre sans sortir de chez elle, et se demande si elle pourra suivre un cours en direct le soir.

Date du test : 16 novembre 2026. Outil : `node _audit/visiteur.mjs`, piloté geste par geste, sans lire le code du site.
Formats : téléphone `390x844`, ordinateur `1440x900`.

Comment lire les chiffres :
- **Gestes** : défilements d'un écran, clics et ouverture du menu. Les saisies du formulaire (mission 3) sont comptées à part.
- **Secondes** : temps mesuré par le script depuis l'arrivée, chargement de la page compris (environ 3,4 s). Une vraie lectrice met plus de temps à lire ; les écarts entre missions restent parlants.
- Barème : mission 1 sans aucun geste ; les autres en 3 gestes au plus et 30 s au plus.

## Tableau de synthèse

| Mission | Téléphone | Ordinateur |
|---|---|---|
| 1. arrivee | **ratée en partie** · 0 geste · 3,4 s | réussie, avec réserves · 0 geste · 4,4 s |
| 2. prix | réussie · 1 geste · 6,8 s | réussie · 1 geste · 7,9 s |
| 3. action | réussie, **hors barème** · 4 gestes (+4 saisies) · 11,3 s | réussie, **hors barème** · 5 gestes (+4 saisies) · 14,3 s |
| 4. contact | réussie · 1 geste (téléphone), 2 (e-mail) · 6,6 s | réussie · 1 geste · 7,4 s |
| 5. difference | réussie · 3 gestes · 6,8 s | réussie en partie · 3 gestes · 5,8 s |
| 6. creneau | réussie · 0 geste · 3,4 s | réussie · 0 geste · 3,5 s |
| 7. seniors | réussie, **hors barème** · 4 gestes · 8,8 s | réussie · 1 geste · 6,1 s |

## 1. arrivee : de quoi s'agit-il, pour qui, où ? (premier écran seul)

### Téléphone : ratée en partie (0 geste, 3,4 s)
Capture : `_audit/visiteur/arrivee-390x844/etape-0.png`

- On voit : le nom « Santé Vous Zen », un homme en tenue blanche qui fait un mouvement lent face à la mer, le titre « Le geste lent. », un bandeau « Prochain live jeudi 19 novembre · 18 h Paris · 21 h Réunion », les boutons « Choisir ma formule », « Essayer gratuitement », « Appeler », « S'abonner ».
- **Quoi** : le mot « Qi Gong » n'apparaît nulle part sur ce premier écran, ni « cours en ligne ». Josiane devine une activité douce et un abonnement, mais « Le geste lent. » ne dit pas qu'il s'agit de Qi Gong à suivre chez soi. Le surtitre « Qi Gong en ligne · Patrick Campo » et la phrase « 107 séances à suivre chez vous, et le live du jeudi » existent sur ordinateur mais **sont absents sur téléphone**.
- **Pour qui** : rien ne le dit (ni débutants, ni seniors, ni « tous niveaux »).
- **Où** : « 21 h Réunion » rassure Josiane sur le fait que le site pense à La Réunion ; « live » laisse comprendre que c'est à distance.
- Gêne secondaire : le rond avec une flèche « ↑ » posé sur le ciel, à côté de Patrick, n'a pas de mode d'emploi visible ; une visiteuse de 63 ans ne sait pas qu'il faut glisser vers le haut.

### Ordinateur : réussie, avec réserves (0 geste, 4,4 s)
Capture : `_audit/visiteur/arrivee-1440x900/etape-0.png`

- **Quoi** : clair. « QI GONG EN LIGNE · PATRICK CAMPO », puis « Renforcer le corps, pacifier l'esprit : 107 séances à suivre chez vous, et le live du jeudi avec Patrick Campo. »
- **Où** : « 21 h Réunion » dans le bandeau du live. Mais la légende en bas à droite dit « sur le ponton de Nosy Be » (Madagascar) : Josiane peut se demander si Patrick est bien à La Réunion.
- **Pour qui** : pas dit dans le texte ; seul le lien « Fitness seniors » du menu le suggère.

## 2. prix : prix de la formule principale ou tarif d'appel

### Téléphone : réussie (1 geste, 6,8 s)
Chemin : `cliquer Choisir ma formule`.
Capture : `_audit/visiteur/prix-390x844/etape-1.png` (et `etape-2.png` après un défilement, carte BASIC à 134 €).

- La page Formules annonce « Six formules, de 84 € à 334 € » et « À partir de 84 € pour 4 mois » : le tarif d'appel est trouvé en un clic.
- Gêne : aucune formule n'est désignée comme principale ou conseillée. Josiane veut le live du soir : il faut défiler pour comprendre que le live commence à 134 € (BASIC, 4 mois), et que 84 € est sans live. Sur téléphone, la phrase qui l'explique (« Trois ajoutent le live du jeudi sur Zoom ») est absente du premier écran de la page.
- Le grand titre « de 84 € à 334 € » écrit sur trois lignes casse la fourchette de prix (« à 334 € » seul sur sa ligne).

### Ordinateur : réussie (1 geste, 7,9 s)
Chemin : `cliquer Formules` (menu du haut).
Capture : `_audit/visiteur/prix-1440x900/etape-1.png`

- Fourchette, tarif d'appel et phrase sur le live, tout est lisible dans le premier écran de la page.
- Même gêne : pas de formule mise en avant.

## 3. action : choisir une formule et aller jusqu'à la confirmation

Données fictives : Josiane Payet, josiane.payet@exemple.re, 0692 00 00 00, question « Puis-je suivre le live du jeudi soir depuis Saint-Pierre ? ».

### Téléphone : réussie, hors barème (4 gestes + 4 saisies, 11,3 s)
Chemin : `cliquer Choisir ma formule` → `defiler 1` → `cliquer Choisir BASIC` → 4 saisies → `cliquer Valider mon inscription`.
Captures :
- `_audit/visiteur/action-390x844/etape-3.png` : carte BASIC 134 €, 4 mois, 12 séances en direct.
- `_audit/visiteur/action-390x844/etape-5.png` : arrivée sur « Votre inscription », formule déjà choisie dans la liste, curseur dans « Nom et prénom ».
- `_audit/visiteur/action-390x844/etape-11.png` : confirmation.

- Ce qui marche : le choix de formule est reporté dans le formulaire ; le formulaire est court (2 champs obligatoires) ; la confirmation apparaît juste sous le bouton.
- Gênes :
  - un geste de trop : « Choisir ma formule » mène au haut de la page Formules, pas aux cartes ; il faut défiler avant de pouvoir choisir ;
  - sur le formulaire, **l'en-tête et la barre du bas (Menu, Appeler, S'abonner) ont disparu** ; il reste une bande vide en haut avec un point lumineux. Josiane n'a plus de repère pour revenir en arrière ou appeler ;
  - le message de confirmation dit « Sur le site final, elle partira vers **le client** » : jargon de maquette, Josiane est la cliente ; il faudrait « vers Patrick » ;
  - aucune suite annoncée : pas de « merci Josiane », pas de récapitulatif, rien sur le paiement ni sur la façon de recevoir le lien Zoom du jeudi.

### Ordinateur : réussie, hors barème (5 gestes + 4 saisies, 14,3 s)
Chemin : `cliquer Choisir ma formule` → `defiler 1` → `cliquer Choisir ESSENTIEL` → 4 saisies → `cliquer Valider mon inscription` → `defiler 1`.
Captures :
- `_audit/visiteur/action-1440x900/etape-3.png` : les trois formules avec live côte à côte (134 €, 234 €, 334 €).
- `_audit/visiteur/action-1440x900/etape-5.png` : formulaire, ESSENTIEL 234 € présélectionné.
- `_audit/visiteur/action-1440x900/etape-11.png` : **après le clic, la confirmation n'est pas visible** ; seul le bouton devient terne, en bas de l'écran.
- `_audit/visiteur/action-suite-1440x900/etape-10.png` : la confirmation, trouvée seulement après un défilement de plus.

- Gênes : les mêmes que sur téléphone (geste de trop pour atteindre les cartes, en-tête qui disparaît au défilement, « vers le client », aucune suite annoncée), plus une confirmation hors de l'écran : Josiane peut croire que rien ne s'est passé et cliquer encore.

## 4. contact : joindre Patrick (téléphone, e-mail)

### Téléphone : réussie (1 geste pour le numéro, 2 pour l'e-mail, 6,6 s)
Chemin : `menu` → `cliquer Contact`.
Captures : `_audit/visiteur/contact-390x844/etape-2.png` (menu ouvert : bouton « Appeler 0692 09 05 13 »), `_audit/visiteur/contact-390x844/etape-3.png` (page Contact : « Une question ? Appelez Patrick. », numéro en très grand, santevouszen@gmail.com).

- Le bouton « Appeler » de la barre du bas permet même d'appeler sans aucun geste préalable, mais sans afficher le numéro.
- Gênes légères : aucune indication des horaires où l'on peut appeler ; adresse en gmail.com, moins rassurante qu'une adresse au nom du site.

### Ordinateur : réussie (1 geste, 7,4 s)
Chemin : `cliquer Contact`.
Capture : `_audit/visiteur/contact-1440x900/etape-1.png`

- Numéro énorme et e-mail dans le premier écran, avec une phrase utile (« Pour choisir une formule, savoir si le Qi Gong vous convient ou vous inscrire à un stage »).
- Gêne légère : le numéro n'est pas donné au format international (+262), utile aux visiteurs de métropole ; pour Josiane, ce n'est pas un problème.

## 5. difference : ce qui distingue ce site d'un concurrent (après 30 s)

### Téléphone : réussie (3 gestes, 6,8 s mesurées ; environ 30 s de lecture réelle)
Chemin : `defiler 1` ×3.
Captures : `_audit/visiteur/difference-390x844/etape-2.png`, `etape-4.png`, `etape-5.png`.

Ce que Josiane retient :
- Patrick est filmé dans de vrais paysages de l'île (« sur la coulée de lave », face à l'océan), ce n'est pas un studio anonyme ;
- un live sur Zoom chaque jeudi, « une heure et quart en direct avec Patrick », avec une photo de groupe où l'on voit des personnes de son âge ;
- des séances à la demande, 24 h sur 24, et un lien « Le fitness seniors ».

Gêne : la carte du live affiche « JEUDI 18 H » sans fuseau (`etape-4.png`). Alors que le premier écran disait « 21 h Réunion », Josiane peut croire que le live est à 18 h chez elle.

### Ordinateur : réussie en partie (3 gestes, 5,8 s mesurées)
Chemin : `defiler 1` ×3.
Captures : `_audit/visiteur/difference-1440x900/etape-2.png`, `etape-4.png`, `etape-5.png`.

- Josiane retient la même force : du Qi Gong filmé en pleine nature à La Réunion (coulée de lave, bord de mer, rivière, forêt).
- Gêne : les trois défilements sont absorbés par la galerie horizontale « six postures, six paysages ». Après 30 s, elle n'a vu ni le live du jeudi ni l'offre seniors, les deux arguments qui la concernent. Les captures prises pendant le glissement montrent des textes coupés au bord (« Qi Gong / et de la colonne v… », « …osture qui ») et un compteur « 02 / 06 » pendant qu'on lit la carte 03.

## 6. creneau : date et heure du prochain live, à l'heure de La Réunion

### Téléphone : réussie (0 geste, 3,4 s)
Capture : `_audit/visiteur/creneau-390x844/etape-0.png`

### Ordinateur : réussie (0 geste, 3,5 s)
Capture : `_audit/visiteur/creneau-1440x900/etape-0.png`

- « Prochain live jeudi 19 novembre · 18 h Paris · 21 h Réunion » dès le premier écran, sur les deux formats. Le 19 novembre 2026 est bien un jeudi, et 18 h à Paris font bien 21 h à La Réunion en hiver. Josiane a sa réponse : oui, il y a un cours le soir, à 21 h.
- Gêne : plus bas, la carte « Le live sur Zoom » dit seulement « JEUDI 18 H » (voir mission 5), ce qui contredit en apparence le premier écran pour une Réunionnaise.

## 7. seniors : le programme seniors et son matériel

### Téléphone : réussie, hors barème (4 gestes, 8,8 s)
Chemin : `menu` → `cliquer Fitness seniors` → `defiler 1` ×2.
Captures :
- `_audit/visiteur/seniors-390x844/etape-2.png` : la page est atteinte en 2 gestes (« Fitness seniors · Un muscle à la fois. · 3 modules · 18 à 43 minutes »), mais **le matériel n'y est pas**.
- `_audit/visiteur/seniors-suite-390x844/etape-4.png` : compteur interactif « 0 / 20 », pas encore de matériel.
- `_audit/visiteur/seniors-suite-390x844/etape-6.png` : au 4e geste, module 01, « Matériel : rien, un partenaire pour un exercice ».
- `_audit/visiteur/seniors-suite-390x844/etape-7.png` : module 02, « un bâton, une charge légère ».

- Gênes : la phrase d'introduction qui résume tout (« renforcement, équilibre, étirements. Peu de matériel : un bâton, une chaise, une charge légère ») est **absente sur téléphone**, comme sur l'accueil et la page Formules. Josiane doit parcourir les modules un par un. Le module 01 demande « un partenaire pour un exercice » : pour une retraitée qui pratique seule chez elle, c'est une inquiétude sans réponse.

### Ordinateur : réussie (1 geste, 6,1 s)
Chemin : `cliquer Fitness seniors`.
Capture : `_audit/visiteur/seniors-1440x900/etape-1.png`

- Tout est dans le premier écran : trois modules, « renforcement, équilibre, étirements » (exactement ce que cherche Josiane), « Peu de matériel : un bâton, une chaise, une charge légère », « 18 à 43 minutes ».
- Gêne légère : la photo (lac, chalets, montagnes) n'évoque pas La Réunion.

## Gênes notables, par ordre d'importance

1. **Sur téléphone, les phrases d'introduction disparaissent** des premiers écrans (accueil, Formules, Fitness seniors). C'est la cause de l'échec partiel de la mission 1 (le mot « Qi Gong » manque) et du dépassement de la mission 7 (le matériel manque).
2. **L'en-tête disparaît au défilement** sur les deux formats, et la barre du bas aussi sur téléphone, notamment pendant tout le formulaire d'inscription.
3. **La confirmation d'inscription est hors de l'écran sur ordinateur**, et son texte (« partira vers le client ») est du jargon de maquette, sans aucune suite annoncée (paiement, lien Zoom).
4. **« Choisir ma formule » ne mène pas aux cartes** : un geste de défilement en plus avant de pouvoir choisir. C'est ce geste qui met la mission 3 hors barème.
5. **« JEUDI 18 H » sans fuseau** sur la carte du live, alors que le premier écran dit « 21 h Réunion ».
6. Sur ordinateur, **la galerie horizontale absorbe les premiers défilements** de l'accueil : le live et l'offre seniors arrivent tard.
7. Petites incohérences de lieu : légende « Nosy Be » sur l'accueil, photo de lac et de chalets sur la page seniors ; rien ne dit « pour qui » sur l'accueil.

## Après corrections (16 novembre 2026)
- Mission 1, téléphone : le surtitre « Qi Gong en ligne · Patrick Campo » est maintenant au premier écran, sous la photo.
- Mission 3 : « Choisir ma formule » mène directement aux cartes des formules (`/formules#avec-live`), soit 1 geste au lieu de 2 ; choix, puis validation : 3 gestes plus les saisies (vérifié : `_audit/visiteur/action-verif-390x844/`). Le message de confirmation dit ce qui se passerait sur le vrai site (paiement, puis accès et lien Zoom par e-mail).
- Mission 7, téléphone : le matériel est dans l'information clé du premier écran (« 3 modules · 18 à 43 min · un bâton, une chaise »).
- La carte du live dit « Jeudi 18 h Paris · 21 h Réunion ».
- Gênes laissées : en-tête et barre du bas qui se cachent au défilement (comportement voulu, ils reviennent dès qu'on remonte) ; aucune formule « conseillée » (le site actuel n'en désigne pas) ; l'exercice à deux du module 01 est celui du site actuel.
