var ball;
var ground,gr1,gr2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	Matter.Bodies.circle(100,50,20)
//Engine.Add(engine,ball)
var options={
	isStatic=true;
}

ground=new Ground(0,600,10,700)
gr1=new Ground(width/2,670,width,20);
gr2=new Ground(110,600,20,120);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
gr2.display()
gr1.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,200)
	}
}

