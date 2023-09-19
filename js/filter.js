/* let category = '';
let format = '';
let date = '';
const containerPhoto = document.querySelector('.containerPhoto');

document.addEventListener("DOMContentLoaded", function () {

const optionMenu = document.querySelector(".select-cat"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  Btn_text = optionMenu.querySelector(".Btn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

// Parcoursles options et ajoute un écouteur d'événements au clic sur chaque option
options.forEach((option) => {
  option.addEventListener("click", () => {
        // Récupère le texte de l'option sélectionnée
    let selectedOption = option.querySelector(".textOption").innerText;
    // Met à jour le texte du bouton avec l'option sélectionnée
    Btn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});
});


function ajaxFilter (){ 
    // Effectuer une requête Ajax pour charger les photos en fonction de la catégorie
    $.ajax({
      url: './wp-admin/admin-ajax.php',
      type: "POST",
      data: {
        action: "filter_photos_by_category", // Nom de l'action à définir dans WordPress
        category: category, // envoi le slug de la catégorie
         format: format, // Envoi  le format sélectionné
         date: date,
      },
      success: function (response) {
        // Met à jour le contenu des photos avec les nouvelles photos chargées via Ajax
        containerPhoto.innerHTML =  response;
      },
    });
  }

 // selection des éléments du dom 
  const selectCat = $(".select-cat");
  const optionList = selectCat.find(".list");

   // Écoutez le clic sur une catégorie
  optionList.on("click", ".option", function () {
    // Récupérez le slug de la catégorie sélectionnée depuis l'attribut data
    category = $(this).data("slug");
   format = $("#format-filter").val(); // Récupérez la valeur du menu déroulant "format"

    //Masquer toutes les images qui ne sont pas de la catégorie sélectionnée
  /*    $(".related-photo").hide();
    $(`.categorie-${selectedSlug}`).show();  */

  //containerPhoto.innerHTML = '';

   //ajaxFilter();

 // }); */





 // Fonction pour effectuer l'appel Ajax et mettre à jour les photos
/*   function filter_photos() {
    var categorie = $('#categorie-filter').val();
    var format = $('#format-filter').val();

    $.ajax({
         url: './wp-admin/admin-ajax.php',
        type: 'POST',
        data: {
            action: 'filter_by_categorie', // Nom de l'action WordPress pour gérer la requête
            categorie: categorie,
            format: format
        },
        success: function(response) {
            // Mettre à jour la liste des photos avec la réponse Ajax
            $('.containerPhoto').html(response);
        }
    });
}

 // selection des éléments du dom 
 const selectCat = $("#categorie-filter #format-filter");
 const optionList = selectCat.find("option");

  // Écoutez le clic sur une catégorie
 optionList.on("click", ".option", function () {
   // Récupérez le slug de la catégorie sélectionnée depuis l'attribut data
   category = $("categorie-filter").val();
  format = $("#format-filter").val(); // Récupérez la valeur du menu déroulant "format"
 


  containerPhoto.innerHTML = '';

// Gérer le changement d'une option de filtre
$('#categorie-filter, #format-filter').change(function() {
    filter_photos(); // Mettre à jour les photos lorsqu'une option est modifiée
}); 

}); */
 


   // Fonction pour filtrer les photos
   function filter_photos() {
    var categorie = $('#categorie-filter').val();
    var format = $('#format-filter').val();
    var sort = $('#sort-filter').val();

    if (categorie === '') {
      // Si "Toutes les catégories" est sélectionné, réinitialisez la catégorie à vide
      categorie = '';
  }

    $.ajax({
        url: './wp-admin/admin-ajax.php',
        type: 'POST',
        data: {
            action: 'filter_photos_by_category', // Nom de l'action WordPress pour gérer la requête
            categorie: categorie,
            format: format,
            sort: sort,
        },
        success: function(response) {
            // Mettre à jour la liste des photos avec la réponse Ajax
            $('.containerPhoto').html(response);
        }
    });
}
// Sélection des éléments du DOM
const selectCat = $("#categorie-filter, #format-filter, #sort-filter");
// Écoutez le changement d'options de filtre
selectCat.change(function() {
  $('.containerPhoto').empty();
    filter_photos(); // Mettre à jour les photos lorsqu'une option est modifiée
});




/* // Sélectionnez le menu déroulant par son ID
const selectMenu = document.getElementById('format-filter');

// Sélectionnez toutes les options du menu déroulant
const options = selectMenu.querySelector('.formatOption');

// Parcourez toutes les options et ajoutez des gestionnaires d'événements pour le survol
options.forEach(option => {
    option.addEventListener('mouseover', () => {
        // Appliquez les styles au survol
        option.style.backgroundColor = '#FF0000'; // Nouvelle couleur de fond au survol
        // Autres styles au survol
    });

    option.addEventListener('mouseout', () => {
        // Réinitialisez les styles lorsque le survol se termine
        option.style.backgroundColor = ''; // Réinitialisez la couleur de fond
        // Réinitialisez les autres styles au survol
    });
}); */







      



  

