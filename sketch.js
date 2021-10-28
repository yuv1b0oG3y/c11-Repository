var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(1460, 788.5);
  
// Moving background
path=createSprite(730,400);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,650,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(200,0,730,1800);
leftBoundary.visible = false;


rightBoundary=createSprite(1270,0,730,1800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  
  if(path.y > 600 ){
   path.y = height/2;
  }
  
  drawSprites();
}
