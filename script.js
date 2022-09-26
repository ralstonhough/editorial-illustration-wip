let man;
let clock;
function preload() {
  man = loadImage('falling-man.png');
  clock = loadImage('wall-clock.png');
};

function setup() {
    createCanvas(700,700);
    background("black");
    translate(width / 2, height / 2);
    image(clock,0,0,10,10);
};

function draw() {
    translate(width / 2, height / 2);

    push();
    background("black");
    rotate(-millis() / 3000.0);
    circleOfClocks(15, 0, 10, 10);
    circleOfClocks(35, 5, 20, 20);
    circleOfClocks(65, 10, 30, 30);
    circleOfClocks(115, 15, 60, 60);
    circleOfClocks(210, 20, 120, 120);
    circleOfClocks(400, 25, 240, 240);
    pop();

    imageMode(CENTER);
    image(man, 0, 0, 100, 100);
};

function circleOfClocks(r, angle, width, height){
  for(let i=0; i<7; i++){
    let x = r * sin(angle);
    let y = r * cos(angle);
    imageMode(CENTER);
    image(clock, x, y, width, height);
    angle = angle + TWO_PI/6;
  };
};

