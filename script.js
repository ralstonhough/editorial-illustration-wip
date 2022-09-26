function setup() {
    createCanvas(700,700);
    background("black");
    translate(width / 2, height / 2);
    noStroke();
    circle(0,0,10);
  };
  
  function draw() {
    translate(width / 2, height / 2);
    circleOfCircles(20, 0, 10);
    circleOfCircles(40, 20, 20);
    circleOfCircles(80, 40, 30);
    circleOfCircles(160, 80, 60);
    circleOfCircles(320, 160, 120);
  };
  
  function circleOfCircles(r, angle, size){
    for(let i=0; i<7; i++){
      let x = r * sin(angle);
      let y = r * cos(angle);
      
      circle(x, y, size);
  
      angle = angle + TWO_PI/6;
    };
  };