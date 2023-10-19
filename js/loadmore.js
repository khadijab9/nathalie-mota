
// Initialise une variable pour suivre la page actuelle
let currentPage = 1;
const loadMoreButton = $('.loadMore');

loadMoreButton.on('click', function (e) {
  // Empêche le rechargement de la page
  e.preventDefault();
  // Incrémente la variable "currentPage" pour charger la page suivante
  currentPage++;


  $.ajax({
    type: 'POST', // Utilise la méthode Post pour la requête
    url: './wp-admin/admin-ajax.php', // L'URL vers laquelle envoyer la requête
    dataType: 'json', // type de réponse au format json
    data: { // données à eenvoyé au serveur
      action: 'load_more', // Action à effectuer du côté du serveur
      paged: currentPage, // page actuel à chargé
    },
//La fonction success() est exécutée en cas de succès de la requête, le code vérifie si la réponse est vide.
    success: function (res) { 
      //Si la page actuelle est égale ou supérieure au nombre total de pages,
      if (currentPage >= res.max) {
        loadMoreButton.hide(); //  le bouton .loadMore sera masqué.
        // Sinon, le contenu de la réponse Json est ajouté à l'élément HTML avec la classe .containerPhoto.
        $('.containerPhoto').append(res.html);

        buildContentLighbox();
      }
    }
  });
});






