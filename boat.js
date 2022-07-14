class boat{
    constructor(x, y){
        this.width = 170
        this.height = 170
        this.bote = Bodies.rectangle(x, y, this.width, this.height)
        World.add(world, this.bote);
        this.image = loadImage ("assets/boat.png")
    } 

    remove(i){

        setTimeout(()=>{
        Matter.World.remove(world,bote[i].bote)
        delete bote [i]
        },500)}
        display(){
        push()
        translate(this.bote.position.x,
        this.bote.position.y
        )
        rotate(this.bote.angle
        
        )
        imageMode(CENTER
        )
        image (this.image, 0,
           0,this.width, this.height)
           pop()
        }
}                                                                                                                    