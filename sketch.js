const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var SlingShot1;
var polygon,polygon_ima;
var block1,block2;
var block3,block4;
var block5,block6;
var block7,block8;
var block9,block10;
var block11,block12;
var block13,block14;
var block15,block16;
var block17,block18;
var block19,block20;
var block21,block22;
var block23,block24;
var block25;

function preload(){
    polygon_ima=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,660);
    engine = Engine.create();
    world = engine.world;

    //level 1
    block1=new Box(400,225,30,40)
    block2=new Box(430,235,30,40)
    block3=new Box(460,235,30,40)
    block4=new Box(490,235,30,40)
    block5=new Box(520,235,30,40)
    block6=new Box(550,235,30,40)
    block7=new Box(570,225,30,40)

     //level 2
    block8=new Box(420,175,30,40)
    block9=new Box(450,175,30,40)
    block10=new Box(480,175,30,40)
    block11=new Box(510,175,30,40)
    block12=new Box(540,175,30,40)

    // //level 3
    block13=new Box(450,145,30,40)
    block14=new Box(480,145,30,40)
    block15=new Box(510,145,30,40)

    // //level 4
    block16=new Box(480,105,30,40)

    // //level 5
    block17=new Box(900,100,30,40)
    block18=new Box(930,100,30,40)
    block19=new Box(960,100,30,40)
    block20=new Box(990,100,30,40)
    block21=new Box(1020,100,30,40)

    // //level 6
    block22=new Box(930,60,30,40)
    block23=new Box(960,60,30,40)
    block24=new Box(990,60,30,40)

    // //level 7
    block25=new Box(960,20,30,40)

    polygon=new Polygon(50,200,70)

    SlingShot1=new SlingShot(polygon.body,{x:50,y:200})

    ground1=new Ground(600,650,1200,20)
    ground2=new Ground(470,500,260,20)
    ground3=new Ground(960,250,200,20)
   
}

    function draw(){
        background(0);
        Engine.update(engine);


        block1.display();
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
        SlingShot1.display();
        polygon.display();
        ground1.display();
        ground2.display();
        ground3.display();
    }
    function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
    
    function mouseReleased(){
        SlingShot1.fly();
    }

    function keyPressed(){
        if(keyCode===32){
     SlingShot1.attach(this.polygon)
        }
    }