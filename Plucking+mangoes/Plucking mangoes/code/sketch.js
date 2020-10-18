
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(600,500,400,400);
    ground = new Ground(400,690,2000,20);

    boy = new Boy(120,630,200,200);

    mango1 = new Mango(700,400,40,40);
    mango2 = new Mango(600,400,40,40);
    mango3 = new Mango(500,450,40,40);

    rock = new Rock(50,590,30,30);

    sling = new SlingShot(rock.body,{x:50, y:590});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  tree.display();
  ground.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  rock.display();
  sling.display();

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
      sling.fly()
  }



