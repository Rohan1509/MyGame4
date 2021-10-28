/*var name=123 
 //integer type data 
 console.log(name) 
var name="Rohan" 
//string type data 
var a=2.3 
 //float type data 
 var b=True 
 //boolean 
 type data*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var happyEmoji;
var devilEmoji, devilEmoji2, devilEmoji3;
var ground;
var platform;
var slingshot;

var gameState="onsling";



var log1, box1, box2, box3, box4, log2, box6, log3, box5, box7

var score;


function preload() {
  bgImg = loadImage("background.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
happyEmoji = new Happyemoji(310, 300, 40, 40);
devilEmoji = new Devilemoji(width-375, height-60, 50, 50);
ground = new Ground(width/2, height-15,width, 30)
platform = new Platform(width/2-495, height-180, 450, 300)
box1 = new Box(width-300, height-65, 70, 70)
box2 = new Box(width-450, height-65, 70, 70)
log1 = new Log(width-375, height-100,220, 20)
box3 = new Box(width-300, height-145, 70, 70)
box4 = new Box(width-450, height-145, 70, 70)
log2 = new Log(width-375, height-185,220, 20)
box5 = new Box(width-300, height-230, 70, 70)
devilEmoji2 = new Devilemoji(width-375, height-140, 50, 50);
box6 = new Box(width-375, height-230, 70, 70)
log3 = new Log(width-375, height-275,220, 20)
devilEmoji3 = new Devilemoji(width-375, height-310, 50, 50);
box7 = new Box(width-450, height-230, 70, 70)
slingshot = new Slingshot(happyEmoji.body, {x:200, y:50})












}

function draw() {
  background(bgImg);
  fill("red")
textSize(50);
text("Score - ", score, width/2, 50)
Engine.update(engine);
  happyEmoji.display();
  devilEmoji.display();
  ground.display();
  platform.display();
  box1.display();
  box2.display();
  log1.display();
  box3.display();
  box4.display();
  log2.display();
  devilEmoji2.display();
  box6.display();
  log3.display();
  devilEmoji3.display();
box5.display();
box7.display();
slingshot.display();
drawSprites();
}

function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(happyEmoji.body, {x:mouseX, y:mouseY})

  }


}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(happyEmoji.body)
  }
}
function mouseReleased(){
  slingshot.fly();
  gameState="launched";
}