function playSound (idAudioElement) {
  const element = document.querySelector(idAudioElement);
  if (element != null && element.localName === 'audio') {
    element.play();
  } else {
    console.log("Element not found");
  }

}

const padsList = document.querySelectorAll('.tecla');


for (let i = 0; i < padsList.length; i++) {

  const pad = padsList[i];
  const inst = pad.classList[1];
  const idAudio = `#som_${inst}`;

  padsList[i].onclick = function () {
    playSound(idAudio);
  }

  pad.onkeydown = function (event) {
    if (event.key === "Enter" || event.key === "Space") {
      pad.classList.add('ativa');
    }
  }

  pad.onkeyup = function () {
    pad.classList.remove('ativa');
  }

}
