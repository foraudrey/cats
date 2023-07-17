window.addEventListener('DOMContentLoaded', function () {
  const audioClip = document.getElementById('audioClip');
  audioClip.addEventListener('canplaythrough', function () {
    audioClip.play();
  });
});
