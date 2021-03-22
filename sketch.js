
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var tree1, ground;
var boy , stone, m1;
var launcher;
function preload()
{
	boy= loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree1 = new Tree(1000, height-350, 350, 580);
m1= new Mango(870,180, 20);
m2= new Mango(850,226, 25);
m3= new Mango(840,310, 19);
ground= new Ground(width/2, height-20, width,20);
stone= new Stone(300, 550, 20)

launcher= new Launcher(stone.body, {x:320, y:450})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  tree1.display();
  ground.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
 

  launcher.display();
  detectCollision(stone, m1	);
  detectCollision(stone, m2);
  detectCollision(stone, m3);
  image(boy, 130, height-350, 200, 300);
  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){

	launcher.fly();
}

function keyPressed(){

	if (keyCode===32){

		Matter.Body.setPosition(stone.body, {x:300, y:500})
		launcher.attach(stone.body);
	}
}

function detectCollision(lstone, lmango){
mangobody =lmango.body.position;
stonebody = lstone.body.position;

var distance = dist(stonebody.x, stonebody.y, mangobody.x, mangobody.y);

if (distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body, false);
}

}