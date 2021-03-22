class Stone{

        constructor (x, y, r){
       
           var options = {
               isStatic:false,
               density:1,
               friction:1,
               restitution:0           }
       
           this.x= x;
           this.y= y;
           this.r= r;
           this.body = Bodies.circle(x, y,r/2,options);
           World.add(world, this.body)
           this.image= loadImage("stone.png");
        }
       
        display(){
       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);
       ellipseMode(RADIUS);
       image(this.image, 0, 0, this.r*2, this.r*2);
       pop();
       

}
}