class Block  {
    constructor(x,y,width,height,angle)
{
  var blockoptions={ 
  density: 0.04,
  friction:1.0,
  restitution:0.8,
}; 

this.body=Bodies.rectangle(x,y,width,height,blockoptions);
this.width= width;
this.height= height;
World.add(world,this.body); 
}



display(){


 var angle =  this.body.angle;
push();

// shifting the origin is called translate 

translate(this.body.position.x, this.body.position.y);
rotate(angle);

rectMode(CENTER);
strokeWeight(4);
   stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);

pop();    
}
}