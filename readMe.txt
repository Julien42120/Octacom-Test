Pour ce test j'ai utilisé les langages suivant : HTML , SCSS, JS

J'ai de même utilisé la librairie Bootstrap 5 pour le slicer et pour la mise an place du menu avec une modal.

J'ai utilisé SCSS pour sa simplicité de lecture et d'écriture qui rende pour moi le code plus harmonieux, j'ai ensuite compilé mon fichier scss en css grace a la commande : 
sass main.scss style.css --watch

Les animations sont principalement reproduit en scss sauf :
- Le bouton "Back to top" qui utilise le fichier backToTop.js.
- l'animation de l'image en forme de huit au niveau de la section "création digitales et print" qui     utilise le fichier backToTop.js
- l'icone de menu qui est une modal et qui utilise le fichier menu.js.

La mise en place de média-query a été faite, pour gérer au mieux l'affichage responsive en se basant sur la responsivité du site officiel.

Toutes les animations du site https://www.octacom.fr/ on été reproduite hormi les transitions d'images dans le slicer car Bootstrap ne me permet pas de telles transitions. 

Toutes les sections sont identifiées, ce qui facilite la recherche dans notre fichier main.scss.

