/* $(document).ready(function() {
    // Afficher l'image principale lors du survol d'une miniature
    $(".thumbnail-container a").hover(function() {
        var imageUrl = $(this).data("image");
        $(".main-image img").attr("src", imageUrl);
    });
}); */

/* const arrows = document.querySelectorAll('.prev-arrow' ,  '.next-arrow');
const thumbnailImage = document.querySelector('.imageThumbnail');

arrows.forEach((arrow) => {
    arrow.addEventListener('mouseover', () => {
        const imageSrc = arrow.getAttribute('data-image');
        thumbnailImage.src = imageSrc;
    });

    arrow.addEventListener('mouseout', () => {
        thumbnailImage.src = '';
    });
}); */

/*     const imageThumbnail = $(".imageThumbnail img");
    const prevArrow = $(".prev-arrow");
    const nextArrow = $(".next-arrow");
    const postContainer = $(".container-filtre");

    function loadPostContent(postURL, postImageURL) {
      $.ajax({
        url: postURL,
        type: "GET",
        success: function (response) {
          const postContent = $(response).find(".post-content");
          imageThumbnail.attr("src", postImageURL);
          postContainer.html(postContent);
        },
      });
    }
    prevArrow.add(nextArrow).hover(
      function () {
        const postURL = $(this).attr("href");
        const postImageURL = $(this).data("image");

        loadPostContent(postURL, postImageURL);
      },
      function () {
        const currentImageURL = imageThumbnail.data("current-image");
        imageThumbnail.attr("src", currentImageURL);
        postContainer.html("");
      }
    ); */



   /*  $('.prev-arrow .next-arrow').hover(function(){
        var image = $(this).data('image');
        if (image){
            $('.containerNav img').attr('src', image);
        }
    }, function(){
        $('.containerNav img').attr('src', );
    });
 */

// Sélectionne les éléments avec les classes .prev-arrow et .next-arrow et ajoute un écouteur au survol (hover)
    $('.prev-arrow, .next-arrow').hover(
      // Fonction exécutée lorsque la souris entre dans l'élément
        function () {
          // Récupère la valeur de 'data-image' de l'élément survolé et la stocke dans la variable 'image'
          var image = $(this).data('image');
          // Vérifie si 'image' contient une valeur
          if (image) {
            // Si 'image' contient une valeur, met à jour 'src' de l'élément avec la classe .containerNav img pour afficher l'image
            $('.containerNav img').attr('src', image);
          }
        },
      );
    