class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        console.log(bodyA)
        console.log(pointB)
        this.pointB = pointB

        this.sling = Constraint.create(options);

        World.add(world, this.sling);
      
 
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        strokeWeight(4);
            stroke(48,22,8);
            if(this.sling.bodyA!= null){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
            
        
    }
    
}