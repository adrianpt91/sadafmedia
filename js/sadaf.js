var start = 1;
var space = 0.5;
var circleWidth = 2;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

function setup(){
  createCanvas(screenWidth, screenHeight);
  angleMode(DEGREES);
  noiseDetail(10);
}

function draw(){  
  background(0);  
  translate(width/2,height/2);  
    for(var i=0;i<=360;i+=space){
      var xoff = map(sin(i), -1, 1, 0, 100);
      var yoff = map(cos(i), 0, 1, 100, 200);
      var n = noise(xoff+start,yoff+start);
      var h = map(n, -1, 1, -150, 150);
      noStroke();
      rotate(space);
      if(screenWidth<=425){
        circle(80+h,0,circleWidth,circleWidth);
      }else{
        circle(200+h,0,circleWidth,circleWidth);
      }
    }
    start += 0.02;
}

