const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var backgroundImg;
var snowImg1,snowImg2;
var snow,snowflakes,snowflakes1,snowflakes2,snowflakes3,snowflakes4,snowflakes5,snowflakes6,snowflakes7,snowflakes8,snowflakes9,snowflakes10;


function preload(){
   backgroundImg = loadImage("snow3.jpg");
   snowImg1 = loadImage("snow4.webp");
   snowImg2 = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  // snow = createSprite(400, 200, 50, 50);
  // //snowflakes = createSprite(200,200,50,50);
  // snow.addImage(snowImg2);
  // snow.scale = 0.1;
  snowflakes = new Snowflakes(10,50);
  snowflakes1 = new Snowflakes(50,50);
  snowflakes2 = new Snowflakes(70,50);
  snowflakes3 = new Snowflakes(90,50);
  snowflakes4 = new Snowflakes(100,50);
  snowflakes5 = new Snowflakes(220,50);
  snowflakes6 = new Snowflakes(230,50);
  snowflakes7 = new Snowflakes(180,50);
  snowflakes8 = new Snowflakes(200,50);
  snowflakes9 = new Snowflakes(300,50);
  snowflakes10 = new Snowflakes(750,50);


}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);

  snowflakes.display();
  snowflakes1.display();
  snowflakes2.display();
  snowflakes3.display();
  snowflakes4.display();
  snowflakes5.display();
  snowflakes6.display();
  snowflakes7.display();
  snowflakes8.display();
  snowflakes9.display();
  snowflakes10.display();



  drawSprites();
}