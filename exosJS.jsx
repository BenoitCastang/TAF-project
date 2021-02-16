// const tag = document.getElementsByTagName('h1');
// console.log(tag);

// const id = document.getElementById('firstParagraph');
// console.log(id);

const title = document.getElementById('title');
// console.log(title);
// const txt = 

const par = document.getElementsByTagName('p');
console.log(par);

const par1 = document.getElementById('firstParagraph');

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
//     // const newPseudo = document.createTextNode(pseudo);
//     // const newTxt = document.createTextNode(txt);
//     // newPar.appendChild(newPseudo);
//     // newPar.appendChild(newTxt);
//     document.body.appendChild(newPar);
//     // newPar.innerHTML+=" So he's happy now.";
// }

// addTxt('Porcellino', 'has left the chat.');

// EXO DOM 9
// Setup de la page côté html
// 1 titre , 2 paragraphes, dans le second p on rajoute un lien qui renvoi vers "#"

// En js 
// On a toujours nos variables titre et txt
// On récupère le lien de notre page dans une variable "lien"
// On console log ce que contient l'attribut href de notre lien 
// (voir la fonction getAttribute())

// Ensuite on modifie l'attribut href de notre lien avec la fonction setAttribute()
// (mettre un lien au choix)(modifié)
const a = document.getElementsByTagName('a')[0];
const link = a.getAttribute('href');
console.log(link);
a.setAttribute('href','https://www.youtube.com/watch?v=KDmiID_iLTE&t=77s&ab_channel=MotorSports');
