
// variáveis do jogador
let xPlayer = 300;
let yPlayer = 300;
let wPlayer = 30;
let hPlayer = 50;
let velPlayer = 2;
let dirPlayer = 1;
// 1 => ^ 
// 2 => ->
// 3 => v
// 4 => <-


let xShot = 0;
let yShot = 0;
let wShot = 8;
let hShot = 12;
let velShot = 5;
let dirShot = 1;
// 1 => ^ 
// 2 => ->
// 3 => v
// 4 => <-


function showPlayer (newX, newY) {
  wPlayer = newX;
  hPlayer = newY;
  image(tank01x2, xPlayer, yPlayer, newX, newY);
  //rect(xPlayer, yPlayer, wPlayer, hPlayer);
}

function movePlayer () {
  if (keyIsDown(UP_ARROW) && yPlayer > 0) {
    yPlayer -= velPlayer;
    if (dirPlayer != 1)
      rotatePlayer(1);
  }

  if (keyIsDown(DOWN_ARROW) && (yPlayer + hPlayer) < height) {
    yPlayer += velPlayer;
    if (dirPlayer != 3)
      rotatePlayer(3);
  }

  if (keyIsDown(LEFT_ARROW) && xPlayer > 0) {
    xPlayer -= velPlayer;
    if (dirPlayer != 4)
      rotatePlayer(4);
  }

  if (keyIsDown(RIGHT_ARROW) && (xPlayer + wPlayer) < width) {
    xPlayer += velPlayer;
    if (dirPlayer != 2)
      rotatePlayer(2);
  }

  if (keyIsDown(32)) {
    shoot(dirPlayer);
  }
}

function rotatePlayer (newDir) {
  dirPlayer = newDir;
  console.log(dirPlayer.valueOf());
}

function shoot(newDir) {
  dirShot = newDir;
  if (dirShot == 1) {
    xShot = (xPlayer + (wPlayer / 2)) - (wShot / 2);
    yShot = (yPlayer - hShot);
    image(shot01x2, xShot, yShot, wShot, hShot);

    moveShot();
  }
}

function moveShot() {
  if (dirShot == 1)
    yShot += velShot;
}