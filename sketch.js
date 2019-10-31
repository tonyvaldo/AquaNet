// let backDropImage;
// let moreFish;
let fish = [];

//
function preload() {
  backDropImage = loadImage('backdrop.jpg')
  fish[1] = loadImage('fish/fish_1.png');
  fish[2] = loadImage('fish/fish_2.png');
  fish[3] = loadImage('fish/fish_3.png');
  fish[4] = loadImage('fish/fish_4.png');
  fish[5] = loadImage('fish/fish_5.png');
  fish[6] = loadImage('fish/fish_6.png');
  fish[7] = loadImage('fish/fish_7.png');
  fish[8] = loadImage('fish/fish_8.png');

}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.position(100,200);
  image(backDropImage, 15, 25, width, height);
  imageMode(CENTER);
}
//
function draw() {
  // for (let i = 0; i < 9; i++){
  //   fish[i].move();
  //   fish[i].show();

//   // adding clear() to the draw loop will clear each frame, erasing object trails
//   // clear();
//
  ellipse(mouseX, mouseY, 25,25);
}
//
// function mousePressed() {
//   // for (let i = 1; i < fish.length; i++){
//   //   fish[i].clicked(mouseX, mouseY);
// }
//
//
// function pumpMoreFish() {
//
// }
