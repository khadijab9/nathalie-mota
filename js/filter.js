let categorie = '';
let format = '';
let sort =  '';

function filter_photos() {
  $.ajax({
    url: './wp-admin/admin-ajax.php',
    type: 'POST',
    data: {
      action: 'filter_photos_by_category', // Nom de l'action WordPress pour gérer la requête
      categorie: categorie,
      format: format,
      sort: sort,
    },
    success: function (response) {
      // Mettre à jour la liste des photos avec la réponse Ajax
      $('.containerPhoto').html(response);
    }
  });
}
 
const categorieList = document.getElementById("categorie-list");
const optionMenu = document.getElementById("categorie-filter");
let selectBtn = null, options = null, Btn_text = null;
if (optionMenu){
selectBtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelector(".option"),
Btn_text = optionMenu.querySelector(".text");
}

if (selectBtn) {
selectBtn.addEventListener("click", () =>
optionMenu.classList.toggle("active")

)};
if (categorieList) {
// Écoute l'événement de clic sur la liste des catégories
categorieList.addEventListener("click", (e) => {
  // Vérifie si l'élément cliqué a la classe "option"
  if (e.target.classList.contains("option")) {
    // Récupère le texte de l'option sélectionnée
    const selectedOption = e.target.textContent;

    // Met à jour le texte du bouton avec l'option sélectionnée
    Btn_text.textContent = selectedOption;
categorie = e.target.getAttribute('data-value');
console.log(e.target.getAttribute('data-value'));
    // Cache la liste déroulante des catégories
    categorieList.classList.remove("active");

    // Appelle la fonction filter_photos pour mettre à jour les photos
    filter_photos();
  }
});
};


// Sélectionnez les éléments du DOM pour la liste des formats
const formatList = document.getElementById("format-list");
const optionFormat = document.getElementById("format-filter");
let selectFormat = null, optFormat = null, TextFormat = null;
if (optionFormat){
 selectFormat = optionFormat.querySelector(".btn-format");
 optFormat = optionFormat.querySelectorAll(".options");
 TextFormat = optionFormat.querySelector(".txtFormat");
}
// Écoutez le clic sur le bouton de sélection des formats
if (selectFormat){
selectFormat.addEventListener("click", () =>
  optionFormat.classList.toggle("active")
  
)};


if (formatList){
// Écoutez l'événement de clic sur la liste des formats
formatList.addEventListener("click", (e) => {
  // Vérifiez si l'élément cliqué a la classe "options" (une option de format)
  if (e.target.classList.contains("options")) {
    // Récupérez le texte de l'option sélectionnée
    const selectedOptionFormat = e.target.textContent;

    // Mettez à jour le texte du bouton avec l'option sélectionnée
    TextFormat.textContent = selectedOptionFormat;
    format = e.target.getAttribute('data-value');

    // Cachez la liste déroulante des formats
    formatList.classList.remove("active");

    // Appelez la fonction filter_photos pour mettre à jour les photos
    filter_photos();
  }
});
}


//date 
const dateList = document.getElementById("sort-filter");
const containerDate = document.getElementById("container-date");
let btnDate = null, optionDate = null, textDate = null;
if (containerDate){ 
btnDate = containerDate.querySelector(".btn-date"),
optionDate = containerDate .querySelectorAll(".optionDate"),
textDate = containerDate .querySelector(".txtDate");

};

if(btnDate){
btnDate.addEventListener("click", () =>
containerDate .classList.toggle("active")

)};
if (dateList){
// Écoute l'événement de clic sur la liste des catégories
dateList.addEventListener("click", (e) => {
  // Vérifie si l'élément cliqué a la classe "option"
  if (e.target.classList.contains("optionDate")) {
    // Récupère le texte de l'option sélectionnée
    const selectedOptionDate = e.target.textContent;

    // Met à jour le texte du bouton avec l'option sélectionnée
    textDate.textContent = selectedOptionDate;
    sort = e.target.getAttribute('data-value');

    // Cache la liste déroulante des catégories
    dateList.classList.remove("active");

    // Appelle la fonction filter_photos pour mettre à jour les photos
    filter_photos();
  }
});
};



  


















