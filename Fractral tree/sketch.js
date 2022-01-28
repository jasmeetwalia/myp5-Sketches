function setup() {
  createCanvas(700, 400);
  angleMode(DEGREES);
  t = 45;
  
  stroke("pink");
   strokeWeight(1);
}

function draw() {
  background(0);
  translate(width / 2, height);
  drawBranch(width / 2, height / 2, 70);
  t=map(mouseX,0,width,0,20)
}
function drawBranch(x, y, s) {
 
  line(0, 0, 0, -s);
  line(0,s,0,s)
 // line(0,0,s,s)
  
  translate(0, -s);
  push();
  rotate(-t);
  if (s > 5) {
    drawBranch(0, -s, s * 0.75);
  }
  pop()
  push()
  rotate(t);
  if (s > 3) {
    drawBranch(0, -s, s * 0.75);
  }
  pop();
}
