
// Sélectionne les éléments avec les classes .prev-arrow et .next-arrow et ajoute un écouteur au survol (hover)
    $('.prev-arrow, .next-arrow').hover(
      // Fonction exécutée lorsque la souris entre dans l'élément
        function () {
          // Récupère la valeur de 'data-image' de l'élément survolé et la stocke dans la variable 'image'
          var image = $(this).data('image');
          // Vérifie si 'image' contient une valeur
          if (image) {
            // Si 'image' contient une valeur, met à jour 'src' de l'élément avec la classe .containerNav img pour afficher l'image
            $('.containerNav img').attr('src', image);
          }
        },
      );
    