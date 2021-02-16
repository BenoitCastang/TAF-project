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
// let a;
// a=0;
// function draw() {
//     a+=1;
//     fill(0,a%256,0);
//     // console.log(floor(a/256),a%256);
//     if(mouseY>=400) {
//         background(0);
//         ellipse(400, 400, mouseX, mouseX);
//     } 
//     if(mouseY<400) {
//         background(0);
//         square(400-mouseX/2, 400-mouseX/2, mouseX);
//     }
// }

// function setup() {
//     createCanvas(800, 800);
//     stroke(255);
//     strokeWeight(2);
//     background(0);
// }

// let ellX=400;
// let ellY=400;
// function draw() {
//     noFill();
//     ellipse(ellX,ellY,50,100);
//     ellipse(ellX,ellY,100,50);
//     ellipse(ellX,ellY,50,50);
//     ellipse(ellX,ellY,100,100);
//     ellX+=200;
//     ellY+=200;
//     if(ellX>600) {
//         ellX=200;
//     }
//     if(ellY>600) {
//         ellY=200;
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

// let nom = 'Risitas';
// let age = 65;
// let passions = ['troll', 'fachospère'];
// let pseudo = 'pucix69';
// let arr = [nom, age, passions];
// arr.push(pseudo);
// console.log(arr[3]);
// console.log(arr[2][1]);
// console.log(arr[2].length);
// console.log(arr[0].length);
// console.log(arr[2][1].length);
// // affect var suppr last arr value
// var suppr = arr.pop();
// console.log(suppr);
// // affect var del first arr value
// var del = arr.shift();
// console.log(del);
// arr.unshift('Hummer');
// console.log(arr);

// let lastname = 'Risitas';
// let firstname = 'El';
// let sentence = [0];
// sentence.shift();
// sentence.push(lastname, firstname, lastname[0], firstname[0]);
// console.log(sentence);

// function moyenne(noteA, noteB) {
//     return (noteA+noteB)/2;
// }
// console.log(moyenne(8, 4));
// console.log(4 == 5 ? 'oui' : 'non');
// boule = 4 == 5 ? 'oui' : 'non';
// console.log(boule); 
// console.log(3==3 && 3<4);
// function average(maths, fr, phil) {
//     let avg = (maths+fr+phil)/3;
//     return avg>=16 ? 'Mention très bien'
//         : avg>=14 ? 'Mention bien'
//         : avg>=12 ? 'Mention assez bien'
//         : avg<12 ? 'Mention honorable'
//         : ''
// }
// console.log(average(18, 19, 15));

// °Créer une variable voiture, un objet dans lequel on aura 3 propriétés : 
//      -1 propriété nbCheveaux que l'on initialise avec une valeur (au choix)
// -1 propriété vitesseMax que l'on initialise avec une valeur (au choix)
// -1 propriété faiblesse que l'on initialise avec 1 tableau qui contient 2 chaines de caractères

// Ensuite on va faire un console log de l'objet voiture
// et 
// un console log qui affiche uniquement la vitesseMax de l'objet voiture

// let myCar = new Object();
// myCar.maker = 'McLaren';
// myCar.model = 'formula one';
// myCar.year = 1982;
// myCar.pilot = 'Keke Rosberg';
// myCar.spoilers = ['frontWing', 'rearWing'];
// console.log(myCar.spoilers[1]);
// delete myCar.model;
// // Cette propriété existe-t-elle ?
// console.log(myCar.hasOwnProperty('pilot'));

// let myCar = {
//     maker: 'McLaren',
//     model: 'formula one',
//     year: 1982,
//     spoilers: ['frontWing', 'rearWing'],
//     pilot: {
//         name: 'Keke Rosberg',
//         teammate: 'Alain Prost'
//     }   
// };        
        
// let myCar = new Object();
// myCar.maker = 'McLaren';
// myCar.model = 'formula one';
// myCar.year = 1982;
// myCar.spoilers = ['frontWing', 'rearWing'];
// let pilot = new Object();
// pilot.name = 'Keke Rosberg';
// pilot.teammate = 'Alain Prost';
// myCar.pilot = pilot;
// console.log(myCar.pilot);
// console.log(myCar.pilot.teammate);
// delete myCar.model;
// Cette propriété existe-t-elle ?
// console.log(myCar.hasOwnProperty('pilot'));

// let draw = [];
// for (let i=0 ; i<10 ; i++) {
//     draw.push('#');
//     console.log(draw);
// }

// function average(grades) {
//     let gradesSum = 0;
//     for (let gradesNumber=0 ; gradesNumber<grades.length ; gradesNumber++) {
//         gradesSum += grades[gradesNumber];
//     }
//     let avg=gradesSum/grades.length;
//     return avg;
// }
// console.log(average([11,18,14,6]));

// function arrAdd(arr) {
//     for (let subTabNumber=0 ; subTabNumber<arr.length ; subTabNumber++) {
//         for (let subTabElement=0 ; subTabElement<arr[subTabNumber].length ; subTabElement++) {
//             arr[subTabNumber][subTabElement]+=1;
//         }
//     }
//     return arr;
// }
// console.log(arrAdd([[10,10],[2,2],[3,3]]));

// function diceProba(dice)
// for(let diceRoll=0 ; diceRoll<50 ; diceRoll++) {
//     diceRollOutcome=Math.ceil((Math.random()*6));
//     if(diceRollOutcome===1) {
//         diceSide1
//     }
// }
// diceProba([0,0,0,0,0,0]);

// function mix(arr) {
//     let temp;
//     let random;
//     for (let arrNumber=0 ; arrNumber<arr.length ; arrNumber++) {
//         temp=arr[arrNumber];
//         random=Math.floor(Math.random()*arr.length);
//         arr[arrNumber]=arr[random];
//         arr[random]=temp;
//     }
//     return arr;
// }
// console.log(mix([1,2,3,4,5,6,7,8,9,10]));

// let array1 = [1, 4, 9, 16];
// let map1 = array1.map(x => x * 2);
// console.log(map1);

// map() parcourt un tableau de façon automatique
// function(nombre){return nombre+1;} est une fonction anonyme, qui fonctionne seulement dans son bloc
// x => x+1 est une fonction fléché, soit une fonction anonyme ramassée
// let arr=[0,1,2,3,4];
// let add1=arr.map(number => number+1);
// console.log(add1);

// let myCar = new Object();
// myCar.maker = 'McLaren';
// // myCar.model = 'formula one';
// myCar.year = 1982;
// myCar.pilot = 'Keke Rosberg';
// myCar.spoilers = ['frontWing', 'rearWing'];

// let myCar2 = new Object();
// myCar2.maker = 'McLaren';
// // myCar.model = 'formula one';
// myCar2.year = 1982;
// myCar2.pilot = 'Keke Rosberg';
// myCar2.spoilers = ['frontWing', 'rearWing'];
// // condition ternaire : no operator = does var exist or not ?
// // let myCarDesc = `My car is ${myCar.model ? myCar.model : '...actually I don\'t own any car,'} baby !`;
// // console.log(myCarDesc);
// // allows to use straightly pilot instead of myCar.pilot
// // allows not to do anything to the object
// // year: price gives price new var years value
// // teammate='Alain Prost' creates new var named teammate
// // const {maker, year: price, pilot, teammate='Alain Prost'} = myCar;
// // console.log(pilot, price, maker, teammate);
// let arr = ['jose',8,'Guy',5,8,6,3];
// const list = [{...myCar2}, {...myCar}];
// const [num1,num2, ...ennemies] = arr;
// console.log(num2);
// console.log(5**2);

// const notes = [12, 15, 18];
// const [french, philosophy, maths] = notes;
// console.log(french, philosophy, maths);

// switch values by an array
// let num1 = 2;
// let num2 = 4;
// console.log(num1, num2);
// [num1, num2] = [num2, num1];
// console.log(num1, num2);
// to set a default parameter to a function
// function sayName(firstname = 'no parameter') {
//     console.log(firstname);
// }
// sayName();

// let arr = [1, 4, 9, 16];
// const add = arr.map(() => 5);
// console.log(add); 

// function lastChildDisplay(arr) {
//     console.log(arr[arr.length-1]);
// }
// lastChildDisplay([2,8,6,4,2,3,7,4,1]);

// function lastChildReturn(arr) {
//     return arr[arr.length-1];
// }
// console.log(lastChildReturn([2,8,6,4,2,3]));

// function minReturn(arr) {
//     for(let arrElement=0 ; arrElement<arr.length ; arrElement++) {
//             for(let arrElementSubCount=0 ; arrElementSubCount<arr.length ; arrElementSubCount++) {
//                 if(arr[arrElement]<arr[arrElementSubCount%arr.length]) {
//                     console.log('arr[arrElement] = '+arr[arrElement]);
//                     console.log('arr[arrElementSubCount%arr.length] = '+arr[arrElementSubCount%arr.length]);
//                     return arr[arrElement];
//                 }
//             }
//     }
// }

// function minReturn(arr) {
//     let min = arr[0];
//     for(let i=1 ; i<arr.length ; i++) {
//         if(arr[i]<min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log('value returned = '+minReturn([5,7,2,8,1,4,5,2,3]));

// function maxReturn(arr) {
//     let max = arr[0];
//     for(let i=1 ; i<arr.length ; i++) {
//         if(arr[i]>max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log('value returned = '+maxReturn([5,7,2,8,1,4,5,2,3]));

// function secondMaxReturn(arr) {
//     let max = arr[0];
//     let max2 = arr[1];
//     for(let i=1 ; i<arr.length ; i++) {
//         if(arr[i]>max) {
//             max2 = max;
//             max = arr[i];
//         }
//         else if(arr[i]>max2) {
//             max2 = arr[i];
//         }
//     }
//     return max2;
// }
// console.log(secondMaxReturn([5,14,1,42,42,422,2,25]));

// function howMany(arr,num) {
//     let count=0;
//     for(let i=0 ; i<arr.length ; i++) {
//         if(arr[i]===num) {
//             count+=1;
//         }
//         if(arr[i]>num)
//         return count;
//     }
// }

// console.log(howMany([5,14,42,25,42,42,422,2,25],25));

// function doesNumExist(arr,num) {
//     for(let i=0 ; i<arr.length ; i++) {
//         if(arr[i]===num) {
//             return true;
//         }
//     }
// }
// console.log(doesNumExist([5,14,42,25,42,42,422,2,25],25));

// function doesNumExist(arr,num) {
//     return howMany(arr,num)>0;
// }
// console.log(doesNumExist([5,14,42,25,42,42,422,2,25],24));

// function getElementFromOrderedArray(arr,num) {
//     for(let i=0 ; i<arr.length ; i++) {
//         if(arr[i]===num) {
//             return true;
//         }
//         if(arr[i]>num) {
//             return false;
//         }
//     }   
//     return false;
// }
// console.log(getElementFromOrderedArray([14,20,25,50,60],70));

// Tour de Hanoi : https://www.mathsisfun.com/games/towerofhanoi.html
// Il y a 3 tours, et des disques sur l'une d'entre elles. On ne peut déplacer qu'un seul disque à la fois, et on ne peut pas placer un disque sur un autre plus petit.

// Le but est d'écrire une fonction qui **affiche dans la console** la solution de ce problème.
// Exemple avec le code (obfusqué) plus bas :



// hanoi(3,"un","trois","deux"); // Je demande : comment déplacer 3 disques de la tour "un" vers la tour "trois", avec la tour "deux" en intermédiaire.
/*

     |            |            |
     |            |            |
     |            |            |
    -|-           |            |
   --|--          |            |
  ---|---         |            |
=====|=====  =====|=====  =====|=====
    un          deux         trois
*/
// Résultat (dans la console) :
// Déplacer de un vers trois
// Déplacer de un vers deux
// Déplacer de trois vers deux
// Déplacer de un vers trois
// Déplacer de deux vers un
// Déplacer de deux vers trois
// Déplacer de un vers trois

//DOM = Document Object Model

console.log(document.html);