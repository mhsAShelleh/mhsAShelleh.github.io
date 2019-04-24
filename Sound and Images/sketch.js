function preload() {
 mySound = loadSound('grenade-launcher-daniel_simon.mp3'); 
}

let x1=0
let x2=600
let y= 300
let size=50
let x1speed=5;
let x2speed=5;

//assume that the objects not collided
let hit= false;

function setup() {
  // put setup code here
  createCanvas(800,600);
 
}




function draw() {
  //check for collision
  hit= collideRectRect(x1,y,size,size,x2,y,size,size);
  
  //Output a statement to console
  print(hit);

  //If the objects hit into one another
  if (hit===true){
    background(255,0,0);
    stroke(0);
    textSize(60);
    text("GAME OVER",200,300);
    textSize(20);
    text("R=Reset Game",325,350);
    // createButton(Reset);
    noLoop();

  }

  //if they dont collide what to do
  else{
    background(127,200,100)
    fill(127)
    rect(x1,y,size,size);


    fill(127);
    rect(x1,y,size,size);

    fill(255);
    rect(x2,y,size,size);

    x1+=x1speed;
    x2+=x2speed;

    if(x1>width || x1<0){
      x1speed*=-1;

    }

    if(x2>width || x2<0){
      x2speed*=-1;
    }
  }
}




function keyPressed(){
 if (keyCode === 32){
 mySound.play();
  x1=0
  x2=600
  y= 300
  x1speed=5;
  x2speed=5;
  loop();
 }
}
