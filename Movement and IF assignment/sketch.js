//Global Variables
let x=100;
let y=100;

let xSpeed=10;
let ySpeed=10;

let size=100;
let xsize=100;

function setup() {
// put setup code here

frameRate(200);

createCanvas(1600,1200);
}

function draw() {
  // put drawing code here
  //change the background
  background(66, 152, 244);
  //Draw the rectangle
  rect(x,y,xsize,xsize);
  //Move the rectangle
  x+=xSpeed;
  y+=ySpeed;


  //If reaches bottom change direction
  if(y+size>=height || y<=0){
    ySpeed=ySpeed*(-1);
  }


  //If reaches the rigth side change direction
  if (x+size>=width || x<=0){
    xSpeed=xSpeed*(-1);
  }

//When hits a side make the sqaure even larger
  if(y+size>=height || y<=0){
    fill(122);
    xsize+=size/4;
  }

  if (x+size>=width || x<=0){
    xsize-=size/4;
    fill(193,135,19);
  }
}
