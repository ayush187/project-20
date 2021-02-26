var tom,tomImagel,tomImage2,tomImage3;
var jerry,jerryImage1,jerryImage2
var garden,gardenImage;
function preload() {
    //load the images here
tomImagel=loadAnimation("images/cat1.png")    
jerryImage1 = loadAnimation("mouse2.png","mouse3.png")
gardenImage = loadImage("garden.png")
tomImage3 = loadAnimation("images/cat4.png")
jerryImage2=loadAnimation("images/mouse4.png")
tomImage2 = loadAnimation("cat2.png","cat3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden= createSprite(500,400)
garden.addImage(gardenImage)
garden.scale=0.8
tom = createSprite(750,600,10,20)
tom.addAnimation("run cat",tomImagel)
tom.scale = 0.1
jerry = createSprite(250,590,10,20)
jerry.addAnimation("jerry stand",jerryImage1)
jerry.scale = 0.06
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry 
    if(tom.x - jerry.x <(tom.width-jerry.width)/2){
        tom.velocityX=0
     tom.addAnimation("tom lastImage",tomImage3)
     tom.changeAnimation("tom lastImage") 
     jerry.addAnimation("jerry lastImg",jerryImage2) 
     jerry.changeAnimation("jerry lastImage") 
    }
   keyPressed();


 
    drawSprites();
}


function keyPressed(){
      //For moving and changing animation write code here
      //text(mouseX+','+moueY,10,45)
       if(keyCode===LEFT_ARROW){
           tom.velocityX=-5
           tom.addAnimation("tom moving",tomImage2)
           tom.changeAnimation("tom moving")
       }
}
