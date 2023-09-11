/* jQuery(document).ready(function(){
    jQuery(".post-image img").each(function(index) {
      var imageUrl = jQuery(this).attr("src");
      jQuery(this).wrap("<a data-fancybox='gallery' href='" + imageUrl + "'></a>");
    });
  }); */


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
  });