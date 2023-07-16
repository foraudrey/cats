window.addEventListener('load', function() {
  var imageGallery = document.querySelector('.image-gallery');
  var images = Array.from(imageGallery.getElementsByTagName('img'));
  shuffleArray(images);
  imageGallery.innerHTML = '';
  images.forEach(function(image) {
    imageGallery.appendChild(image);
  });
});

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
