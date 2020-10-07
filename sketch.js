var car1,car2,car3;
var wall1,wall2,wall3;
var line1,line2;
var speed,weight;
var deformation;


function setup() {
 createCanvas(800,600);
  
  speed = random(50,100);
  weight = random(500,1500);

  car1 =  createSprite(100, 100, 50, 80);
  car1.velocityX = random(50,100);

  car2 =  createSprite(100, 300, 50, 80);
  car2.velocityX = random(50,100);

  car3 =  createSprite(100, 500, 50, 80);
  car3.velocityX = random(50,100);

  wall1 =  createSprite(750, 100, 30, 100);
  wall1.shapeColor = "white";

  wall2 =  createSprite(750, 300, 30, 100);
  wall2.shapeColor = "white";

  wall3 =  createSprite(750, 500, 30, 100);
  wall3.shapeColor = "white";

  line1 =  createSprite(400, 200, 800, 30);
  line1.shapeColor = "white";

  line2 =  createSprite(400, 400, 800, 30);
  line2.shapeColor = "white";
}

function draw() {
  background(30);  

  if(wall1.x-car1.x < (car1.width + wall1.width)/2){
    car1.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22509
    if(deformation > 180){
      car1.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car1.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car1.shapeColor = color(0,255,0);
    }
  }

  if(wall2.x-car2.x < (car2.width + wall2.width)/2){
    car2.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22509
    if(deformation > 180){
      car2.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car2.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car2.shapeColor = color(0,255,0);
    }
  }

  if(wall3.x-car3.x < (car3.width + wall3.width)/2){
    car3.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22509
    if(deformation > 180){
      car3.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car3.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car3.shapeColor = color(0,255,0);
    }
  }

  car1.collide(wall1);
  car2.collide(wall2);
  car3.collide(wall3);

  drawSprites();
}