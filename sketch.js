//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  foodWait = loadImage("dogImg.png");
  foodReady = loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  foodS=20;
  
 dog = createSprite(250,250);
 dog.addImage(foodWait);
 dog.scale=0.3;
 foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dog.addImage(foodReady);
  }
  drawSprites();
  //add styles here
  textSize(30);
  stroke("blue");
  strokeWeight(3);
    text('food Remaining : ' + foodS,100,100);
    text("Press Up Arrow Key To feed Your Pet",00,490);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  database.ref('/').update({
    Food:x
  })
}



