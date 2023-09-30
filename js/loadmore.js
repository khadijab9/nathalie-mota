
// Initialisez une variable pour suivre la page actuelle
let currentPage = 1;
const loadMoreButton = $('.loadMore');

loadMoreButton.on('click', function (e) {
  // Empêchez le rechargement de la page
  e.preventDefault();
  // Incrémentez la variable "currentPage" pour charger la page suivante
  currentPage++;


  $.ajax({
    type: 'POST', // Utilisez la méthode Post pour la requête
    url: './wp-admin/admin-ajax.php', // L'URL vers laquelle envoyer la requête
    dataType: 'json', // envoi d'une réponse au format json
    data: {
      action: 'load_more', // Action à effectuer du côté du serveur
      paged: currentPage, // page actuel à envoyer au serveur
    },
    
    success: function (res) { // Fonction exécutée en cas de succès de la requête AJAX
      if (currentPage >= res.max) {
        loadMoreButton.hide(); // Masquer le bouton si la réponse est vide
        // Ajoutez le contenu de la réponse à l'élément HTML avec la classe ".containerPhoto"
        $('.containerPhoto').append(res.html);


   
      }
    }
  });
});






