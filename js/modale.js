document.addEventListener('DOMContentLoaded', function () {
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


const contactBtn  = document.getElementById ('contact-button')

if (contactBtn !== null){
contactBtn.addEventListener('click', function (event){

  event.preventDefault()
  modal.style.display = 'flex';
});



const refphoto = document.getElementById('refPhoto')
const ref= document.getElementById('ref')
ref.value= refphoto.innerText;
}


const linkContact = document.getElementById('menu-item-86')
// Écoute le clic sur le lien de navigation
linkContact.addEventListener('click', function (event){
  // Efface la valeur du champ de référence de la photo
 // if (linkContact) {
   // ref.value = '';
  //}
  event.preventDefault();

});


});



