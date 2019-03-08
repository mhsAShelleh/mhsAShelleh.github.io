function setup() {
  // put setup code here
  createCanvas(640,480);

}

function draw() {
  // Snowman,Abdol,March 7
  //create head
  ellipse(207, 78, 60, 60);
  fill(0, 0, 0);
  ellipse (194,74,-13,13);
  ellipse(222,74,-13,13);
  ellipse(208,91,-23,13);
  fill(255, 255, 255);
  //create body
  ellipse(210,150,86,81);
  ellipse(215,264,145,146);
  //create arms
  line(66,92,169,155);
  line(358,93,253,152);
  //create buttons

  ellipse(210,133,-9,8);
  ellipse(210,152,-9,8);
  ellipse(210,172,-9,8);
}
