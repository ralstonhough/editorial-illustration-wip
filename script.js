let img;
function preload() {
  img = loadImage('falling-man.png');
};

function setup() {
    createCanvas(700,700);
    background("black");
    translate(width / 2, height / 2);
    noStroke();
    circle(0,0,10);
};

function draw() {
    translate(width / 2, height / 2);
    circleOfCircles(15, 0, 10);
    circleOfCircles(35, 5, 20);
    circleOfCircles(65, 10, 30);
    circleOfCircles(115, 15, 60);
    circleOfCircles(210, 20, 120);
    circleOfCircles(400, 25, 240);

    imageMode(CENTER);
    image(img, 0, 0, 100, 100);
};

function circleOfCircles(r, angle, size){
  for(let i=0; i<7; i++){
    let x = r * sin(angle);
    let y = r * cos(angle);
    circle(x, y, size);
    angle = angle + TWO_PI/6;
  };
};

