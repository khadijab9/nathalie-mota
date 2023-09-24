const photos = [
	{
		"image": "./wp-content/uploads/2023/08/nathalie-15-scaled.jpeg",
		"reference" : "BF2400",
		"categorie" : "Mariage",
	},
	{
		"image":"./wp-content/uploads/2023/08/nathalie-14-scaled.jpeg",
		"reference" : " BF2399",
		"categorie" : "Mariage ",
	},
	{
		"image":"./wp-content/uploads/2023/08/nathalie-13-scaled.jpeg",
		"reference" : "BF2398 ",
		"categorie" : "Mariage ",
	},
	{
		"image":"./wp-content/uploads/2023/08/nathalie-12-scaled.jpeg",
		"reference" : " BF2397",
		"categorie" : " Concert",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-11-scaled.jpeg",
		"reference" : " BF2396",
		"categorie" : "Concert ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-10-scaled.jpeg",
		"reference" : " BF2395",
		"categorie" : "Television ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-9-scaled.jpeg",
		"reference" : " BF2394",
		"categorie" : "Mariage ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-8-scaled.jpeg",
		"reference" : " BF2393",
		"categorie" : " Concert",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-7-scaled.jpeg",
		"reference" : "BF2392 ",
		"categorie" : "Mariage ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-6-scaled.jpeg",
		"reference" : " BF2391",
		"categorie" : "Mariage ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-5-scaled.jpeg",
		"reference" : " BF2390",
		"categorie" : " ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-4-scaled.jpeg",
		"reference" : " BF2389",
		"categorie" : "Mariage ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-3-scaled.jpeg",
		"reference" : "BF2388 ",
		"categorie" : " Mariage",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-2-scaled.jpeg",
		"reference" : " BF2387",
		"categorie" : "Concert ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-1.png",
		"reference" : " BF2386",
		"categorie" : "Reception ",
	},
	{
		"image": "./wp-content/uploads/2023/08/nathalie-0-scaled.jpeg",
		"reference" : " BF2385",
		"categorie" : " Reception",
	},

]
 
// déclare une variable et 'initialise à 0 
let currentIndex = 0 ;

//selelction des elements du dom en fonctins de leur class
const lightbox = document.getElementById("lightbox");
const iconFullList = document.querySelectorAll(".fullscreen-icon");
const containerImg = lightbox.querySelector(".lightbox-contain") 
const closeB = lightbox.querySelector(".close");
const prevArrow = lightbox.querySelector(".prevArrow");
const nextArrow = lightbox.querySelector(".nextArrow");


// Parcourez tous les éléments .fullscreen-icon et ajoutez un gestionnaire d'événement à chacun
iconFullList.forEach((iconFull, index) => {
    iconFull.addEventListener("click", function(){
		
		currentIndex = index; // Mettez à jour currentIndex avec l'index de l'image cliquée
        // Ajoutez la classe "active" à la lightbox pour l'afficher
        lightbox.style.display = 'block';
        showImage(currentIndex);
    });
});
     // Fonction pour fermer la lightbox
     closeB.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
	


// Fonction pour afficher une image dans la lightbox
function showImage(index) {
    if (index < 0 || index >= photos.length) {
        return;
    }

	const imageSrc = photos[index].image;
    const imageElement = document.querySelector(".photoLightbox");
    imageElement.src = imageSrc;


    // Efface le contenu précédent de la lightbox
    containerImg.innerHTML = "";
    
    // Ajoute l'image actuelle à la lightbox
    containerImg.appendChild(imageElement);
    
    currentIndex = index;
}


// Fonction pour afficher l'image précédente
function PrevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    }
    showImage(currentIndex);
}

// Fonction pour afficher l'image suivante
function NextImage() {
    currentIndex++;
    if (currentIndex >= photos.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}
// Gestionnaires d'événements pour les flèches précédente et suivante
prevArrow.addEventListener("click", PrevImage);
nextArrow.addEventListener("click", NextImage);

// Gestionnaire d'événement pour ouvrir la lightbox
// Par exemple, vous pouvez attacher cela à des miniatures d'images
/* const imageThumbnails = document.querySelectorAll(".attachment-large"); // Remplacez avec vos sélecteurs appropriés
imageThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
        showImage(index);
        lightbox.style.display = "block";
    });
}); */
 










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






