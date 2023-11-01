class Domino{
    constructor(x1, y1, x2, y2){
        this.position = createVector(x1, y1, x2, y2)
        this.trickle = createVector(0,0)
        this.cColor = (255)
    }

    display(){
        stroke(this.cColor)
        noFill()
        line(this.position.x1, this.position.y1, this.position.x2, this.position.y2)

    
    }
}
