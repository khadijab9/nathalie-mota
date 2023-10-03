//document.addEventListener('DOMContentLoaded', function() {
 //selelction des elements du dom en fonctins de leur class
const lightbox = document.getElementById("lightbox");
//let iconFullList = document.querySelectorAll(".fullscreen-icon");
const containerImg = lightbox.querySelector(".lightbox-contain") 
closeB = lightbox.querySelector(".close");
prevArrow = lightbox.querySelector(".prevArrow");
nextArrow = lightbox.querySelector(".nextArrow");
elementRef = lightbox.querySelector(".reference");
elementCat = lightbox.querySelector (".categorie")
const lightboxImg = lightbox.querySelector(".photoLight");
 
 
//let images = document.querySelectorAll('.photoLightbox');

const photos2 = []


// Création du contenu lightbox (toutes les photos), à redemander quand on change le contenu (sinon le tableau changera jamais)
function buildContentLighbox () {
	let iconFullList = document.querySelectorAll(".fullscreen-icon");
	let images = document.querySelectorAll('.photoLightbox');

	  // vide le contenu de photos2 à chaque appel
	  photos2.length = 0;
	console.log("buildContentLighbox() appel");
images.forEach(image => {
	console.log(image.getAttribute('src'))
//	photos2.push({image: image.getAttribute('src')})
//	photos2.push({image : image.getAttribute('data-reference')})
const src = image.getAttribute('src');
    const reference = image.getAttribute('data-reference');
	const categorie = image.getAttribute('data-categorie'); // Récupérez l'attribut data-categorie
    photos2.push({ image: src, reference: reference, categorie: categorie });

	console.log(image.getAttribute('data-reference'))


});

console.log(photos2);


  
// déclare une variable et 'initialise à 0 
let currentIndex = 0 ;

// Parcourez tous les éléments .fullscreen-icon et ajoutez un gestionnaire d'événement à chacun
iconFullList.forEach((iconFull, index) => {
    iconFull.addEventListener("click", function(){
		
		console.log(iconFullList)
        
		currentIndex = index; // Met à jour currentIndex avec l'index de l'image cliquée
		showImage(currentIndex);
        // Ajoute la classe "active" à la lightbox pour l'afficher
        lightbox.style.display = 'block';
	
    });
});
    
	

	 // Fonction pour fermer la lightbox
     closeB.addEventListener("click", function () {
		lightbox.style.display = "none";
	   });

	   // Gestionnaires d'événements pour les flèches précédente et suivante
prevArrow.addEventListener("click", PrevImage);
nextArrow.addEventListener("click", NextImage);
console.log(prevArrow)
console.log(nextArrow)

	}

// Fonction pour afficher une image dans la lightbox
function showImage(index) {

	
	console.log("Index:", index);
const photo = photos2[index];
console.log("Photo:", photo); 
lightboxImg.src = photo.image;
elementRef.textContent = photo.reference;
elementCat.textContent = photo.categorie;

currentIndex = index;


}


// Fonction pour afficher l'image précédente
function PrevImage() {
		// met à jour de currentIndex en enlevant 1 au slide actuel pour retourner au slide précédent
		currentIndex = (currentIndex - 1 ) ;
		// si inférieur à 0 
		if (currentIndex  < 0 ) {
			//currentIndex est défini sur l'index de la dernière image du tabl pour passer à la dernière image.
			 currentIndex = photos2.length - 1
		}
		showImage(currentIndex);
}

// Fonction pour afficher l'image suivante
function NextImage() {
		//met à jour de la variable currentIndex en ajoutant 1 au slide actuel 
		currentIndex = (currentIndex + 1) ;
		//si currentIndex est supéieur à la longueur du tableau , 
		if (currentIndex > photos2.length -1 )  {
		   // on repart à 0
		   currentIndex = 0 
		}
    showImage(currentIndex);
}

buildContentLighbox () 


























  



/*   // Sélectionne l'élément avec la classe 'close' et le stocke dans la const closeB
const closeB = document.querySelector('.close');

// Ajoute un écouteur d'événement pour le clic sur le bouton de fermeture
closeB.addEventListener('click', function() {
  //  Masquer le popup en modifiant la propriété de style "display" à "none"
  document.getElementById('lightbox').style.display = 'none';
});
 */






