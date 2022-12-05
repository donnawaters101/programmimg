var value = 0;

function setup() {
  // put setup code here
  createCanvas(600, 500);
}

function draw() {
  // put drawing code here
  background(255, 0, 0);

  fill(0, 255, 0);
  circle(100, 50, 80);

  fill(value);
  rect(250, 100, 100, 80);
}

function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
