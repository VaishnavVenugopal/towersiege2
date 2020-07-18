const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
ground1 = new Ground(600,375,500,20);
polygon1 = new polyGon(200,235,50);


  block1 = new block(400,350,40,40);
  block2 = new block(440,350,40,40);
  block3 = new block(480,350,40,40);
  block4 = new block(520,350,40,40);
  block5 = new block(560,350,40,40);
  block6= new block(600,350,40,40)
  block7 = new block(640,350,40,40);
  block8= new block(680,350,40,40);
  block9 = new block(720,350,40,40);
  block10 = new block(760,350,40,40);
  block11 = new block(800,350,40,40);
  block12 = new block(440,310,40,40);
  block13 = new block(480,310,40,40);
  block14= new block(520,310,40,40);
  block15 = new block(560,310,40,40);

  block16= new block(600,310,40,40);
  block17 = new block(640,310,40,40);
  block18= new block(680,310,40,40);
  block19 = new block(720,310,40,40);
  block20 = new block(760,310,40,40);
  block21= new block(480,270,40,40);
  block22= new block(520,270,40,40);
  block23= new block(560,270,40,40);
  block24= new block(600,270,40,40);
  block25= new block(640,270,40,40);
  block26= new block(680,270,40,40);
  block27= new block(720,270,40,40);
  block28= new block(520,230,40,40);
  block29= new block(560,230,40,40);
  block30= new block(600,230,40,40);
  block31= new block(640,230,40,40);
  block32= new block(680,230,40,40);
  block33= new block(560,190,40,40);
  block34= new block(600,190,40,40);
  block35= new block(640,190,40,40);

  block36= new block(600,150,40,40);




  console.log(polygon1.polygon)
 slingshot= new Slingshot(polygon1.polygon,{x:200, y:50});

}

function draw() {
  background("white");
  Engine.update(engine);
  block1 .display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();

  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  fill("blue")
  polygon1.display();
 
  slingshot.display();
  ground1.display();
  

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 sling.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.polygon);
  }
}
