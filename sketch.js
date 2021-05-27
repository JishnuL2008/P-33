const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;



var engine,world;
var bg,bgImg;
var snowman,snowmanImg;
var sound;
var snow1,snow2,snow3,snow4,snow5;


function preload(){
  bgImg=loadImage("snow1.jpg");
  sound=loadSound("sound1.mp3");
  snowmanImg=loadImage("img2.jpg");
  
}



function setup() {
  createCanvas(800,400);
  sound.loop();
  engine=Engine.create();
  world=engine.world;

  
  
  snowman=createSprite(250, 320, 50, 50);
  snowman.addImage(snowmanImg);
snowman.scale=0.40;




}

function draw() { 
  background(bgImg);  
  Engine.update(engine);





  drawSprites();

  



}