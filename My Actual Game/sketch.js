/*
level 1---> Instructions
level 2---> Game
level 2---> Ending
*/
let width=1240
let height=820
let level = 0;
let x= width/10
let y= height/1.8
let jump = false;  //Character is NOT jumping
let dy = 0  //Change in height  <------------------------
let gravity = 0

function preload() {
  //Assign the image file to the variable
  img = loadImage('background-mountain.jpg');
  walpaper= loadImage('walpaper.jpg')
  gif_loadImg = loadImage("walkingNew.gif");
  gif_createImg = createImg("walkingNew.gif");

}


function setup() {
  createCanvas(1240,820);
}

function draw() {

  if (level ===0) {
    //Show the instructions to the user
    gif_createImg.position(-500, -500);
    image (walpaper,0,0,1240,820);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(64);
    text('SPACE BLAST', width/2, height/4);
    textSize(16);
    text('You are the last survivor, of a crashed space ship.The space ship crashed on an unknown planet that contains life and you were flung accross the planet. Stay cautious\n Use the S button to shoot and the arrows to move \n There are 3 levels to the game and you will win once you make it back to the space ship', width/2, height/2+50);
    text('Press enter to continue', width/2, height/2+100);

    if (keyIsDown(ENTER)) {
      level+=1;
       }
    }


  else if (level ===1) {
                            /*--------------------------The score Board-------------------------*/
    if (y>height/1.8) {
      y = height/1.8;
      gravity = 0;
      dy = 0;
      jump = false;

    }
    //Change the background and add the character
    image(img, 0, 0, 1240,820);
    fill(140);
    rect(0,750,1240,70);
    gif_createImg.position(x,y);

    y-=dy
    dy-=gravity
    print(dy)
    //Move the character based on input from the user (arrow keys)


    if (keyIsDown(RIGHT_ARROW)) {
      x+=5;
    }

    if (keyIsDown(LEFT_ARROW)) {
      x-=5;

    }

    if (keyIsDown(UP_ARROW) && jump===false) {
      jump=true
      dy = 15;
      gravity = 0.5
    }

    if (keyIsDown(DOWN_ARROW)) {
      y+=5;
    }

    if (x<=0){
      x+=5
    }

    else if (x>=970){
      x-=10
      level+=1
    }

    // Blocks for the game
    fill(0)
    rect(width/3,height/1.5,200,40)
   }



  /*--------------------END GAME--------------------*/
  /*--------------------WIN SCREEN--------------------*/

  else if (level===2) {
    //Change the backround and inform the user that they won
    background(0,255,0);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('YOU WIN!', width/2, height/2);
    textSize(16);
    text('Press enter to play again', width/2, height/2+50);

    //If the user presses enter, reset the x and y value and reset the level to level 1 (game)
    if (keyIsDown(ENTER)) {
      x=width/2;
      y=height/2;
      level=1;
    }
  }


}
