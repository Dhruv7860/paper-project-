class Paper {
    constructor(x,y,r){
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:0.8

  }
  this.x=x
  this.y=y
  this.r=r
  this.body=Bodies.circle(this.x,this.y,this.r,options)
  World.add(world,this.body)
    }
    display(){
    push()
    translate(this.body.x,this.body.y)
   ellipse(this.x,this.y,this.r)
   pop()
    }

    

}