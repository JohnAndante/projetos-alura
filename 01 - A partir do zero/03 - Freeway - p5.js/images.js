// Variáveis de imagens
let bgFreeway;
let imgPlayer;
let imgCar01;
let imgCar02;
let imaCar03;

// Variáveis de sons
let backgroundMusic;
let fxCollision;
let fxPoints;

function preload(){
  bgFreeway = loadImage("images/estrada.png");
  imgPlayer = loadImage("images/ator-1.png");
  imgCar01 = loadImage("images/carro-1.png");
  imgCar02 = loadImage("images/carro-2.png");
  imgCar03 = loadImage("images/carro-3.png");
  
  imgCars = [imgCar01, imgCar02, imgCar03, imgCar01, imgCar02, imgCar03];
  
  backgroundMusic = loadSound("sounds/trilha.mp3");
  fxCollision =  loadSound("sounds/colidiu.mp3");
  fxPoints =  loadSound("sounds/pontos.wav");
  
  
}