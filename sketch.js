
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(width/2,height/4,360,40);

	bobDiameter = 55;
	bobPositionX = width/2;
	bobPositionY = height/4+400;

	// BODIES:
	bobObject1 = new Bob(bobPositionX-bobDiameter*2,bobPositionY,bobDiameter);
	bobObject2 = new Bob(bobPositionX-bobDiameter,bobPositionY,bobDiameter);
	bobObject3 = new Bob(bobPositionX,bobPositionY,bobDiameter);
	bobObject4 = new Bob(bobPositionX+bobDiameter,bobPositionY,bobDiameter);
	bobObject5 = new Bob(bobPositionX+bobDiameter*2,bobPositionY,bobDiameter);


	
  

    rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3 = new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
// displaying ROOF
roofObject.display();

//   displaying BOBS
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

// displying ropes

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function keyPressed(){

	if(keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}

}

