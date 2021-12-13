var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300, 10, 10);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  //tower.y = tower.height/2;

  doorsGroup = newGroup();
  climbersGroup = newGroup();
  createDeath();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    
    if(keyDown("space") || keyDown("w") || key("up_arrow")){
      ghost.velocityY = -6;
    }
    if(keyDown("d") || key("right_arrow")){
      ghost.x = ghost.x + 6;
    }
    if(keyDown("a") || key("left_arrow")){
      ghost.x = ghost.x - 6;
    }

    ghost.velocityY = 4;

    createDoor();
    drawSprites();
}

function createDoor(){
 if(frameCount%240 === 0){
   var door = createSprite(200, 50);
   door.addImage("door", doorImg);
   door.x = Math.round(random(120, 400));
   door.lifetime = 800;
   door.velocityY = 3;
   doorsGroup.add(door);

   var climber = createSprite(200, 10);
   climber.addImage ("climber", climberImg);
   climber.x = door.x;
   climber.lifetime = 800;
   climber.velocity = 3;

   ghost.depth = ghost.depth + 1;
 }
 
}
function createDeath(){
  var ghost = createSprite(200, 200);
  ghost.addImage ("ghost", ghostImg);
  ghost.scale = 0.3;
}