
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var base1,base2;
var block1;

var score = 0

var options = {

isStatic: false,
restitution : 0.4,
friction : 0.1

}


function setup (){

var canvas = createCanvas(1300,600)

    engine = Engine.create();
    world = engine.world;


base1 = new Base(650,500,300,20);
base2 = new Base(1100,400,300,20);

// row1 base 1
block1 = new Block(525,465,50,50);
block2 = new Block(575,465,50,50);
block3 = new Block(625,465,50,50);
block4 = new Block(675,465,50,50);
block5 = new Block(725,465,50,50);
block6 = new Block(775,465,50,50);

// row 2 base 1
block7 = new Block2(550,415,50,50);
block8 = new Block2(600,415,50,50);
block9 = new Block2(650,415,50,50);
block10 = new Block2(700,415,50,50);
block11 = new Block2(750,415,50,50);

// row 3 base 1
block12 = new Block3(575,365,50,50);
block13 = new Block3(625,365,50,50);
block14 = new Block3(675,365,50,50);
block15 = new Block3(725,365,50,50);

// row4 base 1
block16 = new Block4(600,315,50,50);
block17 = new Block4(650,315,50,50);
block18 = new Block4(700,315,50,50);

// row 5 base 1
block19 = new Block5(625,265,50,50);
block20 = new Block5(675,265,50,50);

// row 6 base 1
block21 = Bodies.rectangle(625,190,50,50,options)


// row 1 base 2
block22 = new Block(975,365,50,50);
block24 = new Block(1025,365,50,50);
block25 = new Block(1075,365,50,50);
block26 = new Block(1125,365,50,50);
block27 = new Block(1175,365,50,50);
block28 = new Block(1225,365,50,50);

// row 2 base 2
block29 = new Block2(1000,315,50,50);
block30 = new Block2(1050,315,50,50);
block31 = new Block2(1100,315,50,50);
block32 = new Block2(1150,315,50,50);
block33 = new Block2(1200,315,50,50);

// row 3 base 2
block34 = new Block3(1025,265,50,50);
block35 = new Block3(1075,265,50,50);
block36 = new Block3(1125,265,50,50);
block37 = new Block3(1175,265,50,50);

// row 4 base 2
block38 = new Block4(1050,215,50,50);
block39 = new Block4(1100,215,50,50);
block40 = new Block4(1150,215,50,50);

// row 5 base 2 
block41 = new Block5(1075,165,50,50);
block42 = new Block5(1125,165,50,50);

// row 6 base 2
block43 = Bodies.rectangle(1075,90,50,50,options)


polygon = new Hexagon(100,400,70,70);

slingshot = new SlingShot(polygon.body,{x:100,y:350})


}


function draw(){

    Engine.update(engine);
    background("aqua")


base1.display();
base2.display();

// base 1 row 1
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

// base 1 row 2
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();

// base 1 row 3 
block12.display();
block13.display();
block14.display();
block15.display();

// base 1 row 4
block16.display();
block17.display();
block18.display();

// base 1 row 5
block19.display();
block20.display();

// base 1 row 6
rect(block21.position.x,block21.position.y,50,50,options);


// base 2 row 1
block22.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();

// base 2 row 2
block29.display();
block30.display();
block31.display();
block32.display();
block33.display();

// base 2 row 3
block34.display();
block35.display();
block36.display();
block37.display();

// base 2 row 4
block38.display();
block39.display();
block40.display();

// base 2 row 5
block41.display();
block42.display();

// base 2 row 6
rect(block43.position.x,block43.position.y,50,50,options);


polygon.display();

slingshot.display();

textSize(30);
fill(0)
text("score = " + score , 100 , 100)


}


function mouseDragged(){

    Matter.Body.setPosition( polygon.body ,{ x : mouseX , y : mouseY })
    
}


function mouseReleased(){

    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
