window.addEventListener('DOMContentLoaded', function () {
  const introOverlay = document.querySelector('.intro-overlay');
  const startButton = document.querySelector('.start-button');
  const audioClip = document.getElementById('audioClip');

  startButton.addEventListener('click', function () {
    introOverlay.classList.add('hidden');
    audioClip.play();
  });
});
