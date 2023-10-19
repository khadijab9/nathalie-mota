//chargement ds element du dom
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.popup-overlay');
  const btnContact = document.querySelector('.contact');
  btnContact.addEventListener('click', function (event) {
    event.preventDefault()
    modal.style.display = 'flex';

    
  })
  modal.addEventListener('click', function (event) {
    // vérifie si l'endroit où l'utilisateur a cliqué est l'élément modal
    if (event.target === modal) {
      // Masque la pop-up en modifiant la propriété de style "display" à "none"
      modal.style.display = 'none';
    }
  });
   


//---------bouton contact 
  const contactBtn = document.getElementById('contact-button')
  if (contactBtn !== null) {
    contactBtn.addEventListener('click', function (event) {

      event.preventDefault()
      modal.style.display = 'flex';
    });


    const refphoto = document.getElementById('refPhoto')
    const ref = document.getElementById('ref')
    //La valeur de l'élément ref est mise à jour avec le texte contenu dans l'élément refphoto
    ref.value = refphoto.innerText;

   
  }



// pour ouvrir la modale de contact
  const linkContact = document.getElementById('menu-item-86')
  // Écoute le clic sur le lien de navigation
  linkContact.addEventListener('click', function (event) {
    event.preventDefault();
  });
}); 