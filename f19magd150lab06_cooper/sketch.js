//Creation of Player's paddle shape and speed
var playerPaddle = {
  x1: 50,
  y1: 50,
  x2: 50,
  y2: 150,
  yspeed:2,
  //The Paddle's Design
  paddle: function(){
  strokeWeight(5);
  stroke(255);
  line(this.x1,this.y1,this.x2,this.y2)
  },
  //Pressing W or S will move the paddle up or down respectively by 2 pixels
  movement: function(){
    if (keyIsPressed && key == 'w') {
      this.y1=this.y1 - 2;
      this.y2=this.y2 - 2;
    }
    if (keyIsPressed && key == 's') {
      this.y1=this.y1 + 2;
      this.y2=this.y2 + 2;
    }
  }
}

//Creation of the opponent's paddle
var opponentPaddle = {
  x1: 750,
  y1: 50,
  x2: 750,
  y2: 150,
  yspeed:2.5,
  paddle: function(){
  strokeWeight(5);
  stroke(255);
  line(this.x1,this.y1,this.x2,this.y2)
  },
  //Automatically moving paddle as an opponent
  movement: function(){
    this.y1 = this.y1+this.yspeed
    this.y2 = this.y2+this.yspeed
   if (this.y2 > height-25 || this.y1 < 0+25){
     this.yspeed = this.yspeed * -1
    }
  }
}

//Creation of the puck's shape and speed
var puck = {
  x:400,  y:125,
  xspeed:2.5,
  yspeed:2,
  puck: function(){
    strokeWeight(3);
    stroke(255);
    noFill();
    ellipse(this.x,this.y,25,25);
  },
  //The puck movement which includes changing direction when it hits a side.
  movement: function(){
    puck.x = puck.x + puck.xspeed;
    puck.y = puck.y + puck.yspeed;
    if (puck.x > width || puck.x < 0){
      puck.xspeed = puck.xspeed * -1;
    }
    if (puck.y > height || puck.y < 0){
      puck.yspeed = puck.yspeed * -1;
    }
  }
}

//Everytime the puck reachs an edge of the screen, it counts a point towards a player. It resets the puck to the center of the screen after every goal.
var goal = {
  score1:0,
  score2:0,
  gameScore: function(){
    if (puck.x > width){
      this.score1 = this.score1 + 1;
      puck.x = width/2
      puck.y = height/2
    }
    if (puck.x < 0){
      this.score2 = this.score2 + 1;
      puck.x = width/2
      puck.y = height/2
    }
    
  }
  
}

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(15);
  
  //Calling functions into draw
  playerPaddle.paddle();
  playerPaddle.movement();
  opponentPaddle.paddle();
  opponentPaddle.movement();
  puck.puck();
  puck.movement();
  goal.gameScore();
  
  strokeWeight(2);
  textSize(24);
  text(goal.score1,275,50,500,150)
  text(goal.score2,475,50,500,150)
  
  rect(325,50,100,75);
}

//This doesn't work, and I'm unsure why.
function onKeyPressed(){
  if(keyCode == r){
  rotate(PI/30.0);
  translate(-400,-150);
  scale(2);
  }
}