// const tag = document.getElementsByTagName('h1');
// console.log(tag);

// const id = document.getElementById('firstParagraph');
// console.log(id);

// const title = document.getElementById('title');
// console.log(title);
// const txt = 

// const par = document.getElementsByTagName('p');
// console.log(par);

// const par1 = document.getElementById('firstParagraph');

// for(let i=0 ; i<par.length ; i++) {
//     console.log(par[i]);
// }
// let newNode = document.createElement('span');
// let parentDiv = document.getElementById('childElement').parentNode;
// let sp2 = document.getElementById('childElement');
// parentDiv.insertBefore(newNode,sp2);
// document.body.insertBefore(par[3],title);
// document.body.insertBefore(par1,title);
// document.body.appendChild(title);
// console.log(document.body);
// document.body.removeChild(title);
// const newTxt = document.createTextNode('New text');
// document.body.appendChild(newTxt);
// document.body.replaceChild(newTxt,par[2]);

// function addTxt(pseudo,txt) {
//     const newPar = document.createElement('p');
//     newPar.innerHTML=`<strong>${pseudo}</strong> ${txt}`;
//     // newPar.innerHTML+=" So he's happy now.";

//     // const newPseudo = document.createTextNode(pseudo);
//     // const newTxt = document.createTextNode(txt);
//     // newPar.appendChild(newPseudo);
//     // newPar.appendChild(newTxt);
//     document.body.appendChild(newPar);

// }

// addTxt('Porcellino', 'has left the chat.');

// const a = document.getElementsByTagName('a')[0];
// const link = a.getAttribute('href');
// console.log(link);
// a.setAttribute('href','https://www.youtube.com/watch?v=KDmiID_iLTE&t=77s&ab_channel=MotorSports');

// ap pour modifier tous les innierHTML de txt en "LOL HACKED"

// fonction fléchée + fonction anonyme
// console.log(Array.from([1,2,3], x => x*x));

// create array of paragraphs
// const txtArr = Array.from(par);
// console.log(txtArr);

// replace all by new txt
// txtArr.map(x => x.innerHTML = `LOL jvc t'a hacké`);
// const title = document.querySelector('#title');
// console.log(title);

// title.style.width = '400px';
// title.style.display = 'flex';
// title.style.flexDirection = 'column';
// title.style.alignItems = 'center';
// title.style.paddingLeft = '10px';
// title.style.border = 'solid 1px';
// title.style.boxShadow = '5px 5px 7px red';

// console.log(`Title element's box is ${title.clientHeight} pixels of height.`);
// console.log(`Title element's box is ${title.clientWidth} pixels of width.`);
// console.log(`Title element's box is ${title.offsetHeight} pixels of width including border.`);
// console.log(`Title element's box is ${title.offsetWidth} pixels of width including border.`);
// title.style.color = 'red';

// const par = document.querySelector('p');
// select a defined element
// const allPar = document.querySelectorAll('p')[1];
// console.log(par);
// console.log(allPar);

// function changeText1() {
//     title.classList.add('myColor');
//     title.innerHTML = `changed color`;
// }
// function changeText2() {
//     title.classList.remove('myColor');
//     title.innerHTML = `cancelled change color`;
// }
// function changeText3() {
//     title.classList.toggle('myColor');
//     title.innerHTML = `toggling change color`;
// }
// const links = document.querySelectorAll('a');
// links[0].addEventListener('click', changeText1);
// links[1].addEventListener('click', changeText2);
// links[2].addEventListener('click', changeText3);

// const titles = document.querySelectorAll('h1');
// console.log(titles[24].offsetTop);
// function goTitle(numTitle) {
//         let dist = titles[numTitle].offsetTop;
//         window.scrollTo(0,dist);
// }
// links[3].addEventListener('click', goTitle(10));

// let title = document.querySelector('h1');
// console.log(title);
// let frame = document.querySelector('div');
// console.log(frame);
// let maxHeight = frame.clientHeight;
// let maxWidth = frame.clientWidth;
// console.log(maxHeight,maxWidth);
// title.style.position = 'relative';
// let topPos = 0;
// let leftPos = 0;
// let speedH = -2;
// let speedV = -2;
// function animV() {
//     if(topPos===0) {
//         speedV*=-1;
//     }
//     else if(topPos===maxHeight-title.offsetHeight) {
//         speedV*=-1;
//     }
//     topPos+=speedV;
//     title.style.top = topPos+'px';
//     requestAnimationFrame(animV);
// }
// requestAnimationFrame(animV)

// function animH() {
//     if(leftPos===0) {
//         speedH*=-1;
//     }
//     else if(leftPos===290) {
//         speedH*=-1;
//     }
//     leftPos+=speedH;
//     title.style.left = leftPos+'px';
//     requestAnimationFrame(animH);
// }
// requestAnimationFrame(animH);


// function consoleLogEvent(event){
//     console.log(event.key);
// }
// let event = document.addEventListener('keypress',consoleLogEvent);

// addEventListener('click',function(event) {
//     // console.log(`x=${event.clientX}`,`y=${event.clientY}`);
//     let eventX = event.clientX;
//     let eventY = event.clientY;
// });

// addEventListener('mousemove',function(event) {
//     let eventX = event.clientX;
//     let eventY = event.clientY;
//     let width = 200;
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src','Vanessa.jpg');
//     newImg.setAttribute('width',width+'px');
//     document.body.appendChild(newImg);
//     newImg.style.position = 'absolute';
//     newImg.style.left = eventX-width/2+'px';
//     newImg.style.top = eventY-width/2+'px';
//     // console.log(newImg);
// });

// addEventListener('mouseout',function(){
//     let newTitle = document.createElement('h2');
//     document.body.appendChild(newTitle);    
//     newTitle.innerHTML = 'bla bla';
//     console.log(newTitle);
// });

// let input = document.querySelector('input');
// console.log(input);
// input.addEventListener('focus',function() {
//     input.style.backgroundColor = 'royalBlue';
// })
// input.addEventListener('blur',function() {
//     input.style.backgroundColor = 'white';
// })

// for(let i=0 ; i<10 ; i++) {
//     let image = document.createElement('img');
//     document.body.appendChild(image);
//     image.setAttribute('src','https://www.fillmurray.com/1080/1080');
//     image.setAttribute('id',`img${i}`);
// }
// let images = document.getElementsByTagName('img');
// imgArray = Array.from(images);
// console.log(imgArray);
// imgArray.map((images,i) => images.addEventListener('load',function() {
//     console.log(`img Num : ${i} - OK`);
// }));

// let textArea = document.querySelector('textarea');
// let button = document.querySelector('button');
// textArea.addEventListener('keyup',function(event) {
//     if(textArea.value.length>5) {
//         button.disabled = true;
//     }
// });

// const titre = document.querySelector("h1");
// const txt = setTimeout(function() {
//    titre.textContent = "SALUT C'EST COOL";
//    titre.style.opacity = 1;
//    document.body.style.background = "royalblue";

// }, 2000);

// let textArea = document.querySelector('textarea');
// // si on rentre un paramètre il prend la valeur de l'événement
// textArea.addEventListener('keyup',function(event) {
//     let textAreaArray = Array.from(event.key);
//     // console.log(textAreaArray.includes('b','c'));
//     if(textAreaArray.includes('a')===true || textAreaArray.includes('e')===true ||
//     textAreaArray.includes('i')===true || textAreaArray.includes('o')===true ||
//     textAreaArray.includes('u')===true || textAreaArray.includes('y')===true) {
//         console.log('user entered vowel');
//     }
//     else;
// });

// bar displaying scrolling statey
// scrollHeight = document.querySelector('#superScroll').scrollHeight;
// let bar = document.querySelector('.bar');
// document.addEventListener('scroll', function(event){
//     let scrollMax = scrollHeight-innerHeight;
//     let whereAreWe = (pageYOffset/scrollMax)*100;
//     bar.style.width = whereAreWe+'%';
// });

// let title = document.querySelector('#title');
// let timer = 3;
// title.value = timer;
// title.addEventListener('click', function() {
//         let countDown = setInterval(function(){
//             title.innerHTML = timer--;
//             if(timer<0) {
//                 title.innerHTML = 'Green green green';
//             };
//         },1000);
// });

// let myForm = document.querySelector('fieldset');
// let button = document.querySelector('button');
// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('OK');
//     myForm.reset;
// })

// let myText = document.querySelector('textarea');
// let div = document.querySelector('div');
// myText.addEventListener('keyup',function(event) {
//     div.innerHTML = marked(myText.value);
// });

// let textArea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textArea.value = localStorage.getItem('myText');
// localStorage.removeItem('myText');
// if (textArea.value) {
    //     div.innerHTML = marked(localStorage.getItem('myText'));
//     // }
// textArea.addEventListener('keyup',function(event) {
//     window.localStorage.setItem('myText',textArea.value);
//     div.innerHTML = marked(textArea.value);
// });
// console.log(textArea.value);
    // console.log(window);


// localStorage.clear();
// window.localStorage.value = 'ssgdst';

// console.log(window.localStorage.value);
// console.log(window.localStorage.length);
// console.log(localStorage);
// window.alert.sert
// console.log(window);
// console.log(div);

// let myStorage = window.localStorage;
// console.log(myStorage);
// console.log(window);
// let a = 5;
// let b = 2;
// let c = 3;
// let re = /ab+c/; /* OR */ let regex = new RegExp('ab+c')
// console.log();

// ----------------------------------------------------
// CLASS
// ----------------------------------------------------

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

// class Rectangle {
//   constructor(name, height, width) {
//     this.name = name;
//     this.height = height;
//     this.width = width;
//   }
// }

// Exos classes

// // var myRectangle1 = new Rectangle('myRectangle1',10,20);

// // var myRectangle2 = new Rectangle();
// // myRectangle2.name = 'myRectangle2';
// // myRectangle2.height = 5;
// // myRectangle2.width = 15;


// // console.log(new Rectangle('myRectangle1',10,20));
// // console.log(myRectangle2);

// class Empty {}
// var myEmpty = new Empty;
// myEmpty.name = 'empty1';
// console.log(myEmpty);

// // // console.log(Rectangle.height);
// // // console.log(Car);
// // // console.log(RegExp);


// class User {
//     constructor(name,age,email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
// }

// let user1 = new User('user1',17,'user1@gmail.com');
// console.log(user1);

// class Car {
//     constructor() {
//         this.engineIsRunning = false;
//     }
//     startEngine() {
//         this.engineIsRunning = true;
//     }
// }

// const myCar1 = new Car;
// // myCar1.startEngine();
// console.log(myCar1);

// class Color extends Car {
    
// }

// const myColor1 = new Color;
// // myCar1.startEngine();
// console.log(myCar1);

// ------------------------
// Calcul IMC
// ------------------------
// class IMC {
//     constructor(name,weight,height) {
//         this.name = name;
//         this.weight = weight;
//         this.height = height;
//     }
//     imc() {
//         let imc = (this.weight/this.height**2).toFixed(2);
//         return imc;
//     }
//     display() {
//         console.log(`${this.name} a un IMC de ${(this.weight/(this.height**2)).toFixed(0)}`);
//     }
// }

// let benoitIMC = new IMC('Benoît',95,1.85);
// let vanessaIMC = new IMC('Vanessa',25,1.90);
// let jeffIMC = new IMC('Jeff',200,1.20);
// let arr = [vanessaIMC,jeffIMC];
// const arrDisplay = arr.forEach(x => x.display());
// const arrDisplay = arr.map(x => x.display());

// --------------------------------------------

// Arrondir = toFixed()
// console.log((1.4554631).toFixed(0));
// let str = 'string';
// let str2 = str;
// str2.forEach(x => a);
// console.log(str2);
// console.log(String);
// console.log(Map);
// let array = new Array;
// console.log(array);
// console.log(Boolean);
// let string = new String;
// console.log(string);
// let boolean = new Boolean;
// console.log(boolean);

// ----------------------------------------------
// Bilan PME
// ----------------------------------------------

class Employee {
    constructor(firstName,lastName,monthsWorked,wedge) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.monthsWorked = monthsWorked;
        this.wedge = wedge;
    }
    totalWedgePerEmployee() {
        let totalWedge = this.monthsWorked*this.wedge;
        return totalWedge;
    }    
}

class Company {
    constructor(name,team,sales,taxes,material) {
        this.name = name;
        this.team = team;
        this.sales = sales;
        this.taxes = taxes;
        this.material = material;
    }
    balanceSheet() {
        let balanceSheet = 0;
        let subBalanceSheet = 0;
        for(const employee of this.team) {
            for(const property in employee) {
                subBalanceSheet += employee.totalWedgePerEmployee();
                // console.log(subBalanceSheet);
                // return subBalanceSheet;
            }
            console.log(subBalanceSheet/4);
        }
    }       
}

let myCompany = new Company(
    'myCompany',
    [new Employee('Benoît','C',30,2000),
    new Employee('Vanessa','P',30,3000),
    new Employee('Jeff','P',40,4000)],
    300000,
    20000,
    10000
)

console.log(myCompany.balanceSheet());
// console.log(myCompany);

// let bastien = new Employee('Bastien','C',30,2000);
// console.log(bastien.totalWedgePerEmployee());
// for (const property in bastien) {
//     console.log(`${property}: ${bastien[property]}`);
// }
// // let bastienWedge = 0;
// for(const property in bastien) {
//     // bastienWedge += bastien.wedge;
//     console.log(bastien.monthsWorked*bastien.wedge);
// }

// let marwa = new Employee('Marwa','C',20,4000);
// for (const property in marwa) {
//     console.log(`${property}: ${marwa[property]}`);
// }

// let list = [bastien,marwa];
// console.log(list);
// let wedgeSum = 0;
// for(element of list) {
//     // console.log(element.wedge);
//     wedgeSum += element.wedge;
// }
// console.log(wedgeSum);

// --------------------
// for...of (arrays) et for...in (objects)
// --------------------

// const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }

// const object = { a: 1, b: 2, c: 3 };
// console.log(object);
// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// ---------------------