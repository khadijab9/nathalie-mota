const lightbox = document.getElementById("lightbox");
const containerImg = lightbox.querySelector(".lightbox-contain")
closeB = lightbox.querySelector(".close");
prevArrow = lightbox.querySelector(".prevArrow");
nextArrow = lightbox.querySelector(".nextArrow");
elementRef = lightbox.querySelector(".reference");
elementCat = lightbox.querySelector(".categorie")
const lightboxImg = lightbox.querySelector(".photoLight");

// Crée un tableau vide pour stocker les informations sur les images
const photos2 = []


// Fonction pour construire le contenu de la lightbox, à redemander quand on change le contenu 
function buildContentLighbox() {
	let iconFullList = document.querySelectorAll(".fullscreen-icon");
	let images = document.querySelectorAll('.photoLightbox');

	// vide le contenu du taleau à chaque appel de la fonction
	photos2.length = 0;

	// parcourt chaque image, pour extraire l'URL, la référence et la catégorie en les ajoutant au tableau 
	images.forEach(image => {
		const src = image.getAttribute('src');
		const reference = image.getAttribute('data-reference');
		const categorie = image.getAttribute('data-categorie');
		photos2.push({ image: src, reference: reference, categorie: categorie });

	});

	// initialise la variable  à 0  pour suivre l'index de l'image actuel
	let currentIndex = 0;

	// Parcourez tous les éléments .fullscreen-icon et ajoutez un gestionnaire d'événement 
	iconFullList.forEach((iconFull, index) => {
		iconFull.addEventListener("click", function () {
			currentIndex = index; // Met à jour currentIndex avec l'index de l'image cliquée
			showImage(currentIndex);
			// affiche la lightbox 
			lightbox.style.display = 'block';
		});
	});

	// Fonction pour fermer la lightbox
	closeB.addEventListener("click", function () {
		lightbox.style.display = "none";
	});

	// Gestionnaires d'événements pour la navigation précédente et suivante
	prevArrow.addEventListener("click", PrevImage);
	nextArrow.addEventListener("click", NextImage);
}

// Fonction pour afficher une image dans la lightbox en fonction de l'index
function showImage(index) {
	// Récupère les informations sur l'image à partir du tableau  en utilisat l'index
	const photo = photos2[index];

	// Met à jour l'élément HTML de l'image dans la lightbox avec l'URL de l'image actuelle
	lightboxImg.src = photo.image;

	// Met à jour les éléments de texte dans la lightbox avec la référence et la catégorie de l'image actuelle
	elementRef.textContent = photo.reference;
	elementCat.textContent = photo.categorie;

	// Met à jour la variable "currentIndex" avec la nouvelle valeur d'index pour suivre l'image actuellement affichée
	currentIndex = index;
}



// Fonction pour afficher l'image précédente
function PrevImage() {
	// pour afficher 'image précédente, on décrémente 1 au slide actuel 
	currentIndex = (currentIndex - 1);
	// si inférieur à 0 
	if (currentIndex < 0) {
		//currentIndex est défini sur l'index de la 1ere image du tabl pour passer à la dernière image.
		currentIndex = photos2.length - 1
	}
	// Appelle la fonction "showImage" pour afficher l'image correspondant au nouvel index
	showImage(currentIndex);
}

// Fonction pour afficher l'image suivante
function NextImage() {
	//met à jour de la variable currentIndex en ajoutant 1 au slide actuel 
	currentIndex = (currentIndex + 1);
	//si currentIndex est supéieur à la longueur du tableau , 
	if (currentIndex > photos2.length - 1) {
		// on repart à 0 
		currentIndex = 0
	}


	showImage(currentIndex);
}
//appel de la fonction pour initialiser la lightbox
buildContentLighbox()






























/*   // Sélectionne l'élément avec la classe 'close' et le stocke dans la const closeB
const closeB = document.querySelector('.close');

// Ajoute un écouteur d'événement pour le clic sur le bouton de fermeture
closeB.addEventListener('click', function() {
  //  Masquer le popup en modifiant la propriété de style "display" à "none"
  document.getElementById('lightbox').style.display = 'none';
});
 */






