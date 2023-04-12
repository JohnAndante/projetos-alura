/*function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  showPlayer(56, 80);
  movePlayer();

}
*/

// variáveis globais para o jogador e os tanques inimigos
let tankImg, bulletImg;
let player, tanks;

function preload() {
  // carrega as imagens antes do setup()
  tankImg = loadImage("");
  bulletImg = loadImage("images/shot01x2.png");
}

function setup() {
  createCanvas(400, 400);
  // inicia o jogador no centro da tela
  player = new Tank(width / 2, height / 2);
  // inicia os tanques inimigos
  tanks = [];
  for (let i = 0; i < 5; i++) {
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    tanks.push(new Tank(x, y));
  }
}

function draw() {
  background(220);

  // atualiza e desenha o jogador
  player.update();
  player.show();

  // atualiza e desenha os tanques inimigos
  for (let i = 0; i < tanks.length; i++) {
    let tank = tanks[i];
    tank.update();
    tank.show();

    // verifica se o jogador está dentro do raio de visão do tanque
    let d = dist(player.x, player.y, tank.x, tank.y);
    if (d < 100) {

      // aponta o tanque para o jogador
      let angle = atan2(player.y - tank.y, player.x - tank.x);
      tank.rotate(angle);

      // dispara uma bala em direção ao jogador
      if (frameCount % 60 == 0) {
        tank.shoot();
      }
    }
  }
}

function keyPressed() {
  // move o jogador de acordo com as teclas pressionadas
  if (keyCode === UP_ARROW) {
    player.move(0, -5);
  } else if (keyCode === DOWN_ARROW) {
    player.move(0, 5);
  } else if (keyCode === LEFT_ARROW) {
    player.move(-5, 0);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(5, 0);
  }
}

class Tank {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.bullets = [];
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  rotate(angle) {
    this.angle = angle;
  }
  shoot() {
    let bullet = {
      x: this.x,
      y: this.y,
      angle: this.angle,
    };
    this.bullets.push(bullet);
  }
  update() {
    // atualiza a posição das balas
    for (let i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      bullet.x += cos(bullet.angle) * 10;
      bullet.y += sin(bullet.angle) * 10;
      // remove a bala se ela saiu da tela
      if (
        bullet.x < 0 ||
        bullet.x > width ||
        bullet.y < 0 ||
        bullet.y > height
      ) {
        this.bullets.splice(i, 1);
        i--;
      }
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(tankImg, 0, 0, 50, 50);
    // desenha as balas
    for (let i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      push();
      translate(bullet.x, bullet.y);
      rotate(bullet.angle);
      imageMode(CENTER);
      image(bulletImg, 0, 0, 10, 10);
      pop();
    }
    pop();
  }
}
