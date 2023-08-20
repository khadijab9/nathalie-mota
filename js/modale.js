// Attend que le DOM soit chargé
// document.addEventListener('DOMContentLoaded', function() {
//   const closeButton = document.querySelector('.popup-close');

//   closeButton.addEventListener('click', function() {
//     // Masque la pop-up en modifiant la propriété de style "display" à "none"
//     document.querySelector('.popup-overlay').style.display = 'none';
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.popup-overlay');

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      // Masque la pop-up en modifiant la propriété de style "display" à "none"
      modal.style.display = 'none';
    }
  });
});










// $(document).ready(function() {
//   $('.popup-close').click(function() {
//     // Masque la pop-up en modifiant la propriété de style "display" à "none"
//     $('.popup-overlay').hide();
//   });
// });

