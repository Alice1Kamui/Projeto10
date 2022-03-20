var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d6454384-2004-4871-a7eb-17583d482358"],"propsByKey":{"d6454384-2004-4871-a7eb-17583d482358":{"name":"A_1","sourceUrl":null,"frameSize":{"x":304,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"NxXxuUv8hsJ9aDwyFbX1dnDf6yBeevEv","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":226},"rootRelativePath":"assets/d6454384-2004-4871-a7eb-17583d482358.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando paredes
var parede1 = createSprite(190,120,250,3);
var parede2 = createSprite(190,260,250,3);
var parede3 = createSprite(67,145,3,50);
var parede4 = createSprite(67,235,3,50);
var parede5 = createSprite(313,145,3,50);
var parede6 = createSprite(313,235,3,50);
var parede7 = createSprite(41,170,50,3);
var parede8 = createSprite(41,210,50,3);
var parede9 = createSprite(337,210,50,3);
var parede10 = createSprite(337,170,50,3);
var parede11 = createSprite(18,190,3,40);
var parede12 = createSprite(361,190,3,40);

//criando o ding
var ding = createSprite(40,190,15,15);

//criando os dong's
var dong1 = createSprite(100,130,12,12);
var dong2 = createSprite(215,130,12,12);
var dong3 = createSprite(165,250,12,12);
var dong4 = createSprite(270,250,12,12);

//tentativas
var tentativas=0;


//velocidade dos dong's
dong1.velocityY= 9;
dong2.velocityY= 9;
dong3.velocityY= -9;
dong4.velocityY= -9;

//cores
ding.shapeColor="violet";
dong1.shapeColor="blue";
dong2.shapeColor="yellow";
dong3.shapeColor="pink";
dong4.shapeColor="red";


function draw() {
  
  background("white");
  
  //bounceOFF
  dong1.bounceOff(parede1);
  dong1.bounceOff(parede2);
  dong2.bounceOff(parede1);
  dong2.bounceOff(parede2);
  dong3.bounceOff(parede1);
  dong3.bounceOff(parede2);
  dong4.bounceOff(parede1);
  dong4.bounceOff(parede2);
  
  //collide
  ding.collide(parede11);
  ding.collide(parede12);
  
  MovimentoDoDing();
  
  text("Tentativas:"+tentativas,160,65);
  
  if (ding.isTouching(dong1)) {
    ding.x=40,
    ding.y=190;
    tentativas=tentativas+1;
  }
  if (ding.isTouching(dong2)) {
    ding.x=40,
    ding.y=190;
    tentativas=tentativas+1;
  }
  if (ding.isTouching(dong3)) {
    ding.x=40,
    ding.y=190;
    tentativas=tentativas+1;
  }
  if (ding.isTouching(dong4)) {
    ding.x=40,
    ding.y=190;
    tentativas=tentativas+1;
  }
  
  if (ding.x>310) {
    textSize(100);
    text("Parabéns!!Você venceu!!",67,340);
  }
  
  
  
  drawSprites();
}

function MovimentoDoDing() {
  //movimento do ding
  if (keyDown("a")) {
    ding.x=ding.x-1;
    
    } if (keyDown("d")) {
      ding.x=ding.x+1;
    }
}







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
