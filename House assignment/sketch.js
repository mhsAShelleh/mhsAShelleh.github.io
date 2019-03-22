/*
House assignment
Created by Abdelrahman Shelleh
March 18,2019
*/
function setup() {
  // put setup code here
  //create the canvas

  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  /*-----------------------BACKGROUND-----------------------------------*/
//the background color

// H, S & B integer values

background(0, 150, 300);


  //the sun
  fill(255,255,0);
  ellipse(200,50,100);

  //the ground of the house
  fill(0, 50,0);
  rect(0,350,800,600);

  /*-----------------------HOUSE-----------------------------------*/

  // set the width of the house
  // change this variable to scale the house
  let houseWidth=200;
  let houseHeight=100;
  let startX = width/2-houseWidth/2;
  let startY = 350-houseHeight;

  //Main part of the house
  fill(100, 40, 60);
  rect(startX, startY, houseWidth,houseHeight);

  //roof of the house
  fill(255,100,0)
  triangle(startX,startY,startX+houseWidth/2,startY-houseWidth/2,startX+houseWidth,startY)

  //Widows of the house
  fill(50,50,50)
  rect(startX+houseWidth/20, startY+houseHeight/10,houseWidth/4,houseHeight/4);
  rect(startX+houseWidth/1.5, startY+houseHeight/10,houseWidth/4,houseHeight/4);

  //House door
  fill(50, 200, 8000, 100)
  rect(startX+houseHeight/5+houseWidth/3.5,startY+houseWidth/4,houseWidth/5,houseHeight/2);

  //Door handle
  fill(1000,0,0)
  ellipse(startX+houseHeight/1.8*2,startY+houseWidth/2.5,houseHeight/10);

}
