class Bubbles {
 constructor(_xPos, _bubbleFloatY) {
   this.xPos = _xPos;
   this.bubbleFloatY = _bubbleFloatY;
 }

  display() {
      push();
  noStroke();
  fill(139, 222, 247)
  circle(this.xPos, this.bubbleFloatY, 40);

  fill(205, 250, 250)
  circle(this.xPos, this.bubbleFloatY - 5, 15);
  pop();

  }
