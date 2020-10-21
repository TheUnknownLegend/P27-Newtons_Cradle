
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backGround,backgroundImg;
var stick,stickImg;

var ball1; 
var ball2;
var ball3;
var ball4;
var ball5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function preload()
{
	backgroundImg = loadImage("download.jpg");
	stickImg = loadImage("Stick.png");
}

function setup() {
	createCanvas(900, 500);

	/*backGround = createSprite(450,250,900,600);
	backGround.addImage("background",backgroundImg);
	backGround.scale = 3;*/

	stick = createSprite(450,40,150,15);
	stick.addImage("rod",stickImg);
	stick.scale = 3;

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,350,60);
	ball2 = new Ball(300,350,60);
	ball3 = new Ball(400,350,60);
	ball4 = new Ball(500,350,60);
	ball5 = new Ball(600,350,60);

	ground = new Ground(width/2, height-20, width,15);

	//rope1 = new rope(ball1.body,{x:200, y:40});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();


	ground.display();

  drawSprites();

  text(mouseX + ", "+mouseY,mouseX,mouseY)
 
}



