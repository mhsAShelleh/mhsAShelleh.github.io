

let Facewidth = 100;
let Faceheight = 150;


function setup() {
  createCanvas(1280,850);
  background(127);
}

function draw() {

/*-------------------Draw the Face-----------*/
  drawFace();

/*----------------Draw the eyes @Abdol---------------*/
let x=width/2+Facewidth;
let y=height/2-Faceheight;

drawEye(x,y);

x=width/2-Facewidth;
y=height/2-Faceheight;
drawEye(x,y);

/*--------------------Draw the nose-----------------*/
drawNose();

/*------------------draw the draw eye brows- by: ABDOL,MATT--------*/
 x=width/2-Facewidth*1.5;
 y=height/2-Faceheight*1.35;

drawBrows(x,y);

x=width/2+Facewidth/2
drawBrows(x,y);

}







// Draw the eyes Function @Abdol
function drawEye(newX,newY){
  stroke(0);
  fill(255);
  ellipseMode(CENTER);
  ellipse(newX,newY,Facewidth,Facewidth/2);
  fill(161, 202, 241);
  ellipse(newX,newY,Facewidth/3,Facewidth/3);
  fill(0);
  ellipse(newX+5,newY,Facewidth/9,Facewidth/9);
}

// Draw the head @Charlie
function drawFace(){
//Draw the face/head @Charlie
fill(255,224,189);
stroke(230,202,171);
fill(230,202,171);
quad(width/2-Facewidth*2.42,Facewidth*2+Facewidth/3,width/2+Facewidth*2.42,Facewidth*2+Facewidth/3, width/2+Facewidth*1.75,Faceheight/5,width/2-Facewidth*1.75,Faceheight/5);
quad(width/2-Facewidth*2.42,Facewidth*2+Facewidth/3,width/2+Facewidth*2.42,Facewidth*2+Facewidth/3, width/2+Facewidth*2.42,height/2+Faceheight/2,width/2-Facewidth*2.42,height/2+Faceheight/2);
quad(width/2-Facewidth*2.42,height/2+Faceheight/2, width/2+Facewidth*2.42,height/2+Faceheight/2, width/2+Facewidth*1.75,Faceheight*5, width/2-Facewidth*1.75,Faceheight*5);
}

// Draw the Nose Function @ Matt
function drawNose(){
  //Draw the nose @Matt
noStroke();
fill(255,224,189);
triangle(width/2-Facewidth/2.5,height/2+Faceheight/3,width/2,height/2-Faceheight/6,width/2+Facewidth/2.5,height/2+Faceheight/3);
fill(0);
ellipse(width/2-Facewidth/5.25,height/2+Faceheight/4,Facewidth/5,Facewidth/5);
ellipse(width/2+Facewidth/5.25,height/2+Faceheight/4,Facewidth/5,Facewidth/5);
}

  /*---------------- Draw eyebrows @Abdol------------------ */
function drawBrows(newX,newY){
rect(newX,newY,Facewidth,Facewidth/6.66);
}
