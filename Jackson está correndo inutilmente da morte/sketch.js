var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//criando menino que corre
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
// crie Boundary (Limite) esquerdo
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crie Boundary direito
rightBoundary=createSprite(410,0,100,800);
//rightBoundary.invisible = false;
//rightBoundary.visible = true;
//rightBoundary.invisible = true;
//rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // menino se movendo no eixe X com o mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  /*código para reiniciar o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }*/
  
  /*código para reiniciar o fundo
  if(path.y > 400 ){

    path.y = height/2;}*/

   /*código para reiniciar o fundo
  if(path.y > 400 ){
path.y = height/2;}*/
if(path.y > 400 ){
  path.y = height/2;
}
  drawSprites();
}
