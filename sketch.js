var player,form,game,database
var gameState=0
var playerCount=0
var players,player1,player2,allPlayers,box,infinity,play1Img,play2Img,boxImg,infinImg,play1Img2,play2Img2
var wall1,wall2, wall3, wall4

function preload(){
  play1Img = loadImage("blackPanther2.png")
  play2Img = loadImage("vision2.png")
  infinImg = loadImage("infinity.png")
  play1Img2= loadImage("blackPanther.png")
  play2Img2 = loadImage("vision1.png")
}



function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database()
  game= new Game()
  game.getState()
  game.start()
  
  wall1 = createSprite(width/2,0,width,5)
  wall2 = createSprite(width/2,height,width,5)
  wall3 = createSprite(0,height/2,5,height)
  wall4 = createSprite(width,height/2,5,height)
  

}

function draw() {
  background(255,255,255);  
  if(playerCount==2){
    game.update(1)

  }
  fill("black")
  text(mouseX+" , "+mouseY,mouseX,mouseY)
  if(gameState==1){
    clear()
    game.play()
  }



}