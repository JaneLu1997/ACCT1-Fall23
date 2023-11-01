let dominos =[]

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, TWO_PI, 1, 1);
		background(0)

    // Create multiple instances of Domino with different x1 positions
    const dominos = [];
    const y1 = 100;
    const y2 = 200;

    for (let x1 = 100; x1 < windowWidth - 80; x1 += 60) {
        dominos.push(new Domino(x1, y1, x1 , y2));
    }

    dominos.forEach((domino) => {
        domino.display();
    });
}

