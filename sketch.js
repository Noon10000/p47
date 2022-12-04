var gameState;
var PLAY = 0;
var END = 1;
gameState = PLAY;

    function preload()
    {
      froggyImage = loadImage("frog.gif")
      frogEating = loadAnimation("frogeating.gif")

      browntoadImage = loadImage("browntoad.png")
      yellowtoadImage = loadImage("yellowtoad.png")
      greentoadImage = loadImage("greentoad.png")

      greenbugImage = loadImage("greenbug.gif")
      redbugImage = loadImage("redbug.gif")
      purplebugImage = loadImage("purplebug.gif")

      backgroundImage = loadImage("grass.jpeg")
    }

    function setup()
    {
      createCanvas(windowWidth,windowHeight);
      froggy = createSprite(60, windowHeight-100, 50, 50);
      froggy.scale = .3
      froggy.addImage(froggyImage)
    
      gGroup= createGroup()
      g2Group = createGroup()
      g3Group = createGroup()
      
      fGroup= createGroup()
      f2Group = createGroup()
      f3Group = createGroup()

      score = 0;
    }

function draw()
 {
  background(backgroundImage);  
  text("Score: : "+ score, 750,50);
  
  
  if(gameState === PLAY){
  if(keyDown("RIGHT_ARROW"))
  {
    froggy.position.x += 8
  }
  if(keyDown("LEFT_ARROW"))
  {
    froggy.position.x -= 8
  }
  if(keyDown("UP_ARROW"))
  {
    froggy.position.y -= 8
  }
  if(keyDown("DOWN_ARROW"))
  {
    froggy.position.y += 8
  }

  //score increase
  if(froggy.isTouching(gGroup)|| froggy.isTouching(g2Group) || froggy.isTouching(g3Group))
  {
    score = score +1;
   gGroup.destroyEach();
   g2Group.destroyEach();
   g3Group.destroyEach();

  }
  }
  else if(gameState === END)
  {
    gGroup.setLifetimeEach(-1);
    g2Group.setLifetimeEach(-1);
    g3Group.setLifetimeEach(-1);

    fGroup.setLifetimeEach(-1);
    f2Group.setLifetimeEach(-1);
    f3Group.setLifetimeEach(-1);
    
  }
 

  //enemy()
  greentoads()
  yellowtoads()
  browntoads()
  drawSprites();

  //rewards()
  greenbugs()
  redbugs()
  purplebugs()
  

}

  //enemy
 function greentoads()
 {
  if (frameCount % 200 === 0) 
  {
    f = createSprite(windowWidth-50,800,40,10);
    f.y = Math.round(random(30,680));
    f.addImage(greentoadImage);
    f.scale = 0.15;
    f.velocityX = -3;
    fGroup.add(f)

 }
}
function yellowtoads()
 {
  if (frameCount % 120 === 0) 
  {
    f1 = createSprite(windowWidth-50,800,40,10);
    f1.y = Math.round(random(30,680));
    f1.addImage(yellowtoadImage);
    f1.scale = 0.15;
    f1.velocityX = -3;
    f2Group.add(f1)
 }
}
function browntoads()
 {
  if (frameCount % 230 === 0) 
  {
    f3 = createSprite(windowWidth-50,800,40,10);
    f3.y = Math.round(random(30,680));
    f3.addImage(browntoadImage);
    f3.scale = 0.16;
    f3.velocityX = -3;
    f3Group.add(f3)
 }
}

//bugs
function greenbugs()
 {
  if (frameCount % 200 === 0) 
  {
    b = createSprite(windowWidth-50,800,40,10);
    b.y = Math.round(random(30,680));
    b.addImage(greenbugImage);
    b.scale = 0.15;
    b.velocityX = -3;
    gGroup.add(b)
 }
}
function redbugs()
 {
  if (frameCount % 400 === 0) 
  {
    b1 = createSprite(windowWidth-50,800,40,10);
    b1.y = Math.round(random(30,680));
    b1.addImage(redbugImage);
    b1.scale = 0.15;
    b1.velocityX = -3;
    g2Group.add(b1)
 }
}
function purplebugs()
 {
  if (frameCount % 300 === 0) 
  {
    b3 = createSprite(windowWidth-50,800,40,10);
    b3.y = Math.round(random(30,680));
    b3.addImage(purplebugImage);
    b3.scale = 0.16;
    b3.velocityX = -3;
    g3Group.add(b3)
 }
}