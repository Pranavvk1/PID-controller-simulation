function setup() {
  createCanvas(400, 400);
}

let x = 0;
let xSpeed = 0;
let kP = 0.001;
let kI = 0.00003;
let kD = 0.01;
let angle = 0;
let error = -x;
let sum = 0;

function draw() {
  background(0);
  translate(width / 2, height / 2);
  mouseControl();
  rotate(angle);
  stroke(255);
  line(-200, 0, 200, 0);
  ellipse(x, -25, 50, 50);
  xSpeed += sin(angle);
  x += xSpeed;

  pidControl();
}

function pidControl() {
  let prevError = error;
  sum += prevError / 60;
  error = -x;
  angle = kP * error + kI * sum + kD * (error - prevError);
}

function mouseControl() {
  if (mouseIsPressed) {
    x = mouseX * 0.5 - 100;
    xSpeed = 0;
    angle = 0;
  }
}
