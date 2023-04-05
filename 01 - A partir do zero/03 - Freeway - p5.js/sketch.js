function setup() {
  createCanvas(500, 400);
  backgroundMusic.loop();
}

function draw() {
  background(bgFreeway);
  
  showPlayer01();
  showCars();
  
  movePlayer();
  moveCars();
  returnToStart();
  
  checkCollision();
  showPoints();
  scorePoint();
}

