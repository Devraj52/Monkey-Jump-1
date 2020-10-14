var END= 0;
var monkey , monkeyrunning;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;


function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  background(220)
  createCanvas(400,400);
  
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkeyrunning);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  console.log(ground.x)
  
  
    //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  
  background("white");
 console.log(monkey.y);
  
    
  // jump when the space key is pressed
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }  
    
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);
 
    if(ground.x<0){
    ground.x=ground.width/2;
    }
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0; 
    monkey.velocityY = 0; 
    obstacleGroup.setVelocityXEach(0);                           FoodGroup.setVelocityXEach(0);                               obstacleGroup.setLifetimeEach(-1);                           FoodGroup.setLifetimeEach(-1); }
  
  banana();
  obstacle();

  drawSprites();

}

function banana(){
   if (frameCount % 80===0){
    var banana = createSprite(600,120,40,10);
    banana.y=Math.round(random(60,150));
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=150;
    FoodGroup.add(banana);
     }
  }
function obstacle(){
 if (frameCount % 100 === 0) {
   var Obstacle = createSprite(400,315,900,10);
   Obstacle.addImage("obstacle",obstacleImage);
   Obstacle.velocityX=-5;
   Obstacle.scale=0.2;
   Obstacle.lifetime= 100;
   obstacleGroup.add(Obstacle);

   var rock = Math.round(random(1,8));
   switch (rock){
   case 1 : Obstacle.addImage(obstacleImage);
       break ;
       default : break;
        }
   }
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  var survivalTime=0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime"+survivalTime,100,50);
  
}




