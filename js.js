// Draw an arc on the turtle's left, given a radius and an angle
// arc_left(50,90);
// Shift the colors, rainbow
// shift_color(0);
// shift_color(0.45);
// let wait_time = 1;
// let total_time = 50;

function square() {
  for (let i=0; i<4; i++) {
    forward(100);
    left(90);
  }
}  

function squareHexagone() {
    set_pos(200,475);
    set_line_width(5);
    change_color(color.blue);
    face_right();
        for (let i=0; i<6; i++) {
            square();
            forward(200);
            left(60);
        }
}


canvas.addEventListener('click', squareHexagone);

const para = document.getElementById('player-one');
console.log(para);
para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter name');
  para.textContent = 'Sois le bienvenu, ' + name + ' !';
}
// }
// for() 
//   CustomElementRegistry;
// let randomNumber = Maths.floor(Math.random()*100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const lowOrHi = document.querySelector('.guessSubmit');
// const lowOrHi = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;



