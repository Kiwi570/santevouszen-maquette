# Santé Vous Zen · maquette v1

Maquette de démonstration du futur site de Patrick Campo (Qi Gong, méditation et fitness seniors en ligne), direction « Le geste lent ».
Adresse prévue : https://santevouszen-maquette.vercel.app · site actuel : https://www.santevouszen.com

## Pages
Accueil · Les séances · Fitness seniors · Patrick Campo · Formules (inscription simulée) · Contact · 404.
Pages du site actuel non reprises en v1 : Stages 2026 (résumés dans l'accueil, terminés), Qi Gong docs, Forum, Membres, pages légales.

## Fiche à remplir par le client (à compléter)
- Mentions légales : à compléter (éditeur Patrick Campo, SIRET 891 845 216 00011, 30 bis Chemin des Benjoins, 97490 Sainte-Clotilde, à confirmer).
- Hébergeur du futur site : Vercel Inc., adresse à vérifier sur vercel.com au moment de la mise en ligne.
- Politique de confidentialité (RGPD) : à compléter.
- CGVU : à reprendre du site actuel.
- Logo : le vrai logo (écriture « Santé Vous Zen » et frise de huit silhouettes rouges) n'a été trouvé que dans l'affiche d'automne. Fournir le fichier vectoriel ou en haute définition ; la maquette utilise en attendant une marque typographique et un point de lumière.
- Crédits des illustrations générées (à garder sur le site final) : quatre illustrations créées avec Grok, marquées « Illustration générée » : océan à l'aube (Formules), lave et fougères (Patrick Campo), rivière à galets (Contact), champ de lave (404).

## Retiré ou remplacé faute d'information
- Prix et places des stages : non affichés (absents du site) ; les stages 2026 sont présentés comme terminés, « prochaines dates sur demande ».
- Programme d'hiver 2026-2027 : inconnu ; après le 3 décembre 2026, l'accueil affiche « le programme d'hiver sera annoncé ici ».
- Jours du live : l'affiche d'automne dit le jeudi seul (18 h-19 h 15), l'accueil actuel dit jeudi et dimanche. La maquette suit l'affiche : à confirmer.
- Photos de la page « Qui suis-je » (Photo 1 à 8) : non récupérées ; la maquette utilise ses photos de séances.
- Durées des formules : la page actuelle ne dit pas si le paiement est unique ou récurrent : à préciser.
- Aucune promesse de santé : les « indications » des séances (sommeil, reins, immunité…) ne sont pas reprises comme effets ; une mention de prudence figure sur Fitness seniors et dans la FAQ.

## Incohérences relevées sur le site actuel
Titre « Routine matinale » sans routine matinale · prix affiché « €134134€ » · séances « d'une heure » de 46 min à 1 h 13 · deux adresses e-mail (santevouszen@ et santevousze@) · trois écritures du téléphone · deux chaînes YouTube · stages 2026 toujours annoncés · méta-description qui promet une baisse du stress et de la dépression.

## À retirer à la mise en ligne définitive
- `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`).
- Inscription, paiement et formulaires simulés (`data-formulaire`), mention « Maquette de démonstration » du pied de page.
- Mentions « à compléter » du pied de page, une fois les pages légales écrites.
- À garder : la mention « Illustration générée » sur les images Grok.

## Vidéos de la chaîne utilisées (poses longues de l'accueil)
Quelques secondes de trois vidéos publiques de la chaîne YouTube du client, téléchargées par l'utilisateur : Ba Duan Jin à Nosy Be (H2ZrM1Zx5Lc, ouverture et durée des formules), méthode du Dr Yayama sur la lave (0oxqhwKH1fU), Qi Gong des poumons sur le littoral (y4ChSlUxGuE). Les images sont dans `assets/images/chrono/`, leurs repères dans `donnees/poses.json`, et l'outil qui les produit dans `outils/fantomes.py` et `outils/premiere.py` (exécutés hors du site). Aucune vidéo réservée aux membres n'a été utilisée.

## Construire
`node outils/generer.mjs` (pages), puis l'audit : `node _audit/audit.mjs`. Les images passent par le pipeline de la bibliothèque (`plan-images.json`).
