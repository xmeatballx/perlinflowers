let vert = [];
let maxVert = 800;
let maxDist = 380;
let inc=0;
let mouseFlip = true;


function makeShape(){
		for (var i = 0; i <= maxVert; i++) {
			inc+=.05;
			if (i==0){
				beginShape();
			}
			fill(color(random(255),255,random(255)))
			let x = map(noise(inc),0,1,-maxDist,maxDist);
			let y = map(noise(inc*.75),0,1,-maxDist,maxDist);
			let z = map(noise(inc/2),0,1,-maxDist,maxDist);
			vertex(x,y,z);

			if (i==maxVert){
				endShape(CLOSE);
			}
		}
}

function setup(){
	let c = createCanvas(windowWidth,windowHeight,WEBGL);
	c.parent('p5parent');
	//fill(0);
	//strokeWeight(1);
	noStroke();
	noLoop();
	//frameRate(.5);

}

function draw(){
	background(0,0,0);
	orbitControl();
	if (mouseFlip=true){
		makeShape();
	} 
}

function mousePressed(){
	redraw();
}

function touchStarted() {
	redraw();
}