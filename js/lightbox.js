/* 
    jQuery(".post-image img").each(function(index) {
      var imageUrl = jQuery(this).attr("src");
      jQuery(this).wrap("<a data-fancybox='gallery' href='" + imageUrl + "'></a>");
    }); */
  

/* 
  var $lightbox = $('.lightbox'); // L'élément HTML de la lightbox

  // Ouvrir la lightbox en cliquant sur une image
  $('.post-image img').click(function(e) {
      e.preventDefault(); // On empêche le changement de page
      var imageUrl = $(this).find('img').attr('src'); // On récupère l'URL de l'image
  
      // On applique l'image en fond
      $lightbox.css('background-image', 'url(' + imageUrl + ')'); 
      $lightbox.fadeIn(); // Et on fait apparaître la lightbox
  });
  
  // Fermer la lightbox en cliquant sur celle-ci
  $lightbox.click(function () {
      $lightbox.fadeOut();
  }); */


    const lightbox = document.getElementById("lightbox");
    const closeBtn = lightbox.querySelector(".close"); 
  
  
    // Fonction pour ouvrir la lightbox
   /*  fullscreenIcon.addEventListener("click", function () {
      lightbox.style.display = "block";
    }); */


  
    // Fonction pour fermer la lightbox
   closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });


/* 
    // Sélectionnez l'élément image que vous souhaitez rendre cliquable pour afficher la lightbox
const overlay = document.querySelector(".attachment-large");

// Sélectionnez la lightbox
const lightB = document.getElementById("lightbox");

// Gérez l'événement de clic sur l'image pour afficher la lightbox
overlay.addEventListener("click", () => {
    lightB.style.display = "block";
}); */
 
const overlay = document.getElementById("overlay");

// Sélectionnez l'élément de lightbox
const light = document.getElementById("lightbox");

// Ajoutez un gestionnaire d'événement au clic sur l'overlay
overlay.addEventListener("click", function() {
    // Ajoutez la classe "active" à la lightbox pour l'afficher
    light.classList.add("active");
});













  



/*   // Sélectionne l'élément avec la classe 'close' et le stocke dans la const closeB
const closeB = document.querySelector('.close');

// Ajoute un écouteur d'événement pour le clic sur le bouton de fermeture
closeB.addEventListener('click', function() {
  //  Masquer le popup en modifiant la propriété de style "display" à "none"
  document.getElementById('lightbox').style.display = 'none';
});
 */






