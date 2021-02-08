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

// function setup() {
//     createCanvas(800, 800);
//     stroke(255);
//     strokeWeight(2);
//     background(0);
// }

// function draw() {
//     noFill();
//     if(mouseY>=400) {
//         background(0);
//         ellipse(400, 400, mouseX, mouseX);
//     } 
//     if(mouseY<400) {
//         background(0);
//         square(350-mouseX, 350-mouseX, mouseX);
//     }
// }

// let monTableau = [0, 1, 2, 'A', 'A', 5, 6, 7, 'B', 9];
// monTableau[0]
// console.log(monTableau[8]);
// if(monTableau[1] >= 18) {
//     console.log('majeur');
// } else {
//     console.log('mineur');
// }

// let tab = [5, 10, 15, 20, 25];
// tab[1] = 22;
// tab.push(30);
// console.log(tab);
// console.log(tab.length);
// tab.pop(); // delete and return last value
// console.log(tab);
// console.log(tab.length);
// let last = tab.pop();
// console.log(last);
// console.log(tab);
// for (let i=0 ; i<tab.length ; i++) {
//     if(tab[i] >= 18) {
//         console.log('majeur');
//     } else {
//         console.log('mineur');
//     }
// }

/*
1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
2) Ajouter le nombre 0 à la fin du tableau tab1.
3) Afficher *un par un* tous les éléments du tableau tab1.
4) Retirer le dernier élément du tableau tab1.
5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
6) Ajouter le nombre 58 à la fin de tab2.
7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
8) Afficher *un par un* tous les éléments du tableau tab1.
9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
10) Afficher la taille du tableau tab1.
11) Ajouter le nombre 66 à la fin du tableau tab1.
12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
(On ne cherchera pas à comprendre ça)
*/

// let tab1 = [144, 202, 216, 216, 222, 64];
// tab1.push(0);
// console.log('%cTab 1 :', 'color : red');
// for(let i=0 ; i<tab1.length ; i++) {
//     console.log(tab1[i]);
// }

// tab1.pop();

// let tab2 = [238, 222, 228, 216, 200];
// tab2.push(58);
// for(let i=0 ; i<tab2.length ; i++) {
//     tab1.push(tab2[i]);
// }

// console.log('%cTab 1 augmenté de tab2:', 'color : red');
// for(let i=0 ; i<tab1.length ; i++) {
//     console.log(tab1[i]);
// }

// let maVariable = tab1.pop();
// console.log('Taille de tab1 = ', tab1.length);
// tab1.push(66);

// for(let i=0 ; i<tab1.length ; i++) {
    //     tab1[i]/=2;
    // }
    
// console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
// console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
    
// let tab = [14,15,16,17,17,20,22,21];
    
// Afficher tous les éléments pairs du tableau tab.
// Afficher tous les éléments du tableau tab qui sont dans des cases de numéro pair.
    
    
// console.log('%c Elements pairs de tab :', 'color : red');
// for (let i=0 ; i<tab.length ; i++) {
//     if(tab[i]%2==0) {
//         console.log(tab[i]);
//     }
// }
// console.log('%c Elements des cases paires de tab :', 'color : red');
// for (let i=0 ; i<tab.length ; i++) {
//     if(i%2==0) {
//         console.log(tab[i]);
//     }
// }

// let num;
// let chiffre;
// num = 1;
// chiffre = 2;
// console.log(num+chiffre);
// chiffre = 3;
// console.log(num+chiffre);

// console.log(0.1+0.2-0.0000000000000004);

// let msg;
// msg = 'easy';
// let slt;
// slt = 'peasy';
// console.log(msg, slt);
// slt = 'peasy bruh';
// console.log(msg, slt);

// msg = 'Bonjour';
// console.log(msg+' \'MR Gingle\'');
// console.log('msg');
// slt = 'Salut'+' j\'aime ceci !!';
// console.log(slt);

// let nom = 'Risitas';
// let age = 65;
// let welcomeSentence = 'Bonjour '+nom+', tu as '+age+' ans aujourd\'hui, c\'est la fiesta !';
// console.log(welcomeSentence);

// let jvc = '18-25';
// console.log(jvc.length);
// console.log(jvc[3]);
// console.log(jvc[jvc.length -1]);

let nom = 'Risitas';
let age = 65;
let arr = [25, 'SALUT', nom, age];
console.log(arr);