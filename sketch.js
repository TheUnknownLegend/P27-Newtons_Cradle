
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backGround,backgroundImg;
var stick,stickImg;
var ground, ground1;

var groundA1 ,groundA2 , groundA3 ,groundA4 , groundA5;

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

	backGround = createSprite(450,250,900,600);
	backGround.addImage("background",backgroundImg);
	backGround.scale = 3;

	stick = createSprite(450,40,150,15);
	stick.addImage("rod",stickImg);
	stick.scale = 3;

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(150,350,60);
	ball2 = new Ball(300,350,60);
	ball3 = new Ball(450,350,60);
	ball4 = new Ball(600,350,60);
	ball5 = new Ball(750,350,60);

	ground = new Ground(width/2, height-20, width,15);
	ground1 = new Ground(width/2, height-60, width,15);

	groundA1 = new Ground(150, 40, 1,15);
	groundA2 = new Ground(300, 40, 1,15);
	groundA3 = new Ground(450, 40, 1,15);
	groundA4 = new Ground(600, 40, 1,15);
	groundA5 = new Ground(750, 40, 1,15);

	//uncomment the below line to see the error

	rope1 = new rope(groundA1.body,ball1.body,50,0);
	rope2 = new rope(groundA2.body,ball2.body,50,0);
	rope3 = new rope(groundA3.body,ball3.body,50,0);
	rope4 = new rope(groundA4.body,ball4.body,50,0);
	rope5 = new rope(groundA5.body,ball5.body,50,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  drawSprites();


	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	ground.display();

  text(mouseX + ", "+mouseY,mouseX,mouseY)
 
}



