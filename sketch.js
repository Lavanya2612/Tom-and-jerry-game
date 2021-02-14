
var jungle, jungleimg
var tom, tomimg, cat1, cat4
var jerry, jerryimg, mouse1, mouse4

function preload() {
   jungleimg= loadImage('garden.png')
   tomimg = loadAnimation( 'cat2.png', 'cat3.png')
   jerryimg= loadAnimation('mouse2.png', 'mouse3.png')
   cat1= loadImage('cat1.png')
   mouse1 = loadImage('mouse1.png')
   cat4= loadAnimation('cat4.png')
   mouse4= loadAnimation('mouse4.png')
}

function setup(){
    createCanvas(1000,800);
   
    jungle= createSprite(500, 400)
    jungle.addImage(jungleimg)

    tom= createSprite(700, 600, 10, 10)
    tom.addImage(cat1)
    tom.scale= 0.15

    jerry= createSprite(200, 600, 10, 10)
    jerry.addImage(mouse1)
    jerry.scale= 0.15

}

function draw() {

    background(255);


    keyPressed();

    drawSprites();
}


function keyPressed(){

 if (keyDown('left')){
   tom.velocityX= -5
   tom.addAnimation('running', tomimg)
   tom.changeAnimation('running')
   jerry.addAnimation('teasing', jerryimg)
   jerry.changeAnimation('teasing')
 }

 if (tom.x - jerry.x < tom.width/2 - jerry.width/2){
   tom.velocityX=0
   tom.addAnimation('last', cat4)
   tom.changeAnimation('last')
   tom.x= 290
   jerry.addAnimation('Last',mouse4)
   jerry.changeAnimation('Last')
   }

}

