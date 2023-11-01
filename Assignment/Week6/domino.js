class Domino {
    constructor(x1, y1, x2, y2) {
        this.position = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
        };
        this.cColor = 255;
    }

    display() {
        stroke(this.cColor)
        noFill()
				strokeWeight(4)
        for (let x1 = this.position.x1; x1 < windowWidth - 80; x1 += 60) {
            line(x1, this.position.y1, x1, this.position.y2);
        }
    }
}