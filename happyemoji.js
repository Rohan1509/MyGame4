class Happyemoji{
    constructor(x,y,w,h){
      var options={
        restitution:0.8,
        friction:0.1,
        density:0.001
      }
      this.body = Bodies.rectangle(x,y,w,h,options)
      this.w = w;
      this.h = h;
      this.image = loadImage("happyemoji.png");
      this.smokeImage = loadImage("smoke.png");
      this.trajectory=[];
      World.add(world, this.body)

      
    }
    display(){
        var angle = this.body.angle;
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        

        for (var i=0;i<this.trajectory; i++ ) {
image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]) 
       }
       if(this.body.velocity.x>10 && this.body.position.x>310){
        var position= [this.body.position.x, this.body.position.y]
        this.trajectory.push(position)
       }


        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
        
    }
    
}
