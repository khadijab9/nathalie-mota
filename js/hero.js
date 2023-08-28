$(document).ready(function($){
    
    var image = new Array ();
    image[0] = "/uploads/08/nathalie-0-scaled.jpeg"; 
    image[1] = "/uploads/08/nathalie-1.png";
    image[2] = "/uploads/08/nathalie-2-scaled.jpg";

    var aleatoire = Math.floor(Math.random() * image.length);

    $('#hero').css({'background-image': 'url(http://localhost/nathalie-mota/wp-content/uploads/2023' +  image[aleatoire] +  ")"});

});