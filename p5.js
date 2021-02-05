// function setup() {
//     createCanvas(800, 800);
//     stroke(0, 255, 0);
//     strokeWeight(0);
//     pointX = 0;
//     pointY = 0;
//     sunX = 400;
//     sunY = 800;
//     sunHeight = 150;
// }

// function draw() {
//     if (keyIsDown(LEFT_ARROW)) {
//         background(200, 0, 50);
//         pointX-=5;
//         ellipse(pointX, pointY, 20, 20);
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         background(200, 0, 50);
//         pointX+=5;
//         ellipse(pointX, pointY, 20, 20);
//     }
//     if (keyIsDown(UP_ARROW)) {
//         background(200, 0, 50);
//         pointY-=5;
//         ellipse(pointX, pointY, 20, 20);
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         background(200, 0, 50);
//         pointY+=5;
//         ellipse(pointX, pointY, 20, 20);
//     }
//     if (pointX<0 || pointX>800 || pointY<0 || pointY>800) {
//         pointX=width/2;
//         pointY=height/2;
//     }
//     if (mouseButton) {
//         if (sunY<(-75)) {
//             sunY=800;
//         } 
//         strokeWeight(0);
//         background(0, 0, 50);
//         fill(0,0,50);
//         rect(0, 600, 800, 200);
//         fill(255,255,0);
//         circle(sunX, sunY, 150);
//         sunY = sunY-0.5;
//     }
//     if (mouseIsPressed) {
//         sunY = sunY-4;
//     }
//     if (sunY<700) {
//         fill('orange');
//         rect(0, 0, 800, 600);
//         fill('rgb(255,255,0)');
//         circle(sunX, sunY, 150);
//     }
//     if (sunY<400) {
//         fill('rgb(135,206,235)');
//         rect(0, 0, 800, 600);
//         fill('rgb(255,255,0)');
//         circle(sunX, sunY, 150);
//         rect(0, 600, 800, 200);
//         fill('rgb(29,29,187)');

//     }
// } 

function setup() {
    createCanvas(800, 800);
    background(0,0,0,200);
    stroke(255);
    strokeWeight(1);
}

function draw() {
    noFill();
    ellipse(mouseX, mouseY, 60, 60);
}
