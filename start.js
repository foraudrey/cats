window.addEventListener('DOMContentLoaded', function () {
  const introOverlay = document.querySelector('.intro-overlay');
  const startButton = document.querySelector('.start-button');

  startButton.addEventListener('click', function () {
    introOverlay.classList.add('hidden');
  });
});
