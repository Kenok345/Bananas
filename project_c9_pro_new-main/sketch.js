
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = "pink";
}
function draw() 
{
  if (keyIsDown(RIGHT_ARROW) || keyIsDown("d")){
    background("red");
    box.x = box.x + 3;
  }
  if (keyIsDown(LEFT_ARROW) || keyIsDown("a")) 
  {
    background("blue");
    box.x = box.x - 3;
  }
    if (keyIsDown(UP_ARROW) || keyIsDown("w")) 
  {
    background("yellow");
   box.y = box.y - 3
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown("s")) 
  {
    background("green");
    box.y = box.y + 3;
  }
  textSize(50);
  text("Epilepsy Warning", 5, 50);
  text("Be Careful (:", 50, 350);
  drawSprites();
}