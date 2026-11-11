// Keavan S
// Winter Biome
// The theme of this piece and future arts will be based on the climate changes made in nature



let theGround = '#a0a0a0';
let theWater = '#0b98ad'; // The initial color of the water
let img;
function preload() {
  img = loadImage('superman.png'); // Replace with the actual path to your image
}


function setup() {
  createCanvas(1920, 1080);
  
}

function draw() {

  
  if (mouseIsPressed) {
    theGround = '#294f2b'; // Change the ground color when a key is pressed
  } else {
    theGround = '#a0a0a0'; // Revert the ground color when the mouse is not pressed
  }

  

  
  // The Sky
  background('#4c7696');
  
 
  image(img, 1520, 50, 100, 100);
  if (keyIsPressed) {
    image(img, 1520, 50, 100, 100);
    image(img, mouseX, mouseY, 100, 100);
  }
if (keyIsPressed) {
  fill('yellow');
  textSize(80); // Set the text sizes
  textFont('Impact');
  text('SUPERMAN', mouseX, mouseY);
  
}



   fill(theWater); // The Water
  rect(0, 500, 1920, 1080);

  //Ring around sun
  fill('#787879');
  noStroke();
  ellipse(1620, 125, 200, 200);
  

  fill('#4c7696');
  rect(0, 500, 1920, 580);

  // The Water
  fill(theWater);
  if (mouseIsPressed) {
    fill('#0a0d2c'); // The Water when mouse is pressed
  }
  
  rect(0, 900, 1920, 180);
  fill('#4c7696');

  
// Ice steps
  fill('#ffffff');
  noStroke();
  ellipse(120, 940, 100, 50);
  ellipse(220, 940, 40, 20);
  ellipse(260, 920, 20, 10);
  ellipse(40, 980, 40, 20);
  ellipse(290, 960, 30, 15);
  ellipse(330, 940, 40, 20);
  ellipse(520, 950, 260, 40);
  ellipse(700, 920, 40, 20);
  ellipse(750, 950, 25, 80);
  ellipse(675, 975, 20, 10);
  ellipse(790, 940, 20, 20);
  ellipse(830, 965, 40, 50);
  ellipse(820, 915, 10, 5);
  ellipse(845, 935, 14, 7);
  ellipse(875, 925, 18, 9);
  ellipse(1155, 940, 400, 20);
  ellipse(920, 960, 30, 10);
  ellipse(1350, 960, 30, 10);
  ellipse(1400, 960, 30, 10);
  ellipse(1450, 980, 20, 5);
  ellipse(1400, 920, 10, 5);
  ellipse(1600, 960, 200, 50);
  ellipse(1750, 960, 30, 10);
  ellipse(1650, 920, 30, 10);
  ellipse(1560, 920, 25, 5);
  ellipse(1850, 920, 30, 10);
  ellipse(1850, 960, 70, 35);
  ellipse(1220, 1050, 1000, 50);
  ellipse(320, 1050, 500, 50);
  ellipse(1000, 980, 20, 10);
  ellipse(1050, 1010, 20, 10);
  ellipse(1080, 990, 20, 10);
  ellipse(1120, 970, 20, 10);
  ellipse(1180, 970, 50, 10);
  ellipse(1220, 970, 50, 10);
  
  // The Sun
  fill('#373736');
  if (keyIsPressed) {
    fill(random(0, 255), random(0, 255), random(0, 255));
  }
  ellipse(1620, 125, 180, 180);

  fill('#361e03');
  stroke('#000000');
  strokeWeight(2);
  rect(300, 100, 80, 800);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  ellipse(340, 150, 350, 300);

  // The Ground
  fill(theGround);
  stroke('#000000');
  strokeWeight(1);
  rect(0, 800, 1920, 100);

  // Snow on the ground
  fill('#ffffff');
  stroke('#c2c0c0');
  strokeWeight(0);
  ellipse(1100, 840, 600, 50);

  fill('#361e03');
  stroke('#000000');
  strokeWeight(2);
  rect(660, 420, 30, 450);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  triangle(625, 420, 725, 420, 675, -5);

  fill('#361e03');
  stroke('#000000');
  strokeWeight(2);
  rect(1200, 350, 30, 450);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  ellipse(1215, 400, 150, 300);

  fill('#361e03');
  stroke('#000000');
  strokeWeight(2);
  rect(1600, 380, 30, 450);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  triangle(1565, 500, 1665, 500, 1615, -5);

  fill('#361e03');
  noStroke(2);
  rect(130, 385, 50, 500);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  ellipse(155, 550, 200, 400);

  fill('#361e03');
  noStroke(2);
  rect(400, 685, 50, 150);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  ellipse(425, 650, 200, 120);

  fill('#361e03');
  noStroke(2);
  rect(900, 740, 50, 150);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  ellipse(925, 750, 200, 120);

  fill('#361e03');
  noStroke(2);
  rect(1390, 720, 50, 150);

  fill('#797978');
  stroke('#000000');
  strokeWeight(0);
  ellipse(1415, 680, 200, 120);

millis(); // Display the number of milliseconds since the program started
fill('black');
textSize(10);
text('Milliseconds: ' + millis(), 1540, 125);

if (millis() > 10000 && millis() <= 15000) {
  fill('yellow');
  textSize(40); // Set the text size for CAUTION
  text('CAUTION', 860, 770);
  textFont('impact');
} else if (millis() < 10000) {
   fill('green');
   textSize(80); // Set the text sizes
   text('START', 240, 180);
   textFont('impact');
   
 }

 if (millis() > 15000) {
   fill('red');
   textSize(60); // Set the text size for STOP
   textFont('impact');
   text('STOP', 1360, 700);
  
 }


  

  

  

  

  



  







  

  

  fill('#4c7696');
  noStroke();
  
  

// The Ground af8336 
// Tree Leaves 011b08
// Tree snow a9a7a7 // Snow Outline c2c0c0
// Tree Trunk 361e03
// The Sun d6d66f
// The Sky 6fb6bc







}
