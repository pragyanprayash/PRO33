var bg
var boy

function preload() {
  bg = loadImage("snow3.jpg");
  boy1 = loadImage("boy1.jpg.jpg");
  boy2 = loadImage("boy2.jpg.jpg");
}

function setup() {
  createCanvas(800,400);

boy = createSprite(400,200,20,20)
boy.addImage(boy1)
boy.scale = 0.10

}



function draw() {
  background(bg);  
 if (keyWentDown(LEFT_ARROW)||keyWentDown(RIGHT_ARROW)){
  boy.addImage(boy2)
}
if (keyWentUp(LEFT_ARROW)||keyWentUp(RIGHT_ARROW)){
  boy.addImage(boy1)
}
if (keyWentDown(LEFT_ARROW)){
  boy.velocity.x = -5
}
  if (keyWentDown(RIGHT_ARROW)){
  boy.velocity.x = +5
  }
  if (keyWentUp(LEFT_ARROW)||keyWentUp(RIGHT_ARROW)){
    boy.velocity.x = 0
  }

  drawSprites();
}
