class Launcher{

    constructor(bodyA, anchor){
        var options ={

            bodyA:bodyA,
            pointB:anchor,
            stiffness : 0.004,
            length:10
        }

        this.bodyA=bodyA;
        this.pointB= anchor;
        this.body=Constraint.create(options);
        World.add(world, this.body);
    }

    attach(body){

        this.body.bodyA= body;
          }

    fly(){

        this.body.bodyA= null;
    }

    display(){
        if (this.body.bodyA){
        var pointA= this.bodyA.position;
        var pointB= this.pointB;
        strokeWeight(2) ;
        line(pointA.x, pointA.y, pointB.x, pointB.y)       
        
        }

    }

}