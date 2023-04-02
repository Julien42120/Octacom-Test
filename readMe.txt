Pour ce test, j'ai utilisé les langages suivants : HTML, SCSS, JS.

J'ai de même utilisé la librairie Bootstrap 5 pour le slicer et pour la mise en place du menu avec une modale.
https://getbootstrap.com/docs/5.2/getting-started/introduction/

J'ai utilisé SCSS pour sa simplicité de lecture et d'écriture qui "selon moi", rend le code plus harmonieux. J'ai ensuite compilé mon fichier scss en css grâce à la commande :
sass main.scss style.css --watch

Les animations sont principalement reproduites en scss sauf :
- Le bouton "Back to top" qui utilise le fichier scroll.js.
- l'animation de l'image en forme de huit au niveau de la section "créations digitales et print" qui utilise le fichier scroll.js
- l'icône de menu qui est une modale et qui utilise le fichier menu.js.

La mise en place de média-query a été faite pour gérer au mieux l'affichage responsive en se basant sur la responsivité du site officiel.

Toutes les animations du site https://www.octacom.fr/ ont été reproduites hormis les transitions d'images dans le slicer car Bootstrap ne me permets pas de telles transitions.

Toutes les sections sont identifiées, ce qui facilite la recherche dans notre fichier main.scss.