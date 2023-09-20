const containerPhoto = document.querySelector('.containerPhoto');
      
document.addEventListener("DOMContentLoaded", function () {
  const optionMenu = document.getElementById("categorie-filter"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelectorAll(".option"),
      Btn_text = optionMenu.querySelector(".text");
  selectBtn.addEventListener("click", () =>
      optionMenu.classList.toggle("active")
  );

  // Parcours les options et ajoute un écouteur d'événements au clic sur chaque option
  options.forEach((option) => {
      option.addEventListener("click", () => {
          // Récupère le texte de l'option sélectionnée
          let selectedOption = option.innerText;
          // Met à jour le texte du bouton avec l'option sélectionnée
          Btn_text.innerText = selectedOption;
          optionMenu.classList.remove("active");
      });
  });
});

function filter_photos() {
  categorie = $('#categorie-filter').val();

  format = $('#format-filter').val();
   sort = $('#sort-filter').val();
 
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
