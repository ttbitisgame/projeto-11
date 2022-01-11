var jaxon1;
var jaxon2;
var ground1;
var ground2;
function preload(){
  jaxon2 =loadAnimation("Runner-1.png","Runner-2.png");
  ground2 = loadImage(path.png)
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  ground1 = createSprite(200,200);
  ground1 = addImage("ground",ground2);
  jaxon1 = createSprite(200,300);
  jaxon1.addAnimation("running",jaxon2);


  //crie sprite aquis
}

function draw() {
  background(0);
  drawSprites();
}
