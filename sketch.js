var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 400, 20, 50);
  fixedRect.shapeColor="white";
  movingRect = createSprite(500,200,50,20);
  movingRect.shapeColor="white";

  
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  //console.log(movingRect.x-fixedRect.x);
  //console.log(movingRect.width/2+fixedRect.width/2);

  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2 && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2)
    {

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

  }
  else{
    fixedRect.shapeColor="white";
    movingRect.shapeColor="white";
  }
  drawSprites();
}



