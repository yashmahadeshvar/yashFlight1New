var gameState=0;
var game;
var astroJet,astroJetIMG;
var meteor,meteorIMG,meteorGroup;
var alien,ufo,boss,fireBall,fireBallIMG,fireBall2IMG;
var alienGroup,ufoGroup,fireBallGroup2,fireBall2;
var alienIMG,ufoIMG,bossIMG;
var bg,bg2,backgroundIMG,backgroundIMG2,earthIMG;
var out,outIMG,earth;
var missile,missileIMG,missileGroup;
var trident,tridentIMG,tridentGroup;
var startButton,startButtonIMG;
var title,titleIMG,info,infoIMG;
var laser1,laser1IMG,laser1Group;
var laser2,laser2IMG,laser2Group;
var laser3,laser3IMG,laser3Group;
var laser4,laser4IMG,laser4Group;
var laser5,laser5IMG,laser5Group;
var boost, boostIMG, boostGroup;
var lives = 3;
var score = 0;
var bossHealth = 20;
var endIMG,end;
var restart,restartIMG;
var ShootSound,DieSound,WinSound,BoostSound,ThemeSound;
var output1,output2,output3;

function preload(){
  backgroundIMG = loadImage("images/bg 1.jpg");
  backgroundIMG2 = loadImage("images/bg 1.jpg");
  alienIMG = loadImage("images/Cloud 1.png");
  astroJetIMG = loadImage("images/superman.png");
  ufoIMG = loadImage("images/Cloud 2.png");
  startButtonIMG = loadImage("images/button.png");
  fireBallIMG = loadImage("images/fireBall.png");
  bossIMG = loadImage("images/boss.png");
  meteorIMG = loadImage("images/Cloud 2.png");
  boostIMG = loadImage("images/Booster.png");
  titleIMG = loadImage("images/title.png");
  infoIMG = loadImage("images/info.png");
  missileIMG = loadImage("images/missile.png");
  laserIMG = loadImage("images/laser.png");
  laser1IMG = loadImage("images/laser1.png");
  tridentIMG = loadImage("images/trident.png");
  earthIMG = loadImage("images/earth.jpg");
  restartIMG = loadImage("images/restart.jpg");
  fireBallIMG = loadImage("images/fireBall.png");
  ShootSound = loadSound("audio/shooting.mp3");
  DieSound = loadSound("audio/die.mp3");
  BoostSound = loadSound("audio/boost.mp3");
  WinSound = loadSound("audio/win.mp3");
  ThemeSound = loadSound("audio/Superman.mp3");
  
}

function setup() {
  createCanvas(400,625);
  game = new Game();
  game.start();
  game.setLevel1();

  //Groups
  fireBallGroup=createGroup();
  alienGroup=createGroup();
  meteorGroup=createGroup();
  ufoGroup=createGroup();
  boostGroup=createGroup();

  missileGroup=createGroup();
  laser1Group=createGroup();
  laser2Group=createGroup();
  laser3Group=createGroup();
  laser4Group=createGroup();
  laser5Group=createGroup();
  tridentGroup=createGroup();

  restart = createSprite(200,375,50,50);
  restart.addImage(restartIMG);
  restart.visible = false;
  restart.scale = 0.4;

  ThemeSound.loop();
  ThemeSound.setVolume(0.3);

  
}

function draw() {
  background(0);
  drawSprites();

  astroJet.x = mouseX;

  fill("Black");
  textSize(13);
  text("score :"+score,10,25);
  text("Lives: "+ lives,325,25);    
  textSize(15);
  text("--------------------------------------------------------------------------------------",1,70);       
    
  if(gameState === 0){
      fill("Black")
      textSize(20);  
      text("Flight 2.0",150,60);  
      textSize(15);
      text("PLAY",182,250); 
      textSize(15);
      text("INFO",110,576); 
      textSize(15);
      text("--------------------------------------------------------------------------------------",1,120); 
      textSize(15);   
      text("escape from the thunder cloud",150,350); 
      textSize(15);   
      text("pass through this to save yourself",150,400);
      textSize(15);   
      text("get this to increase the helth",150,450);    

    if(mousePressedOver(startButton)){
      gameState = 1;
      bg.visible=false;
      startButton.visible = false;
    }

    if(mousePressedOver(info)){
      textSize(15);
      text("Level 1 : Instructions \n1. Use mouse To move\n2. Collect RainBow to get helth",160,555);
    }
  }

  if(gameState === 1){
    game.playLevel1();
  }
  if(gameState === 2){
    game.end();
  }
  

  if(lives === 0){
    textSize(25);
    text("Game Ended",125,300);
    restart.visible = true ;
    if(mousePressedOver(restart)){
      location.reload();
    }
    gameState = 5;

  }

  if(gameState === 4){
    game.end();
  }

        
}

 
  


