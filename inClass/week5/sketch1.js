function setup(){
    let myCanvas = createCanvas(600,600)
    myCanvas.parent("sketchHolder1")
    colorMode(HSB, TWO_PI, 1, 1)
}

function draw(){
    background(0,1,0)

    strokeWeight(10)
    noFill()
    for(let i = 0; i < 10; i++){
        let diam = 100 + i*30
        let thisHue = PI*0.2*i
        stroke(thisHue, 0.8, 0.8)

        push()
        translate(width * 0.5, height * 0.5)
        let angle = millis()*0.0005 * (i*0.5+1)

        rotate(sin(angle))
        arc(0, 0, diam, diam, PI*0.75 ,QUARTER_PI)
        pop()
    }

}
