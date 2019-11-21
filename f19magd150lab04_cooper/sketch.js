var slice = 1;
var topping = 0;
var toppingtext = 'Press P to apply 20 Pepperoni!';
var pizzatext = 'Click the mouse to start eating! When you finish, click again!';

function setup() {
  createCanvas(600, 600);
  background(15);
  
  fill(175,175,175);
  ellipse(300,300,500,500);
  
  fill(150,75,0);
  ellipse(300,300,450,450);
  
  fill(170,170,0);
  quad(100,195,175,115,300,300,75,300);
  quad(275,75,395,95,300,300,175,115);
  quad(485,175,525,300,300,300,395,95);
  quad(495,410,425,485,300,300,525,300);
  quad(310,525,195,500,300,300,425,485);
  quad(110,420,75,300,300,300,195,500);
  
}
  function draw() {
    if (topping == 20){
    textSize(20);
    fill(255);
    text(pizzatext,50,570);
    } else {
    textSize(24);
    fill(255);
    text(toppingtext,150,30);
    }
  }

  function mousePressed(){
     if (slice == 1 && topping == 20) {
    fill(150,75,0);
    stroke(150,75,0);
    quad(110,420,75,300,300,300,195,500);
    slice = slice + 1;
      } else {
    if (slice == 2) {
    fill(150,75,0);
    quad(310,525,195,500,300,300,425,485);
    slice = slice + 1;
        } else {
    if (slice == 3) {
    fill(150,75,0);
    quad(495,410,425,485,300,300,525,300);  
    slice = slice + 1;
          } else {
    if (slice == 4){
    fill(150,75,0);
    quad(485,175,525,300,300,300,395,95);
    slice = slice +1;
           } else {
    if (slice == 5) {
    fill(150,75,0);
    quad(275,75,395,95,300,300,175,115);
    slice = slice + 1;
    } else {
      if (slice == 6) {
    fill(150,75,0);
    quad(100,195,175,115,300,300,75,300);
    slice = slice + 1;
    } else {
      if(slice == 7){
        reset();
      }
    }
            }
          }
        }  
      }
    } 
  }

  function keyPressed(P){
     if(topping < 20){
        fill(240,0,0);
       ellipse(floor(random(150,450)),floor(random(150,450)),20,20);
       topping = topping +1;
     } 
  } 
  
  function reset(){
  stroke(0);
  fill(170,170,0);
  quad(100,195,175,115,300,300,75,300);
  quad(275,75,395,95,300,300,175,115);
  quad(485,175,525,300,300,300,395,95);
  quad(495,410,425,485,300,300,525,300);
  quad(310,525,195,500,300,300,425,485);
  quad(110,420,75,300,300,300,195,500);
  topping = 0;
  slice = 1;
  noLoop();
  }