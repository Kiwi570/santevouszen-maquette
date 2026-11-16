# Santé Vous Zen · v1 · direction « Le geste lent »

Plan de l'accueil : **parcours horizontal** (la scène centrale avance de côté, posture après posture). Français seul. Live : jeudi 18 h-19 h 15 (heure de Paris), programme d'automne du 3 septembre au 3 décembre 2026.
Palette : basalte #0e1215, blanc #f6f4ef, braise #e0472c, ciel #bfe2f4, océan #12384a. Polices : Bricolage Grotesque (titres, axe de largeur), Atkinson Hyperlegible (texte, lisible pour les seniors), JetBrains Mono (durées, heures).

## Plan du site (v1 = 6 pages + 404)
| Page | Ouverture (composition · objet · mouvement) | Signature de la page | Fond |
|---|---|---|---|
| Accueil `/` | Photo plein cadre de Patrick sur la lave ; la trace de lumière part de ses mains | Trace à guider lentement ; enchaînement horizontal de cinq paysages | basalte, puis clair et sombre alternés |
| Les séances `/seances` | Grand titre clair, bandeau photo plage qui se lève en plongée | Registre des 107 séances par saison et par forme, filtres, durées réelles | blanc ciel |
| Fitness seniors `/fitness-seniors` | Écran partagé : photo du lac à droite, compteur géant « 1×15 » à gauche | Le visiteur compte la série avec Patrick (on touche, le chiffre monte, la photo avance) | blanc chaud, braise |
| Patrick Campo `/patrick-campo` | Photo palmiers, axes de posture qui se tracent sur lui (rééducation) | Frise du parcours 2003 → aujourd'hui, diplômes réels | basalte, ocre de lave |
| Formules `/formules` (catégorie : inscription) | Océan à l'aube (Grok), prix d'appel 84 € visible | Six formules, bascule « avec live / sans live », prix qui roulent ; inscription simulée en étapes, le billet du live file vers l'en-tête | océan profond |
| Contact `/contact` | Numéro en très grand sur la rivière à galets | Formulaire simulé, e-mail, YouTube et Facebook | clair rivière |
| 404 | Champ de lave désert (Grok) | « Ce geste n'existe pas encore » | basalte |
Hors v1 (v2 possible) : Stages (passés, résumés en une section de l'accueil), Forum, Membres, Qi Gong docs (vide). Pages légales : texte « à compléter » dans le pied de page.

## Accueil, section par section (9 écrans sur ordinateur)
1. **Ouverture** · `data-iris-centre` sur les mains de Patrick · trace de lumière qui monte seule dans les 2 s après l'intro, puis le visiteur la guide (`data-grille="manipuler"`) · titre « Le geste lent. » dont la largeur s'étire quand le défilement ralentit (`data-grille="typo"`) · prochain live calculé (info clé) · bouton Choisir ma formule.
2. **L'enchaînement** (`data-grille="scene"`, épinglé, défile de côté) · cinq panneaux plein cadre : océan, rivière, forêt, lagon, ensemble ; chaque passage est une **plongée** dans le paysage suivant ; dans chaque panneau, la trace du geste propre à la forme se redessine et se guide (deuxième moment de jeu) ; nom de la forme en très grand, séance réelle et durée réelle. Téléphone : panneaux qui glissent au doigt, trace au doigt.
3. **Trois façons de pratiquer** · Live Zoom, séances à la demande (42 + 52), méditation (13), fitness seniors · cartes en cascade, photos réelles.
4. **Le live de ce soir** · fond heure bleue (Grok) · horloge double Paris / La Réunion qui suit l'heure réelle, compte à rebours, les 13 jeudis d'automne (passés barrés).
5. **Patrick Campo** · lave et fougères (Grok) · 20 ans de rééducation, 15 ans de Qi Gong, centre Sainte-Clotilde depuis 2003, diplômes · axes de posture tracés sur sa photo.
6. **Formules** · six formules réelles, bascule avec ou sans live, prix qui roulent · « Choisir » : retour physique (le billet part vers « S'abonner », `data-grille="retour"`).
7. **Les stages 2026** · Cantal et Corse, terminés, photos réelles, prochains à annoncer.
8. **Appel** · essayer gratuitement sur YouTube, appeler 0692 09 05 13.

## Grille wouahou
1. Manipuler : la trace de lumière des mains, guidée lentement (pâlit si trop vite), souris et doigt. Effet propre `trace-geste`.
2. Intro qui devient la page : un point de lumière dessine un arc sur le nom, glisse jusqu'aux mains de Patrick (`versObjet`), l'écran s'ouvre depuis elles.
3. Voile : `iris`, couleur basalte, le point de lumière part du clic et la page suivante s'ouvre sur son objet d'ouverture.
4. Ce qui relie : le point de lumière (`data-grille="fil"`) qui passe d'une section à l'autre en traçant un court arc dans la photo de chaque section ; le même point ouvre le voile.
5. Titre qui fait l'événement : largeur variable selon la vitesse (accueil), lettres qui se posent en lent sur chaque page.
6. Scène du métier : l'enchaînement des postures.
7. Retour physique : le billet du live qui file vers « S'abonner ».
8. Effets modernes de l'accueil : lumiere-pointeur (signature), typo-geante, plongee, defilement-horizontal (seule famille déjà vue).

## Effets propres (data-effet)
`trace-geste`, `enchainement`, `plongee`, `titre-lent`, `point-fil`, `horloge-live`, `axes-posture`, `billet-live`, `compteur-serie`, `registre-seances`.
