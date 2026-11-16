# Regard neuf · Santé Vous Zen · 16 novembre 2026

J'ai regardé la maquette sans l'avoir vue construire et sans lire le code.

Sources :
- tableau de la grille wouahou en tête de `_audit/rapport/rapport.md` ;
- captures de l'accueil de la dernière passe (`_audit/rapport/captures/`, 13/11, 19 h 42) ;
- captures des autres pages de la dernière passe complète (`_audit/passes/20261113-180247-standard/captures/`, 13/11 vers 18 h) ;
- films d'ouverture et de transition de ces deux passes ;
- mosaïques et mesures de `_audit/apercu/` ;
- `_suivi/releve.md`, `_audit/regard-da.md`, `_suivi/regard-da-8.md` et `_suivi/regard-da-corrections-8.md` ;
- planches du palmarès : ouverture, tarifs, contact, 404, équipe, appel, FAQ, chiffres, étapes ;
- `taxonomie.json` de la bibliothèque ;
- les trois maquettes les plus récentes de l'index : jardins-hacienda-2 (13/11), puis red-act et qd2a (12/11). Locomponairo porte la même date, je l'ai regardée aussi.

Les captures des pages d'onglet datent d'avant la dernière correction (pages modifiées à 19 h 33). Pour ne rien reprocher qui soit déjà corrigé, j'ai fait de nouvelles captures avec `_audit/visiteur.mjs` (dossiers `_audit/visiteur/regardneuf-*`) :
- les ouvertures de Patrick Campo, des séances et de Fitness seniors ;
- l'inscription complète, de « Choisir ma formule » jusqu'à « Valider mon inscription » ;
- le compteur de Fitness seniors ;
- un filtre des séances.

Sur ces captures neuves, les zéros sont ronds : la correction du regard 8 est arrivée à l'écran, accueil compris (« 107 », « 2003 », « 2026 »).

---

## Les cinq questions

### 1. Qu'est-ce que le visiteur peut toucher ?

- **Accueil** : il y a beaucoup à toucher.
  - Les bras de Patrick sur le ponton suivent la hauteur du pointeur. Au doigt, on les fait monter avec une poignée.
  - Le kata sur la lave suit la souris de gauche à droite, mais en deux poses seulement.
  - La poitrine des « poumons » réagit.
  - Le carrousel des six paysages se fait glisser.
  - Dans les formules, deux boutons « avec le live / à mon heure » et un curseur de durée (4, 7 ou 12 mois) font changer le prix et monter les mains de Patrick.
  - Le billet du live réagit au survol, mais l'audit note qu'il ne bouge ni seul ni au défilement.
- **Séances** : des filtres (forme, saison) et « Voir toute la liste ». La liste change d'un coup, sans recomposition animée. Selon la consigne du directeur artistique, des filtres ne comptent pas comme un jeu.
- **Fitness seniors** : un bouton « Je monte sur la pointe des pieds » fait avancer un compteur de 0 à 20 sur un arc rouge. Patrick ne bouge pas. C'est un chiffre qui compte, pas un geste.
- **Patrick Campo** : rien. Le repère « axe du corps / appuis » dessiné sur la photo reste immobile.
- **Formules** : six boutons « Choisir … », un formulaire et la FAQ en accordéon.
- **Contact** : un formulaire et un numéro qu'on peut toucher pour appeler.
- **404** : un bouton.

**En une ligne** : l'accueil se joue (le corps de Patrick), les cinq pages d'onglet ne proposent que des boutons, des filtres et des formulaires.

### 2. Qu'est-ce qui relie les pages entre elles ?

- **L'intro** : le nom « Santé Vous Zen », un arc de soleil qui se trace et un point lumineux. Le point se pose puis s'ouvre en iris sur la photo d'ouverture, en 2,1 s environ. C'est la même intro sur chaque page chargée directement. Elle ne change pas selon la page.
- **Le voile** : quand on change de page, un disque nuit se referme sur le point lumineux, puis l'iris se rouvre sur la page suivante, en 1,3 s environ. Il est propre et reprend bien le motif de l'intro.
- **Le fil** : un point lumineux d'une dizaine de pixels apparaît en tête des sections. On ne le voit pas voyager, on ne le remarque presque pas : il ne relie rien à l'œil.
- **Le reste** : le même menu, le même pied de page et la même barre « Appeler / S'abonner » sur téléphone.
- **La couleur de fond** change d'une page à l'autre (nuit, gris clair, crème, nuit, bleu nuit, nuit) sans logique lisible, ni journée ni saison.

**En une ligne** : l'intro et le voile en iris relient bien les pages ; le fil, un point de 10 px, ne se voit pas.

### 3. Que se passe-t-il quand il fait l'action principale (choisir une formule et s'inscrire) ?

J'ai joué le parcours avec `_audit/visiteur/regardneuf-inscription2-1366x768/`.

1. « Choisir ma formule » sur l'accueil mène en haut de /formules, sans tenir compte du choix fait sur l'accueil.
2. « Choisir ESSENTIEL » fait défiler jusqu'à « Votre inscription ». La liste déroulante est préremplie, une carte blanche fixe affiche « ESSENTIEL 234 € 7 mois » et le curseur se place dans le champ du nom. Cette partie est bien faite.
3. « Valider mon inscription » grise le bouton. Un encadré rouge sombre apparaît : « Demande simulée : rien n'a été envoyé. Sur le site final, elle partira vers le client. »

Il n'y a rien d'autre :
- pas de récapitulatif ni de « bienvenue » ;
- pas de date du premier live ;
- pas de geste de Patrick, rien qui bouge ;
- et « le client », c'est le visiteur lui-même.

**En une ligne** : l'inscription est préremplie, puis la validation n'affiche qu'un encadré de texte, sans retour physique, sans récapitulatif et avec une phrase de coulisse.

### 4. Qu'est-ce qui est spectaculaire au premier défilement de l'accueil ?

Familles de la taxonomie présentes sur l'accueil :
- **objet-manipulable** : les bras de Patrick, le kata, les poumons, les mains de la durée ;
- **vidéo-pilotée** : le kata sur la lave et les poumons sont des extraits de vidéo menés par le défilement et la souris ;
- **défilement-horizontal** : les six paysages, de 01 à 06, avec leur barre de progression ;
- **masque** : l'iris d'ouverture ;
- **fil-conducteur** : le point lumineux, à peine visible.

L'accueil a donc ses trois familles, et même quatre nettes. Mais le premier défilement est « vivant », pas « spectaculaire » :
- on quitte le ponton et on arrive sur un panneau de photo de la lave ;
- rien ne s'ouvre en plein écran et on ne plonge pas dans l'image ;
- le premier écran ne bouge seul que sur 12 % de sa surface et réagit à la souris sur 3 %.

Familles propres à chaque page d'onglet, au-delà de l'iris commun :

| Page | Famille propre |
|---|---|
| Séances | aucune (filtres sans recomposition) |
| Fitness seniors | aucune (le compteur n'est pas une famille) |
| Patrick Campo | aucune (le repère dessiné est immobile, à la rigueur « trait qui se dessine » au chargement) |
| Formules | aucune (cartes fixes) |
| Contact | aucune |
| 404 | aucune |

La règle « au moins une famille par page d'onglet » n'est tenue que par le voile en iris, qui est le même partout.

**En une ligne** : l'accueil a ses trois familles et plus, mais son premier défilement est sage ; les pages d'onglet n'ont aucune famille propre, seulement l'iris commun.

### 5. Chaque page a-t-elle sa signature après l'ouverture ?

Non. Les cinq pages d'onglet ouvrent toutes de la même façon :
- un surtitre en machine à écrire ;
- un grand titre condensé à gauche ;
- un paragraphe ;
- un bouton rouge ;
- une photo à droite ou en fond.

Seules la couleur et la photo changent :
- « 107 séances, à votre heure. » ;
- « Un muscle à la fois. » ;
- « Patrick Campo » ;
- « Six formules, de 84 € à 334 €. » ;
- « Une question ? Appelez Patrick. ».

Après l'ouverture, aucune page n'a de moment à elle, comparable au ponton de l'accueil :
- séances : une liste ;
- Fitness seniors : un compteur et des cartes ;
- Patrick Campo : une frise et des cartes ;
- formules : six cartes blanches ;
- contact : un formulaire.

Trois pages (séances, Fitness seniors, Patrick Campo) finissent sur le même module : une photo de 350 px à gauche, le titre et le bouton à droite, et un grand vide.

**En une ligne** : les pages n'ont pas de signature ; elles ouvrent toutes de la même façon, et trois finissent sur le même module.

---

## Ressemblance avec les trois dernières maquettes

- **Ce qui la distingue** :
  - le ton : nuit, grotesque condensée, le vrai corps du maître manipulé ;
  - ni sérif sur fond crème ni fil tracé en SVG, contrairement à jardins-hacienda-2, red-act et qd2a.
- **Ce qu'elle partage** :
  - le plan en récit linéaire de red-act et de qd2a ;
  - un petit repère en tête des surtitres (le petit Q de qd2a, ici le point lumineux) ;
  - un contact « grand numéro sur photo générée », comme red-act (« 03 88 18 35 44 ») et h-renovation du palmarès (« Appelez Samuel. » / « Appelez Patrick. »).

**En une ligne** : différente par le ton et l'effet signature, proche par le plan (récit linéaire) et par deux modules (petit repère de section, grand numéro au contact).

## Où en est la liste du regard 8 (vérifié sur les images, pas sur les corrections annoncées)

1. **Les zéros barrés** : fait. C'est visible sur les captures neuves, pages d'onglet comprises.
2. **Le kata en cinq poses** : pas fait, et c'est justifié (une seule vidéo de 5 s). Mais le texte annonce toujours « Pendule, oiseau, tortue, ours, dragon : cinq katas » à côté d'une bascule entre deux poses. Voir le point 14.
3. **L'escalier du live et des séances** : fait. Les deux blocs sont côte à côte, puis la bande pleine largeur du rendez-vous suit.
4. **Les images molles tirées de vidéo** : pas fait. La plage noire du rendez-vous et Patrick en lilas restent molles en grand.
5. **Une seule action au premier écran** : à moitié fait.
   - Sur ordinateur, « Choisir ma formule » est seul en plein, mais l'en-tête garde « S'abonner ».
   - Sur téléphone, on compte quatre actions : « Choisir ma formule », « Essayer gratuitement », « Appeler » et « S'abonner ».

---

## Ce que relèveraient un client exigeant ou un directeur artistique, du plus grave au moins grave

Chaque point indique la page, la catégorie, ce que l'on voit, puis **quoi faire**.

### 1. Formules et accueil · écart avec les vraies données : le live est mal réparti entre les formules
- La page range « Avec le live » (Basic, Essentiel, Premium) contre « À mon heure » (Bronze, Argent, Or). L'ouverture dit : « Trois ajoutent le live du jeudi sur Zoom. »
- Or le relevé et les cartes elles-mêmes disent autre chose : Argent et Or ont 12 séances en direct, et seul Bronze n'en a pas. Cinq formules sur six ont du live.
- Le choix « À mon heure » de l'accueil reprend le même découpage.
- Sur la carte Bronze, « ~~Sans séance en direct~~ » est barré, ce qui se lit comme l'inverse : « avec séances ».

**Quoi faire** :
- Ranger les formules par ce qui les sépare vraiment : le nombre de lives (0, 12, 24, 36), puis l'onglet connaissance et l'entretien.
- Proposer par exemple deux familles :
  - « Le live chaque semaine » : Basic 12, Essentiel 24, Premium 36 ;
  - « Surtout à mon heure » : Bronze 0, Argent 12, Or 12, avec 12 lives par an pour Argent et Or.
- Corriger la phrase d'ouverture : « Cinq ajoutent des lives du jeudi sur Zoom ».
- Écrire « Aucune séance en direct » sans barrer.
- Faire suivre ce découpage au choix de l'accueil.

### 2. Formules · l'action principale n'a pas de retour (effet raté et texte)
- Après « Valider mon inscription », le bouton se grise et un encadré dit : « Sur le site final, elle partira vers le client. »
- Il n'y a ni récapitulatif ni geste, et le mot « client » vient des coulisses.
- Le palmarès place la barre ailleurs : le récapitulatif qui se remplit de myrtille-et-compagnie, le bon de commande de coupdefood.

**Quoi faire** :
- Transformer la carte « ESSENTIEL 234 € » en billet du premier live : « Jeudi 19 novembre · 18 h Paris · 21 h Réunion · Zoom », avec le prénom saisi.
- Faire tamponner « Inscription simulée » sur ce billet.
- Faire joindre les mains de Patrick au-dessus de la tête, comme le geste de 12 mois de l'accueil.
- Ajouter trois lignes « Et ensuite » : un e-mail avec le lien Zoom, l'accès 24 h sur 24 ouvert, puis l'appel de Patrick pour l'entretien.
- Écrire « elle partira vers Patrick ».
- Faire aussi que « Choisir ma formule » sur l'accueil reprenne le choix de durée et de façon.

### 3. Toutes les pages d'onglet · pas de signature après l'ouverture (répétition et effets trop sages)
- Les cinq ouvertures ont la même composition : surtitre, titre condensé à gauche, paragraphe, bouton rouge.
- Séances, Fitness seniors et Patrick Campo finissent sur le même module : photo de 350 px à gauche, titre à droite, grand vide.
- Aucune page n'a de famille d'effet propre.

**Quoi faire** : donner à chaque page un moment tiré du vrai matériau.
- **Séances** : un plan « index ». Au survol ou au doigt, la vignette réelle de la séance apparaît sous la ligne. Les filtres réorganisent la liste sous les yeux (recomposition).
- **Fitness seniors** : le compteur fait vraiment monter Patrick, ou un senior du Cantal, sur la pointe des pieds. On prend deux images de la vidéo, talons au sol et talons levés, et on alterne de l'une à l'autre au fil des répétitions.
- **Patrick Campo** : l'arc de l'intro se trace en frise, de 2003 au centre Sainte-Clotilde jusqu'à aujourd'hui, avec une photo réelle à chaque étape (trait qui se dessine).
- **Formules** : le curseur de durée de l'accueil devient l'ouverture de la page.
- **Contact** : une double horloge Sainte-Clotilde et Paris. « Il est 14 h chez Patrick : bon moment pour l'appeler. » Le décalage horaire est un vrai sujet de ce client (le live de 18 h tombe à 21 h).
- Varier les ouvertures (photo pleine, écran partagé, liste géante), et supprimer le module de fin en double.

### 4. Formules, contact, Patrick Campo, 404 · images générées à la place des vrais paysages
- Quatre pages sur sept ouvrent sur une illustration générée :
  - formules : un coucher de soleil sur des rochers, cliché de banque d'images ;
  - contact : une rivière ;
  - Patrick Campo : des fougères ;
  - 404 : un champ de lave gris et terne.
- Le client a pourtant 161 photos réelles de ces mêmes lieux : lave, littoral, rivière à galets, forêt.
- Sur la page Patrick Campo, la mention « Illustration générée » est posée juste à côté de la vraie photo de Patrick. On peut croire que c'est lui qui est généré.

**Quoi faire** :
- Formules : le littoral de basalte (qi-gong-poumons, beauté 4) ou le lac du Cantal vu du ciel.
- Contact : la vraie rivière à galets (qi-gong-tai-chi).
- Patrick Campo : la vraie forêt (seance-19).
- 404 : la vraie coulée de lave face à l'océan (seance-5).
- Garder une image générée seulement si aucune photo réelle ne tient. Placer alors la mention sur l'image concernée, jamais à côté du portrait.

### 5. Toutes les pages · cadrages ratés
- **Séances, ouverture** : Patrick en rouge a la tête coupée par le bord de la bande. On ne voit que le torse et les bras, et c'est le premier écran de la page.
- **Accueil, téléphone, « Les formules »** : on ne voit que les jambes et les pieds de Patrick sur le ponton.
- **Accueil, fin** : après « Essayez avant de vous abonner. », un écran entier montre seulement des jambes sur les rochers.
- **Accueil, « Vingt ans à remettre les corps en mouvement. »** : le rocher blanc brûlé occupe le tiers bas de la photo.
- **Patrick Campo, ouverture** :
  - l'avant-bras cache le visage ;
  - un palmier sort de la tête ;
  - le réticule « axe du corps » passe sur le corps.
- **Fitness seniors** :
  - la grande photo du ponton montre des seniors de dos au milieu des parasols et des sacs ;
  - la dernière image est coupée sur le bandeau incrusté « BRE 2 – FESSIERS G ET D ».

**Quoi faire** :
- Recadrer chaque image sur le visage et les mains : tête entière avec de l'air au-dessus.
- Sur téléphone, cadrer en 9:16 centré sur Patrick (le relevé dit que c'est possible : le sujet occupe 12 à 26 % de la largeur).
- Arrêter la photo finale de l'accueil avec sa section.
- Recadrer le guide au-dessus du rocher.
- Prendre une autre image de la vidéo de Patrick Campo, mains basses et visage dégagé, et retirer le réticule ou le faire apparaître seulement au survol.
- Pour Fitness seniors, choisir un plan de face qui montre l'exercice et recadrer au-dessus des bandeaux rouges.

### 6. Accueil · « Le live sur Zoom » illustré par le stage en Corse (écart avec le relevé)
- Le bloc du live montre le groupe en tenues colorées au bord de la piscine de la résidence en Corse : c'est un stage en présentiel.
- Le live, lui, se suit seul chez soi sur Zoom. Le visiteur se fait une idée fausse du format.

**Quoi faire** :
- Montrer le vrai format : Patrick face caméra dans son studio, ou une image de séance de méditation face caméra, dans un cadre d'écran avec « En direct · jeudi 18 h ».
- Garder la piscine de Corse pour les stages.

### 7. Séances · les chiffres et le titre ne tiennent pas
- Le titre annonce « 107 séances », mais le filtre « Tout » affiche « 51 séances affichées » et « Pleine nature » en affiche 9.
- Le titre « Choisissez une forme, une saison, une durée. » promet un filtre de durée qui n'existe pas.

**Quoi faire** :
- Soit compléter le registre jusqu'à 107, soit écrire « Extrait : 51 des 107 séances ».
- Ajouter le filtre de durée (moins de 30 min, 30 à 60 min, plus d'une heure), ou retirer « une durée » du titre.

### 8. Formules · hiérarchie plate et cartes à bordure
- Six cartes blanches identiques sur fond bleu nuit, comme un tableau de prix de logiciel en ligne. Aucune n'est mise en avant, alors que l'accueil présélectionne Essentiel.
- Une bande aérienne molle du Cantal, sans rôle clair, coupe les deux familles.
- Sur téléphone, les cartes prennent cinq écrans.
- Le meilleur module du site (le curseur de durée et les mains qui montent) n'est pas sur la page des formules.

**Quoi faire** :
- Ouvrir la page sur le curseur de l'accueil, en grand.
- Placer en dessous un comparateur en tableau unique : six colonnes sur ordinateur, choix de la famille puis de la durée sur téléphone.
- Mettre en avant Essentiel, qui correspond à la présélection.
- Retirer la bande aérienne.

### 9. Plusieurs pages · les mêmes photos reviennent
- Patrick en blanc, chaussures rouges, en forêt et au bord de la rivière : fin des séances et formulaire du contact.
- Le groupe à la piscine en Corse : accueil (« Le live ») et fin de la page Patrick Campo.
- Le groupe en Corse avec Patrick en bordeaux : panneau « Les stages » de l'accueil et fin des formules.
- Le groupe bras levés sur les rochers : appel final de l'accueil et carte « Sur le terrain » de la page Patrick Campo.
- La photo du ponton : ouverture de l'accueil et section des formules.

**Quoi faire** :
- Ne plus utiliser une photo sur deux pages, sauf la photo signature du ponton.
- Puiser dans le fonds :
  - la plaine volcanique ocre ;
  - le lagon avec les bateaux ;
  - le lac et le ponton du Cantal ;
  - le groupe sous les pins ;
  - le grand rassemblement du stade.

### 10. Toutes les pages · le fil ne se voit pas et l'intro est toujours la même
- Le point lumineux de 10 px en tête de section ne relie rien à l'œil.
- L'intro de 2,1 s est la même sur chaque page chargée directement.

**Quoi faire** :
- Prendre un vrai matériau du client comme fil : la frise des huit petites silhouettes rouges de l'affiche d'automne. Il faut demander le fichier au client, ou redessiner les silhouettes d'après l'affiche.
- Une posture par section s'allume au fil de la lecture, et c'est elle qui ouvre l'iris.
- Sur les pages d'onglet, l'intro peut se réduire à cette posture qui s'allume.

### 11. Toutes les pages · textes trop petits (typographie)
- À 1366 px, plusieurs textes sont sous 13 px, le seuil qui limite la typographie à 3 dans la consigne du directeur artistique :
  - les surtitres en machine à écrire (« LE CATALOGUE », « FITNESS SENIORS », « 01 · SUR LA COULÉE DE LAVE ») font environ 10 à 11 px ;
  - l'aide « Passez la souris de gauche à droite » est aussi petite ;
  - les puces des cartes de formules font environ 11 px ;
  - la mention « Prix affichés sur le site actuel… » fait environ 9 px.

**Quoi faire** :
- Surtitres et aides à 13 px au moins sur ordinateur.
- Textes des cartes à 15 px.
- Mentions à 12 px.

### 12. Contact, formules, accueil · écarts plus petits avec le relevé
- Le contact dit « … ou vous inscrire à un stage », alors que les deux stages de 2026 sont terminés.
- Le dimanche du live (« jeudis et dimanches à 18 h » sur l'accueil du site actuel) a disparu sans être signalé. La maquette suit l'affiche d'automne (jeudi seul) : c'est défendable, mais à confirmer.
- « Le fitness est inclus dans chaque formule. » : le relevé ne le dit pas (les formules listent entraînement, enseignement, méditation).
- Le prochain live est calculé : après le 3 décembre, la maquette annoncera des jeudis qui ne sont pas au programme (le programme d'hiver est inconnu).

**Quoi faire** :
- Écrire « ou être prévenu des prochains stages ».
- Noter « jeudi (et dimanche ?) : à confirmer avec Patrick » dans les questions au client.
- Écrire « Les modules fitness font partie de l'entraînement en ligne » seulement si Patrick le confirme.
- Arrêter le calcul au 3 décembre et afficher ensuite « Programme d'hiver : dates à venir ».

### 13. Patrick Campo · hiérarchie de la frise et portrait kitsch
- La frise mélange des dates (« 2003 »), des durées (« 20 ans », « 15 ans ») et des mots (« Projets », « Aujourd'hui »).
- Le portrait de studio, sur fond d'éclaboussures orange et bleues avec un anneau rouge, reste à l'écran pendant deux écrans.
- « Ce qu'il a étudié » est une simple liste à côté d'une photo de forêt sombre.

**Quoi faire** :
- Mettre des années partout : 2003, 2006 (Qi Gong énergétique, il y a 20 ans et 15 ans), années des projets, 2021 (Santé Vous Zen), 2026.
- Remplacer le portrait d'éclaboussures par une image nette de la vidéo face caméra, ou le réduire en vignette.
- Poser les diplômes en fiches typographiques, sans photo à côté.

### 14. Accueil · détails restants du regard 8
- Le texte annonce cinq katas alors que l'effet ne montre que deux poses.
- Le surtitre « 42 + 52 » est cryptique.
- Le billet du live ne bouge ni seul ni au défilement.
- Sur téléphone, le premier écran porte quatre actions.

**Quoi faire** :
- Écrire « le pendule, premier des cinq katas » tant que le client n'a pas donné les minutages.
- Remplacer « 42 + 52 » par « 94 séances enregistrées ».
- Faire respirer le billet seul (un léger balancement).
- Remplacer « S'abonner » par « Les formules » dans l'en-tête et dans la barre du bas, pour garder un seul verbe : « Choisir ma formule ».

### 15. Toutes les pages · un vocabulaire flottant pour l'action
- On lit « S'abonner », « Choisir ma formule », « Choisir cette formule », « Choisir ESSENTIEL » et « Valider mon inscription ». Le site du client dit « S'inscrire ».

**Quoi faire** : garder deux verbes, « Choisir ma formule » puis « M'inscrire ».

### 16. 404 · terne et sans jeu
- « Ce geste n'existe pas encore. » est un bon titre, mais il est posé sur une lave grise générée, sans rien à faire.
- Le palmarès montre mieux : coolcanyoning (tenir la corde), qd2a (la servante restée allumée).

**Quoi faire** :
- Mettre la vraie coulée de lave avec Patrick en posture d'équilibre (Qi Gong de l'équilibre), qui oscille sous le pointeur.
- Faire revenir au centre au clic sur « Revenir à l'accueil », qui ouvre l'iris.

### 17. Toutes les pages · pied de page « à compléter »
- « Mentions légales · Politique de confidentialité · CGVU : à compléter », alors que le relevé donne le SIRET (891 845 216 00011) et l'adresse (30 bis chemin des Benjoins, 97490 Sainte-Clotilde).

**Quoi faire** : remplir une page de mentions légales avec ces données, et laisser seulement les CGVU « à fournir par le client ».

---

## Index par page (numéros de la liste ci-dessus)

| Page | Points |
|---|---|
| Accueil | 1, 5, 6, 9, 10, 11, 12, 14, 15 |
| Séances | 3, 5, 7, 9, 11 |
| Fitness seniors | 3, 5, 11, 12 |
| Patrick Campo | 3, 4, 5, 9, 13 |
| Formules | 1, 2, 3, 4, 8, 9, 11, 15 |
| Contact | 3, 4, 9, 12 |
| 404 | 4, 16 |
| Toutes | 10, 11, 15, 17 |

## Ce qui est réussi (à garder)

- L'ouverture de l'accueil : le vrai Ba Duan Jin sur le ponton de Nosy Be, en pied. L'iris s'ouvre depuis le point du soleil et les bras suivent la main. Personne d'autre n'a cet effet.
- Le parcours en six paysages réels et le curseur de durée où les mains montent : c'est le meilleur module du site, à reprendre sur la page des formules.
- Les vraies données des formules, des séances (titres et durées) et des modules de fitness. Le contact « Appelez Patrick. » avec le numéro en très grand. L'avertissement « activité physique adaptée, pas un soin » et la question de la FAQ « Le Qi Gong remplace-t-il un traitement ? ».
