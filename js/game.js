class Game{
    constructor(){}
      
    start(){
      
        bg = createSprite(200,350,400,800);
        bg.addImage(backgroundIMG);
        bg.scale = 2.5;
        
        startButton = createSprite(200,200,50,10);
        startButton.addImage(startButtonIMG);
        startButton.scale = 0.3;

        title = createSprite(200,100,10,10);
        title.addImage(titleIMG);
        title.scale = 0.7;

        output1 = createSprite(100,350,40,40);
        output1.addImage(ufoIMG);
        output1.scale = 0.2;

        output2 = createSprite(100,400,40,40);
        output2.addImage(alienIMG);
        output2.scale = 0.2;

        output3 = createSprite(100,450,40,40);
        output3.addImage(boostIMG);
        output3.scale = 0.2;

        info = createSprite(81,572,10,10);
        info.addImage(infoIMG);
        info.scale = 0.08;    


    }

    setLevel1(){
        bg2 = createSprite(200,350,400,625);
        bg2.addImage(backgroundIMG2);
        bg2.scale = 2.5;
        bg2.visible = false;

        astroJet = createSprite(200,580,10,10);
        astroJet.addImage(astroJetIMG);
        astroJet.visible=false;
        astroJet.scale = 0.5;

      
    }

    playLevel1(){

        textSize(18);
        text("lets go!",170,25); 
        textSize(15);   
        text("Target = 1000",300,60);   
        
        bg2.visible = true;
        astroJet.visible = true;
        title.visible = false;

        //spawning aliens
        if (frameCount % 90=== 0) {
          var alien = createSprite(100,70,50,50);
          alien.x = Math.round(random(50,350));
          alien.addImage(alienIMG);
          alien.scale = 0.4;
          alien.velocityY = 12;
          alien.lifetime = 200;
          alienGroup.add(alien);
        }

        //spawning meteors
        if (frameCount % 80=== 0) {
          var meteor = createSprite(100,70,50,50);
          meteor.x = Math.round(random(50,350));
          meteor.addImage(meteorIMG);
          meteor.scale = 0.45;
          meteor.velocityY = 12;
          meteor.lifetime = 200;
          meteorGroup.add(meteor);
        }

        //destroying aliens by fireball
        for(var fb = 0; fb < fireBallGroup.length; fb++){
          for(var al=0;al<alienGroup.length;al++){
            if(fireBallGroup.isTouching(alienGroup)){
              alienGroup.get(al).remove();
              fireBallGroup.get(fb).lifetime=0;
              score = score + 100;
            }
          }
        }
        
      //create boost
      if (frameCount % 200 === 0) {
        boost = createSprite(100,-50,50,50);
        boost.x = Math.round(random(50,350));
        boost.addImage(boostIMG);
        boost.scale = 0.35;
        boost.velocityY = 12;
        boost.lifetime = 200;
        boostGroup.add(boost);
      }

      //  if astrojet collects boost then lives increase
      for(var b=0;b<boostGroup.length;b++){
        if(boostGroup.isTouching(astroJet)){
          boostGroup.get(b).remove();
          lives = lives + 1;
          score = score + 100
          BoostSound.play();
        }
      }

      //lives reduces if meteor is touched
      for(var m=0;m<meteorGroup.length;m++){
        if(meteorGroup.isTouching(astroJet)){
          meteorGroup.get(m).remove();
          lives = lives - 1;
          DieSound.play();
        }
      }
  
      //move to level 2 if score is 1500
      if(score === 1000){
        gameState = 2;
        BoostSound.play();

      }

    }

    
  
  end(){
   
    earth = createSprite(200,300,400,625);
    earth.addImage(earthIMG);
    restart.visible = true ;
    restart.depth = earth.depth;
    restart.depth++;
    restart.y = 400;

    if(mousePressedOver(restart)){
      location.reload();
    }

    textSize(25)
    text("!Congratulations!",115,300);

    textSize(22)
    text("YOU WON!",150,350);
    WinSound.play();
    
  }

}

