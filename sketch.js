
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper , rect1 , rect2 , rect3 , ground ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new paperClass(200,200,30,30);
	rect1 = new Rectangle(600,650,100,20);
	rect2 = new Rectangle(550,600,20,100);
	rect3 = new Rectangle(650,600,20,100);
    ground = new Ground(400,680,800,40);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:32,y:-32});
	 }
   }


