function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play();
}

const padsList = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < padsList.length) {
  padsList.onClick = tocaSomPom;
  contador++;
}
