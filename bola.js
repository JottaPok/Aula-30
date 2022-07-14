class bola {
    constructor(x, y){
        this.r = 25
        var config = {
            isStatic:true
        }
        this.bolla = Bodies.circle(x, y, this.r, config)
        World.add(world, this.bolla);
        this.image = loadImage ("assets/cannonball.png")
    } 
    display(){
        image (this.image, this.bolla.position.x,
            this.bolla.position.y,this.r, this.r)
    }
   disparar(){
       var mira = canon.angulo-45
       mira = mira*(3.14/180)
       var velocity = p5.Vector.fromAngle(mira)
       velocity.mult(0.5)
       Matter.Body.setStatic(this.bolla, false)
       Matter.Body.setVelocity(this.bolla, {x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})

    }
    remove(i){
        setTimeout(()=>{
        Matter.World.remove(world,bolas[i].bolla)
        delete bola[i]
        }
        ,500
      )
    }
}