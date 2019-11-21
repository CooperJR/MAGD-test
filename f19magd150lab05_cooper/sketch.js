//PowerButton
  var x1=50;
  var y1=460;
  var h1=50;
  var w1=50;
//RightButton
  var xr=265;
  var y= 450;
  var w=100;
  var h=35;

//OrangeCircle
  var cx = 260;
  var cy = 150;
  var speed = 2;     
  var tvscreen =255;
  var circleColor = (0,150,255);

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  fill(tvscreen);
  rect(50,35,400,400,50);
  
  //RightButton
  fill(150,250,0);
  rect(xr,y,w,h);
  
  //PowerButton
  fill(200,100,100);
  ellipse(x1,y1,h1,w1);
  fill(0);
  textSize(32);
  text("O",37.5,474);
  textSize(28);
  text("|",46,460);
  textSize(24);
  text("Color",285,475);
  
  //Circle Movement
  if(cx > 425 || cx <= 75 || cy > 405 || cy < 65 ){
  speed = speed * -1
    print("Working Movement")
  }
  cx = cx + speed
  cy = cy + speed
  
  if(tvscreen == 255){
    fill(circleColor);
    ellipse(cx,cy,50,50);
  }
  
}
function mousePressed(){
    if(mouseX>x1-w1/2 && mouseX<x1+w1/2 && mouseY>y1-h1/2 && mouseY<y1+h1/2 && tvscreen == 255){
      tvscreen = 100;
    } else {
    if(mouseX>x1-w1/2 && mouseX<x1+w1/2 && mouseY>y1-h1/2 && mouseY<y1+h1/2 && tvscreen == 100){
      tvscreen = 255;
    }  else {
    if(mouseX>xr && mouseX<xr+w && mouseY>y && mouseY<y+h){
          print("I'm a working button!")
          circleColor = 200,100,0
        }    
      }
    }
  }

//Tried to have a channel button that would remove the circle and replace it with a rectangle,
//however I couldn't figure out how to remove the circle and be able to return to it. Due to time constraints I also couldn't get proper color and movement for the circle. 
//I tried looking at a couple tutorials but they didn't seem to work for me. The button wouldn't work as intended even though it read the click of the mouse. 