let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
let angle9 = 0;
let speed = 0.01;
let lines1 = [];
let lines2 = [];
let lines3 = [];
let lines4 = [];
let lines5 = [];
let lines6 = [];
let lines7 = [];
let lines8 = [];
let lines9 = [];
let fanRadius = 0;
let bgColorAlpha = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Gradually fade the background
  background(0, bgColorAlpha);

  translate(width/4.5, height/2);
  drawFan(lines1, angle1);
  angle1 = angle1 + speed * 3.5;

  translate(200, 0);
  drawFan(lines2, angle2);
  angle2 += speed * 1.3;

  translate(200, 0);
  drawFan(lines3, angle3);
  angle3 += speed * 2;

  translate(-100, 200);
  drawFan(lines4, angle4);
  angle4 += speed * 1.5;

  translate(200, 0);
  drawFan(lines5, angle5);
  angle5 += speed * 3;

  translate(200, 0);
  drawFan(lines6, angle6);
  angle6 += speed * 2.3;

  translate(-200, -400);
  drawFan(lines7, angle7);
  angle7 += speed * 1.4;

  translate(200, 0);
  drawFan(lines8, angle8);
  angle8 += speed * 3.7;

  translate(200, 0);
  drawFan(lines9, angle9);
  angle9 += speed * 1.7;

}

function drawFan(lines, angle) {
  // Draw the lines as a fan
  for (let i = 0; i < lines.length; i++) {
    let lineSegment = lines[i];
    let x1 = lineSegment.x1;
    let y1 = lineSegment.y1;
    let x2 = lineSegment.x2;
    let y2 = lineSegment.y2;
    let alpha = lineSegment.alpha;

    stroke(255, alpha);
    line(x1, y1, x2, y2);

    // Gradually reduce the alpha for the lines
    alpha -= 3;
    lineSegment.alpha = alpha;
  }

  // Remove old line segments
  if (lines.length > 200) {
    lines.shift();
  }

  // Create a new line segment
  let x1 = cos(angle) * fanRadius;
  let y1 = sin(angle) * fanRadius;
  let x2 = cos(angle) * (fanRadius + 100);
  let y2 = sin(angle) * (fanRadius + 100);
  lines.push({ x1, y1, x2, y2, alpha: 255 });
}