/*
  // A loop is structued like this:
  keyword (condition) {
    stuff that happens
  }

  // while loop
  // (condition)
  while (keep going as long as this evaluates to true) {
    // stuff happens
  }

  // for loop:
  // (variable assignment; condition to run while true; change to iterator)
  for(var i = 0; i < 20; i = i+ 1) {
    // stuff happens
  }
*/

function setup() {
  createCanvas(500,500)
  background(0,76,153)
}

function draw() {
  //object setup
  fill(153,153,255)
  strokeWeight(10)
  stroke(255,255,204);
  
  //loop
  var rectX = 0;
  while (rectX <= width){
  rect(rectX,rectY,50,50)
  rectX = rectX + 70
    var rectY = 0;
    while (rectY <= height){
      rect(rectX,rectY,50,50)
      rectY = rectY + 70
    }
  }
  
}