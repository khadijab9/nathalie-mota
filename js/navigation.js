/* 
document.addEventListener("click", function() {
    var currentSlide = 0;
    var slides = document.querySelectorAll(".post-cont");
    var numSlides = slides.length;
    var prevArrow = document.querySelector(".prev-arrow");
    var nextArrow = document.querySelector(".next-arrow");

    nextArrow.addEventListener("click", function() {
      currentSlide = (currentSlide + 1) % numSlides;
      updateCarousel();
    });

    prevArrow.addEventListener("click", function() {
      currentSlide = (currentSlide - 1 + numSlides) % numSlides;
      updateCarousel();
    });

    function updateCarousel() {
      slides.forEach(function(slide) {
        slide.classList.remove("active");
      });
      slides[currentSlide].classList.add("active");
    }
  }); */