let currentAudio = null;

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('mousedown', () => {
    const note = key.dataset.note;
    const audio = document.getElementById(note);

    if (currentAudio !== null) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    audio.currentTime = 0;
    audio.play();

    currentAudio = audio;
  });
});