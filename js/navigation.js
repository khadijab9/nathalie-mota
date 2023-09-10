/* $(document).ready(function() {
    // Afficher l'image principale lors du survol d'une miniature
    $(".thumbnail-container a").hover(function() {
        var imageUrl = $(this).data("image");
        $(".main-image img").attr("src", imageUrl);
    });
}); */

const arrows = document.querySelectorAll('.prev-arrow' ,  '.next-arrow');
const thumbnailImage = document.querySelector('.imageThumbnail');

arrows.forEach((arrow) => {
    arrow.addEventListener('mouseover', () => {
        const imageSrc = arrow.getAttribute('data-image');
        thumbnailImage.src = imageSrc;
    });

    arrow.addEventListener('mouseout', () => {
        thumbnailImage.src = '';
    });
});
         