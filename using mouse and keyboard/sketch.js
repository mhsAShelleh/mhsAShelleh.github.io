//Global Variables
let x=100;

function setup() {
  createCanvas(800, 600);
  background(100,100,200);

}

function draw() {
  rect(mouseX, mouseY,x/5, x/5);
  if (mouseIsPressed) {
    // When the mouse button is pressed
    // change the colour randomly
    fill(random(255), random(255), random(255));
  }
  if (mouseIsPressed) {
    //when mouse button is heading the size changes
    rect(mouseX,mouseY,x/2,x/2);
    }
    // When the mouse button is pressed
    // direct the line

    if (mouseIsPressed) {
       line(x/5, x/5,mouseX,mouseY);
}
}


//If the mouse is dragged them change the colour of the squares
function mouseDragged(){
  rect(mouseX, mouseY,x/5, x/5);
  if (mouseIsPressed) {
    // When the mouse button is pressed
    // change the colour randomly
    fill(random(255), random(255), random(255));
  }
  if (mouseIsPressed) {
    //when mouse button is heading the size changes
    rect(mouseX,mouseY,x/2,x/2);
    }

}


function keyPressed(){
  if (keyIsPressed === true) {
    background(100,100,200);
  } else {
   (0);
  }
  background(100,100,200);}

function mouseDragged(){
  line(x/5, x/5,mouseX,mouseY);

}
