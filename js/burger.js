//Menu burger
//lors du chargement du Dom
document.addEventListener('DOMContentLoaded', function () {
    //Sélection des éléments du menu
    const burger = document.querySelector('.burgerMenu');
    const menu = document.querySelector('.navbar-nav ')
   // Ajoute un écouteur d'événements pour le clic sur le bouton burger
    burger.addEventListener("click", function(){
       // Ajoute et supprime la classe active à l'élément "burger"
      // ce qui permet de basculer son état visuel 
      //pour créer un effet d'ouverture/fermeture du menu).
     burger.classList.toggle("active");
      // permet de basculer son affichage en rendant le menu visible ou caché.
     menu.classList.toggle("active");
    });  
    });
  