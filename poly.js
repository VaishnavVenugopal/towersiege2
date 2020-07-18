class polyGon{
    constructor(x,y,radius){
        var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

        }
        this.polygon=Bodies.circle(x,y,radius,options);
     
        
     this.radius = radius;
        World.add(world,this.polygon);
        
    }
    display(){
        
var pos = this.polygon.position
       
        ellipse(pos.x,pos.y,this.radius);
        

    }
}