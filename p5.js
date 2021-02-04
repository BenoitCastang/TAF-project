function setup() {
    createCanvas(800, 1000);
    stroke(0, 255, 0);
    strokeWeight(20);
    // frameRate(1);
}

let x=200;
let y=200;
function draw() {
    // background(200, 0, 50);
    // ellipse(50,200,40,150);
    // console.log('draw');
    // point(100, 150);
    // line(10, 50, 350, 50);
    // circle(mouseX, mouseY, 200);
    // triangle(200, 100, 400, 200, 200, 200);
    // if (mouseIsPressed) {
        //     if (mouseButton === LEFT) {
    //         ellipse(mouseX, mouseY, mouseX, mouseY);
    //         point()
    //     }
    // }
    if (keyIsDown(LEFT_ARROW)) {
        background(200, 0, 50);
        x-=5;
        point(x, y);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        background(200, 0, 50);
        x+=5;
        point(x, y);
    }
    if (keyIsDown(UP_ARROW)) {
        background(200, 0, 50);
        y-=5;
        point(x, y);
    }
    if (keyIsDown(DOWN_ARROW)) {
        background(200, 0, 50);
        y+=5;
        point(x, y);
    }
} 
