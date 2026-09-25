let size;
let seed;

function setup() {
  size = 700;
  seed = 240926;

  createCanvas(size, 950);
  pixelDensity(2);

  randomSeed(seed);
  noiseSeed(seed);
}
  
function draw() {
  randomSeed(seed);

  background(9, 14, 24);

  drawStars();
  drawFlag();                                                                
  drawHeader();                   
  drawDivider();
  drawRocket();
  drawDetails();               
  drawBarcode();
}

function drawStars() {
  noStroke();

  for (let i = 0; i < 150; i++) {         
    let x = random(width);
    let y = random(height);
    let s = random(0.5, 2.2);
    let a = random(50, 170);

    fill(235, 242, 255, a);
    circle(x, y, s);
  }
}

function drawFlag() {
  let poleX = 72;

  stroke(170, 180, 195);
  strokeWeight(1.5);
  line(poleX, 65, poleX, 180);

  noStroke();
  fill(225, 232, 242);
  circle(poleX, 65, 5);

  fill(240, 244, 249);

  beginShape();
  vertex(poleX, 70);
  vertex(220, 70);
  vertex(207, 91);
  vertex(220, 112);
  vertex(poleX, 112);
  endShape(CLOSE);

  fill(22, 29, 40);
  textAlign(CENTER, CENTER);
  textSize(16);
  textStyle(NORMAL);
  text("HACKCLUB", 145, 91);
}

function drawHeader() {
  textAlign(CENTER);

  fill(170, 184, 202);
  textStyle(NORMAL);
  textSize(11);
  text("MISSION 01  /  ORBITAL SERIES", width / 2, 173);

  fill(242, 246, 251);
  textSize(44);
  text("SPACE LAUNCH", width / 2, 225);

  fill(170, 184, 202);
  textSize(16);
  text("BY NIKHIL JAISWAL", width / 2, 258);
}

function drawDivider() {
  stroke(110, 125, 145, 150);
  strokeWeight(1);

  line(90, 295, width - 90, 295);

  noStroke();
  fill(210, 220, 232);
  circle(width / 2, 295, 4);
}

function drawRocket() {
  let cx = width / 2;
  let cy = 485;

  // Glow
  noStroke();

  for (let r = 130; r > 25; r -= 10) {
    fill(100, 170, 255, 3);
    ellipse(cx, cy, r, r * 1.35);
  }

  // Rocket body
  fill(232, 238, 245);
  stroke(155, 170, 190);
  strokeWeight(1.2);

  beginShape();

  vertex(cx, cy - 130);

  bezierVertex(
    cx - 34,
    cy - 90,
    cx - 37,
    cy - 35,
    cx - 32,
    cy + 55
  );

  vertex(cx + 32, cy + 55);

  bezierVertex(
    cx + 37,
    cy - 35,
    cx + 34,
    cy - 90,
    cx,
    cy - 130
  );

  endShape(CLOSE);

  // Highlight
  noStroke();
  fill(255, 255, 255, 100);
  ellipse(cx - 10, cy - 78, 9, 58);

  // Window
  fill(25, 40, 60);
  stroke(175, 205, 235);
  strokeWeight(2);

  circle(cx, cy - 55, 34);

  noStroke();
  fill(120, 195, 255, 130);
  circle(cx - 6, cy - 61, 9);

  // Left fin
  fill(205, 215, 228);
  stroke(150, 165, 185);
  strokeWeight(1);

  beginShape();
  vertex(cx - 29, cy + 30);
  vertex(cx - 58, cy + 70);
  vertex(cx - 30, cy + 62);
  endShape(CLOSE);

  // Right fin
  beginShape();
  vertex(cx + 29, cy + 30);
  vertex(cx + 58, cy + 70);
  vertex(cx + 30, cy + 62);
  endShape(CLOSE);

  // Engine
  noStroke();
  fill(80, 92, 108);
  rect(cx - 18, cy + 48, 36, 17, 5);

  // Animated flame
  let flame = 30 + sin(frameCount * 0.12) * 7;

  fill(255, 205, 110, 220);

  triangle(
    cx - 15,
    cy + 65,
    cx + 15,
    cy + 65,
    cx,
    cy + 65 + flame
  );

  fill(255, 245, 210, 230);

  triangle(
    cx - 7,
    cy + 64,
    cx + 7,
    cy + 64,
    cx,
    cy + 64 + flame * 0.72
  );
}

function drawDetails() {
  textSize(10);
  textStyle(NORMAL);

  fill(145, 160, 180);
  textAlign(LEFT);
  text("LAUNCH VEHICLE", 90, 745);

  fill(235, 240, 246);
  textSize(14);
  text("NX-01", 90, 768);

  fill(145, 160, 180);
  textSize(10);
  textAlign(RIGHT);
  text("MISSION DATE", width - 90, 745);

  fill(235, 240, 246);
  textSize(14);
  text("24 SEPTEMBER 2026", width - 90, 768);

  textAlign(CENTER);

  fill(135, 150, 170);
  textSize(11);
  text("EXPLORE  •  CREATE  •  LAUNCH", width / 2, 805);
}

function drawBarcode() {
  let pattern = [               
    1, 3, 2, 1, 1, 4, 2, 1,
    3, 1, 2, 4, 1, 2, 3, 1, n          
    1, 2, 4, 1, 2, 1, 3, 2 
  ];

  let x = width / 2 - 100;   
  let y = 835;
      
  noStroke(); 

  for (let i = 0; i < pattern.length; i++) {         
    let barWidth = pattern[i] * 2;
                              
    fill(225, 232, 240);

    rect(
      x,
      y,
      barWidth,
      i % 5 === 0 ? 42 : 34
    );

    x += barWidth + 3;
  }

  fill(145, 160, 180);
  textAlign(CENTER);
  textSize(9);

  text(   
    "H C 0 1 2 4 0 9 2 6",
    width / 2,
    895
  );

  stroke(100, 115, 135, 100);
  strokeWeight(1);
  line(90, 915, width - 90, 915);

  noStroke();

  fill(120, 135, 155);
  textSize(8);

  text(
    "HACK CLUB  /  SPACE LAUNCH ARCHIVE",
    width / 2,
    930
  );
}
