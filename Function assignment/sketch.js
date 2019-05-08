/*-------------------Function Assignment------------------*/
//Abdol,March 20

function setup() {
  // put setup code here
  createCanvas(800,600,);
  background(127);
}


function draw() {
// put drawing code here
 let x=width/4;
 let y=height/4;

//window in top left corner
 drawWindow(x,y);

//window in top right corner
 x=3*width/4;
 drawWindow(x,y);

//window in bottom right corner
 y=3*height/4;
 drawWindow(x,y);

//window in bottom left corner
 x=width/4;
 y=3*height/4;
 drawWindow (x,y);

}



//Function for drawing a window

function drawWindow(newX,newY){
rect(newX,newY,100,100);
line(newX+50,newY,newX+50,newY+100);
line(newX,newY+50,newX+100,newY+50);

}
