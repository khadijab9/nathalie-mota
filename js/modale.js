const closeButton = document.querySelector('.popup-close');

closeButton.addEventListener('click', function() {
  // Option 1: Masquer le popup
  document.querySelector('.popup-overlay').style.display = 'none';
});