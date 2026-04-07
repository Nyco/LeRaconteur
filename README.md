# LeRaconteur

Application web statique en francais pour aider les enfants (6-10 ans) a construire rapidement un prompt d'histoire a copier dans leur IA preferree.

## Fonctionnalites V1

- Formulaire simple avec menus deroulants pedagogiques (1 phrase d'explication par choix).
- Valeurs preselectionnees aleatoirement a chaque chargement de page.
- Generation d'un prompt complet en francais avec:
  - selections utilisateur,
  - structure Vogler (3 actes, 12 etapes),
  - 10 bonnes pratiques narratives.
- Generation de noms personnages au format simple CVCVCV.
- Copie du prompt dans le presse-papiers.
- Sauvegarde locale du dernier prompt genere.

## Lancer localement

Ce projet est 100% statique:

1. Cloner le depot.
2. Ouvrir `index.html` dans un navigateur.

## Deploiement GitHub Pages

1. Pousser le contenu sur `main` dans `github.com/Nyco/LeRaconteur`.
2. Dans GitHub: **Settings > Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` et dossier `/ (root)`.
5. Enregistrer, puis attendre la publication.

Le fichier `.nojekyll` est inclus pour eviter toute transformation Jekyll.

## Licence

Ce projet est distribue sous licence **GNU Affero General Public License v3.0 (AGPLv3)**. Voir `LICENSE`.
