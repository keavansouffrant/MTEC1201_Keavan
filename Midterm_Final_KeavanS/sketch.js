// Keavan S
// X-LOCATION
// The Desert, Outerspace, The Ocean
// Press "R" to return to game menu
// Use arrow keys to move the camel in stage 1
// use arrow keys to move the ufo in stage 2
// Use arrow keys to move the boat in stage 3
// Press mouse to skip stages

let state = 0; //Game menu




let camel; 
let asteroid;
let camelX = 30;
let ufo;
let ufoX = 30;
let boat;
let boatX = 30;

function preload() {
  camel = loadImage('camel.png');
  ufo = loadImage('ufo.png');
  boat = loadImage('boat.png');
  asteroid = loadImage('asteroid.png');
  globe = loadImage('globe.png');
}

function setup() {
  createCanvas(1920, 1080);
}


function draw() {



if (state === 0) {
  gameMenu();
background('#f7e775'); 
rect(880, 500, 220, 100); 
fill('#000000'); 
textFont('impact');
textSize(32);
text("Start Mission", 900, 540);
textSize(100);
text("X-LOCATION", 760, 450);
}


  if (state === 1) {
    stage1();
    
  }

  if (state === 2) {
    stage2();
  }

  if (state === 3) {
    stage3();
  }

  if (state === 4) {
    gameOver();
  }

  if (keyIsPressed && key === 'r') {
    state = 0;
    camelX = 30;
    ufoX = 30;
    boatX = 30;
  }
}
function gameOver() {
  background('#000000'); 
  fill('#FFFFFF'); 
  textFont('impact');
  textSize(100);
  text("Game Over", 700, 540);
}

  function gameMenu() {
    fill('#fcfcfc'); 
    textSize(32);
    text("Click to start", 900, 540);
    rect(880, 500, 200, 100); 
  }
  function stage1() {
    // Stage 1 
//The Desert
  background('#dfde9a');

  fill('#838282');
  text('The Desert, The Wasteland, The Arid Region, The Barren Land', 400, 550);
  textFont('impact');
  textSize(32);
  

  //The sun
  noStroke();
  fill('#FFD700');
  ellipse(1600, 200, 200, 200);

  //Sand Pyramid
  fill('#e4c97f');
  triangle(0, 800, 400, 600, 800, 800);
  triangle(800, 800, 1200, 600, 1600, 800);
  triangle(1600, 800, 1920, 600, 1920, 800);

  //Cactus
  fill('#228B22');
  rect(1400, 600, 40, 200);
  rect(1380, 650, 20, 80);
  rect(1440, 650, 20, 80);
  
  //Cactus
  rect(600, 700, 30, 150);
  rect(590, 740, 15, 60);
  rect(620, 740, 15, 60);

  //Cactus
  fill('#228B22');
  rect(1000, 650, 30, 150);
  rect(980, 680, 15, 60);
  rect(1020, 680, 15, 60);

  //Cactus
  fill('#228B22');
  rect(400, 750, 30, 120);
  rect(380, 780, 15, 50);
  rect(420, 780, 15, 50);

  //Cactus
  fill('#228B22');
  rect(1200, 700, 30, 120);
  rect(1180, 730, 15, 50);
  rect(1220, 730, 15, 50);

  //Cloud
  fill('#FFFFFF');
  ellipse(300, 200, 100, 60);
  ellipse(350, 180, 120, 70);
  ellipse(400, 200, 100, 60);
  

  //Cloud
  fill('#FFFFFF');
  ellipse(1200, 150, 100, 60);
  ellipse(1250, 130, 120, 70);
  ellipse(1300, 150, 100, 60);
  

  //Ocean
  fill('#1E90FF');
  noStroke();
  rect(0, 900, 1920, 180);

  

  image(asteroid, 100, 100, 50, 50); 
  image(asteroid, 500, 200, 70, 70);
  image(asteroid, random(700, 700), random(0, 700), 60, 60);
  image(asteroid, 1300, 100, 80, 80);
  image(asteroid, 1700, 200, 60, 60);
  

  
  
   
    image(camel, camelX, 600, 300, 300);
if (keyIsDown(LEFT_ARROW)) {
  camelX -= 5;
}
if (keyIsDown(RIGHT_ARROW)) {
  camelX += 5;
}

if (camelX >= 1920) {
  state = 2;
}
  




  }

  function stage2() {
    // Stage 2
    background('black');

    textFont('impact');
    textSize(32);
    fill('#838282');
    text('Outer Space, Cosmos, The Void, The Abyss', 400, 550);

    //The Moon
    fill('#6b6969');
    ellipse(1600, 200, 100, 100);

    //Moon craters
    fill('#4c4c4b');
    ellipse(1590, 190, 10, 10);
    ellipse(1610, 210, 10, 10);
    ellipse(1580, 220, 10, 10);
    ellipse(1620, 190, 10, 10);
    ellipse(1600, 180, 10, 10);

    //Stars
    fill('#FFFFFF');
    if (millis() % 2000 < 100) {
      fill('#4c4c4b');
    } else {
      fill('#FFFFFF');
    }
    ellipse(300, 100, 10, 10);
    ellipse(500, 150, 10, 10);
    ellipse(700, 80, 10, 10);
    ellipse(900, 120, 10, 10);
    ellipse(1100, 90, 10, 10);
    ellipse(1300, 140, 10, 10);
    ellipse(1500, 100, 10, 10);
    ellipse(1700, 120, 10, 10);
    ellipse(1900, 80, 10, 10);
    ellipse(200, 50, 10, 10);
    ellipse(400, 60, 10, 10);
    ellipse(600, 70, 10, 10);
    ellipse(800, 90, 10, 10);
    ellipse(1000, 110, 10, 10);
    ellipse(300, 300, 10, 10);
    ellipse(500, 350, 10, 10);
    ellipse(700, 280, 10, 10);
    ellipse(900, 320, 10, 10);
    ellipse(1100, 290, 10, 10);
    ellipse(1300, 340, 10, 10);
    ellipse(1500, 300, 10, 10);
    ellipse(1700, 320, 10, 10);
    ellipse(1900, 280, 10, 10);
    ellipse(200, 280, 10, 10);
    ellipse(400, 300, 10, 10);
    ellipse(600, 320, 10, 10);
    ellipse(800, 340, 10, 10);
    ellipse(1000, 360, 10, 10);
    ellipse(1200, 380, 10, 10);
    ellipse(1400, 400, 10, 10);
    ellipse(1600, 420, 10, 10);
    ellipse(1800, 440, 10, 10);
    ellipse(100, 100, 10, 10);
    ellipse(300, 150, 10, 10);
    ellipse(150, 150, 10, 10);
    ellipse(25, 100, 10, 10);
    ellipse(75, 150, 10, 10);
    
    //Mars
    fill('#b22222');
    rect(0, 800, 1920, 280);
    
    image(asteroid, 100, 100, 50, 50);
  image(asteroid, 500, 200, 70, 70);
  image(asteroid, 900, 150, 60, 60);
  image(asteroid, 1300, 100, 80, 80);
  image(asteroid, random(900, 900), random(0, 900), 60, 60);

    
    image(ufo, ufoX, 600, 200, 200);
    if (keyIsDown(LEFT_ARROW)) {
      ufoX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      ufoX += 5;
    }
    if (ufoX >= 1920) {
      state = 3;
    }
  }
  function stage3() {
    // Stage 3
    background('gray');
    if (millis() % 2000 < 100) {
      background('#ffffff71');
    } else {
      background('gray');
    }

    textFont('impact');
    textSize(70);
    fill('#838282');
    text('The Ocean, The Briny Deep, The Sea, The Main', 400, 550);

    //Ocean
    fill('#1E90FF');
    noStroke();
    rect(0, 900, 1920, 180);

   //Sea Trees
    fill('#228B22');
    rect(100, 700, 50, 200);
    rect(300, 720, 50, 180);
    rect(500, 710, 50, 190);
    rect(700, 730, 50, 170);
    rect(900, 710, 50, 190);
    rect(1100, 720, 50, 180);
    rect(1300, 700, 50, 200);
    rect(1500, 710, 50, 190);
    rect(1700, 730, 50, 170);

    //Moon
    fill('#FFFFE0');
    ellipse(1700, 200, 100, 100);
    

    

    image(asteroid, 100, 100, 50, 50);
  image(asteroid, 500, 200, 70, 70);
  image(asteroid, 900, 150, 60, 60);
  image(asteroid, 1300, 100, 80, 80);
  image(asteroid, random(1700, 1700), random(0, 1700), 60, 60);

    image(boat, boatX, 850, 200, 100);
    if (keyIsDown(LEFT_ARROW)) {
      boatX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      boatX += 5;
    }
    if (boatX >= 1920) {
      state = 4;
      camelX = 30;
      ufoX = 30;
      boatX = 30;
    }
  }

  
  function gameOver() {
    fill('#9e9f66'); 
    rect(0, 0, 1920, 1080); 
    image(globe, 0, 0, 1920, 1080);
    fill('#fcfcfc'); 
    textFont('impact');
    textSize(60);
    text("Game Over", 780, 440);
    fill('#032f0f'); 
    text("YOU HAVE EXPLORED THE WORLDS!", 550, 500);
    textFont('times new roman');
    fill('red'); 
    text("Press R to Restart", 720, 860);
   
    
  }



/*
image(camel, 100, 700);

  //The Desert
  background('#dfde9a');

  //The sun
  noStroke();
  fill('#FFD700');
  ellipse(1600, 200, 200, 200);

  //Sand Pyramid
  fill('#e4c97f');
  triangle(0, 800, 400, 600, 800, 800);
  triangle(800, 800, 1200, 600, 1600, 800);
  triangle(1600, 800, 1920, 600, 1920, 800);

  //Cactus
  fill('#228B22');
  rect(1400, 600, 40, 200);
  rect(1380, 650, 20, 80);
  rect(1440, 650, 20, 80);
  
  //Cactus
  rect(600, 700, 30, 150);
  rect(590, 740, 15, 60);
  rect(620, 740, 15, 60);

  //Cactus
  fill('#228B22');
  rect(1000, 650, 30, 150);
  rect(980, 680, 15, 60);
  rect(1020, 680, 15, 60);

  //Cactus
  fill('#228B22');
  rect(400, 750, 30, 120);
  rect(380, 780, 15, 50);
  rect(420, 780, 15, 50);

  //Cactus
  fill('#228B22');
  rect(1200, 700, 30, 120);
  rect(1180, 730, 15, 50);
  rect(1220, 730, 15, 50);

  //Cloud
  fill('#FFFFFF');
  ellipse(300, 200, 100, 60);
  ellipse(350, 180, 120, 70);
  ellipse(400, 200, 100, 60);
  

  //Cloud
  fill('#FFFFFF');
  ellipse(1200, 150, 100, 60);
  ellipse(1250, 130, 120, 70);
  ellipse(1300, 150, 100, 60);
  

  //Ocean
  fill('#1E90FF');
  noStroke();
  rect(0, 900, 1920, 180);
*/


  






function mousePressed() {
  state = state + 1;
  
  }
  

