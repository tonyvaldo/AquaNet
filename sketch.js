// let checkboxes =[];
let size = 100;
let backDropImage;
let moreFish;

function preload() {
  backDropImage = loadImage('backdrop.jpg')
fish[1] = loadImage('fish/fish_1.jpg');
fish[2] = loadImage('fish/fish_2.jpg');
fish[3] = loadImage('fish/fish_3.jpg');
fish[4] = loadImage('fish/fish_4.jpg');
fish[5] = loadImage('fish/fish_5.jpg');
fish[6] = loadImage('fish/fish_6.jpg');
fish[7] = loadImage('fish/fish_7.jpg');
fish[8] = loadImage('fish/fish_8.jpg');

}


function setup() {
	createCanvas(800, 600);
	image(backDropImage, 0, 0, width, height);
	stroke(10);
	  imageMode(CENTER);


	// button = createButton("Press for more fish");
	// button = select('#moreFish')
	// button.mousePressed(buttonPressed);
	// button.class("moreFish")

  moreFish = select('#moreFish')
  moreFish.mousePressed(pumpMoreFish)
}

// function myCheckedEvent(){
// size += 50;
//
// }

function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();

	// ellipse(mouseX, mouseY, size);
}

function mousePressed() {
  // for (let i = 1; i < fish.length; i++){
  //   fish[i].clicked(mouseX, mouseY);

}

function pumpMoreFish(){

}
