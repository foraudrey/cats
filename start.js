function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('DOMContentLoaded', function () {
  const introOverlay = document.querySelector('.intro-overlay');
  const startButton = document.querySelector('.start-button');
  const audioClip = document.getElementById('audioClip');

  startButton.addEventListener('click', async function () {
    await sleep(10) // so that the refresh from wrong password doesn't leak
    introOverlay.classList.add('hidden');
    audioClip.play();
  });
});