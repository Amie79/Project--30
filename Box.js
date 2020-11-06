class Box{


    constructor(x,y,width,height)
    {
        var options={'restituition':0.8,
                     'friction':0.1,
                    
                     isStatic:false};
    
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.Visiblity = 255;
        this.width=width;
        this.height=height;
    
        World.add(world,this.body);
    }
    
    display()
    {
        if(this.body.speed<3){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
       
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
       World.remove(world,this.body);
       push()
       this.Visiblity=this.Visiblity-5;
       pop() 
        }
    }
    
    }