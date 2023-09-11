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

    const imageThumbnail = $(".imageThumbnail img");
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
    );
    