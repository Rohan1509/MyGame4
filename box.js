class Box{
    constructor(x,y,w,h){
       var options={
           friction:0.5,
           restitution:0.8,
           density:1.0

       }
       this.image = loadImage("wood1.png")
       this.body = Bodies.rectangle(x,y,w,h,options)
       this.w = w;
       this.h = h;
 
       World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x, pos.y, this.w, this.h);
    }
 }