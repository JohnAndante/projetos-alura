// Variáveis da bolinha
let xCircle = 300;
let yCircle = 200;
let dCircle = 20;
let rCircle = dCircle/2;
let velxCircle = 5;
let velyCircle = 5;

// Variáveis da Raquete 01
let xPad1 = 10;
let yPad1 = 150;
let velyPad1 = 5;

// Variáveis da Raquete 02
let xPad2 = 570;
let yPad2 = 150;
let velyPad2 = 5;

// Variáves de Tamanho dos Pads
let wPad = 10;
let hPad = 100;

// Variáveis de Colisão
let collision = false;

// Variáveis de Pontuação do Jogo
let playerPoints = 0;
let botPoints = 0;

// Variáveis de Sons do Jogo
let soundPadStrike;
let soundPoint;
let soundTrack;

function preload() {
  soundPadStrike = loadSound("sounds/raquetada.mp3");
  soundPoint = loadSound("sounds/ponto.mp3");
  soundTrack = loadSound("sounds/trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  soundTrack.loop();
}

function draw() {
  background(0);
  
 
  drawCircle();
  drawPad(xPad1, yPad1);
  drawPad(xPad2, yPad2);
  
  moveCircle();
  checkCircleBorderCollision();
  checkCollisionCirclePad(xPad1, yPad1, wPad, hPad);
  checkCollisionCirclePad(xPad2, yPad2, wPad, hPad);
  
  movePlayer1Pad();
  movePlayer2Pad();
  
  showPoints();
  scorePoint();
  
}

function drawCircle(){
  circle(xCircle, yCircle, dCircle);
  
}

function moveCircle(){
  xCircle += velxCircle;
  yCircle += velyCircle;
  
}

function checkCircleBorderCollision(){
  if ((xCircle + rCircle) > width || (xCircle - rCircle) < 0) {
    velxCircle *= -1;
  }
  if ((yCircle + rCircle) > height || (yCircle - rCircle) < 0) {
    velyCircle *= -1;
  }
}

function checkCollisionCirclePad(x, y, w, h){
  collision = collideRectCircle(x, y, w, h, xCircle, yCircle, rCircle)
  if (collision) {
    velxCircle *= -1;
    soundPadStrike.play();
  } else{
    velxCircle *= 1;
  }
}

function drawPad(x, y){
  rect(x, y, wPad, hPad);
}

function movePlayer1Pad(){
  if (keyIsDown(UP_ARROW) && (yPad1 > 0 )) {
    yPad1 -= velyPad1;
  }
  if (keyIsDown(DOWN_ARROW) && ((yPad1 + hPad) < height)) {
    yPad1 += velyPad1;
  }
}

function movePlayer2Pad(){
  if (keyIsDown(87) && (yPad2 > 0)) {
    yPad2 -= velyPad2;
  }
  if (keyIsDown(83) && ((yPad2 + hPad) < height)) {
    yPad2 += velyPad2;
  }
}

function showPoints(){
  stroke(255);
  textAlign(CENTER);
  textSize(24);
  fill(250, 140, 20);
  rect(240, 27, 40, 30);  
  rect(320, 27, 40, 30);
  fill(255);
  text(playerPoints, 260, 50);
  text(botPoints, 340, 50);
}

function scorePoint(){
  if (xCircle >= 595) {
    playerPoints += 1;
    soundPoint.play();
    
  }
  if (xCircle <= 5) {
    botPoints += 1;
    soundPoint.play();
  }
}