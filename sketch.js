var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //movingRect.velocityY=-5;
 // fixedRect.velocityY=5;
  car = createSprite(200,200,50,50);
  car.shapeColor="red";
  car.velocityX=5;
  wall=createSprite(1000,200,40,40);
  wall.shapeColor="white";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceoff(wall,car);
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
    
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}













