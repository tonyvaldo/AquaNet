// let backDropImage;
// let moreFish;
let fish = [];
let fishButton;

//
function preload() {
  backDropImage = loadImage('backdrop.jpg')
  for (let i = 0; i< 8; i++){
    fish[i] = loadImage(`fish/fish_${i+1}.png`)
  }
}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.position(300,180);
  cnv.parent("#canvasDiv");

  image(backDropImage, 15, 25, width, height);
  imageMode(CENTER);

console.log(fish);

fishButton = select("#moreFish");
fishButton.mousePressed(pumpMoreFish);
}

function draw() {

}

function mousePressed() {
  image(random(fish), random(width), random(height),random(width/4, height/4),random(width/4, height/4));
  console.log("fish");

}

function pumpMoreFish() {

}
