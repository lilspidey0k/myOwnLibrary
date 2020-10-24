var movingRect; 
var fixedRect;
var ob1,ob2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(300,200,100,100);
  ob1=createSprite(200,40,50,50);
  ob2=createSprite(200,100,50,50);
  ob1.velocityY=+2;
  ob2.velocityY=-2;
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(isTouching(movingRect,ob1)){
    ob1.shapeColor="red";
      movingRect.shapeColor="red";
  }
  else{
    ob1.shapeColor="green";
      movingRect.shapeColor="green";
  }
  bounceOff(ob1,ob2);
  drawSprites();
}
