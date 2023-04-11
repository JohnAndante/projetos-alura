
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


function showPlayer (newX, newY) {
  wPlayer = newX;
  hPlayer = newY;
  image(tank01x2, xPlayer, yPlayer, newX, newY);
  dirPlayer = 0;
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
}

function rotatePlayer (newDir) {
  dirPlayer = newDir;
  console.log(dirPlayer.valueOf());
}