const photos = [
	{
		"image": "http://localhost/nathalie-mota/wp-content/uploads/2023/08/nathalie-15-scaled.jpeg",
	
	},
	{
		"image":"slide2.jpg",
	
	},
	{
		"image":"slide3.jpg",
	
	},
	{
		"image":"slide4.png",
	
	}
]

const closeBtn = lightbox.querySelector(".close");
const iconFullList = document.querySelectorAll(".fullscreen-icon");

// Sélectionnez l'élément de lightbox
const light = document.getElementById("lightbox");

// Parcourez tous les éléments .fullscreen-icon et ajoutez un gestionnaire d'événement à chacun
iconFullList.forEach((iconFull) => {
    iconFull.addEventListener("click", function(){
        // Ajoutez la classe "active" à la lightbox pour l'afficher
        light.style.display = 'block';
    });
});



     // Fonction pour fermer la lightbox
     closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });

















  



/*   // Sélectionne l'élément avec la classe 'close' et le stocke dans la const closeB
const closeB = document.querySelector('.close');

// Ajoute un écouteur d'événement pour le clic sur le bouton de fermeture
closeB.addEventListener('click', function() {
  //  Masquer le popup en modifiant la propriété de style "display" à "none"
  document.getElementById('lightbox').style.display = 'none';
});
 */






