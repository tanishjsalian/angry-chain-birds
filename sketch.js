const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint


var myworld,myengine,ground,ball;
var box1,box2,Pig1,Pig2,log1,log2,log3,log4;
var bk;
var platform,log5
var rope,rope2
function preload(){

bk=loadImage("sprites/bg.png")
  
}
function setup() {
  createCanvas(1000,600);

  myengine=Engine.create();
  myworld=myengine.world; 

 box1=new Box(700,500,70,70)
box2=new Box(900,500,70,70)
ground=new Ground(500,590,1000,20)
Pig1=new Pig(800,500,50,50)
log1=new Log(800,450,20,300,PI/2)
box3=new Box(700,400,70,70)
box4=new Box(900,400,70,70)
Pig2=new Pig(800,400,50,50)
log2=new Log(800,350,20,300,PI/2)
box5=new Box(800,300,70,70)
log3=new Log(750,300,20,150,PI/4)
log4=new Log(850,300,20,150,3*PI/4)
bird1=new bird(100,100,50,50)
platform=new Ground(120,500,250,200)
log5=new Log(200,200,20,100,PI/2)
rope=new chain(bird1.body,log5.body)
rope2=new chain(Pig1.body,box1.body)

}

function draw() {
  background(bk);
  Engine.update(myengine)
  box1.display()
  box2.display()
  Pig1.display()
  log1.display()
  box3.display()
  box4.display() 
  Pig2.display() 
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  rope.display()
  rope2.display()
  
  ground.display()
  platform.display()
  log5.display()
  bird1.display()


  
  
}