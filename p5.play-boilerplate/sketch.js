 var Engine = Matter.Engine,
     World = Matter.World,
     Events = Matter.Events,
     Bodies = Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=[];
var score=0;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);


  for (var k=0;k <=width; k = k+00){
    divisions.push(new Division(k,height=divisionHeight/2,10,divisionHeight));
  }

  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,75));
  }

  for(var j=50;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,175));
  }

  for(var j=75;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,275));
  }

  for(var j=50;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,375));
  }
}

function draw() {
  background("black");
  textSize(20);
  Engine.update(engine);
  ground.display();

  for(var i=0;i<plinkos.length;i + + i ) {
    plinkos[i].display();
  }

  if (FrameCount%60===0) {
    particles.push(new Particles(random/2-30,width/2+341,10,10));
    score+1;
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  
  drawSprites();
}
