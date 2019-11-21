var keywords = ["Nature","Trees","Flowers","Wildlife"];
var word = 0;

class Flower {
  constructor(x,h){
    this.x = x;
    this.y = 500;
    this.stemHeight = h;
  }
  
  shape(){
    fill(75,150,100);
    rectMode(CENTER);
    rect(this.x,this.y+50,25,this.stemHeight);
    
    //This is creating the petals, around the flower's head, that will always be a certain distance away from the center of it. This is to "bind" them together with the flower head.
    fill(200,100,0);
    ellipse(this.x-25,this.y,50);
    ellipse(this.x,this.y-25,50);
    ellipse(this.x+25,this.y,50);
    ellipse(this.x,this.y+25,50);
  
    fill(100,75,50);
    ellipse(this.x,this.y,50);
  }
  
}
  
function setup() {
  createCanvas(800, 600);
  //Each line of flower'x' calls for a new object from the flower class created at the start of the sketch. It is then placed in a different spot each time, and the stem's height changes.
  flower1 = new Flower(75,100);
  flower2 = new Flower(200,75);
  flower3 = new Flower(325,25);
  flower4 = new Flower(455,50);
  flower5 = new Flower(565,85);
  flower6 = new Flower(745,40);
  flower7 = new Flower(660,65);
}

//Everything in draw is creating a background to place the flowers on, to give it a nature feel. It includes a tree, the ground the flowers are on, and the text that changes according to your button press.
function draw() {
  background(0,100,50);
  rectMode(CORNER);
  
  fill(150,100,100);
  rect(100,50,100,500);
  fill(0,200,50);
  ellipse(50,-15,250);
  ellipse(225,-35,225);
  fill(25);
  ellipse(150,200,25,45);
  
  fill(120,100,100);
  rect(0,535,width,100);

  textSize(32);
  fill(255);
  text(keywords[word],350,100);
  
  flower1.shape();
  flower2.shape();
  flower3.shape();
  flower4.shape();
  flower5.shape();
  flower6.shape();
  flower7.shape();
}

//Everytime you click the mouse button, the array index # goes up by one and replaces the text with another key word relating to nature. When the index # reaches 4, it resets back to 0 to create a loop.
function mousePressed(){
  word = word + 1;
  
  if(word == 4){
   word = 0; 
  }
}