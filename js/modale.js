// Attend que le DOM soit chargé
// document.addEventListener('DOMContentLoaded', function() {
//   const closeButton = document.querySelector('.popup-close');

//   closeButton.addEventListener('click', function() {
//     // Masque la pop-up en modifiant la propriété de style "display" à "none"
//     document.querySelector('.popup-overlay').style.display = 'none';
//   });
// });

/* 
document.addEventListener('click', function() {
  const modal = document.querySelector('.popup-overlay'); */
/* 
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      // Masque la pop-up en modifiant la propriété de style "display" à "none"
      modal.style.display = 'none';
    }
  });
}); */
const modal = document.querySelector('.popup-overlay');
const btnContact = document.querySelector ('.contact');
btnContact.addEventListener('click', function (event){
  event.preventDefault()
  modal.style.display = 'flex';
})
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    // Masque la pop-up en modifiant la propriété de style "display" à "none"
    modal.style.display = 'none';
  }
});