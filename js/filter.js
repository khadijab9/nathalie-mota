// initialise les variables qui stockeront les critères de iltrage envoyé au serveur
let categorie = '';
let format = '';
let sort = '';

// Définit la fonction pour filtrer les photos
function filter_photos() {
  $.ajax({
    // Spécifie l'URL vers laquelle la requête est envoyée
    url: './wp-admin/admin-ajax.php',
    // Utilise la méthode POST pour envoyer la requête au serveur
    type: 'POST',
    //les données à envoyer au serveur
    data: {
      // Action pour gérer la requête de filtrage
      action: 'filter_photos',
      // Passe les valeurs acteulles des varibles de filtrage au serveur
      categorie: categorie,
      format: format,
      sort: sort,
    },

    // Définit la fonction à exécuter en cas de succès de la requête
    success: function (response) {
      // Met à jour le contenu de l'élément HTML ayant la classe "containerPhoto"
      $('.containerPhoto').html(response);
      // Réattache les gestionnaires d'événements "click" aux nouvelles photos
      buildContentLighbox();
    }
  });
}


const categorieList = document.getElementById("categorie-list");
const optionMenu = document.getElementById("categorie-filter");
let selectBtn = null, options = null, Btn_text = null;
if (optionMenu) {
  selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelector(".option"),
    Btn_text = optionMenu.querySelector(".text");
}

if (selectBtn) {
  //ajoute un écouteur d'evenement au clic sur le bouton
  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")

  )
};
if (categorieList) {
  // Écoute l'événement de clic sur la liste des catégories
  categorieList.addEventListener("click", (e) => {
    // Vérifie si l'élément cliqué a la classe "option"
    if (e.target.classList.contains("option")) {
      // Récupère le texte de l'option sélectionnée
      const selectedOption = e.target.textContent;

      // Met à jour le texte du bouton avec l'option sélectionnée
      Btn_text.textContent = selectedOption;
      // Récupère la valeur de l'attribut "data-value" de l'option sélectionnée
      categorie = e.target.getAttribute('data-value');
      // Cache la liste déroulante des catégories en supprimant la class active
      optionMenu.classList.remove("active");

      // Appelle la fonction filter_photos pour mettre à jour les photos
      filter_photos();
    }
  });
};


const formatList = document.getElementById("format-list");
const optionFormat = document.getElementById("format-filter");
let selectFormat = null, optFormat = null, TextFormat = null;
if (optionFormat) {
  selectFormat = optionFormat.querySelector(".btn-format");
  optFormat = optionFormat.querySelectorAll(".options");
  TextFormat = optionFormat.querySelector(".txtFormat");
}

if (selectFormat) {
  selectFormat.addEventListener("click", () =>
    optionFormat.classList.toggle("active")

  )
};


if (formatList) {

  formatList.addEventListener("click", (e) => {
    if (e.target.classList.contains("options")) {
      const selectedOptionFormat = e.target.textContent;

      TextFormat.textContent = selectedOptionFormat;
      format = e.target.getAttribute('data-value');

      optionFormat.classList.remove("active");

      filter_photos();
    }
  });
}


//date 
const dateList = document.getElementById("sort-filter");
const containerDate = document.getElementById("container-date");
let btnDate = null, optionDate = null, textDate = null;
if (containerDate) {
  btnDate = containerDate.querySelector(".btn-date"),
    optionDate = containerDate.querySelectorAll(".optionDate"),
    textDate = containerDate.querySelector(".txtDate");

};

if (btnDate) {
  btnDate.addEventListener("click", () =>
    containerDate.classList.toggle("active")
  )
};
if (dateList) {

  dateList.addEventListener("click", (e) => {
    if (e.target.classList.contains("optionDate")) {

      const selectedOptionDate = e.target.textContent;
      textDate.textContent = selectedOptionDate;
      sort = e.target.getAttribute('data-value');

      containerDate.classList.remove("active");

      filter_photos();
    }
  });
};






















