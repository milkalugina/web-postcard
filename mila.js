let t;
let i;

let s;
let u;
let p;
let e;
let r;

let theta = 0;

let myCanvas;
function preload() {
  t = loadImage('https://sun1.43222.userapi.com/4wcNqGzUFbFHquaM-mYsbrrlqb7_qrMKvdF5fA/X2I9pJ_3ehs.jpg');
  i = loadImage('https://sun3.43222.userapi.com/c6J0bPIatUaw01WwSawkKuMFK7jyrap8HpuTvQ/G7nXd79WnRs.jpg');

  s = loadImage('https://sun2.43222.userapi.com/U1cGxDRRTHQ8ge8NVzql6VqDPIFUIW49XzMqwA/Lr1dhZVcaf4.jpg');
  u = loadImage('https://sun2.43222.userapi.com/w2IIRUBx9TNxDe8rXoiOGYkODD7gv-QXC7xDcw/9IyuKmBWe3E.jpg');
  p = loadImage('https://sun2.43222.userapi.com/atVm6gWafxjmerEmPJ0RHz-BDd0jh8QFZxCKdA/70PceLCljKI.jpg');
  e = loadImage('https://sun1.43222.userapi.com/KyV4nCVQbf4fB4-HbWyZYoKHD8p21nl4s5cmwQ/VoDmM30Ojko.jpg');
  r = loadImage('https://sun3.43222.userapi.com/Hm1za8R6cnCxttOwgdp95dL5z2IEY0cNT0ITxQ/EhTId9XCnFA.jpg');
}

function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    myCanvas.parent("canvas");
    image(t, 10, 10);
    image(i, 10, 10);

    image(s, 10, 10);
    image(u, 10, 10);
    image(p, 10, 10);
    image(e, 10, 10);
    image(r, 10, 10);
}

function draw() {
  background('#1F1F1F');

  push();
  translate(-200, -210, 0);
  noStroke();
  rotateZ(theta * mouseY * 0.0001);
  rotateX(theta * mouseX * 0.0004);
  rotateY(theta * mouseY * 0.0001);
  texture(t);
  box(200, 200, 200);
  pop();
  theta += 0.015;

  push();
  translate(200, -210, 0);
  noStroke();
  rotateZ(theta * mouseX * 0.0001);
  rotateX(theta * mouseY * 0.0001);
  rotateY(theta * mouseX * 0.0004);
  texture(i);
  box(200, 200, 200);
  pop();
  theta += 0.01;


  push();
  translate(-500, 120, 0);
  noStroke();
  rotateZ(theta * mouseY * 0.0001);
  rotateX(theta * mouseX * 0.0001);
  rotateY(theta * mouseY * 0.0004);
  texture(s);
  box(150, 150, 150);
  pop();
  theta += 0.02;

  push();
  translate(-230, 120, 0);
  noStroke();
  rotateZ(theta * mouseX * 0.0001);
  rotateX(theta * mouseY * 0.0001);
  rotateY(theta * mouseX * 0.0004);
  texture(u);
  box(150, 150, 150);
  pop();
  theta += 0.02;

  push();
  translate(0, 120, 0);
  noStroke();
  rotateZ(theta * mouseY * 0.0001);
  rotateX(theta * mouseX * 0.0001);
  rotateY(theta * mouseY * 0.0004);
  texture(p);
  box(150, 150, 150);
  pop();
  theta += 0.02;

  push();
  translate(230, 120, 0);
  noStroke();
  rotateZ(theta * mouseX * 0.0001);
  rotateX(theta * mouseY * 0.0001);
  rotateY(theta * mouseX * 0.0004);
  texture(e);
  box(150, 150, 150);
  pop();
  theta += 0.02;

  push();
  translate(500, 120, 0);
  noStroke();
  rotateZ(theta * mouseY * 0.0001);
  rotateX(theta * mouseX * 0.0001);
  rotateY(theta * mouseY * 0.0004);
  texture(r);
  box(150, 150, 150);
  pop();
  theta += 0.02;
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
