// Variáveis carros
let xCars = [600, 600, 600];
let yCars = [40, 96, 150];
let velCars = [2, 3, 2.5];

function showCars() {
  for (let i = 0; i < imgCars.length; i++) {
    image(imgCars[i], xCars[i], yCars[i], 50, 40);
  }
}

function moveCars() {
  for (let i = 0; i < imgCars.length; i++) {
    xCars[i] -= velCars[i];
  }
}

function returnToStart() {
  for (let i = 0; i < imgCars.length; i++) {
    if (hasCarCrossedScreen(i)) {
      xCars[i] = width + 50;
    }
  }
}

function hasCarCrossedScreen(i) {
  return xCars[i] < -50;
}
