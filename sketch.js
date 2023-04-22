function setup() {
  createCanvas(800, 800);
}

function draw() {
  h=hour();
  m=minute();
  s=second();
  print(h,m,s)
  
  background(0);
  my_rect(400,400,250,3,s*6-90)
  my_rect(400,400,225,6,m*6-90)
  my_rect(400,400,200,12,h*30-90)
  ellipse(400,400,20,20)
  
}

function my_rect(x,y,w,h,d) {
  push();
  translate(x,y)
  rotate(radians(d))
  rect(0,-h/2,w,h)
  pop();
}