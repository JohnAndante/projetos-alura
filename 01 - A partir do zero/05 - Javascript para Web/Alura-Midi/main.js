function playSound (idAudioElement) {
  document.querySelector(idAudioElement).play();
}

const padsList = document.querySelectorAll('.tecla');


for (let i = 0; i < padsList.length; i++) {

  const pad = padsList[i];
  const inst = pad.classList[1];
  const idAudio = `#som_${inst}`;

  padsList[i].onclick = function () {
    playSound(idAudio);
  }

}
