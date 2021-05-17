const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sI,bgI;
var s;
//create variable for fairy sprite and fairyImg
var f, fI;
var fs;
function preload()
{
	bgI = loadImage("starNight.png");
  fI = loadAnimation("fairyImage1.png","fairyImage2.png");
  sI = loadImage("star.png");
  fs = loadSound("JoyMusic.mp3");
 
}

function setup() {
	createCanvas(1400, 670);

	//write code to play fairyVoice sound
    fs.play();
	//create fairy sprite and add animation for fairy
    f = createSprite(400,400);
	f.addAnimation('ff' ,fI);
	f.scale = 0.2768;

	s = createSprite(650,30);
	s.addImage("s",sI);
	s.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	sBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, sBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgI);

  s.x= sBody.position.x ;
  s.y= sBody.position.y ;


  console.log(s.y);

  //write code to stop star in the hand of fairy
  if (s.y > 370 && sBody.position.y > 370){
	Matter.Body.setStatic(sBody,true); 
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) { 
		Matter.Body.setStatic(sBody,false); 
	}

//write code to move fairy left and right

	if (keyCode === RIGHT_ARROW) {
		f.x = f.x + 20;  
	}
	if (keyCode === LEFT_ARROW) {
		f.x = f.x - 20;  
	}
	// upward movement and downward movement (extra)
	if (keyCode === UP_ARROW) { 
		f.y = f.y - 20; 
	}
if (keyCode === BACKSPACE) { 
		f.y = f.y + 20; 
	}	
}
