class Food {
    constructor(x, y) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }

      this.body = Bodies.circle(x, y);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }

    display(){

var x=80,y=100

ImageBitmapRenderingContext(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock!=0){

for(var i=0;i<this.foodStock;i++){

if(i%0==0){
x=80;
y=y+50    

}
image(this.image,x,y,50,50);
x=x+30;
}    

}



    }

}