var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(195, 180, 50, 50);
}

function draw() 
{
  background(30);
  if(keyDown("d")){
    box.x = box.x + 3;
  }
  if(keyDown("a")){
    box.x = box.x - 3;
  }
  if(keyDown("w")){
    box.y = box.y -3;
  }
  if(keyDown("s")){
    box.y = box.y + 3;
  }
drawSprites();
}



