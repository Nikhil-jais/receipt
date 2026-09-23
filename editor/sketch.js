import JsBarcode from "jsbarcode";

export const receipt = {
  height: 1500,
  seed: 2026,
};

export function drawReceipt(p) {
  const { width: w, height: h } = p;

  const margin = 24;
  const center = w / 2;

  p.background(255);
  p.noSmooth();

  // =========================================
  // OUTER BORDER
  // =========================================

  p.noFill();
  p.stroke(0);
  p.strokeWeight(2);
  p.rect(
    margin,
    20,
    w - margin * 2,
    h - 40
  );

  // =========================================
  // HEADER
  // =========================================

  p.noStroke();
  p.fill(0);
  p.textFont("monospace");
  p.textStyle(p.NORMAL);
  p.textAlign(p.CENTER, p.TOP);

  p.textSize(21);
  p.text("ANIME DUOS", center, 45);

  p.textSize(9);
  p.text("by Nikhil Jaiswal", center, 75);

  dashedLine(
    p,
    margin + 12,
    96,
    w - margin - 12,
    96,
    5,
    5
  );

  // =========================================
  // BOY FRAME
  // =========================================

  p.noFill();
  p.stroke(0);
  p.strokeWeight(1.5);

  p.rect(
    margin + 12,
    115,
    w - margin * 2 - 24,
    485
  );

  drawBoy(
    p,
    center,
    350
  );

  // =========================================
  // GIRL FRAME
  // =========================================

  p.noFill();
  p.stroke(0);
  p.strokeWeight(1.5);

  p.rect(
    margin + 12,
    620,
    w - margin * 2 - 24,
    485
  );

  drawGirl(
    p,
    center,
    855
  );

  // =========================================
  // FOOTER
  // =========================================

  p.noStroke();
  p.fill(0);
  p.textAlign(p.CENTER, p.TOP);
  p.textStyle(p.NORMAL);

  p.textSize(17);
  p.text("HACK CLUB", center, 1160);

  drawBarcode(
    p,
    "ANIME-DUOS-NIKHIL",
    center,
    1200
  );

  p.textSize(7);
  p.text(
    "ANIME DUOS // NIKHIL JAISWAL",
    center,
    1290
  );

  p.text(
    "RECEIPT 2026",
    center,
    1305
  );
}


// =========================================
// BOY
// =========================================

function drawBoy(p, cx, cy) {

  // Hair
  p.noStroke();
  p.fill(20);

  p.ellipse(
    cx,
    cy - 105,
    215,
    190
  );

  // Face
  p.fill(255);
  p.stroke(0);
  p.strokeWeight(1.5);

  p.ellipse(
    cx,
    cy - 55,
    145,
    165
  );

  // Hair fringe
  p.noStroke();
  p.fill(20);

  p.triangle(
    cx - 70,
    cy - 115,
    cx - 20,
    cy - 165,
    cx - 35,
    cy - 82
  );

  p.triangle(
    cx - 35,
    cy - 125,
    cx + 5,
    cy - 170,
    cx + 10,
    cy - 80
  );

  p.triangle(
    cx + 5,
    cy - 125,
    cx + 48,
    cy - 155,
    cx + 42,
    cy - 82
  );

  p.triangle(
    cx + 42,
    cy - 110,
    cx + 75,
    cy - 130,
    cx + 68,
    cy - 70
  );

  // Eyes
  p.fill(0);

  p.ellipse(
    cx - 31,
    cy - 57,
    10,
    14
  );

  p.ellipse(
    cx + 31,
    cy - 57,
    10,
    14
  );

  // Eye highlights
  p.fill(255);

  p.circle(
    cx - 29,
    cy - 60,
    3
  );

  p.circle(
    cx + 33,
    cy - 60,
    3
  );

  // Nose
  p.stroke(0);
  p.strokeWeight(1);

  p.line(
    cx,
    cy - 45,
    cx - 4,
    cy - 28
  );

  // Smile
  p.noFill();

  p.arc(
    cx,
    cy - 18,
    28,
    15,
    0,
    p.PI
  );

  // Neck
  p.noStroke();
  p.fill(255);

  p.rect(
    cx - 25,
    cy + 18,
    50,
    45
  );

  // Hoodie
  p.fill(18);

  p.ellipse(
    cx,
    cy + 105,
    225,
    150
  );

  // Hoodie opening
  p.noFill();
  p.stroke(255);
  p.strokeWeight(2);

  p.arc(
    cx,
    cy + 45,
    70,
    60,
    0,
    p.PI
  );

  // Hand on cheek
  p.fill(255);
  p.stroke(0);
  p.strokeWeight(1);

  p.ellipse(
    cx - 65,
    cy - 20,
    42,
    75
  );

  // Fingers
  p.stroke(0);
  p.strokeWeight(1);

  p.line(
    cx - 77,
    cy - 48,
    cx - 60,
    cy - 42
  );

  p.line(
    cx - 79,
    cy - 38,
    cx - 60,
    cy - 33
  );

  // Hearts
  drawHeart(
    p,
    cx - 105,
    cy - 95,
    11
  );

  drawHeart(
    p,
    cx + 105,
    cy - 125,
    9
  );

  // Sparkles
  drawSpark(
    p,
    cx - 110,
    cy - 20,
    7
  );

  drawSpark(
    p,
    cx + 110,
    cy - 55,
    9
  );
}


// =========================================
// GIRL
// =========================================

function drawGirl(p, cx, cy) {

  // Hair
  p.noStroke();
  p.fill(28);

  p.ellipse(
    cx,
    cy - 90,
    225,
    230
  );

  // Long side hair
  p.rect(
    cx - 105,
    cy - 105,
    55,
    230
  );

  p.rect(
    cx + 50,
    cy - 105,
    55,
    230
  );

  // Face
  p.fill(255);
  p.stroke(0);
  p.strokeWeight(1.5);

  p.ellipse(
    cx,
    cy - 45,
    145,
    165
  );

  // Bangs
  p.noStroke();
  p.fill(28);

  p.triangle(
    cx - 72,
    cy - 105,
    cx - 25,
    cy - 160,
    cx - 35,
    cy - 72
  );

  p.triangle(
    cx - 30,
    cy - 115,
    cx + 5,
    cy - 165,
    cx + 15,
    cy - 75
  );

  p.triangle(
    cx + 10,
    cy - 115,
    cx + 45,
    cy - 155,
    cx + 48,
    cy - 78
  );

  // Eyes
  p.fill(0);

  p.ellipse(
    cx - 32,
    cy - 50,
    11,
    16
  );

  p.ellipse(
    cx + 32,
    cy - 50,
    11,
    16
  );

  // Eye highlights
  p.fill(255);

  p.circle(
    cx - 30,
    cy - 54,
    3
  );

  p.circle(
    cx + 34,
    cy - 54,
    3
  );

  // Nose
  p.stroke(0);
  p.strokeWeight(1);

  p.line(
    cx,
    cy - 38,
    cx - 4,
    cy - 22
  );

  // Smile
  p.noFill();

  p.arc(
    cx,
    cy - 12,
    27,
    14,
    0,
    p.PI
  );

  // Bow
  p.stroke(0);
  p.strokeWeight(2);
  p.noFill();

  p.ellipse(
    cx + 58,
    cy - 115,
    28,
    20
  );

  p.ellipse(
    cx + 88,
    cy - 115,
    28,
    20
  );

  p.line(
    cx + 58,
    cy - 115,
    cx + 88,
    cy - 115
  );

  // Sweater
  p.noStroke();
  p.fill(235);

  p.ellipse(
    cx,
    cy + 115,
    235,
    170
  );

  // Sleeves
  p.ellipse(
    cx - 65,
    cy + 80,
    80,
    65
  );

  p.ellipse(
    cx + 65,
    cy + 80,
    80,
    65
  );

  // Hearts
  drawHeart(
    p,
    cx - 108,
    cy - 35,
    10
  );

  drawHeart(
    p,
    cx + 108,
    cy - 70,
    9
  );

  // Sparkles
  drawSpark(
    p,
    cx - 112,
    cy + 15,
    8
  );

  drawSpark(
    p,
    cx + 112,
    cy - 25,
    8
  );
}


// =========================================
// HEART
// =========================================

function drawHeart(p, x, y, size) {

  p.noFill();
  p.stroke(0);
  p.strokeWeight(1.5);

  p.circle(
    x - size * 0.45,
    y,
    size
  );

  p.circle(
    x + size * 0.45,
    y,
    size
  );

  p.line(
    x - size * 0.9,
    y + 2,
    x,
    y + size
  );

  p.line(
    x + size * 0.9,
    y + 2,
    x,
    y + size
  );
}


// =========================================
// SPARKLE
// =========================================

function drawSpark(p, x, y, size) {

  p.stroke(0);
  p.strokeWeight(1.5);

  p.line(
    x - size,
    y,
    x + size,
    y
  );

  p.line(
    x,
    y - size,
    x,
    y + size
  );

  p.line(
    x - size * 0.6,
    y - size * 0.6,
    x + size * 0.6,
    y + size * 0.6
  );

  p.line(
    x + size * 0.6,
    y - size * 0.6,
    x - size * 0.6,
    y + size * 0.6
  );
}


// =========================================
// BARCODE
// =========================================

function drawBarcode(
  p,
  value,
  centerX,
  y
) {

  const barcodeCanvas =
    document.createElement("canvas");

  JsBarcode(
    barcodeCanvas,
    value,
    {
      format: "CODE128",
      width: 1,
      height: 52,
      displayValue: false,
      margin: 0,
      background: "#ffffff",
      lineColor: "#000000"
    }
  );

  p.drawingContext.drawImage(
    barcodeCanvas,
    Math.floor(
      centerX -
      barcodeCanvas.width / 2
    ),
    y
  );
}


// =========================================
// DASHED LINE
// =========================================

function dashedLine(
  p,
  x1,
  y1,
  x2,
  y2,
  dash,
  gap
) {

  p.stroke(0);
  p.strokeWeight(1);

  for (
    let x = x1;
    x < x2;
    x += dash + gap
  ) {

    p.line(
      x,
      y1,
      Math.min(x + dash, x2),
      y2
    );
  }
}
