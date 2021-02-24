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
let x = 50;
console.log((x-1)**2+x**2+(x+1)**2);
