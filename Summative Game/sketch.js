/*
level 1---> Instructions
level 2---> Game
level 2---> Ending
*/
let width=1240;
let height=820;
let level = 0;
let x= 0;
let y= 0;
let jump = false;  //Character is NOT jumping
let dy = 0;  //Change in height  <------------------------
let gravity = 0;
let falling = true;
let force = false;
let right=false;
let left=false;
let shoot=false;
let z=x;
let health=50



// Enemy variables.
//E0
let c=x;
let d=x;
//E1
let c1=x;
let d1=x;
//E2
let c2=x;
let d2=x;
//E3
let c3=x;
let d3=x;
//E4
let c4=x;
let d4=x;
//E5
let c5=x;
let d5=x;
//E6
let c6=x;
let d6=x;
//E7
let c7=x;
let d7=x;
//E8
let c8=x;
let d8=x;



function preload() {
  //Assign the image file to the variable
  img = loadImage('./images/background-mountain.png');
  walpaper= loadImage('./images/walpaper.jpg');
  gif_loadImg = loadImage("./images/walkingNew3.gif");
  gif_createImg = createImg("./images/walkingNew3.gif");
  bossofdeath=loadImage('./images/boss2.gif');
bossofdeathgif=createImg("./images/boss2.gif");
  img1 = loadImage('./images/stairs.png');
  bullet = loadImage('./images/bullet2.jpg');
  enemy = loadImage('./images/alien.png');
  enemy1 = loadImage('./images/alien.png');
  enemy2 = loadImage('./images/alien.png');
  enemy3 = loadImage('./images/alien.png');
  enemy4 = loadImage('./images/alien.png');
  enemy5 = loadImage('./images/alien.png');
  enemy6 = loadImage('./images/alien.png');
  enemy7 = loadImage('./images/alien.png');
  enemy8 = loadImage('./images/alien.png');
  death = loadImage('./images/death.jpg');
  win = loadImage('./images/win.jpg');




}


function setup() {
  createCanvas(1240,820);
}


function draw() {

  if (level ===0) {
    //Show the instructions to the user
    gif_createImg.position(-500, -500);
    bossofdeathgif.position(-5000,-5000)
    image (walpaper,0,0,1240,820);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(64);
    text('Alien Hunter', width/2, height/4);
    textSize(16);
    text('You are the last survivor, of a crashed spaceship.The spaceship crashed on an unknown planet that contains life. You were flung accross the planet. Stay cautious!!!\n Your goal is to make it back to your ship and go home', width/2, height/2+50);
    textSize(20);
    text('\n\n\n\nPress ENTER to start \n\n\n Press BACKSPACE for instructions', width/2, height/2+100);

    if (keyIsDown(ENTER)) {
      level+=2;
       }
    if (keyIsDown(BACKSPACE)) {
         level+=1;
          }
    }


    else if (level===1) {
      image (walpaper,0,0,1240,820);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(32);
      text('How to Play!', width/2, height/2-100);
      textSize(16);
      text('S = Shoot \n\n MOVE = Right--Left--Up--Down Arrows \n\n\n Press Enter to continue', width/2, height/2+50);

      if (keyIsDown(ENTER)) {
        level+=1;
         }
    }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 1
  else if (level ===2) {

    /*---------------Landing of the player and the ladder areas---------*/

    //part 1 of level 1 collide and stop the player
    hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

    //collision of the ladder area and the player
    hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

    //part 2 of level 1 collide and stop the player
    hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

    //collsion of the ladder 2 are and the player
    hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

    //part 3 of level 1 collide and stop the player
    hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

    //collision of the ladder area and the player
    hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

    //part 4 of level 1 collide and stop the player
    hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





/*---------------------What to do when the player has landed or jumps--------------*/

//Print all of our vertical values
//print("Force:",force);
//print("dy:",dy);
//  print("x:",x);


    //Check if character hits the base
    if (y>height/1.09) {
      y = height/1.09;
      gravity = 0;
      dy = 0;
      jump = false;

    }

    //Check if character hits floating platform AND is falling
    else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
      dy = 0;
      gravity = 0;
      jump = false;
    }

    //If character isn't jumping, pull down on them
    else if (jump === false) {
      dy = -5;
      gravity = .5;
    }

    //the ladders and bringing the character down
    if (hit2===true|| hit3===true || hit5===true){
      force = true;
    }
    //when the player is not on the ladder force is false
    else if (hit3===false){
      force = false;
    }




    //background and add the character placement
    image(img, 0, 0, 1240,820);
    gif_createImg.position(x,y);
    y-=dy;
    dy-=gravity;

/*---------------- Controls of the character--------------- */

  if (keyIsDown(RIGHT_ARROW)) {
      right=true
      x+=7;


    }

  if (keyIsDown(LEFT_ARROW)) {
       left=true
      x-=7;

    }


  if (keyIsDown(UP_ARROW) && jump===false) {
      right=false
      left=false
      jump=true;
      dy = 15;
      gravity = 0.5;
    }

  if (keyIsDown(DOWN_ARROW) && force===true) {
      right=false
      left=false
      y+=5;
    }

    //dont allow player to go off the map
  if (x<=0){
      x+=5;
    }

    else if (x>=1180){
    x-=10;
      //level+=1;
  }

//to change from walking into stop
  if (left===true||right===true){
    gif_createImg.position(x,y);
    image(gif_loadImg,x-10000,y-10000);
  }

    else if (left===false||right===false){
    gif_createImg.position(x-10000,y-10000);
    image(gif_loadImg,x,y);
  }


  //the character's ability to shoot bullets

  shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





  if (shoot===true){
  z+=80
  image(bullet,z,y+40,1,1);
}

 if (shoot1===true){
   image(bullet,z,y+30,1,1);
}

else if (shoot1===false){
    image(bullet,z,y+30,10,10);
}

if (z>=1180){
    z-=1500
    image(bullet,z,y+30,1,1);
    shoot=false

}

/*----------------------------The Enemy-----------------------------*/
  ////////////////////////////////////////////////////////// Enemy NUMBER 0
 //Enemy move
 c-=4
 // collision of bullet with the enemy
  shoot2=collideRectRect(z,y+30,10,10,c+600,d+110,95,100);

if (shoot2===false){
  image(enemy,c+600,d+110,100,100);
}


if (shoot2===true){
  c+=70000
  d+=70000
  image(enemy,c,d,100,100);
  z-=1500
  image(bullet,z,y+30,1,1);
  shoot=false
}

//if enemy0 hits player, player dies
  body0=collideRectRect(x,y,2,100,c+600,d+130,20,50);

if (body0===true){
  level+=28
}

// MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

if (c<=-620){
  c=1100
}

////////////////////////////////////////////////////////// Enemy NUMBER 1

//Enemy move
  c1-=4

  // collision of bullet with the enemy
shoot3=collideRectRect(z,y+30,10,10,c1+700,d1+110,95,100);

if (shoot3===false){

  image(enemy1,c1+700,d1+110,100,100);
}


if (shoot3===true){
  c1+=70000
  d1+=70000
  image(enemy1,c1,d1,100,100);
  z-=1500
  image(bullet,z,y+30,1,1);
  shoot=false
}


//if enemy1 hits player, player dies
body1=collideRectRect(x,y,1,100,c1+700,d1+130,20,50);

if (body1===true){
level+=28
}

// MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c1<=-720){
c1=1100
 }

////////////////////////////////////////////////////////// Enemy NUMBER 2

//Enemy move
c2-=2

// collision of bullet with the enemy
shoot3=collideRectRect(z,y+30,10,10,c2+800,d2+110,95,100);

if (shoot3===false){

  image(enemy2,c2+800,d2+110,100,100);
}


if (shoot3===true){
  c2+=70000
  d2+=70000
  image(enemy2,c2,d2,100,100);
  z-=1500
  image(bullet,z,y+30,1,1);
  shoot=false
}

//if enemy2 hits player, player dies
body2=collideRectRect(x,y,1,100,c2+800,d2+130,20,50);

if (body2===true){
level+=28
}


// MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c2<=-820){
c2=1100
 }
////////////////////////////////////////////////////////// Enemy NUMBER 3

//Enemy move
c3-=5

// collision of bullet with the enemy
shoot3=collideRectRect(z,y+30,10,10,c3+900,d3+110,95,100);

if (shoot3===false){

  image(enemy3,c3+900,d3+110,100,100);
}


if (shoot3===true){
  c3+=70000
  d3+=70000
  image(enemy3,c3,d3,100,100);
  z-=1500
  image(bullet,z,y+30,1,1);
  shoot=false
}

//if enemy2 hits player, player dies
body3=collideRectRect(x,y,1,100,c3+900,d3+130,20,50);

if (body3===true){
level+=28
}

// MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c3<=-840){
c3=1100
 }

////////////////////////////////////////////////////////// Enemy NUMBER 4

//Enemy move
  c4-=4

  // collision of bullet with the enemy
shoot3=collideRectRect(z,y+30,10,10,c4+1000,d4+510,95,100);

if (shoot3===false){
  image(enemy3,c4+1000,d4+510,100,100);
}


if (shoot3===true){
  c4+=70000
  d4+=70000
  image(enemy3,c4,d4,100,100);
  z-=1500
  image(bullet,z,y+30,1,1);
  shoot=false
}


//if enemy2 hits player, player dies
body4=collideRectRect(x,y,1,100,c4+1000,d4+530,20,50);

if (body4===true){
level+=28
}

// MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c4<=-1020){
c4=1100
 }


////////////////////////////////////////////////////////// Enemy NUMBER 5
//Enemy move
c5-=4

// collision of bullet with the enemy
shoot4=collideRectRect(z,y+30,10,10,c5+700,d5+510,95,100);

if (shoot4===false){
  image(enemy5,c5+700,d5+510,100,100);
}


if (shoot4===true){
  c5+=70000
  d5+=70000
  image(enemy5,c5,d5,100,100);
  z-=1500
  image(bullet,z,y+30,1,1);
  shoot=false
}

//if enemy5 hits player, player dies
body5=collideRectRect(x,y,1,100,c5+700,d5+530,20,50);

if (body5===true){
level+=28
}

// MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c5<=-720){
c5=1100
 }


 ////////////////////////////////////////////////////////// Enemy NUMBER 6
 //Enemy move
 c6-=4

 // collision of bullet with the enemy
 shoot5=collideRectRect(z,y+30,10,10,c6+800,d6+510,95,100);

 if (shoot5===false){
   image(enemy5,c6+800,d6+510,100,100);
 }


 if (shoot5===true){
   c6+=70000
   d6+=70000
   image(enemy5,c6,d6,100,100);
   z-=1500
   image(bullet,z,y+30,1,1);
   shoot=false
 }

 //if enemy5 hits player, player dies
 body6=collideRectRect(x,y,1,100,c6+800,d6+530,20,20);

 if (body6===true){
 level+=28
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

  if (c6<=-820){
 c6=1100
  }

  ////////////////////////////////////////////////////////// Enemy NUMBER 7

  //Enemy move
  c7-=2

  // collision of bullet with the enemy
  shoot6=collideRectRect(z,y+30,10,10,c7+900,d7+510,95,100);

  if (shoot6===false){
    image(enemy6,c7+900,d7+510,100,100);
  }


  if (shoot6===true){
    c7+=70000
    d7+=70000
    image(enemy6,c7,d7,100,100);
    z-=1500
    image(bullet,z,y+30,1,1);
    shoot=false
  }

  //if enemy0 hits player, player dies
  body6=collideRectRect(x,y,2,100,c7+900,d7+530,20,20);

  if (body6===true){
  level+=28
  }

  // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

   if (c7<=-920){
  c7=1100
   }

/*------------------------- Blocks for the game---------------------*/

                /*---------- lvl. One of the game-----------*/

// Blocks for part 1 of level 1
  fill(51, 102, 0);
  rect(0,200,1240,20);
  fill(97, 42, 0);
  rect(0,209,1240,15);

//the stairs in between the two parts
  image(img1,1140, 200,70,200);

//Blocks for part 2 of level 1
  fill(51, 102, 0);
  rect(0,400,1240,20);
  fill(97, 42, 0);
  rect(0,409,1240,15);

//the stairs in between the two parts
  image(img1,0,400,70,200);


//Blocks for part 3 of level 1
  fill(51, 102, 0);
  rect(0,600,1240,20);
  fill(97, 42, 0);
  rect(0,609,1240,15);

//the stairs in between the two parts
  image(img1,1140,600,70,200);

  //Blocks for part 4 of level 1
  fill(51, 102, 0);
  rect(0,800,1240,20);
  fill(97, 42, 0);
  rect(0,809,1240,15);


//indication of the level the player is on
    fill(255);
    textSize(20);
    text(' Level= 1/8', 50, 20);


  //Once reached end of map go to level 2
   exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



  if (exit===true){
    level+=1
    print("Made it!")

  }
}

















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 2


else if (level===3) {
  width=1240;
  height=820;
  x= 0;
  y= 0;
  jump = false;  //Character is NOT jumping
  dy = 0;  //Change in height  <------------------------
  gravity = 0;
  z=x;

  // Enemy variables.
  //E0
  c=x;
  d=x;
  //E1
  c1=x;
  d1=x;
  //E2
  c2=x;
  d2=x;
  //E3
  c3=x;
  d3=x;
  //E4
  c4=x;
  d4=x;
  //E5
  c5=x;
  d5=x;
  //E6
  c6=x;
  d6=x;
  //E7
  c7=x;
  d7=x;

  level+=1;


}

 else if (level===4){

   print(level)

   /*---------------Landing of the player and the ladder areas---------*/

   //part 1 of level 1 collide and stop the player
   hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

   //collision of the ladder area and the player
   hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

   //part 2 of level 1 collide and stop the player
   hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

   //collsion of the ladder 2 are and the player
   hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

   //part 3 of level 1 collide and stop the player
   hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

   //collision of the ladder area and the player
   hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

   //part 4 of level 1 collide and stop the player
   hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





 /*---------------------What to do when the player has landed or jumps--------------*/

 //Print all of our vertical values
 //print("Force:",force);
 //print("dy:",dy);
 //  print("x:",x);


   //Check if character hits the base
   if (y>height/1.09) {
     y = height/1.09;
     gravity = 0;
     dy = 0;
     jump = false;

   }

   //Check if character hits floating platform AND is falling
   else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
     dy = 0;
     gravity = 0;
     jump = false;
   }

   //If character isn't jumping, pull down on them
   else if (jump === false) {
     dy = -5;
     gravity = .5;
   }

   //the ladders and bringing the character down
   if (hit2===true|| hit3===true || hit5===true){
     force = true;
   }
   //when the player is not on the ladder force is false
   else if (hit3===false){
     force = false;
   }




   //background and add the character placement
   image(img, 0, 0, 1240,820);
   gif_createImg.position(x,y);
   y-=dy;
   dy-=gravity;

 /*---------------- Controls of the character--------------- */

 if (keyIsDown(RIGHT_ARROW)) {
     right=true
     x+=7;


   }

 if (keyIsDown(LEFT_ARROW)) {
      left=true
     x-=7;

   }


 if (keyIsDown(UP_ARROW) && jump===false) {
     right=false
     left=false
     jump=true;
     dy = 15;
     gravity = 0.5;
   }

 if (keyIsDown(DOWN_ARROW) && force===true) {
     right=false
     left=false
     y+=5;
   }

   //dont allow player to go off the map
 if (x<=0){
     x+=5;
   }

   else if (x>=1180){
   x-=10;
     //level+=1;
 }

 //to change from walking into stop
 if (left===true||right===true){
   gif_createImg.position(x,y);
   image(gif_loadImg,x-10000,y-10000);
 }

   else if (left===false||right===false){
   gif_createImg.position(x-10000,y-10000);
   image(gif_loadImg,x,y);
 }


 //the character's ability to shoot bullets

 shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





 if (shoot===true){
 z+=80
 image(bullet,z,y+40,1,1);
 }

 if (shoot1===true){
  image(bullet,z,y+30,1,1);
 }

 else if (shoot1===false){
   image(bullet,z,y+30,10,10);
 }

 if (z>=1180){
   z-=1500
   image(bullet,z,y+30,1,1);
   shoot=false

 }

 /*----------------------------The Enemy-----------------------------*/

 ////////////////////////////////////////////////////////// Enemy NUMBER 0

 //Enemy move
 c-=5

 // collision of bullet with the enemy
 shoot2=collideRectRect(z,y+30,10,10,c+600,d+110,95,100);

 if (shoot2===false){
 image(enemy,c+600,d+110,100,100);
 }


 if (shoot2===true){
 c+=70000
 d+=70000
 image(enemy,c,d,100,100);
 z-=1500
 image(bullet,z,y+30,1,1);
 shoot=false
 }

 //if enemy0 hits player, player dies
 body0=collideRectRect(x,y,2,100,c+600,d+130,20,50);

 if (body0===true){
 level+=26
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c<=-620){
 c=1100
 }
 ////////////////////////////////////////////////////////// Enemy NUMBER 1

 //Enemy move
 c1-=6

 // collision of bullet with the enemy
 shoot3=collideRectRect(z,y+30,10,10,c1+700,d1+110,95,100);

 if (shoot3===false){

 image(enemy1,c1+700,d1+110,100,100);
 }


 if (shoot3===true){
 c1+=70000
 d1+=70000
 image(enemy1,c1,d1,100,100);
 z-=1500
 image(bullet,z,y+30,1,1);
 shoot=false
 }


 //if enemy1 hits player, player dies
 body1=collideRectRect(x,y,1,100,c1+700,d1+130,20,50);

 if (body1===true){
 level+=3
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c1<=-720){
 c1=1100
 }

 ////////////////////////////////////////////////////////// Enemy NUMBER 2

 //Enemy move
 c2-=4

 // collision of bullet with the enemy
 shoot3=collideRectRect(z,y+30,10,10,c2+800,d2+110,95,100);

 if (shoot3===false){

 image(enemy2,c2+800,d2+110,100,100);
 }


 if (shoot3===true){
 c2+=70000
 d2+=70000
 image(enemy2,c2,d2,100,100);
 z-=1500
 image(bullet,z,y+30,1,1);
 shoot=false
 }

 //if enemy2 hits player, player dies
 body2=collideRectRect(x,y,1,100,c2+800,d2+130,20,50);

 if (body2===true){
 level+=26
 }


 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c2<=-820){
 c2=1100
 }
 ////////////////////////////////////////////////////////// Enemy NUMBER 3

 //Enemy move
 c3-=5

 // collision of bullet with the enemy
 shoot3=collideRectRect(z,y+30,10,10,c3+900,d3+110,95,100);

 if (shoot3===false){

 image(enemy3,c3+900,d3+110,100,100);
 }


 if (shoot3===true){
 c3+=70000
 d3+=70000
 image(enemy3,c3,d3,100,100);
 z-=1500
 image(bullet,z,y+30,1,1);
 shoot=false
 }

 //if enemy2 hits player, player dies
 body3=collideRectRect(x,y,1,100,c3+900,d3+130,20,50);

 if (body3===true){
 level+=26
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c3<=-840){
 c3=1100
 }

 ////////////////////////////////////////////////////////// Enemy NUMBER 4

 //Enemy move
 c4-=5

 // collision of bullet with the enemy
 shoot3=collideRectRect(z,y+30,10,10,c4+1000,d4+510,95,100);

 if (shoot3===false){
 image(enemy3,c4+1000,d4+510,100,100);
 }


 if (shoot3===true){
 c4+=70000
 d4+=70000
 image(enemy3,c4,d4,100,100);
 z-=1500
 image(bullet,z,y+30,1,1);
 shoot=false
 }


 //if enemy2 hits player, player dies
 body4=collideRectRect(x,y,1,100,c4+1000,d4+530,20,50);

 if (body4===true){
 level+=26
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c4<=-1020){
 c4=1100
 }


 ////////////////////////////////////////////////////////// Enemy NUMBER 5
 //Enemy move
 c5-=6

 // collision of bullet with the enemy
 shoot4=collideRectRect(z,y+30,10,10,c5+700,d5+510,95,100);

 if (shoot4===false){
 image(enemy5,c5+700,d5+510,100,100);
 }


 if (shoot4===true){
 c5+=70000
 d5+=70000
 image(enemy5,c5,d5,100,100);
 z-=1500
 image(bullet,z,y+30,1,1);
 shoot=false
 }

 //if enemy5 hits player, player dies
 body5=collideRectRect(x,y,1,100,c5+700,d5+530,20,50);

 if (body5===true){
 level+=26
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c5<=-720){
 c5=1100
 }


 ////////////////////////////////////////////////////////// Enemy NUMBER 6
 //Enemy move
 c6-=3

 // collision of bullet with the enemy
 shoot5=collideRectRect(z,y+30,10,10,c6+800,d6+510,95,100);

 if (shoot5===false){
  image(enemy5,c6+800,d6+510,100,100);
 }


 if (shoot5===true){
  c6+=70000
  d6+=70000
  image(enemy5,c6,d6,100,100);
  z-=1500
  image(bullet,z,y+30,1,1);
  shoot=false
 }

 //if enemy5 hits player, player dies
 body6=collideRectRect(x,y,1,100,c6+800,d6+530,20,50);

 if (body6===true){
 level+=26
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

 if (c6<=-820){
 c6=1100
 }

 ////////////////////////////////////////////////////////// Enemy NUMBER 7

 //Enemy move
 c7-=6

 // collision of bullet with the enemy
 shoot6=collideRectRect(z,y+30,10,10,c7+900,d7+510,95,100);

 if (shoot6===false){
   image(enemy6,c7+900,d7+510,100,100);
 }


 if (shoot6===true){
   c7+=70000
   d7+=70000
   image(enemy6,c7,d7,100,100);
   z-=1500
   image(bullet,z,y+30,1,1);
   shoot=false
 }

 //if enemy0 hits player, player dies
 body6=collideRectRect(x,y,2,100,c7+900,d7+530,20,50);

 if (body6===true){
 level+=26
 }

 // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

  if (c7<=-920){
 c7=1100
  }

 /*------------------------- Blocks for the game---------------------*/

               /*---------- lvl. One of the game-----------*/

 // Blocks for part 1 of level 1
 fill(51, 102, 0);
 rect(0,200,1240,20);
 fill(97, 42, 0);
 rect(0,209,1240,15);

 //the stairs in between the two parts
 image(img1,1140, 200,70,200);

 //Blocks for part 2 of level 1
 fill(51, 102, 0);
 rect(0,400,1240,20);
 fill(97, 42, 0);
 rect(0,409,1240,15);

 //the stairs in between the two parts
 image(img1,0,400,70,200);


 //Blocks for part 3 of level 1
 fill(51, 102, 0);
 rect(0,600,1240,20);
 fill(97, 42, 0);
 rect(0,609,1240,15);

 //the stairs in between the two parts
 image(img1,1140,600,70,200);

 //Blocks for part 4 of level 1
 fill(51, 102, 0);
 rect(0,800,1240,20);
 fill(97, 42, 0);
 rect(0,809,1240,15);

 //indication of the level the player is on
     fill(255);
     textSize(20);
     text(' Level= 2/8', 50, 20);


 //Once reached end of map go to level 2
  exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



 if (exit===true){
   level+=1
   print("Made it!")

 }
 }















 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 3



    else if (level===5) {
      width=1240;
      height=820;
      x= 0;
      y= 0;
      jump = false;  //Character is NOT jumping
      dy = 0;  //Change in height  <------------------------
      gravity = 0;
      z=x;

      // Enemy variables.
      //E0
      c=x;
      d=x;
      //E1
      c1=x;
      d1=x;
      //E2
      c2=x;
      d2=x;
      //E3
      c3=x;
      d3=x;
      //E4
      c4=x;
      d4=x;
      //E5
      c5=x;
      d5=x;
      //E6
      c6=x;
      d6=x;
      //E7
      c7=x;
      d7=x;

      level+=1;


    }

     else if (level===6){


       /*---------------Landing of the player and the ladder areas---------*/

       //part 1 of level 1 collide and stop the player
       hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

       //collision of the ladder area and the player
       hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

       //part 2 of level 1 collide and stop the player
       hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

       //collsion of the ladder 2 are and the player
       hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

       //part 3 of level 1 collide and stop the player
       hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

       //collision of the ladder area and the player
       hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

       //part 4 of level 1 collide and stop the player
       hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





     /*---------------------What to do when the player has landed or jumps--------------*/

     //Print all of our vertical values
     //print("Force:",force);
     //print("dy:",dy);
     //  print("x:",x);


       //Check if character hits the base
       if (y>height/1.09) {
         y = height/1.09;
         gravity = 0;
         dy = 0;
         jump = false;

       }

       //Check if character hits floating platform AND is falling
       else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
         dy = 0;
         gravity = 0;
         jump = false;
       }

       //If character isn't jumping, pull down on them
       else if (jump === false) {
         dy = -5;
         gravity = .5;
       }

       //the ladders and bringing the character down
       if (hit2===true|| hit3===true || hit5===true){
         force = true;
       }
       //when the player is not on the ladder force is false
       else if (hit3===false){
         force = false;
       }




       //background and add the character placement
       image(img, 0, 0, 1240,820);
       gif_createImg.position(x,y);
       y-=dy;
       dy-=gravity;

     /*---------------- Controls of the character--------------- */

     if (keyIsDown(RIGHT_ARROW)) {
         right=true
         x+=7;


       }

     if (keyIsDown(LEFT_ARROW)) {
          left=true
         x-=7;

       }


     if (keyIsDown(UP_ARROW) && jump===false) {
         right=false
         left=false
         jump=true;
         dy = 15;
         gravity = 0.5;
       }

     if (keyIsDown(DOWN_ARROW) && force===true) {
         right=false
         left=false
         y+=5;
       }

       //dont allow player to go off the map
     if (x<=0){
         x+=5;
       }

       else if (x>=1180){
       x-=10;
         //level+=1;
     }

     //to change from walking into stop
     if (left===true||right===true){
       gif_createImg.position(x,y);
       image(gif_loadImg,x-10000,y-10000);
     }

       else if (left===false||right===false){
       gif_createImg.position(x-10000,y-10000);
       image(gif_loadImg,x,y);
     }


     //the character's ability to shoot bullets

     shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





     if (shoot===true){
     z+=80
     image(bullet,z,y+40,1,1);
     }

     if (shoot1===true){
      image(bullet,z,y+30,1,1);
     }

     else if (shoot1===false){
       image(bullet,z,y+30,10,10);
     }

     if (z>=1180){
       z-=1500
       image(bullet,z,y+30,1,1);
       shoot=false

     }

     /*----------------------------The Enemy-----------------------------*/

     ////////////////////////////////////////////////////////// Enemy NUMBER 0

     //Enemy move
     c-=8

     // collision of bullet with the enemy
     shoot2=collideRectRect(z,y+30,10,10,c+600,d+110,95,100);

     if (shoot2===false){
     image(enemy,c+600,d+110,100,100);
     }


     if (shoot2===true){
     c+=70000
     d+=70000
     image(enemy,c,d,100,100);
     z-=1500
     image(bullet,z,y+30,1,1);
     shoot=false
     }

     //if enemy0 hits player, player dies
     body0=collideRectRect(x,y,2,100,c+600,d+130,20,50);

     if (body0===true){
     level+=24
     }

     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

     if (c<=-620){
     c=1100
     }
     ////////////////////////////////////////////////////////// Enemy NUMBER 1

     //Enemy move
     c1-=7

     // collision of bullet with the enemy
     shoot3=collideRectRect(z,y+30,10,10,c1+700,d1+110,95,100);

     if (shoot3===false){

     image(enemy1,c1+700,d1+110,100,100);
     }


     if (shoot3===true){
     c1+=70000
     d1+=70000
     image(enemy1,c1,d1,100,100);
     z-=1500
     image(bullet,z,y+30,1,1);
     shoot=false
     }


     //if enemy1 hits player, player dies
     body1=collideRectRect(x,y,1,100,c1+700,d1+130,20,50);

     if (body1===true){
     level+=24
     }

     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

     if (c1<=-720){
     c1=1100
     }

     ////////////////////////////////////////////////////////// Enemy NUMBER 2

     //Enemy move
     c2-=8

     // collision of bullet with the enemy
     shoot3=collideRectRect(z,y+30,10,10,c2+800,d2+110,95,100);

     if (shoot3===false){

     image(enemy2,c2+800,d2+110,100,100);
     }


     if (shoot3===true){
     c2+=70000
     d2+=70000
     image(enemy2,c2,d2,100,100);
     z-=1500
     image(bullet,z,y+30,1,1);
     shoot=false
     }

     //if enemy2 hits player, player dies
     body2=collideRectRect(x,y,1,100,c2+800,d2+130,20,50);

     if (body2===true){
     level+=24
     }


     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

     if (c2<=-820){
     c2=1100
     }
     ////////////////////////////////////////////////////////// Enemy NUMBER 3

     //Enemy move
     c3-=9

     // collision of bullet with the enemy
     shoot3=collideRectRect(z,y+30,10,10,c3+900,d3+110,95,100);

     if (shoot3===false){

     image(enemy3,c3+900,d3+110,100,100);
     }


     if (shoot3===true){
     c3+=70000
     d3+=70000
     image(enemy3,c3,d3,100,100);
     z-=1500
     image(bullet,z,y+30,1,1);
     shoot=false
     }

     //if enemy2 hits player, player dies
     body3=collideRectRect(x,y,1,100,c3+900,d3+130,20,50);

     if (body3===true){
     level+=24
     }

     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

     if (c3<=-840){
     c3=1100
     }

     ////////////////////////////////////////////////////////// Enemy NUMBER 4

     //Enemy move
     c4-=8

     // collision of bullet with the enemy
     shoot3=collideRectRect(z,y+30,10,10,c4+1000,d4+510,95,100);

     if (shoot3===false){
     image(enemy3,c4+1000,d4+510,100,100);
     }


     if (shoot3===true){
     c4+=70000
     d4+=70000
     image(enemy3,c4,d4,100,100);
     z-=1500
     image(bullet,z,y+30,1,1);
     shoot=false
     }


     //if enemy2 hits player, player dies
     body4=collideRectRect(x,y,1,100,c4+1000,d4+530,20,50);

     if (body4===true){
     level+=24
     }

     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

     if (c4<=-1020){
     c4=1100
     }


     ////////////////////////////////////////////////////////// Enemy NUMBER 5
     //Enemy move
     c5-=10
     // collision of bullet with the enemy
     shoot4=collideRectRect(z,y+30,10,10,c5+700,d5+510,95,100);

     if (shoot4===false){
     image(enemy5,c5+700,d5+510,100,100);
     }


     if (shoot4===true){
     c5+=70000
     d5+=70000
     image(enemy5,c5,d5,100,100);
     z-=1500
     image(bullet,z,y+30,1,1);
     shoot=false
     }

     //if enemy5 hits player, player dies
     body5=collideRectRect(x,y,1,100,c5+700,d5+530,20,50);

     if (body5===true){
     level+=24
     }

     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

     if (c5<=-720){
     c5=1100
     }


     ////////////////////////////////////////////////////////// Enemy NUMBER 6
     //Enemy move
     c6-=9

     // collision of bullet with the enemy
     shoot5=collideRectRect(z,y+30,10,10,c6+800,d6+510,95,100);

     if (shoot5===false){
      image(enemy5,c6+800,d6+510,100,100);
     }


     if (shoot5===true){
      c6+=70000
      d6+=70000
      image(enemy5,c6,d6,100,100);
      z-=1500
      image(bullet,z,y+30,1,1);
      shoot=false
     }

     //if enemy5 hits player, player dies
     body6=collideRectRect(x,y,1,100,c6+800,d6+530,20,50);

     if (body6===true){
     level+=24
     }

     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

     if (c6<=-820){
     c6=1100
     }

     ////////////////////////////////////////////////////////// Enemy NUMBER 7

     //Enemy move
     c7-=12

     // collision of bullet with the enemy
     shoot6=collideRectRect(z,y+30,10,10,c7+900,d7+510,95,100);

     if (shoot6===false){
       image(enemy6,c7+900,d7+510,100,100);
     }


     if (shoot6===true){
       c7+=70000
       d7+=70000
       image(enemy6,c7,d7,100,100);
       z-=1500
       image(bullet,z,y+30,1,1);
       shoot=false
     }

     //if enemy0 hits player, player dies
     body6=collideRectRect(x,y,2,100,c7+900,d7+530,20,50);

     if (body6===true){
     level+=24
     }

     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

      if (c7<=-920){
     c7=1100
      }

     /*------------------------- Blocks for the game---------------------*/

                   /*---------- lvl. One of the game-----------*/

     // Blocks for part 1 of level 1
     fill(51, 102, 0);
     rect(0,200,1240,20);
     fill(97, 42, 0);
     rect(0,209,1240,15);

     //the stairs in between the two parts
     image(img1,1140, 200,70,200);

     //Blocks for part 2 of level 1
     fill(51, 102, 0);
     rect(0,400,1240,20);
     fill(97, 42, 0);
     rect(0,409,1240,15);

     //the stairs in between the two parts
     image(img1,0,400,70,200);


     //Blocks for part 3 of level 1
     fill(51, 102, 0);
     rect(0,600,1240,20);
     fill(97, 42, 0);
     rect(0,609,1240,15);

     //the stairs in between the two parts
     image(img1,1140,600,70,200);

     //Blocks for part 4 of level 1
     fill(51, 102, 0);
     rect(0,800,1240,20);
     fill(97, 42, 0);
     rect(0,809,1240,15);

     //indication of the level the player is on
         fill(255);
         textSize(20);
         text(' Level= 3/8', 50, 20);


     //Once reached end of map go to level 2
      exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



     if (exit===true){
       level+=1
       print("Made it!")

     }
     }















     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 4

         else if (level===7) {
           width=1240;
           height=820;
           x= 0;
           y= 0;
           jump = false;  //Character is NOT jumping
           dy = 0;  //Change in height  <------------------------
           gravity = 0;
           z=x;

           // Enemy variables.
           //E0
           c=x;
           d=x;
           //E1
           c1=x;
           d1=x;
           //E2
           c2=x;
           d2=x;
           //E3
           c3=x;
           d3=x;
           //E4
           c4=x;
           d4=x;
           //E5
           c5=x;
           d5=x;
           //E6
           c6=x;
           d6=x;
           //E7
           c7=x;
           d7=x;
           //E8
           c8=x;
           d8=x;

           level+=1;


         }

          else if (level===8){


            /*---------------Landing of the player and the ladder areas---------*/

            //part 1 of level 1 collide and stop the player
            hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

            //collision of the ladder area and the player
            hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

            //part 2 of level 1 collide and stop the player
            hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

            //collsion of the ladder 2 are and the player
            hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

            //part 3 of level 1 collide and stop the player
            hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

            //collision of the ladder area and the player
            hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

            //part 4 of level 1 collide and stop the player
            hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





          /*---------------------What to do when the player has landed or jumps--------------*/

          //Print all of our vertical values
          //print("Force:",force);
          //print("dy:",dy);
          //  print("x:",x);


            //Check if character hits the base
            if (y>height/1.09) {
              y = height/1.09;
              gravity = 0;
              dy = 0;
              jump = false;

            }

            //Check if character hits floating platform AND is falling
            else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
              dy = 0;
              gravity = 0;
              jump = false;
            }

            //If character isn't jumping, pull down on them
            else if (jump === false) {
              dy = -5;
              gravity = .5;
            }

            //the ladders and bringing the character down
            if (hit2===true|| hit3===true || hit5===true){
              force = true;
            }
            //when the player is not on the ladder force is false
            else if (hit3===false){
              force = false;
            }




            //background and add the character placement
            image(img, 0, 0, 1240,820);
            gif_createImg.position(x,y);
            y-=dy;
            dy-=gravity;

          /*---------------- Controls of the character--------------- */

          if (keyIsDown(RIGHT_ARROW)) {
              right=true
              x+=7;


            }

          if (keyIsDown(LEFT_ARROW)) {
               left=true
              x-=7;

            }


          if (keyIsDown(UP_ARROW) && jump===false) {
              right=false
              left=false
              jump=true;
              dy = 15;
              gravity = 0.5;
            }

          if (keyIsDown(DOWN_ARROW) && force===true) {
              right=false
              left=false
              y+=5;
            }

            //dont allow player to go off the map
          if (x<=0){
              x+=5;
            }

            else if (x>=1180){
            x-=10;
              //level+=1;
          }

          //to change from walking into stop
          if (left===true||right===true){
            gif_createImg.position(x,y);
            image(gif_loadImg,x-10000,y-10000);
          }

            else if (left===false||right===false){
            gif_createImg.position(x-10000,y-10000);
            image(gif_loadImg,x,y);
          }


          //the character's ability to shoot bullets

          shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





          if (shoot===true){
          z+=80
          image(bullet,z,y+40,1,1);
          }

          if (shoot1===true){
           image(bullet,z,y+30,1,1);
          }

          else if (shoot1===false){
            image(bullet,z,y+30,10,10);
          }

          if (z>=1180){
            z-=1500
            image(bullet,z,y+30,1,1);
            shoot=false

          }

          /*----------------------------The Enemy-----------------------------*/

          ////////////////////////////////////////////////////////// Enemy NUMBER 0

          //Enemy move
          c-=8

          // collision of bullet with the enemy
          shoot2=collideRectRect(z,y+30,10,10,c+600,d+110,95,100);

          if (shoot2===false){
          image(enemy,c+600,d+110,100,100);
          }


          if (shoot2===true){
          c+=70000
          d+=70000
          image(enemy,c,d,100,100);
          z-=1500
          image(bullet,z,y+30,1,1);
          shoot=false
          }

          //if enemy0 hits player, player dies
          body0=collideRectRect(x,y,2,100,c+600,d+130,20,50);

          if (body0===true){
          level+=22
          }

          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

          if (c<=-620){
          c=1100
          }
          ////////////////////////////////////////////////////////// Enemy NUMBER 1

          //Enemy move
          c1-=7

          // collision of bullet with the enemy
          shoot3=collideRectRect(z,y+30,10,10,c1+700,d1+110,95,100);

          if (shoot3===false){

          image(enemy1,c1+700,d1+110,100,100);
          }


          if (shoot3===true){
          c1+=70000
          d1+=70000
          image(enemy1,c1,d1,100,100);
          z-=1500
          image(bullet,z,y+30,1,1);
          shoot=false
          }


          //if enemy1 hits player, player dies
          body1=collideRectRect(x,y,1,100,c1+700,d1+130,20,50);

          if (body1===true){
          level+=22
          }

          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

          if (c1<=-720){
          c1=1100
          }

          ////////////////////////////////////////////////////////// Enemy NUMBER 2

          //Enemy move
          c2-=8

          // collision of bullet with the enemy
          shoot3=collideRectRect(z,y+30,10,10,c2+800,d2+110,95,100);

          if (shoot3===false){

          image(enemy2,c2+800,d2+110,100,100);
          }


          if (shoot3===true){
          c2+=70000
          d2+=70000
          image(enemy2,c2,d2,100,100);
          z-=1500
          image(bullet,z,y+30,1,1);
          shoot=false
          }

          //if enemy2 hits player, player dies
          body2=collideRectRect(x,y,1,100,c2+800,d2+130,20,50);

          if (body2===true){
          level+=22
          }


          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

          if (c2<=-820){
          c2=1100
          }
          ////////////////////////////////////////////////////////// Enemy NUMBER 3

          //Enemy move
          c3-=9

          // collision of bullet with the enemy
          shoot3=collideRectRect(z,y+30,10,10,c3+900,d3+110,95,100);

          if (shoot3===false){

          image(enemy3,c3+900,d3+110,100,100);
          }


          if (shoot3===true){
          c3+=70000
          d3+=70000
          image(enemy3,c3,d3,100,100);
          z-=1500
          image(bullet,z,y+30,1,1);
          shoot=false
          }

          //if enemy2 hits player, player dies
          body3=collideRectRect(x,y,1,100,c3+900,d3+130,20,50);

          if (body3===true){
          level+=22
          }

          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

          if (c3<=-840){
          c3=1100
          }

          ////////////////////////////////////////////////////////// Enemy NUMBER 4

          //Enemy move
          c4-=8

          // collision of bullet with the enemy
          shoot3=collideRectRect(z,y+30,10,10,c4+1000,d4+510,95,100);

          if (shoot3===false){
          image(enemy3,c4+1000,d4+510,100,100);
          }


          if (shoot3===true){
          c4+=70000
          d4+=70000
          image(enemy3,c4,d4,100,100);
          z-=1500
          image(bullet,z,y+30,1,1);
          shoot=false
          }


          //if enemy2 hits player, player dies
          body4=collideRectRect(x,y,1,100,c4+1000,d4+530,20,50);

          if (body4===true){
          level+=22
          }

          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

          if (c4<=-1020){
          c4=1100
          }


          ////////////////////////////////////////////////////////// Enemy NUMBER 5
          //Enemy move
          c5-=10
          // collision of bullet with the enemy
          shoot4=collideRectRect(z,y+30,10,10,c5+700,d5+510,95,100);

          if (shoot4===false){
          image(enemy5,c5+700,d5+510,100,100);
          }


          if (shoot4===true){
          c5+=70000
          d5+=70000
          image(enemy5,c5,d5,100,100);
          z-=1500
          image(bullet,z,y+30,1,1);
          shoot=false
          }

          //if enemy5 hits player, player dies
          body5=collideRectRect(x,y,1,100,c5+700,d5+530,20,50);

          if (body5===true){
          level+=22
          }

          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

          if (c5<=-720){
          c5=1100
          }


          ////////////////////////////////////////////////////////// Enemy NUMBER 6
          //Enemy move
          c6-=9

          // collision of bullet with the enemy
          shoot5=collideRectRect(z,y+30,10,10,c6+800,d6+510,95,100);

          if (shoot5===false){
           image(enemy5,c6+800,d6+510,100,100);
          }


          if (shoot5===true){
           c6+=70000
           d6+=70000
           image(enemy5,c6,d6,100,100);
           z-=1500
           image(bullet,z,y+30,1,1);
           shoot=false
          }

          //if enemy5 hits player, player dies
          body6=collideRectRect(x,y,1,100,c6+800,d6+530,20,50);

          if (body6===true){
          level+=22
          }

          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

          if (c6<=-820){
          c6=1100
          }

          ////////////////////////////////////////////////////////// Enemy NUMBER 7

          //Enemy move
          c7-=12

          // collision of bullet with the enemy
          shoot6=collideRectRect(z,y+30,10,10,c7+900,d7+510,95,100);

          if (shoot6===false){
            image(enemy6,c7+900,d7+510,100,100);
          }


          if (shoot6===true){
            c7+=70000
            d7+=70000
            image(enemy6,c7,d7,100,100);
            z-=1500
            image(bullet,z,y+30,1,1);
            shoot=false
          }

          //if enemy0 hits player, player dies
          body6=collideRectRect(x,y,2,100,c7+900,d7+530,20,50);

          if (body6===true){
          level+=22
          }

          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

           if (c7<=-920){
          c7=1100
           }

           ////////////////////////////////////////////////////////// Enemy NUMBER 8

           //Enemy move
           c8-=9

           // collision of bullet with the enemy
           shoot7=collideRectRect(z,y+30,10,10,c8+1200,d8+510,95,100);

           if (shoot7===false){
           image(enemy8,c8+1200,d8+510,95,100);
           }


           if (shoot7===true){
           c8+=70000
           d8+=70000
           image(enemy8,c8,d8,100,100);
           z-=1500
           image(bullet,z,y+30,1,1);
           shoot=false
           }

           //if enemy0 hits player, player dies
           body7=collideRectRect(x,y,2,100,c8+1200,d8+530,20,50);

           if (body7===true){
           level+=22
           }

           // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

           if (c8<=-1200){
           c8=1100
           }

          /*------------------------- Blocks for the game---------------------*/

                        /*---------- lvl. One of the game-----------*/

          // Blocks for part 1 of level 1
          fill(51, 102, 0);
          rect(0,200,1240,20);
          fill(97, 42, 0);
          rect(0,209,1240,15);

          //the stairs in between the two parts
          image(img1,1140, 200,70,200);

          //Blocks for part 2 of level 1
          fill(51, 102, 0);
          rect(0,400,1240,20);
          fill(97, 42, 0);
          rect(0,409,1240,15);

          //the stairs in between the two parts
          image(img1,0,400,70,200);


          //Blocks for part 3 of level 1
          fill(51, 102, 0);
          rect(0,600,1240,20);
          fill(97, 42, 0);
          rect(0,609,1240,15);

          //the stairs in between the two parts
          image(img1,1140,600,70,200);

          //Blocks for part 4 of level 1
          fill(51, 102, 0);
          rect(0,800,1240,20);
          fill(97, 42, 0);
          rect(0,809,1240,15);

          //indication of the level the player is on
              fill(255);
              textSize(20);
              text(' Level= 4/8', 50, 20);


          //Once reached end of map go to level 2
           exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



          if (exit===true){
            level+=1
            print("Made it!")

          }
          }












               //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 5

                   else if (level===9) {
                     width=1240;
                     height=820;
                     x= 0;
                     y= 0;
                     jump = false;  //Character is NOT jumping
                     dy = 0;  //Change in height  <------------------------
                     gravity = 0;
                     z=x;

                     // Enemy variables.
                     //E0
                     c=x;
                     d=x;
                     //E1
                     c1=x;
                     d1=x;
                     //E2
                     c2=x;
                     d2=x;
                     //E3
                     c3=x;
                     d3=x;
                     //E4
                     c4=x;
                     d4=x;
                     //E5
                     c5=x;
                     d5=x;
                     //E6
                     c6=x;
                     d6=x;
                     //E7
                     c7=x;
                     d7=x;
                     //E8
                     c8=x;
                     d8=x;

                     level+=1;


                   }

                    else if (level===10){


                      /*---------------Landing of the player and the ladder areas---------*/

                      //part 1 of level 1 collide and stop the player
                      hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

                      //collision of the ladder area and the player
                      hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

                      //part 2 of level 1 collide and stop the player
                      hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

                      //collsion of the ladder 2 are and the player
                      hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

                      //part 3 of level 1 collide and stop the player
                      hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

                      //collision of the ladder area and the player
                      hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

                      //part 4 of level 1 collide and stop the player
                      hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





                    /*---------------------What to do when the player has landed or jumps--------------*/

                    //Print all of our vertical values
                    //print("Force:",force);
                    //print("dy:",dy);
                    //  print("x:",x);


                      //Check if character hits the base
                      if (y>height/1.09) {
                        y = height/1.09;
                        gravity = 0;
                        dy = 0;
                        jump = false;

                      }

                      //Check if character hits floating platform AND is falling
                      else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
                        dy = 0;
                        gravity = 0;
                        jump = false;
                      }

                      //If character isn't jumping, pull down on them
                      else if (jump === false) {
                        dy = -5;
                        gravity = .5;
                      }

                      //the ladders and bringing the character down
                      if (hit2===true|| hit3===true || hit5===true){
                        force = true;
                      }
                      //when the player is not on the ladder force is false
                      else if (hit3===false){
                        force = false;
                      }




                      //background and add the character placement
                      image(img, 0, 0, 1240,820);
                      gif_createImg.position(x,y);
                      y-=dy;
                      dy-=gravity;

                    /*---------------- Controls of the character--------------- */

                    if (keyIsDown(RIGHT_ARROW)) {
                        right=true
                        x+=7;


                      }

                    if (keyIsDown(LEFT_ARROW)) {
                         left=true
                        x-=7;

                      }


                    if (keyIsDown(UP_ARROW) && jump===false) {
                        right=false
                        left=false
                        jump=true;
                        dy = 15;
                        gravity = 0.5;
                      }

                    if (keyIsDown(DOWN_ARROW) && force===true) {
                        right=false
                        left=false
                        y+=5;
                      }

                      //dont allow player to go off the map
                    if (x<=0){
                        x+=5;
                      }

                      else if (x>=1180){
                      x-=10;
                        //level+=1;
                    }

                    //to change from walking into stop
                    if (left===true||right===true){
                      gif_createImg.position(x,y);
                      image(gif_loadImg,x-10000,y-10000);
                    }

                      else if (left===false||right===false){
                      gif_createImg.position(x-10000,y-10000);
                      image(gif_loadImg,x,y);
                    }


                    //the character's ability to shoot bullets

                    shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





                    if (shoot===true){
                    z+=80
                    image(bullet,z,y+40,1,1);
                    }

                    if (shoot1===true){
                     image(bullet,z,y+30,1,1);
                    }

                    else if (shoot1===false){
                      image(bullet,z,y+30,10,10);
                    }

                    if (z>=1180){
                      z-=1500
                      image(bullet,z,y+30,1,1);
                      shoot=false

                    }

                    /*----------------------------The Enemy-----------------------------*/

                    ////////////////////////////////////////////////////////// Enemy NUMBER 0

                    //Enemy move
                    c-=8

                    // collision of bullet with the enemy
                    shoot2=collideRectRect(z,y+30,10,10,c+600,d+110,95,100);

                    if (shoot2===false){
                    image(enemy,c+600,d+110,100,100);
                    }


                    if (shoot2===true){
                    c+=70000
                    d+=70000
                    image(enemy,c,d,100,100);
                    z-=1500
                    image(bullet,z,y+30,1,1);
                    shoot=false
                    }

                    //if enemy0 hits player, player dies
                    body0=collideRectRect(x,y,2,100,c+600,d+130,20,50);

                    if (body0===true){
                    level+=22
                    }

                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                    if (c<=-620){
                    c=1100
                    }
                    ////////////////////////////////////////////////////////// Enemy NUMBER 1

                    //Enemy move
                    c1-=12

                    // collision of bullet with the enemy
                    shoot3=collideRectRect(z,y+30,10,10,c1+700,d1+110,95,100);

                    if (shoot3===false){

                    image(enemy1,c1+700,d1+110,100,100);
                    }


                    if (shoot3===true){
                    c1+=70000
                    d1+=70000
                    image(enemy1,c1,d1,100,100);
                    z-=1500
                    image(bullet,z,y+30,1,1);
                    shoot=false
                    }


                    //if enemy1 hits player, player dies
                    body1=collideRectRect(x,y,1,100,c1+700,d1+130,20,50);

                    if (body1===true){
                    level+=20
                    }

                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                    if (c1<=-720){
                    c1=1100
                    }

                    ////////////////////////////////////////////////////////// Enemy NUMBER 2

                    //Enemy move
                    c2-=11

                    // collision of bullet with the enemy
                    shoot3=collideRectRect(z,y+30,10,10,c2+800,d2+110,95,100);

                    if (shoot3===false){

                    image(enemy2,c2+800,d2+110,100,100);
                    }


                    if (shoot3===true){
                    c2+=70000
                    d2+=70000
                    image(enemy2,c2,d2,100,100);
                    z-=1500
                    image(bullet,z,y+30,1,1);
                    shoot=false
                    }

                    //if enemy2 hits player, player dies
                    body2=collideRectRect(x,y,1,100,c2+800,d2+130,20,50);

                    if (body2===true){
                    level+=20
                    }


                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                    if (c2<=-820){
                    c2=1100
                    }
                    ////////////////////////////////////////////////////////// Enemy NUMBER 3

                    //Enemy move
                    c3-=9

                    // collision of bullet with the enemy
                    shoot3=collideRectRect(z,y+30,10,10,c3+900,d3+110,95,100);

                    if (shoot3===false){

                    image(enemy3,c3+900,d3+110,100,100);
                    }


                    if (shoot3===true){
                    c3+=70000
                    d3+=70000
                    image(enemy3,c3,d3,100,100);
                    z-=1500
                    image(bullet,z,y+30,1,1);
                    shoot=false
                    }

                    //if enemy2 hits player, player dies
                    body3=collideRectRect(x,y,1,100,c3+900,d3+130,20,50);

                    if (body3===true){
                    level+=20
                    }

                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                    if (c3<=-840){
                    c3=1100
                    }

                    ////////////////////////////////////////////////////////// Enemy NUMBER 4

                    //Enemy move
                    c4-=13

                    // collision of bullet with the enemy
                    shoot3=collideRectRect(z,y+30,10,10,c4+1000,d4+510,95,100);

                    if (shoot3===false){
                    image(enemy3,c4+1000,d4+510,100,100);
                    }


                    if (shoot3===true){
                    c4+=70000
                    d4+=70000
                    image(enemy3,c4,d4,100,100);
                    z-=1500
                    image(bullet,z,y+30,1,1);
                    shoot=false
                    }


                    //if enemy2 hits player, player dies
                    body4=collideRectRect(x,y,1,100,c4+1000,d4+530,20,50);

                    if (body4===true){
                    level+=20
                    }

                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                    if (c4<=-1020){
                    c4=1100
                    }


                    ////////////////////////////////////////////////////////// Enemy NUMBER 5
                    //Enemy move
                    c5-=5
                    // collision of bullet with the enemy
                    shoot4=collideRectRect(z,y+30,10,10,c5+700,d5+510,95,100);

                    if (shoot4===false){
                    image(enemy5,c5+700,d5+510,100,100);
                    }


                    if (shoot4===true){
                    c5+=70000
                    d5+=70000
                    image(enemy5,c5,d5,100,100);
                    z-=1500
                    image(bullet,z,y+30,1,1);
                    shoot=false
                    }

                    //if enemy5 hits player, player dies
                    body5=collideRectRect(x,y,1,100,c5+700,d5+530,20,50);

                    if (body5===true){
                    level+=20
                    }

                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                    if (c5<=-720){
                    c5=1100
                    }


                    ////////////////////////////////////////////////////////// Enemy NUMBER 6
                    //Enemy move
                    c6-=9

                    // collision of bullet with the enemy
                    shoot5=collideRectRect(z,y+30,10,10,c6+800,d6+510,95,100);

                    if (shoot5===false){
                     image(enemy5,c6+800,d6+510,100,100);
                    }


                    if (shoot5===true){
                     c6+=70000
                     d6+=70000
                     image(enemy5,c6,d6,100,100);
                     z-=1500
                     image(bullet,z,y+30,1,1);
                     shoot=false
                    }

                    //if enemy5 hits player, player dies
                    body6=collideRectRect(x,y,1,100,c6+800,d6+530,20,50);

                    if (body6===true){
                    level+=20
                    }

                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                    if (c6<=-820){
                    c6=1100
                    }

                    ////////////////////////////////////////////////////////// Enemy NUMBER 7

                    //Enemy move
                    c7-=11

                    // collision of bullet with the enemy
                    shoot6=collideRectRect(z,y+30,10,10,c7+900,d7+510,95,100);

                    if (shoot6===false){
                      image(enemy6,c7+900,d7+510,100,100);
                    }


                    if (shoot6===true){
                      c7+=70000
                      d7+=70000
                      image(enemy6,c7,d7,100,100);
                      z-=1500
                      image(bullet,z,y+30,1,1);
                      shoot=false
                    }

                    //if enemy0 hits player, player dies
                    body6=collideRectRect(x,y,2,100,c7+900,d7+530,20,50);

                    if (body6===true){
                    level+=20
                    }

                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                     if (c7<=-920){
                    c7=1100
                     }
                     ////////////////////////////////////////////////////////// Enemy NUMBER 8

                     //Enemy move
                     c8-=12

                     // collision of bullet with the enemy
                     shoot7=collideRectRect(z,y+30,10,10,c8+1200,d8+510,95,100);

                     if (shoot7===false){
                     image(enemy8,c8+1200,d8+510,95,100);
                     }


                     if (shoot7===true){
                     c8+=70000
                     d8+=70000
                     image(enemy8,c8,d8,100,100);
                     z-=1500
                     image(bullet,z,y+30,1,1);
                     shoot=false
                     }

                     //if enemy0 hits player, player dies
                     body7=collideRectRect(x,y,2,100,c8+1200,d8+530,20,50);

                     if (body7===true){
                     level+=22
                     }

                     // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                     if (c8<=-1200){
                     c8=1100
                     }

                    /*------------------------- Blocks for the game---------------------*/

                                  /*---------- lvl. One of the game-----------*/

                    // Blocks for part 1 of level 1
                    fill(51, 102, 0);
                    rect(0,200,1240,20);
                    fill(97, 42, 0);
                    rect(0,209,1240,15);

                    //the stairs in between the two parts
                    image(img1,1140, 200,70,200);

                    //Blocks for part 2 of level 1
                    fill(51, 102, 0);
                    rect(0,400,1240,20);
                    fill(97, 42, 0);
                    rect(0,409,1240,15);

                    //the stairs in between the two parts
                    image(img1,0,400,70,200);


                    //Blocks for part 3 of level 1
                    fill(51, 102, 0);
                    rect(0,600,1240,20);
                    fill(97, 42, 0);
                    rect(0,609,1240,15);

                    //the stairs in between the two parts
                    image(img1,1140,600,70,200);

                    //Blocks for part 4 of level 1
                    fill(51, 102, 0);
                    rect(0,800,1240,20);
                    fill(97, 42, 0);
                    rect(0,809,1240,15);

                    //indication of the level the player is on
                        fill(255);
                        textSize(20);
                        text(' Level= 5/8', 50, 20);


                    //Once reached end of map go to level 2
                     exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



                    if (exit===true){
                      level+=1
                      print("Made it!")

                    }
                    }












                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 6

                        else if (level===11) {
                          width=1240;
                          height=820;
                          x= 0;
                          y= 0;
                          jump = false;  //Character is NOT jumping
                          dy = 0;  //Change in height  <------------------------
                          gravity = 0;
                          z=x;

                          // Enemy variables.
                          //E0
                          c=x;
                          d=x;
                          //E1
                          c1=x;
                          d1=x;
                          //E2
                          c2=x;
                          d2=x;
                          //E3
                          c3=x;
                          d3=x;
                          //E4
                          c4=x;
                          d4=x;
                          //E5
                          c5=x;
                          d5=x;
                          //E6
                          c6=x;
                          d6=x;
                          //E7
                          c7=x;
                          d7=x;
                          //E8
                          c8=x;
                          d8=x;

                          level+=1;


                        }

                         else if (level===12){


                           /*---------------Landing of the player and the ladder areas---------*/

                           //part 1 of level 1 collide and stop the player
                           hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

                           //collision of the ladder area and the player
                           hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

                           //part 2 of level 1 collide and stop the player
                           hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

                           //collsion of the ladder 2 are and the player
                           hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

                           //part 3 of level 1 collide and stop the player
                           hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

                           //collision of the ladder area and the player
                           hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

                           //part 4 of level 1 collide and stop the player
                           hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





                         /*---------------------What to do when the player has landed or jumps--------------*/

                         //Print all of our vertical values
                         //print("Force:",force);
                         //print("dy:",dy);
                         //  print("x:",x);


                           //Check if character hits the base
                           if (y>height/1.09) {
                             y = height/1.09;
                             gravity = 0;
                             dy = 0;
                             jump = false;

                           }

                           //Check if character hits floating platform AND is falling
                           else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
                             dy = 0;
                             gravity = 0;
                             jump = false;
                           }

                           //If character isn't jumping, pull down on them
                           else if (jump === false) {
                             dy = -5;
                             gravity = .5;
                           }

                           //the ladders and bringing the character down
                           if (hit2===true|| hit3===true || hit5===true){
                             force = true;
                           }
                           //when the player is not on the ladder force is false
                           else if (hit3===false){
                             force = false;
                           }




                           //background and add the character placement
                           image(img, 0, 0, 1240,820);
                           gif_createImg.position(x,y);
                           y-=dy;
                           dy-=gravity;

                         /*---------------- Controls of the character--------------- */

                         if (keyIsDown(RIGHT_ARROW)) {
                             right=true
                             x+=7;


                           }

                         if (keyIsDown(LEFT_ARROW)) {
                              left=true
                             x-=7;

                           }


                         if (keyIsDown(UP_ARROW) && jump===false) {
                             right=false
                             left=false
                             jump=true;
                             dy = 15;
                             gravity = 0.5;
                           }

                         if (keyIsDown(DOWN_ARROW) && force===true) {
                             right=false
                             left=false
                             y+=5;
                           }

                           //dont allow player to go off the map
                         if (x<=0){
                             x+=5;
                           }

                           else if (x>=1180){
                           x-=10;
                             //level+=1;
                         }

                         //to change from walking into stop
                         if (left===true||right===true){
                           gif_createImg.position(x,y);
                           image(gif_loadImg,x-10000,y-10000);
                         }

                           else if (left===false||right===false){
                           gif_createImg.position(x-10000,y-10000);
                           image(gif_loadImg,x,y);
                         }


                         //the character's ability to shoot bullets

                         shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





                         if (shoot===true){
                         z+=80
                         image(bullet,z,y+40,1,1);
                         }

                         if (shoot1===true){
                          image(bullet,z,y+30,1,1);
                         }

                         else if (shoot1===false){
                           image(bullet,z,y+30,10,10);
                         }

                         if (z>=1180){
                           z-=1500
                           image(bullet,z,y+30,1,1);
                           shoot=false

                         }

                         /*----------------------------The Enemy-----------------------------*/

                         ////////////////////////////////////////////////////////// Enemy NUMBER 0

                         //Enemy move
                         c-=2

                         // collision of bullet with the enemy
                         shoot2=collideRectRect(z,y+30,10,10,c+600,d+110,95,100);

                         if (shoot2===false){
                         image(enemy,c+600,d+110,100,100);
                         }


                         if (shoot2===true){
                         c+=70000
                         d+=70000
                         image(enemy,c,d,100,100);
                         z-=1500
                         image(bullet,z,y+30,1,1);
                         shoot=false
                         }

                         //if enemy0 hits player, player dies
                         body0=collideRectRect(x,y,2,100,c+600,d+130,20,50);

                         if (body0===true){
                         level+=18
                         }

                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                         if (c<=-620){
                         c=1100
                         }
                         ////////////////////////////////////////////////////////// Enemy NUMBER 1

                         //Enemy move
                         c1-=2

                         // collision of bullet with the enemy
                         shoot3=collideRectRect(z,y+30,10,10,c1+700,d1+110,95,100);

                         if (shoot3===false){

                         image(enemy1,c1+700,d1+110,100,100);
                         }


                         if (shoot3===true){
                         c1+=70000
                         d1+=70000
                         image(enemy1,c1,d1,100,100);
                         z-=1500
                         image(bullet,z,y+30,1,1);
                         shoot=false
                         }


                         //if enemy1 hits player, player dies
                         body1=collideRectRect(x,y,1,100,c1+700,d1+130,20,50);

                         if (body1===true){
                         level+=18
                         }

                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                         if (c1<=-720){
                         c1=1100
                         }

                         ////////////////////////////////////////////////////////// Enemy NUMBER 2

                         //Enemy move
                         c2-=19

                         // collision of bullet with the enemy
                         shoot3=collideRectRect(z,y+30,10,10,c2+800,d2+110,95,100);

                         if (shoot3===false){

                         image(enemy2,c2+800,d2+110,100,100);
                         }


                         if (shoot3===true){
                         c2+=70000
                         d2+=70000
                         image(enemy2,c2,d2,100,100);
                         z-=1500
                         image(bullet,z,y+30,1,1);
                         shoot=false
                         }

                         //if enemy2 hits player, player dies
                         body2=collideRectRect(x,y,1,100,c2+800,d2+130,20,50);

                         if (body2===true){
                         level+=18
                         }


                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                         if (c2<=-820){
                         c2=1100
                         }
                         ////////////////////////////////////////////////////////// Enemy NUMBER 3

                         //Enemy move
                         c3-=17

                         // collision of bullet with the enemy
                         shoot3=collideRectRect(z,y+30,10,10,c3+900,d3+110,95,100);

                         if (shoot3===false){

                         image(enemy3,c3+900,d3+110,100,100);
                         }


                         if (shoot3===true){
                         c3+=70000
                         d3+=70000
                         image(enemy3,c3,d3,100,100);
                         z-=1500
                         image(bullet,z,y+30,1,1);
                         shoot=false
                         }

                         //if enemy2 hits player, player dies
                         body3=collideRectRect(x,y,1,100,c3+900,d3+130,20,50);

                         if (body3===true){
                         level+=18
                         }

                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                         if (c3<=-840){
                         c3=1100
                         }

                         ////////////////////////////////////////////////////////// Enemy NUMBER 4

                         //Enemy move
                         c4-=16

                         // collision of bullet with the enemy
                         shoot3=collideRectRect(z,y+30,10,10,c4+1000,d4+510,95,100);

                         if (shoot3===false){
                         image(enemy3,c4+1000,d4+510,100,100);
                         }


                         if (shoot3===true){
                         c4+=70000
                         d4+=70000
                         image(enemy3,c4,d4,100,100);
                         z-=1500
                         image(bullet,z,y+30,1,1);
                         shoot=false
                         }


                         //if enemy2 hits player, player dies
                         body4=collideRectRect(x,y,1,100,c4+1000,d4+530,20,50);

                         if (body4===true){
                         level+=18
                         }

                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                         if (c4<=-1020){
                         c4=1100
                         }


                         ////////////////////////////////////////////////////////// Enemy NUMBER 5
                         //Enemy move
                         c5-=13
                         // collision of bullet with the enemy
                         shoot4=collideRectRect(z,y+30,10,10,c5+700,d5+510,95,100);

                         if (shoot4===false){
                         image(enemy5,c5+700,d5+510,100,100);
                         }


                         if (shoot4===true){
                         c5+=70000
                         d5+=70000
                         image(enemy5,c5,d5,100,100);
                         z-=1500
                         image(bullet,z,y+30,1,1);
                         shoot=false
                         }

                         //if enemy5 hits player, player dies
                         body5=collideRectRect(x,y,1,100,c5+700,d5+530,20,50);

                         if (body5===true){
                         level+=18
                         }

                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                         if (c5<=-720){
                         c5=1100
                         }


                         ////////////////////////////////////////////////////////// Enemy NUMBER 6
                         //Enemy move
                         c6-=19

                         // collision of bullet with the enemy
                         shoot5=collideRectRect(z,y+30,10,10,c6+800,d6+510,95,100);

                         if (shoot5===false){
                          image(enemy5,c6+800,d6+510,100,100);
                         }


                         if (shoot5===true){
                          c6+=70000
                          d6+=70000
                          image(enemy5,c6,d6,100,100);
                          z-=1500
                          image(bullet,z,y+30,1,1);
                          shoot=false
                         }

                         //if enemy5 hits player, player dies
                         body6=collideRectRect(x,y,1,100,c6+800,d6+530,20,50);

                         if (body6===true){
                         level+=18
                         }

                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                         if (c6<=-820){
                         c6=1100
                         }

                         ////////////////////////////////////////////////////////// Enemy NUMBER 7

                         //Enemy move
                         c7-=15

                         // collision of bullet with the enemy
                         shoot6=collideRectRect(z,y+30,10,10,c7+900,d7+510,95,100);

                         if (shoot6===false){
                           image(enemy6,c7+900,d7+510,100,100);
                         }


                         if (shoot6===true){
                           c7+=70000
                           d7+=70000
                           image(enemy6,c7,d7,100,100);
                           z-=1500
                           image(bullet,z,y+30,1,1);
                           shoot=false
                         }

                         //if enemy0 hits player, player dies
                         body6=collideRectRect(x,y,2,100,c7+900,d7+530,20,50);

                         if (body6===true){
                         level+=18
                         }

                         // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                          if (c7<=-920){
                         c7=1100
                          }

                          ////////////////////////////////////////////////////////// Enemy NUMBER 8

                          //Enemy move
                          c8-=2

                          // collision of bullet with the enemy
                          shoot7=collideRectRect(z,y+30,10,10,c8+1200,d8+510,95,100);

                          if (shoot7===false){
                          image(enemy8,c8+1200,d8+510,95,100);
                          }


                          if (shoot7===true){
                          c8+=70000
                          d8+=70000
                          image(enemy8,c8,d8,100,100);
                          z-=1500
                          image(bullet,z,y+30,1,1);
                          shoot=false
                          }

                          //if enemy0 hits player, player dies
                          body7=collideRectRect(x,y,2,100,c8+1200,d8+530,20,50);

                          if (body7===true){
                          level+=18
                          }

                          // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                          if (c8<=-1200){
                          c8=1100
                          }

                         /*------------------------- Blocks for the game---------------------*/

                                       /*---------- lvl. One of the game-----------*/

                         // Blocks for part 1 of level 1
                         fill(51, 102, 0);
                         rect(0,200,1240,20);
                         fill(97, 42, 0);
                         rect(0,209,1240,15);

                         //the stairs in between the two parts
                         image(img1,1140, 200,70,200);

                         //Blocks for part 2 of level 1
                         fill(51, 102, 0);
                         rect(0,400,1240,20);
                         fill(97, 42, 0);
                         rect(0,409,1240,15);

                         //the stairs in between the two parts
                         image(img1,0,400,70,200);


                         //Blocks for part 3 of level 1
                         fill(51, 102, 0);
                         rect(0,600,1240,20);
                         fill(97, 42, 0);
                         rect(0,609,1240,15);

                         //the stairs in between the two parts
                         image(img1,1140,600,70,200);

                         //Blocks for part 4 of level 1
                         fill(51, 102, 0);
                         rect(0,800,1240,20);
                         fill(97, 42, 0);
                         rect(0,809,1240,15);

                         //indication of the level the player is on
                             fill(255);
                             textSize(20);
                             text(' Level= 6/8', 50, 20);


                         //Once reached end of map go to level 2
                          exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



                         if (exit===true){
                           level+=1
                           print("Made it!")

                         }
                         }












                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 7

                                  else if (level===13) {
                                    width=1240;
                                    height=820;
                                    x= 0;
                                    y= 0;
                                    jump = false;  //Character is NOT jumping
                                    dy = 0;  //Change in height  <------------------------
                                    gravity = 0;
                                    z=x;

                                    // Enemy variables.
                                    //E0
                                    c=x;
                                    d=x;
                                    //E1
                                    c1=x;
                                    d1=x;
                                    //E2
                                    c2=x;
                                    d2=x;
                                    //E3
                                    c3=x;
                                    d3=x;
                                    //E4
                                    c4=x;
                                    d4=x;
                                    //E5
                                    c5=x;
                                    d5=x;
                                    //E6
                                    c6=x;
                                    d6=x;
                                    //E7
                                    c7=x;
                                    d7=x;
                                    //E8
                                    c8=x;
                                    d8=x;

                                    level+=1;


                                  }

                                   else if (level===14){


                                     /*---------------Landing of the player and the ladder areas---------*/

                                     //part 1 of level 1 collide and stop the player
                                     hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

                                     //collision of the ladder area and the player
                                     hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

                                     //part 2 of level 1 collide and stop the player
                                     hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

                                     //collsion of the ladder 2 are and the player
                                     hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

                                     //part 3 of level 1 collide and stop the player
                                     hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

                                     //collision of the ladder area and the player
                                     hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

                                     //part 4 of level 1 collide and stop the player
                                     hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





                                   /*---------------------What to do when the player has landed or jumps--------------*/

                                   //Print all of our vertical values
                                   //print("Force:",force);
                                   //print("dy:",dy);
                                   //  print("x:",x);


                                     //Check if character hits the base
                                     if (y>height/1.09) {
                                       y = height/1.09;
                                       gravity = 0;
                                       dy = 0;
                                       jump = false;

                                     }

                                     //Check if character hits floating platform AND is falling
                                     else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
                                       dy = 0;
                                       gravity = 0;
                                       jump = false;
                                     }

                                     //If character isn't jumping, pull down on them
                                     else if (jump === false) {
                                       dy = -5;
                                       gravity = .5;
                                     }

                                     //the ladders and bringing the character down
                                     if (hit2===true|| hit3===true || hit5===true){
                                       force = true;
                                     }
                                     //when the player is not on the ladder force is false
                                     else if (hit3===false){
                                       force = false;
                                     }




                                     //background and add the character placement
                                     image(img, 0, 0, 1240,820);
                                     gif_createImg.position(x,y);
                                     y-=dy;
                                     dy-=gravity;

                                   /*---------------- Controls of the character--------------- */

                                   if (keyIsDown(RIGHT_ARROW)) {
                                       right=true
                                       x+=7;


                                     }

                                   if (keyIsDown(LEFT_ARROW)) {
                                        left=true
                                       x-=7;

                                     }


                                   if (keyIsDown(UP_ARROW) && jump===false) {
                                       right=false
                                       left=false
                                       jump=true;
                                       dy = 15;
                                       gravity = 0.5;
                                     }

                                   if (keyIsDown(DOWN_ARROW) && force===true) {
                                       right=false
                                       left=false
                                       y+=5;
                                     }

                                     //dont allow player to go off the map
                                   if (x<=0){
                                       x+=5;
                                     }

                                     else if (x>=1180){
                                     x-=10;
                                       //level+=1;
                                   }

                                   //to change from walking into stop
                                   if (left===true||right===true){
                                     gif_createImg.position(x,y);
                                     image(gif_loadImg,x-10000,y-10000);
                                   }

                                     else if (left===false||right===false){
                                     gif_createImg.position(x-10000,y-10000);
                                     image(gif_loadImg,x,y);
                                   }


                                   //the character's ability to shoot bullets

                                   shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





                                   if (shoot===true){
                                   z+=80
                                   image(bullet,z,y+40,1,1);
                                   }

                                   if (shoot1===true){
                                    image(bullet,z,y+30,1,1);
                                   }

                                   else if (shoot1===false){
                                     image(bullet,z,y+30,10,10);
                                   }

                                   if (z>=1180){
                                     z-=1500
                                     image(bullet,z,y+30,1,1);
                                     shoot=false

                                   }

                                   /*----------------------------The Enemy-----------------------------*/

                                   ////////////////////////////////////////////////////////// Enemy NUMBER 0

                                   //Enemy move
                                   c-=15

                                   // collision of bullet with the enemy
                                   shoot2=collideRectRect(z,y+30,10,10,c+600,d+110,95,100);

                                   if (shoot2===false){
                                   image(enemy,c+600,d+110,100,100);
                                   }


                                   if (shoot2===true){
                                   c+=70000
                                   d+=70000
                                   image(enemy,c,d,100,100);
                                   z-=1500
                                   image(bullet,z,y+30,1,1);
                                   shoot=false
                                   }

                                   //if enemy0 hits player, player dies
                                   body0=collideRectRect(x,y,2,100,c+600,d+130,20,50);

                                   if (body0===true){
                                   level+=16
                                   }

                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                   if (c<=-620){
                                   c=1100
                                   }
                                   ////////////////////////////////////////////////////////// Enemy NUMBER 1

                                   //Enemy move
                                   c1-=7

                                   // collision of bullet with the enemy
                                   shoot3=collideRectRect(z,y+30,10,10,c1+700,d1+110,95,100);

                                   if (shoot3===false){

                                   image(enemy1,c1+700,d1+110,100,100);
                                   }


                                   if (shoot3===true){
                                   c1+=70000
                                   d1+=70000
                                   image(enemy1,c1,d1,100,100);
                                   z-=1500
                                   image(bullet,z,y+30,1,1);
                                   shoot=false
                                   }


                                   //if enemy1 hits player, player dies
                                   body1=collideRectRect(x,y,1,100,c1+700,d1+130,20,50);

                                   if (body1===true){
                                   level+=16
                                   }

                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                   if (c1<=-720){
                                   c1=1100
                                   }

                                   ////////////////////////////////////////////////////////// Enemy NUMBER 2

                                   //Enemy move
                                   c2-=17

                                   // collision of bullet with the enemy
                                   shoot3=collideRectRect(z,y+30,10,10,c2+800,d2+110,95,100);

                                   if (shoot3===false){

                                   image(enemy2,c2+800,d2+110,100,100);
                                   }


                                   if (shoot3===true){
                                   c2+=70000
                                   d2+=70000
                                   image(enemy2,c2,d2,100,100);
                                   z-=1500
                                   image(bullet,z,y+30,1,1);
                                   shoot=false
                                   }

                                   //if enemy2 hits player, player dies
                                   body2=collideRectRect(x,y,1,100,c2+800,d2+130,20,50);

                                   if (body2===true){
                                   level+=16
                                   }


                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                   if (c2<=-820){
                                   c2=1100
                                   }
                                   ////////////////////////////////////////////////////////// Enemy NUMBER 3

                                   //Enemy move
                                   c3-=9

                                   // collision of bullet with the enemy
                                   shoot3=collideRectRect(z,y+30,10,10,c3+900,d3+110,95,100);

                                   if (shoot3===false){

                                   image(enemy3,c3+900,d3+110,100,100);
                                   }


                                   if (shoot3===true){
                                   c3+=70000
                                   d3+=70000
                                   image(enemy3,c3,d3,100,100);
                                   z-=1500
                                   image(bullet,z,y+30,1,1);
                                   shoot=false
                                   }

                                   //if enemy2 hits player, player dies
                                   body3=collideRectRect(x,y,1,100,c3+900,d3+130,20,50);

                                   if (body3===true){
                                   level+=16
                                   }

                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                   if (c3<=-840){
                                   c3=1100
                                   }

                                   ////////////////////////////////////////////////////////// Enemy NUMBER 4

                                   //Enemy move
                                   c4-=12

                                   // collision of bullet with the enemy
                                   shoot3=collideRectRect(z,y+30,10,10,c4+1000,d4+510,95,100);

                                   if (shoot3===false){
                                   image(enemy3,c4+1000,d4+510,100,100);
                                   }


                                   if (shoot3===true){
                                   c4+=70000
                                   d4+=70000
                                   image(enemy3,c4,d4,100,100);
                                   z-=1500
                                   image(bullet,z,y+30,1,1);
                                   shoot=false
                                   }


                                   //if enemy2 hits player, player dies
                                   body4=collideRectRect(x,y,1,100,c4+1000,d4+530,20,50);

                                   if (body4===true){
                                   level+=16
                                   }

                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                   if (c4<=-1020){
                                   c4=1100
                                   }


                                   ////////////////////////////////////////////////////////// Enemy NUMBER 5
                                   //Enemy move
                                   c5-=10
                                   // collision of bullet with the enemy
                                   shoot4=collideRectRect(z,y+30,10,10,c5+700,d5+510,95,100);

                                   if (shoot4===false){
                                   image(enemy5,c5+700,d5+510,100,100);
                                   }


                                   if (shoot4===true){
                                   c5+=70000
                                   d5+=70000
                                   image(enemy5,c5,d5,100,100);
                                   z-=1500
                                   image(bullet,z,y+30,1,1);
                                   shoot=false
                                   }

                                   //if enemy5 hits player, player dies
                                   body5=collideRectRect(x,y,1,100,c5+700,d5+530,20,50);

                                   if (body5===true){
                                   level+=16
                                   }

                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                   if (c5<=-720){
                                   c5=1100
                                   }


                                   ////////////////////////////////////////////////////////// Enemy NUMBER 6
                                   //Enemy move
                                   c6-=15

                                   // collision of bullet with the enemy
                                   shoot5=collideRectRect(z,y+30,10,10,c6+800,d6+510,95,100);

                                   if (shoot5===false){
                                    image(enemy5,c6+800,d6+510,100,100);
                                   }


                                   if (shoot5===true){
                                    c6+=70000
                                    d6+=70000
                                    image(enemy5,c6,d6,100,100);
                                    z-=1500
                                    image(bullet,z,y+30,1,1);
                                    shoot=false
                                   }

                                   //if enemy5 hits player, player dies
                                   body6=collideRectRect(x,y,1,100,c6+800,d6+530,20,50);

                                   if (body6===true){
                                   level+=16
                                   }

                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                   if (c6<=-820){
                                   c6=1100
                                   }

                                   ////////////////////////////////////////////////////////// Enemy NUMBER 7

                                   //Enemy move
                                   c7-=12

                                   // collision of bullet with the enemy
                                   shoot6=collideRectRect(z,y+30,10,10,c7+900,d7+510,95,100);

                                   if (shoot6===false){
                                     image(enemy6,c7+900,d7+510,100,100);
                                   }


                                   if (shoot6===true){
                                     c7+=70000
                                     d7+=70000
                                     image(enemy6,c7,d7,100,100);
                                     z-=1500
                                     image(bullet,z,y+30,1,1);
                                     shoot=false
                                   }

                                   //if enemy0 hits player, player dies
                                   body6=collideRectRect(x,y,2,100,c7+900,d7+530,20,50);

                                   if (body6===true){
                                   level+=16
                                   }

                                   // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                    if (c7<=-920){
                                   c7=1100
                                    }
                                    ////////////////////////////////////////////////////////// Enemy NUMBER 8

                                    //Enemy move
                                    c8-=14

                                    // collision of bullet with the enemy
                                    shoot7=collideRectRect(z,y+30,10,10,c8+1200,d8+510,95,100);

                                    if (shoot7===false){
                                    image(enemy8,c8+1200,d8+510,95,100);
                                    }


                                    if (shoot7===true){
                                    c8+=70000
                                    d8+=70000
                                    image(enemy8,c8,d8,100,100);
                                    z-=1500
                                    image(bullet,z,y+30,1,1);
                                    shoot=false
                                    }

                                    //if enemy0 hits player, player dies
                                    body7=collideRectRect(x,y,2,100,c8+1200,d8+530,20,50);

                                    if (body7===true){
                                    level+=16
                                    }

                                    // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                    if (c8<=-1200){
                                    c8=1100
                                    }

                                   /*------------------------- Blocks for the game---------------------*/

                                                 /*---------- lvl. One of the game-----------*/

                                   // Blocks for part 1 of level 1
                                   fill(51, 102, 0);
                                   rect(0,200,1240,20);
                                   fill(97, 42, 0);
                                   rect(0,209,1240,15);

                                   //the stairs in between the two parts
                                   image(img1,1140, 200,70,200);

                                   //Blocks for part 2 of level 1
                                   fill(51, 102, 0);
                                   rect(0,400,1240,20);
                                   fill(97, 42, 0);
                                   rect(0,409,1240,15);

                                   //the stairs in between the two parts
                                   image(img1,0,400,70,200);


                                   //Blocks for part 3 of level 1
                                   fill(51, 102, 0);
                                   rect(0,600,1240,20);
                                   fill(97, 42, 0);
                                   rect(0,609,1240,15);

                                   //the stairs in between the two parts
                                   image(img1,1140,600,70,200);

                                   //Blocks for part 4 of level 1
                                   fill(51, 102, 0);
                                   rect(0,800,1240,20);
                                   fill(97, 42, 0);
                                   rect(0,809,1240,15);

                                   //indication of the level the player is on
                                       fill(255);
                                       textSize(20);
                                       text(' Level= 7/8', 50, 20);


                                   //Once reached end of map go to level 2
                                    exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



                                   if (exit===true){
                                     level+=1
                                     print("Made it!")

                                   }
                                   }











                                        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LEVEL 8
                                            else if (level===15) {
                                              width=1240;
                                              height=820;
                                              x= 0;
                                              y= 0;
                                              jump = false;  //Character is NOT jumping
                                              dy = 0;  //Change in height  <------------------------
                                              gravity = 0;
                                              z=x;

                                              // Enemy variables.
                                              //E0
                                              c=x;
                                              d=x;
                                              //E1
                                              c1=x;
                                              d1=x;
                                              //E2
                                              c2=x;
                                              d2=x;
                                              //E3
                                              c3=x;
                                              d3=x;
                                              //E4
                                              c4=x;
                                              d4=x;
                                              //E5
                                              c5=x;
                                              d5=x;
                                              //E6
                                              c6=x;
                                              d6=x;
                                              //E7
                                              c7=x;
                                              d7=x;
                                              //E8
                                              c8=x;
                                              d8=x;

                                              level+=1;


                                            }

                                             else if (level===16){


                                               /*---------------Landing of the player and the ladder areas---------*/

                                               //part 1 of level 1 collide and stop the player
                                               hit= collideRectRect(x+75,y+72,75,2,0,200,1240,2);

                                               //collision of the ladder area and the player
                                               hit2=collideRectRect(x+75,y+72,75,2,1260,200,1280,2);

                                               //part 2 of level 1 collide and stop the player
                                               hit1= collideRectRect(x+75,y+72,75,2,0,400,1280,2);

                                               //collsion of the ladder 2 are and the player
                                               hit3= collideRectRect(x+75,y+72,75,2,0,400,80,2);

                                               //part 3 of level 1 collide and stop the player
                                               hit4= collideRectRect(x+75,y+72,75,2,0,600,1240,2);

                                               //collision of the ladder area and the player
                                               hit5=collideRectRect(x+75,y+72,75,2,1260,600,1280,2);

                                               //part 4 of level 1 collide and stop the player
                                               hit6= collideRectRect(x+75,y+72,75,2,0,800,1280,2);





                                             /*---------------------What to do when the player has landed or jumps--------------*/

                                             //Print all of our vertical values
                                             //print("Force:",force);
                                             //print("dy:",dy);
                                             //  print("x:",x);


                                               //Check if character hits the base
                                               if (y>height/1.09) {
                                                 y = height/1.09;
                                                 gravity = 0;
                                                 dy = 0;
                                                 jump = false;

                                               }

                                               //Check if character hits floating platform AND is falling
                                               else if (hit && dy<=0 || hit1 && dy<=0 || hit4 && dy<=0 || hit6 && dy<=0) {
                                                 dy = 0;
                                                 gravity = 0;
                                                 jump = false;
                                               }

                                               //If character isn't jumping, pull down on them
                                               else if (jump === false) {
                                                 dy = -5;
                                                 gravity = .5;
                                               }

                                               //the ladders and bringing the character down
                                               if (hit2===true|| hit3===true || hit5===true){
                                                 force = true;
                                               }
                                               //when the player is not on the ladder force is false
                                               else if (hit3===false){
                                                 force = false;
                                               }




                                               //background and add the character placement
                                               image(img, 0, 0, 1240,820);
                                               gif_createImg.position(x,y);
                                               y-=dy;
                                               dy-=gravity;

                                             /*---------------- Controls of the character--------------- */

                                             if (keyIsDown(RIGHT_ARROW)) {
                                                 right=true
                                                 x+=7;


                                               }

                                             if (keyIsDown(LEFT_ARROW)) {
                                                  left=true
                                                 x-=7;

                                               }


                                             if (keyIsDown(UP_ARROW) && jump===false) {
                                                 right=false
                                                 left=false
                                                 jump=true;
                                                 dy = 15;
                                                 gravity = 0.5;
                                               }

                                             if (keyIsDown(DOWN_ARROW) && force===true) {
                                                 right=false
                                                 left=false
                                                 y+=5;
                                               }

                                               //dont allow player to go off the map
                                             if (x<=0){
                                                 x+=5;
                                               }

                                               else if (x>=1180){
                                               x-=10;
                                                 //level+=1;
                                             }

                                             //to change from walking into stop
                                             if (left===true||right===true){
                                               gif_createImg.position(x,y);
                                               image(gif_loadImg,x-10000,y-10000);
                                             }

                                               else if (left===false||right===false){
                                               gif_createImg.position(x-10000,y-10000);
                                               image(gif_loadImg,x,y);
                                             }


                                             //the character's ability to shoot bullets

                                             shoot1=collideRectRect(z,y+20,10,10,x-1280,y+20,1280,10);





                                             if (shoot===true){
                                             z+=80
                                             image(bullet,z,y+40,1,1);
                                             }

                                             if (shoot1===true){
                                              image(bullet,z,y+30,1,1);
                                             }

                                             else if (shoot1===false){
                                               image(bullet,z,y+30,10,10);
                                             }

                                             if (z>=1180){
                                               z-=1500
                                               image(bullet,z,y+30,1,1);
                                               shoot=false

                                             }

                                             /*----------------------------The Enemy-----------------------------*/

                                             ////////////////////////////////////////////////////////// Enemy Boss


                                              //Enemy move
                                              c-=16

                                              // collision of bullet with the enemy
                                              shoot2=collideRectRect(z,y+30,10,10,c+900,d+470,120,100);

                                              if (shoot2===false){
                                                bossofdeathgif.position(c+900,d+470)
                                              }


                                              if (shoot2===true){
                                              health-=1
                                              print("health:",health);
                                              z-=1500
                                              image(bullet,z,y+30,1,1);
                                              shoot=false

                                              }

                                              if (shoot2===true && health===0){
                                                c+=-5000
                                                d+=-5000
                                                z-=1500
                                                image(bullet,z,y+30,1,1);
                                                shoot=false
                                              }

                                              //if BOSS hits player, player dies
                                              body0=collideRectRect(x,y,2,100,c+920,d+530,20,50);

                                              if (body0===true){
                                              level+=14
                                              }

                                              // MAKE PLAYER GO AROUND, WHEN HE EXITS THE SCREEN

                                               if (c<=-1000){
                                              c=210

                                               }



                                             /*------------------------- Blocks for the game---------------------*/

                                                           /*---------- lvl. One of the game-----------*/

                                                           // Blocks for part 1 of level 1
                                                           fill(0);
                                                           rect(0,200,1240,20);

                                                           rect(0,209,1240,15);

                                                           //the stairs in between the two parts
                                                           image(img1,1140, 200,70,200);

                                                           //Blocks for part 2 of level 1
                                                           rect(0,400,1240,20);
                                                           rect(0,409,1240,15);

                                                           //the stairs in between the two parts
                                                           image(img1,0,400,70,200);


                                                           //Blocks for part 3 of level 1
                                                           rect(0,600,1240,20);
                                                           rect(0,609,1240,15);

                                                           //the stairs in between the two parts
                                                           image(img1,1140,600,70,200);

                                                           //Blocks for part 4 of level 1
                                                           rect(0,800,1240,20);
                                                           rect(0,809,1240,15);

                                                          //Boss health bar
                                                          fill(255);
                                                          textSize(20);
                                                          text('Boss Health:', 940, 35);
                                                          fill(224, 17, 17);
                                                         rect (1000,20, health*3,20 )
                                                         
                                                         //indication of the level the player is on
                                                             fill(255);
                                                             textSize(20);
                                                             text(' Level= 8/8', 50, 20);


                                             //Once reached end of map go to level 2
                                              exit=collideRectRect(x-10,y-10,2,100,0,800,100,2);



                                             if (exit===true){
                                               level+=15
                                               print("Made it!")

                                             }
                                             }





     else if (level===30) {
       gif_createImg.position(-500, -500);
       bossofdeathgif.position(-5000,-5000)
     //Change the backround and inform the user that they won
     image (death,0,0,1240,820);
     fill(255);
     textAlign(CENTER, CENTER);
     textSize(32);
     text('YOU DIED!', width/2, height/2);
     textSize(16);
     text('Refresh page to play again.', width/2, height/2+50);
     print("body:",body0);


   }
          else if (level===31) {
            gif_createImg.position(-500, -500);
            bossofdeathgif.position(-5000,-5000)
          //Change the backround and inform the user that they won
          image (win,0,0,1240,820);
          fill(0);
          textAlign(CENTER, CENTER);
          textSize(50);
          text('YOU WIN!', width/2, height/2);
          textSize(16);
          text('Lets Go Home!', width/2, height/2+50);
          print("body:",body0)



          }

}
//function to shoot
function keyPressed() {
  if (keyCode === 83) {
    shoot=true
}
}

//to make the player stop, animation stops when right and left is not clikced
function keyReleased() {
  if (keyCode === 39) {
    right = false;
  }

  if (keyCode === 37) {
    left = false;
  }
}
