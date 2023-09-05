/* let currentPage = 1;
$('.loadMore').on('click', function() {
  currentPage++; // Do currentPage + 1, because we want to load the next page

  $.ajax({
    type: 'POST',
    url: '/wp-admin/admin-ajax.php',
    dataType: 'html',
    data: {
      action: 'load_more',
      paged: currentPage,
    },
    success: function (res) {
      $('.containerPhoto').append(res);
    }
  }); */
//});

 /* -------------------------------------------------
jQuery(document).ready(function($) {
  let currentPage = 1;

  $('.loadMore').on('click', function(e) {
      e.preventDefault(); // Empêche le comportement par défaut du lien

      currentPage++; // Incrémente la page actuelle

      // Effectue la requête AJAX
      $.ajax({
          type: 'post',
          url: ajaxfilter.ajaxurl, // Utilisez la variable 'ajaxurl' définie par WordPress
          dataType: 'html',
          data: {
              action: 'load_more', // L'action à gérer dans votre fichier functions.php
              paged: currentPage, // La page à charger
          },
          success: function(res) {
              // Ajoute le contenu de la réponse à la fin de .containerPhoto
              $('.containerPhoto').append(res);

              // Si vous souhaitez gérer la fin des résultats, vous pouvez vérifier si res est vide et désactiver le bouton "Charger plus" en conséquence.
              if (res === '') {
                  $('.loadMore').hide(); // Cache le bouton si res est vide
              }
          }
      });
  });
});
 */

   // Initialisez une variable pour suivre la page actuelle
  let currentPage = 1;
  const loadMoreButton = $('.loadMore');

  loadMoreButton.on('click', function(e) {
       // Empêchez le rechargement de la page
      e.preventDefault();
      // Incrémentez la variable "currentPage" pour charger la page suivante
      currentPage++;

      $.ajax({
          type: 'POST', // Utilisez la méthode PHOTO pour la requête
          url: './wp-admin/admin-ajax.php', // L'URL vers laquelle envoyer la requête
          dataType: 'json', // envoi d'une réponse au format HTML
          data: {
              action: 'load_more', // Action à effectuer du côté du serveur
              paged: currentPage, // page actuel à envoyer au serveur
          },
          success: function(res) { // Fonction exécutée en cas de succès de la requête AJAX
            if(currentPage >= res.max) {
              loadMoreButton.hide(); // Masquer le bouton si la réponse est vide
            // Ajoutez le contenu de la réponse à l'élément HTML avec la classe ".containerPhoto"
              $('.containerPhoto').append(res.html);
console.log(res)
             
          }
      }});
  });
       





