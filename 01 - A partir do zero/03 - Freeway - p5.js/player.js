
// Variáveis Player
let xPlayer = 100;
let yPlayer = 366;
let wPlayer = 30;
let hPlayer = 30;
let collision = false;

function movePlayer(){
  if (keyIsDown(UP_ARROW) && yPlayer > 0){
    yPlayer -= 2;
  }
  if (keyIsDown(DOWN_ARROW) && (yPlayer + hPlayer) < height){
    yPlayer += 2;
  }
  if (keyIsDown(LEFT_ARROW) && (xPlayer > 0)){
    xPlayer -= 2;
  }
  if (keyIsDown(RIGHT_ARROW) && (xPlayer + wPlayer) < width){
    xPlayer += 2;
  }
}

function showPlayer01(){
  image(imgPlayer, xPlayer, yPlayer, wPlayer, hPlayer);
}

function checkCollision() {
  
}