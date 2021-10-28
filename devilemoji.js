class Devilemoji{
    constructor(x,y,w,h){
      var options={
        restitution:0.8,
        friction:0.1,
        density:0.001
      }
      this.body = Bodies.rectangle(x,y,w,h,options)
      this.w = w;
      this.h = h;
      this.image = loadImage("devilemoji.png");
      
      World.add(world, this.body)

      
    }
    display(){
        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
        
    }
}
