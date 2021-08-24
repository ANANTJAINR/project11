var sea, ship, seaImage, shipImage;
function preload(){
seaImage=loadImage("sea.png");
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  //creating sea
  sea = createSprite(300,200);
  sea.addImage(seaImage)
  sea.velocityX= -3;
  sea.scale = 0.5

   //creating ship
  ship = createSprite(200,400);
  ship.loadAnimation(shipImage);
  ship.velocityX=3;
  ship.scale=0.5
  }


function draw() {
 
  background("blue");
 
  if (sea.x<0) {
    sea.x=sea.width/8
  }



  drawSprites()
}