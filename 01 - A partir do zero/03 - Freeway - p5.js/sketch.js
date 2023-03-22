function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(bgFreeway);
  
  showPlayer();
  showCars();
  
  movePlayer();
}

