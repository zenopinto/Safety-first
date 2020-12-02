var car,wall,car2,car3,border,bor,bor2;
var speed,weight,wal,all;

function setup() {
  
 speed=random(55,90) 
 weight=random(400,1500)
 car = createSprite(50,190,50,50);
 car.velocityX=speed


 
 
 all=createSprite(390,190,8,60)
}

function draw() {
  background(255,255,255);
  
  if(all.x-car.x < (car.width+all.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation>180 && deformation<100){
      car.shapeColor="yellow"

    }
    if(deformation<100){
      car.shapeColor="green"
    }

  }
  drawSprites();
}