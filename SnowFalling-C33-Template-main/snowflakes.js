class Snowflakes{

    constructor(x,y){
        var options = {
            "friction":0.5,
            "density":1,
            "restitution":1,
        }
        
        this.body = Bodies.rectangle(x,y,10,10,options);
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;

        this.image = loadImage("snow5.webp");
        
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);
        image(this.image,this.x,this.y,50,50);
        pop();

    }




}