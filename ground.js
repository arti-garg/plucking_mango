class Ground{
    constructor (x, y, width, height){
   
       var options = {
           isStatic:true
       }
   
       this.x= x;
       this.y= y;
       this.width= width;
       this.height = height;
       this.body = Bodies.rectangle(x, y, width, height,options);
       World.add(world, this.body)
       //this.image= loadImage("tree.png");
    }
   
    display(){
   var pos = this.body.position;
   push();
   translate(pos.x, pos.y);
   fill("yellow")
   
     rect(0, 0, this.width, this.height);
   pop();
   
   
    }
   
   
   }