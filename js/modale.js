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