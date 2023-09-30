 const images = document.querySelectorAll('.photoLightbox');
 
const photos2 = []

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

console.log (photos2);


  
// déclare une variable et 'initialise à 0 
let currentIndex = 0 ;

//selelction des elements du dom en fonctins de leur class
const lightbox = document.getElementById("lightbox");
const iconFullList = document.querySelectorAll(".fullscreen-icon");
containerImg = lightbox.querySelector(".lightbox-contain") 
closeB = lightbox.querySelector(".close");
prevArrow = lightbox.querySelector(".prevArrow");
nextArrow = lightbox.querySelector(".nextArrow");
elementRef = lightbox.querySelector(".reference");
elementCat = lightbox.querySelector (".categorie")
const lightboxImg = lightbox.querySelector(".photoLightbox");

//const elementCat = document.querySelector(".categorie")

// Parcourez tous les éléments .fullscreen-icon et ajoutez un gestionnaire d'événement à chacun
iconFullList.forEach((iconFull, index) => {
    iconFull.addEventListener("click", function(){
		
		currentIndex = index; // Met à jour currentIndex avec l'index de l'image cliquée
		showImage(currentIndex);
        // Ajoutez la classe "active" à la lightbox pour l'afficher
        lightbox.style.display = 'block';
        
    });
});
     // Fonction pour fermer la lightbox
     closeB.addEventListener("click", function () {
      lightbox.style.display = "none";
	 });

// Fonction pour afficher une image dans la lightbox
function showImage(index) {
	
const photo = photos2[index];
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


// Gestionnaires d'événements pour les flèches précédente et suivante
prevArrow.addEventListener("click", PrevImage);
nextArrow.addEventListener("click", NextImage);

 







 /*	function photoSlide (index) {
	/*	const imageContainer = document.querySelector(".lightbox-contain");
		const image = document.createElement("img");
		image.src = photos[index].image;
		
		// Effacez le contenu précédent
		imageContainer.innerHTML = '';
		
		// Ajoutez la nouvelle image à la lightbox
		imageContainer.appendChild(image);
	}
 */
/* //pour afficher les images du tableau et le tagline
function photoLightbox(index) {
	// Récupérer le slide correspondant à l'index fourni
   const photo = photos[index];
   // Met à jour la source de la var bannerImage avec le chemin de l'image du slide
   containerImg.src = "./wp-content/uploads/" + photo.image;



	const prevArrow = document.querySelector(".prevArrow");
const nextArrow = document.querySelector(".nextArrow");


// ajoute des écouteurs d'événements pour les clics sur les flèches gauche et droite avec un id
prevArrow.addEventListener("click", previousLightbox);
nextArrow.addEventListener("click", nextLightbox);
 */
/* prevArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        displayImage(currentIndex);
    }
});

nextArrow.addEventListener("click", function () {
    if (currentIndex < photos.length - 1) {
        currentIndex++;
        displayImage(currentIndex);
    }
}); */



/*  // changer de slide vers la gauche et la droite à l'infini
 function nextLightbox() {
	//mise à jour de la variable currentSlide en ajoutant 1 au slide actuel 

	 currentIndex = (currentIndex + 1) ;
	 //si currentSlide est supéieur à la longueur du tableau , 
	 if (currentIndex > photos.length -1 )  {
		// on repart à 0
		currentIndex = 0 
	 }
	 photoLightbox(currentIndex);
}
function previousLightbox() {
	// mise à jour de currentslide en enlevant 1 au slide actuel pour retourner au slide précédent
	currentIndex = (currentIndex - 1 ) ;
	// si inférieur à 0 
	if (currentIndex  < 0 ) {
		//currentSlide est défini sur l'index de la dernière image du tabl pour passer à la dernière image.
		 currentIndex = photos.length - 1
	}
	photoLightbox(currentIndex); 
}
} */
















  



/*   // Sélectionne l'élément avec la classe 'close' et le stocke dans la const closeB
const closeB = document.querySelector('.close');

// Ajoute un écouteur d'événement pour le clic sur le bouton de fermeture
closeB.addEventListener('click', function() {
  //  Masquer le popup en modifiant la propriété de style "display" à "none"
  document.getElementById('lightbox').style.display = 'none';
});
 */






