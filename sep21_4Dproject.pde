PImage newmemory1;
PImage newmemory2;
PImage newmemory3;
PImage newmemory4;
PImage oldmemory1blur;
PImage oldmemory1blur2;
PImage oldmemory1;
PImage oldmemory2;
PImage oldmemory2posterize1;
PImage oldmemory2posterize2;
PImage oldmemory3;
PImage oldmemory4;
PImage bg;

void setup() {
  newmemory1 = loadImage("newmemories1.jpg");
  newmemory2 = loadImage("Newmemories.jpg");
  newmemory3 = loadImage("Newmemories3.jpg");
  newmemory4 = loadImage("Newmemories4.jpg");
  oldmemory1 = loadImage("Oldmemories1.jpg");
  oldmemory1blur = loadImage("Oldmemories1.jpg");
  oldmemory1blur2 = loadImage("Oldmemories1.jpg");
  oldmemory2 = loadImage("Oldmemories2.png");
  oldmemory2posterize1 = loadImage ("Oldmemories2.png");
  oldmemory2posterize2 =loadImage ("Oldmemories2.png");
  oldmemory3 = loadImage("Oldmemories3.jpg");
  oldmemory4 = loadImage("Oldmemories4.jpg");
  oldmemory1blur.filter(BLUR, 2);
  oldmemory1blur2.filter(BLUR, 5);
  oldmemory2posterize1.filter(POSTERIZE, 4);
  oldmemory2posterize2.filter(POSTERIZE, 6);
  oldmemory2posterize2.filter(BLUR, 3);
  size(850,600);
  bg = loadImage("bkground.jpg");
}



void draw() {
  
  //strokeWeight(2);
  //stroke(255,0,0);
  //drawArrow(500,500,500,0);
  background(bg);

  if (mouseX >50) { //draw the first column of pictures
    image(newmemory1, 80, 130);
    image(oldmemory1, 80, 270);
    image(oldmemory2, 80, 400);
  //} else { 
  }
  if (mouseX >150) {
    image(newmemory2, 260, 130);
    image(oldmemory1blur, 260, 270);
    image(oldmemory2posterize1, 260, 400);
  }
  if (mouseX >250) {
    image(newmemory3, 440, 130);
    image(oldmemory1blur2, 440, 270);
    image(oldmemory2posterize2, 440, 400);
  }
  
  if (mouseX >350) {
    image(newmemory4, 620, 130);
    image(oldmemory4, 620, 270);
    image(oldmemory3, 620, 400);
  }
}
//void drawArrow(int cx, int cy, int len, float angle){
//  pushMatrix();
//  translate(cx, cy);
//  rotate(radians(angle));
//  line(0,0,len, 0);
//  line(len, 0, len - 8, -8);
//  line(len, 0, len - 8, 8);
//  popMatrix();
//}
//void draw() {
//  image(newmemory1, 10, 10);
//  image(oldmemory1, 10, 150);
//  image(oldmemory2, 10, 300);
//}