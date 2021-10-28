class Slingshot{
    constructor(bodyA, pointB,){
      var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
      }
      this.sling1 = loadImage("sling1.png");
      this.sling2 = loadImage("sling2.png");
      this.sling3 = loadImage("sling3.png");
      this.pointB = pointB;
      this.sling = Constraint.create(options);      
      World.add(world, this.sling)

      
    }
    attach(body) {
this.sling.bodyA=body;
    }


    fly(){
      this.sling.bodyA=null;
      

    }





    display(){
        image(this.sling1, 325, 360)
        image(this.sling2, 300, 315)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            push();
            if(pointA.x<345) {
              strokeWeight(2)
              line(pointA.x+30, pointA.y, pointB.x, pointB.y+300)
            line(pointA.x-25, pointA.y-10, pointB.x, pointB.y+300)
            image(this.sling3, pointA.x-35, pointA.y,15,30)

            }
          else{
            strokeWeight(5)
            line(pointA.x+30, pointA.y, pointB.x, pointB.y+300)
            line(pointA.x-25, pointA.y-10, pointB.x, pointB.y+300)
            image(this.sling3, pointA.x, pointA.y,15,30)
          }
            pop();
        }
        
        
    }
}
