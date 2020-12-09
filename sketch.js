
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin1 = new Bin(1200,620,10,150);
	bin2 = new Bin(1600,620,10,150);

	ball1  = new paper(300,620,40);
    floor1 = new Floor(1000,700,2000,20);

	// Engine.run(engine);

  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(225);
  ball1.display();
   bin1.display();
   bin2.display();
   floor1.display();
   keyPressed();
  drawSprites();
 
}
 function keyPressed (){
	 if(keyCode === UP_ARROW){
       Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
       velocityX = 20
       velocityY = -20
	 }
 }


