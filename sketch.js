
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ground;
var roofObject ;

var bg;
var ball;

function preload()
{
	bg = loadImage("bg.jpg");

	ball = loadImage("ball.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight-20);

	engine = Engine.create();
	world = engine.world;
		
	bobObject1=new Bob(600,350,50);
	bobObject2=new Bob(650,350,50);
	bobObject3=new Bob(700,350,50);
	bobObject4=new Bob(750,350,50);
	bobObject5=new Bob(800,350,50);

	ground = new Roof(600,200,300,20);
	
	sling1= new Rope(bobObject1.body,ground.body,-50*2,0);
	sling2= new Rope(bobObject2.body,ground.body,-25*2,0);
	sling3= new Rope(bobObject3.body,ground.body,-0*2,0);
	sling4= new Rope(bobObject4.body,ground.body,25*2,0);
	sling5= new Rope(bobObject5.body,ground.body,50*2,0);
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	ground.display();
	
	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();

  textFont("algerian")	
  textSize(22)
  text("Press up arrow key to move the bob",width/2 - 150,height);
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); } 
} 



