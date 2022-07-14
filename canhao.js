class canhao{
    constructor(x, y, largura, altura, angulo){
        this.x=x;
        this.y=y;
        this.largura=largura
        this.altura = altura
        this.canno = loadImage("assets/canon.png")
        this.base = loadImage("assets/cannonBase.png")
        this.angulo = angulo
    }
    display(){
     if(keyIsDown (UP_ARROW) && this.angulo >= -40){
         this.angulo -=1
     }
     if(keyIsDown (DOWN_ARROW)&& this.angulo <= 50){
        this.angulo +=1
    }
    console.log(this.angulo)
    push()
    translate(this.x, this.y)
    rotate(this.angulo)
    imageMode(CENTER)
    image(this.canno, 0, 0, this.largura, this.altura);
    pop()
    image(this.base, 16, 20, 200, 200);
    }
}