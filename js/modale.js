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
console.log(contactBtn)
if (contactBtn !== null){
contactBtn.addEventListener('click', function (event){

  event.preventDefault()
  modal.style.display = 'flex';
});



const refphoto = document.getElementById('refPhoto')
const ref= document.getElementById('ref')
ref.value= refphoto.innerText;
}


