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
const title = document.querySelector('#title');
console.log(title);

title.style.width = '150px';
title.style.display = 'flex';
title.style.flexDirection = 'column';
title.style.alignItems = 'center';
title.style.paddingLeft = '10px';
title.style.border = 'solid 1px';
title.style.boxShadow = '5px 5px 7px red';

// console.log(`Title element's box is ${title.clientHeight} pixels of height.`);
// console.log(`Title element's box is ${title.clientWidth} pixels of width.`);
// console.log(`Title element's box is ${title.offsetHeight} pixels of width including border.`);
// console.log(`Title element's box is ${title.offsetWidth} pixels of width including border.`);
title.style.color = 'red';

const par = document.querySelector('p');
// select a defined element
const allPar = document.querySelectorAll('p')[1];
console.log(par);
console.log(allPar);