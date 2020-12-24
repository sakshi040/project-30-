class Polygon{
    constructor(x,y,r){
     var options={
        isStatic:false
     } 
     this.body=Bodies.circle(x,y,r/2,options)
     this.r=r
     this.image=loadImage("polygon.png")
     World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r/2,this.r/2)

    }
}