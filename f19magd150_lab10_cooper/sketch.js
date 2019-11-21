//The Cat model was done by snippysnappets at https://free3d.com/3d-model/low-poly-cat-46138.html

var angle = 0;
var cat;
var spotX;
var spotY;
var capture;

function preload(){
  cat = loadModel('cat.obj');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  //capture = createCapture(VIDEO);
  //capture.size(400,400);
}

function draw() {
  background(225);
  fill(200,200,200);
  spotX = mouseX - width/2;
  spotY = mouseY - height/2;

  //image(capture,0,0,400,400);
  
  let camX = map(mouseX,0,width,-600,400);
  camera(camX,0,(height/2) / tan(PI*30/180),0,0,0,0,1,0);

  push();
  translate(-200,-200);
  rotateX(angle);
  rotateZ(angle);
  normalMaterial();
  box(100);
  angle += 0.07;
  pop();
  
  push();
  translate(200,200);
  rotateX(angle);
  ambientLight(150,150,50);
  ambientMaterial(200,155,200);
  torus(50,15);
  angle += 0.03;
  pop();

  push();
  scale(.7);
  translate(-200,200);
  rotateZ(135);
  pointLight(50,100,50,spotX,spotY,50);
  specularMaterial(150,50,150);
  model(cat);
  angle == 180;
  pop();
}