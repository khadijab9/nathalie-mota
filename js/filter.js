/* jQuery(document).ready(function($) {
    $('.js-filter').on('change', function() {
        // Récupérez les valeurs sélectionnées dans les filtres
        var categoryFilter = $('[name="categoryfilter"]').val();
        var formatFilter = $('[name="formatfilter"]').val();
        var orderbyFilter = $('[name="orderby"]').val();

        // Effectuez une requête AJAX pour récupérer les publications filtrées
        $.ajax({
            url: ajax_filter.ajax_url, // Assurez-vous d'inclure la variable ajax_url avec la valeur correcte dans votre template
            type: 'POST',
            data: {
                action: 'filter_posts',
                category: categoryFilter,
                format: formatFilter,
                orderby: orderbyFilter
            },
            success: function(response) {
                $('.filter-post').html(response.posts);
            }
        });
    });
}); */

/* jQuery(function($) {
    $('.js-filter').change(function() {
        var category = $('select[name=categoryfilter]').val();
        var format = $('select[name=formatfilter]').val();
        var orderby = $('select[name=orderby]').val();

        $.ajax({
            url: ajaxfilter.ajaxurl,
            data: {
                action: 'ajax_filter_posts',
                categoryfilter: category,
                formatfilter: format,
                orderby: orderby
            },
            type: 'POST',
            success: function(response) {
                $('#filter-ajax').html(response);
            }
        });
    }); */


   /*  jQuery(document).ready(function($) {
        $('#categorie-filter, #format-filter, #tri-filter').on('change', function() {
            filterPhotos();
        });
    
        function filterPhotos() {
            var categorie = $('#categorie-filter').val();
            var format = $('#format-filter').val();
            var tri = $('#tri-filter').val();
    
            $.ajax({
                url: '/nathalie-mota/wp-admin/admin-ajax.php', // Utilisez la variable 'ajaxurl' fournie par WordPress
                type: 'POST',
                data: {
                    action: 'filter_photos',
                    categorie: categorie,
                    format: format,
                    tri: tri,
                },
                success: function(response) {
                    $('#photos-container').html(response);
                },
            });
        }
    
        filterPhotos(); // Initialisez les résultats au chargement de la page
    }); */


//* / Fonction pour remplir dynamiquement les options de catégorie
/* function fillCategoryFilter() {
  $.ajax({
    type: 'GET',
    url: './wp-admin/admin-ajax.php', // Modifier l'URL en fonction de votre configuration
    dataType: 'json',
    success: function(response) {
      const categorieFilter = $("#categorie-filter");

      response.forEach(function(category) {
        const option = $("<li class='option'></li>");
        option.append("<span class='option-text'>" + category.name + "</span>");
        option.attr("data-category", category.slug);
        categorieFilter.append(option);
      });
    },
    error: function(error) {
      console.error("Erreur lors du chargement des catégories : " + error);
    }
  });
}
 */
// Appelez la fonction pour remplir la liste des catégories
//fillCategoryFilter();

// Écoutez les clics sur les options de filtre pour effectuer la requête AJAX et filtrer les publications
//$(".options").on("click", ".option", function() {
 // const selectedCategory = $(this).data("category");

  // Effectuez la requête AJAX pour récupérer les publications filtrées en fonction de la catégorie sélectionnée
  //$.ajax({
    //type: "POST",
    //url: "./wp-admin/admin-ajax.php",
    //data: {
     // action: "filter_photos", // Créez une action pour la requête AJAX de filtrage
      //category: selectedCategory,
      // Ajoutez d'autres paramètres de filtrage si nécessaire (format, type, etc.)
    //},
    //success: function(response) {
      // Mettez à jour le contenu de la page avec les nouvelles publications filtrées
      // Vous devrez implémenter cette partie en fonction de votre structure HTML
      // Par exemple, vous pouvez utiliser jQuery pour remplacer le contenu de la section des publications.
    //},
    //error: function(error) {
     // console.error("Erreur lors de la requête AJAX : " + error);
    //}
  //});
//});
 
/* 
jQuery(document).ready(function($) {
  // Écouteur d'événement pour le clic sur le bouton "CATEGORIES"
  $('.btn-filter').on('click', function() {
    $('.select-option').toggleClass('active');
  });

  // Écouteurs d'événement pour le clic sur les catégories individuelles
  $('.cat-list_item').on('click', function(e) {
    e.preventDefault();

    // Récupérez le slug de la catégorie sélectionnée
    const selectedCategorySlug = $(this).data('slug');

    // Effectuez la requête Ajax pour filtrer les photos par catégorie
    $.ajax({
      type: 'POST',
      url: './wp-admin/admin-ajax.php', // Utilisez la variable globale ajaxurl pour l'URL d'administration Ajax
      data: {
        action: 'filter_photos_category',
        category: selectedCategorySlug,
      },
      success: function(response) {
        // Mettez à jour le contenu de la page avec les photos filtrées
        // Vous devrez implémenter cette partie en fonction de votre structure HTML
        $('.containerPhoto').html(response);
      },
      error: function(error) {
        console.error('Erreur lors de la requête Ajax : ' + error);
      },
    });

    // Fermez la liste déroulante des catégories
    $('.select-option').removeClass('active');
  });
}); */











// le 10 sept


let category = '';
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
  //  format = $("#format-filter").val(); // Récupérez la valeur du menu déroulant "format"

    // Masquer toutes les images qui ne sont pas de la catégorie sélectionnée
  /*   $(".related-photo").hide();
    $(`.categorie-${selectedSlug}`).show(); */

   containerPhoto.innerHTML = '';

   ajaxFilter()

  });




/* 
  // Écoutez les changements de sélection de filtres
  $('#filter .select-cat').on('click', '.option', function () {
      // Recueillir les sélections de filtres
      var selectedCategories = [];
      var selectedFormats = [];

      $('#filter .select-cat').each(function () {
          var filterType = $(this).find('.Btn-text').text();
          var selectedValue = $(this).find('.option.active').data('slug');

          if (filterType === 'Catégorie') {
              selectedCategories.push(selectedValue);
          } else if (filterType === 'Format') {
              selectedFormats.push(selectedValue);
          }
      });

      // Envoyer une requête AJAX avec les filtres sélectionnés
      $.ajax({
          url: './wp-admin/admin-ajax.php',
          type: 'POST',
          dataType: 'html',
            data: {
              action: "filter_photos_by_category", // Nom de l'action à définir
              categories: selectedCategories,
              formats: selectedFormats,
          },
          success: function (data) {
              // Mettez à jour la page avec les résultats filtrés
              // Vous pouvez afficher les résultats dans une div dédiée.
              $('#result').html(data);
          }
      });
  }); */



  

