class Block2 {

    constructor(x,y,width,height){
    
    var options = {
    
    isStatic: false,
    restitution : 0.4,
    friction : 0.1
    
      }
    
    this.visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    
     }
    
     display(){
    
      var pos = this.body.position;
      
      console.log(this.body.speed);
  
      if(this.body.speed < 3){
  
      push();
      
      translate(pos.x,pos.y)
      rotate(this.body.angle) 
      rectMode(CENTER);
      fill("pink")
      rect(0,0,this.width,this.height);
  
      pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }

      if(this.Visibility === 0){

        score = score + 1

      }
      
    }
    
    }