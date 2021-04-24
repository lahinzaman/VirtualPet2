//Create variables here
var dog, happyDog, database, foodS, foodStock, canvas

var dogImg,happydogImg

function preload()
{

dogImg = loadImage ("..images/dogImg.png");
happyDogImg = loadImage ("..images/dogImg1.png");

}

function setup() {
	var canvas = createCanvas(800, 700);
  dog.createSprite(50,40,40,40);
  dog.addImage("dog",dogImg)
      database = firebase.database();
      foodStock=database.ref('Food');
      foodStock.on("value",readStock);
    ;
  }


function draw() {  
background(46,139,87); 
if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}

function readStock(data){

foodS=data.val();

}

function writeSTock(x){

if(x<=0){
x=0;
}else{
 x=x-1;
}
  database.ref('/').update({

Food:x

  })

}


