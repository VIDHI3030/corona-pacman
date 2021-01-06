var germ1,germ2,germ3,powerup1,powerup2,powerup3,powerup4,powerup5,powerup6,powerup7,Pacman,life1,life2,life3;
var germImage,hsimage,humanimage,mask,person,life;
var computerscore,playerscore,gameState;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall16,wall17;
function preload(){
  germImage=loadImage("images/germ.png");
  hsImage=loadImage("images/handsanitizer.png");
  humanImage=loadImage("images/human walking.png");
  mask=loadImage("images/mask.png");
  person=loadImage("images/human.png");
  life=loadImage("images/life.png");
}

function setup(){
  createCanvas(480,400);
germ1 = createSprite(100,88,10,10);
germ1.addImage(germImage);
germ1.scale = 0.2;

 germ2 = createSprite(300,314,10,10);
germ2.addImage(germImage);
germ2.scale = 0.2;

germ3 = createSprite(350,100,10,10);
germ3.addImage(germImage);
germ3.scale = 0.2;


 germ1.setVelocity(2.4,0);
  germ2.setVelocity(-2.4,0);
  germ3.setVelocity(0,2.4);


powerup1 = createSprite(250,25,10,10);
powerup1.addImage(mask); 
powerup1.scale = 0.2;

  powerup2 = createSprite(30,200,10,10);
powerup2.addImage(hsImage);
powerup2.scale = 0.2;

  powerup3 = createSprite(430,374,10,10);
powerup3.addImage(mask);
powerup3.scale = 0.2;

powerup4 = createSprite(430,200,10,10);
powerup4.addImage(hsImage);
powerup4.scale = 0.2;

powerup5 = createSprite(200,374,10,10);
powerup5.addImage(mask);
powerup5.scale = 0.2;

powerup6 = createSprite(36,366,10,10);
powerup6.addImage(mask);
powerup6.scale = 0.2;

powerup5 = createSprite(413,23,10,10);
powerup5.addImage(hsImage);
powerup5.scale = 0.2;



life1 = createSprite(20,30);
life1.addImage(life);
life1.scale = 0.05;

 life2 = createSprite(60,30);
life2.addImage(life);
life2.scale = 0.05;

life3 = createSprite(100,30);
life3.addImage(life);
life3.scale = 0.05;

 destination = createSprite(200,380,20,20);
destination.shapeColor = "lightgreen";
destination.visible = false;

 wall1 = createSprite(312,370,10,60);
wall1.shapeColor = "darkblue";

wall2 = createSprite(30,345,80,10);
wall2.shapeColor = "darkblue";

 wall3 = createSprite(230,345,157,10);
wall3.shapeColor = "darkblue";

 wall4 = createSprite(430,345,100,10);
wall4.shapeColor = "darkblue";

 wall5 = createSprite(234,280,166,10);
wall5.shapeColor = "darkblue";

 wall6 = createSprite(174,120,48,10);
wall6.shapeColor = "darkblue";

 wall7 = createSprite(294,120,48,10);
wall7.shapeColor = "darkblue";

wall8 = createSprite(155,146,10,48);
wall8.shapeColor = "darkblue";

wall9 = createSprite(155,254,10,48);
wall9.shapeColor = "darkblue";

 wall10 = createSprite(314,146,10,48);
wall10.shapeColor = "darkblue";

 wall11 = createSprite(314,254,10,48);
wall11.shapeColor = "darkblue";

wall12 = createSprite(430,280,100,10);
wall12.shapeColor = "darkblue";

wall13 = createSprite(385,200,10,157);
wall13.shapeColor = "darkblue";

wall14 = createSprite(65,200,10,157);
wall14.shapeColor = "darkblue";

wall15 = createSprite(30,120,90,10);
wall15.shapeColor = "darkblue";

wall16 = createSprite(230,56,157,10);
wall16.shapeColor = "darkblue";

 wall17 = createSprite(385,32,10,60);
wall17.shapeColor = "darkblue";

Pacman = createSprite(230,150,10,10);
Pacman.addImage(person);
Pacman.scale = 0.25;

 computerscore = 0;
 playerscore = 0;

  gameState = "serve";
 
textSize(30);}




function draw() {
background("black");
drawSprites();
edges=createEdgeSprites();

if (gameState === "serve") {
 fill("red");
 text("Press enter to continue",40,210);
} 

if(keyDown("enter") && gameState === "serve") {
 gameState = "directions";
}

if(gameState === "directions") {
textSize(22);
fill("red");
text("Get powerups and find the destination!",15,180);
text("Evade the aliens!",120,210);
fill("green");
textSize(24);
text("Press S to start",120,240);
}  

if(keyDown("s") && gameState === "directions") {
  gameState = "play";
}

germ1.bounceOff(edges);
germ2.bounceOff(edges);
germ3.bounceOff(edges);

Pacman.bounceOff(edges);
Pacman.collide(wall1);
Pacman.collide(wall2);
Pacman.collide(wall3);
Pacman.collide(wall4);
Pacman.collide(wall5);
Pacman.collide(wall6);
Pacman.collide(wall7);
Pacman.collide(wall8);
Pacman.collide(wall9);
Pacman.collide(wall10);
Pacman.collide(wall11);
Pacman.collide(wall12);
Pacman.collide(wall13);
Pacman.collide(wall14);
Pacman.collide(wall15);
Pacman.collide(wall16);
Pacman.collide(wall17);

if(keyDown("left") && gameState === "play") {
 Pacman.setVelocity(-4,0);
}

if(keyDown("right") && gameState === "play") {
 Pacman.setVelocity(4,0);
}

if(keyDown("down") && gameState === "play") {
 Pacman.setVelocity(0,4);
}

if(keyDown("up") && gameState === "play") {
 Pacman.setVelocity(0,-4);
}

if(Pacman.isTouching(germ1) || Pacman.isTouching(germ2) || Pacman.isTouching(germ3) ) {
  //playSound("sound://category_alerts/vibrant_game_life_lost_1.mp3");
  serve();
 computerscore = computerscore+1; 
}

if(Pacman.isTouching(powerup1) || Pacman.isTouching(powerup2) || Pacman.isTouching(powerup3) || Pacman.isTouching(powerup4) || Pacman.isTouching(powerup6)|| Pacman.isTouching(powerup7)) {
  //playSound("sound://category_digital/coin_1.mp3");
  playerscore = playerscore+1;
  if(Pacman.isTouching(powerup1)) {
   powerup1.visible = false;
  }
  if(Pacman.isTouching(powerup2)) {
   powerup2.visible = false;
  }
  if(Pacman.isTouching(powerup3)) {
   powerup3.visible = false;
  }
  if(Pacman.isTouching(powerup4)) {
    powerup3.visible = false;
   }
   if(Pacman.isTouching(powerup5)) {
    powerup3.visible = false;
   }
   if(Pacman.isTouching(powerup6)) {
    powerup3.visible = false;
   }
   if(Pacman.isTouching(powerup7)) {
    powerup3.visible = false;
   }
}

if(computerscore === 1) {
 life3.visible = false;
}

if(computerscore === 2) {
 life2.visible = false;
}

if(computerscore === 3) {
 life1.visible = false;
 gameState = "lose";
}

if(gameState === "lose") {
 computerscore = 0;
 playerscore = 0;
 serve();
 invisible();
 germ1.setVelocity(0,0);
 germ2.setVelocity(0,0);
 germ3.setVelocity(0,0);
 fill("red");
 text("You lost! Try Again!",70,190);
 text("Press R to restart",85,230);
}

if(powerup1.visible === false && powerup2.visible === false && powerup3.visible === false && powerup4.visible === false && powerup5.visible === false ) {
destination.visible = true;
}

if(destination.visible === true && Pacman.isTouching(destination)) {
  gameState = "win";
}

if(gameState === "win") {
invisible();
serve();
germ1.setVelocity(0,0);
 germ2.setVelocity(0,0);
 germ3.setVelocity(0,0);
fill("green");
text("You won!",140,190);
text("Press R to restart",85,230);
}

if((gameState === "win" || gameState === "lose") && keyDown("r")) {
visible();
computerscore = 0;
 playerscore = 0;
 gameState = "directions";
 go();
}

}

function serve() {
Pacman.x = 200;
 Pacman.y = 150;
 Pacman.setVelocity(0,0);
}

function visible() {
life1.visible = true;
 life2.visible = true;
 life3.visible = true;
 germ1.visible = true;
 germ2.visible = true;
 germ3.visible = true;
 powerup1.visible = true;
 powerup2.visible = true;
 powerup3.visible = true;
 powerup4.visible = true;
 powerup5.visible = true;
 powerup6.visible = true;
 powerup7.visible = true;
}

function go() {
germ1.setVelocity(3,0);
germ2.setVelocity(-3,0);
germ3.setVelocity(0,3);
}

function invisible() {
germ1.visible = false;
germ2.visible = false;
germ3.visible = false;
life1.visible = false;
life2.visible = false;
life3.visible = false;
powerup1.visible = false;
powerup2.visible = false;
powerup3.visible = false;
powerup4.visible = false;
powerup5.visible = false;
powerup6.visible = false;
powerup7.visible = false;
}
