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
});




const optionMenu = document.querySelector(".select-cat"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  Btn_text = optionMenu.querySelector(".Btn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".textOption").innerText;
    Btn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});


jQuery(document).ready(function ($) {
  const selectCat = $(".select-cat");
  const optionList = selectCat.find(".list");
  const postContainer = $(".container-filtre");

  // Écoutez le clic sur une catégorie
  optionList.on("click", ".option", function () {
    const selectedSlug = $(this).data("slug");

    // Effectuer une requête Ajax pour charger les photos en fonction de la catégorie
    $.ajax({
      url: './wp-admin/admin-ajax.php', // Utilisez la variable WordPress ajaxurl
      type: "POST",
      data: {
        action: "filter_photos_by_category", // Nom de l'action à définir dans WordPress
        category: selectedSlug,
      },
      success: function (response) {
        // Mettez à jour le contenu de la section des photos avec les nouvelles photos chargées via Ajax
        postContainer.html(response);
      },
    });
  });
});