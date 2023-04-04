
// Variáveis Player
let xPlayer = 90;
let yPlayer = 366;
let wPlayer = 30;
let hPlayer = 30;
let collision = false;
let playerPoints = 0;
let justSpawned = false;

function movePlayer(){
  if (keyIsDown(UP_ARROW) && yPlayer > 0 && justSpawned == false){
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
  for (let i = 0; i < imgCars.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], wCars, hCars, ((xPlayer * 2) + wPlayer) / 2 , ((yPlayer * 2) + hPlayer) / 2 , hPlayer );
    if (collision && justSpawned == false){
      hasCollided();
    }
  }
  
}

function hasCollided(){
  if (playerPoints > 0) 
    playerPoints -= 1;
  backToInitialPosition();
}

function showPoints(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(playerPoints, width/5, 27);
}

function scorePoint(){
  if (yPlayer < hPlayer) {
    playerPoints += 1;
    backToInitialPosition();
  }
}

function backToInitialPosition(){
  yPlayer = height - (wPlayer * 1.1);
  xPlayer = width / 3;
  justSpawned = true;
  removeProtection();
}

async function removeProtection(){
  await sleep(1000)
  justSpawned = false

}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}