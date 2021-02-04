// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log('%cExo  1 :', 'color: red');
for (let i=0 ; i<50 ; i++) {
    console.log('bonjour');
  }
  
// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B

console.log('%cExo  2 :', 'color: red');
for (let i=0 ; i<5 ; i++) {
    console.log('A');
    console.log('B');
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B

console.log('%cExo  3 :', 'color: red');
for (let i=0 ; i<3 ; i++) {
    for (let j=0 ; j<5 ; j++) {
        console.log('A');
    }
    console.log('B');
}

// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

console.log('%cExo  4 :', 'color: red');
let a=0;
for (let i=0 ; i<10 ; i++) {
    console.log(a);
    a++;
}

// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11

console.log('%cExo  5 :', 'color: red');
let b=3;
for (let i=0 ; i<9 ; i++) {
    console.log(b);
    b++;
}

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1

// console.log('%cExo  6 :', 'color: red');
// let c=0;
// for (let i=0 ; i<12 ; i++) {
//     if(c<4) {
//         console.log(c);
//         c++;
//     }
//     else {
//         c=0;
//     }
// }

for (let i=0 ; i<10 ; i++) {
    console.log(i%4);
}
// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9

// pq ça marche pas avec deux if ?
console.log('%cExo  7 :', 'color: red');
let d=0;
for (let i=0 ; i<10 ; i++) {
    if(d<5) {
        console.log(d);
        d++;
    }
    else if(d>7) {
        console.log(d);
        d++;
    }
    else {
        console.log('A');
        d++;
    }
}

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109

console.log('%cExo  8 :', 'color: red');
let e=0;
for (let i=0 ; i<10 ; i++) {
    if(e>0 && e<3 || e>3 && e<6 || e>6 && e<9) {
        console.log(e);
        e++;
    }
    else {
        console.log('10'+e);
        e++;
    }
}

// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9

console.log('%cExo  9 :', 'color: red');
let f=0;
for (let i=0 ; i<10 ; i++) {
    if(f==0 || f==3 || f==6 || f==9) {
        console.log(f);
        f++;
    }
    else if(f==1 || f==4 || f==7) {
        console.log('10'+f);
        f++;
    }
    else {
        console.log('20'+f);
        f++;
    }
}

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dé :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6

// function dice(min, max) {
//     return Math.floor(Math.random()*(max-min+1))+min;
// }
// console.log(dice(1, 6)+' '+dice(1,6));

console.log('%cExo  10', 'color: red');
for (let i=1 ; i<7 ; i++) {
    for (let i=1 ; i<7 ; i++) {
        console.log(i,i);
    }
}

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).

console.log('%cExo  11', 'color: red');
for (let k=1 ; k<7 ; k++) {
    for(let m=k ; m<7 ; m++) {
        console.log(k,m);
    }
}

// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)

console.log('%cExo  12', 'color: red');
result=0;
for (let k=1 ; k<21 ; k++) {
    for(let m=k ; m<21 ; m++) {
        result++;
    }
}
console.log('On peut dénombrer '+result+' résultats différents');


// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9

console.log('%cExo  13', 'color: red');
for (let multiple=1 ; multiple<10 ; multiple++) {
    console.log('1x'+multiple+' = '+1*multiple);
}

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18

console.log('%cExo  14', 'color: red');
for (let multiple=1 ; multiple<10 ; multiple++) {
    console.log('2x'+multiple+' = '+2*multiple);
}

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81

// J'ai enlevé les doublons avec let multiple=facteur
console.log('%cExo  15', 'color: red');
facteur=1;
for(let facteur=1 ; facteur<10 ; facteur++) {
    for (let multiple=facteur ; multiple<10 ; multiple++) {
        console.log(facteur+'x'+multiple+' = '+facteur*multiple);
    }
}

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)

// console.log('%cExo  16', 'color: red');
// number=0;
// for(let i=1 ; i<101 ; i++) {
//     number+=i;
//     console.log(number);
// }

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253

// console.log('%cExo  17', 'color: red');
// number=0;
// for(let i=1 ; ; i++) {
//     if(number==302253) {
//         break;
//     }
//     else {
//     number+=i;
//     console.log(number);
//     }
// }

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55

// console.log('%cExo  18', 'color: red');
// function exo18(a) {
//     result=a(a-i);
//     console.log(result);
// }
// for(i=0 ; i<10 ; i++) {
//     exo18(i);
// }

// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

console.log('%cFonction 1', 'color: red');
function fun() {
    console.log(17);
}
fun();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.

console.log('%cFonction 2', 'color: red');
function f2() {
    return 17;
}
f2();
console.log(f2());

// Utiliser la fonction f1 pour afficher 17 dans la console.

console.log('%cFonction 3', 'color: red');
function f1(a) {
    console.log(a);
}
f1(17);

// Utiliser la fonction f2 pour afficher 17 dans la console.

console.log('%cFonction 4', 'color: red');
function f2() {
    return 17;
}
f2();
console.log(f2());


// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// Elle retourne un nombre.


// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.

console.log('%cFonction 5', 'color: red');
function f3(a) {
    console.log(a*2);
}
f3(5);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.

console.log('%cFonction 6', 'color: red');
function f4(a) {
    return a*2;
}
console.log(f4(5));

// Utiliser la fonction f3 pour écrire dans la console le double de 99.


console.log('%cFonction 7', 'color: red');
function fun3(a) {
    console.log(a*2);
}
fun3(99);


// Utiliser la fonction f4 pour écrire dans la console le double de 99.

// console.log('%cFonction 8', 'color: red');
// function f4(a) {
//     return a*2;
// }
// console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
console.log('%cStocker double 99', 'color: red');
a=f4(99);
console.log(a)

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

console.log('%cFontion f5', 'color: red');
function f5(a, b) {
    console.log(a+b);
}
f5(42, 77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.

console.log('%cFontion f6', 'color: red');
function f6(a, b) {
    return a+b;
}
console.log(f6(42, 77));

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a=5;
a+=f6(42, 77);
console.log(a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.

console.log('%cFontion f7', 'color: red');
function f7(a, b) {
    if(a<b) {
        console.log('b est plus grand que a');
        return b;
    }
    else if(a>b){
        console.log('a est plus grand que b');
        return a;
    }
    else {
        console.log('Les deux nombres me semblent égaux.');
    }
}
f7(6, 5);

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

console.log('%cFontion f8', 'color: red');
function f8(a, b, c) {
    if(a>b && a>c) {
        console.log('a est le plus grand');
        return a;
    }
    else if(b>a && b>c){
        console.log('b est le plus grand');
        return b;
    }
    else if(c>a && c>b){
        console.log('c est le plus grand');
        return c;
    }
    else {
        console.log('deux nombres sont ex aequo');
    }
}
f8(6, 6, 4);



// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

console.log('%cFontion f9', 'color: red');
function f9(a, b) {
    for(let i=0; i<b ; i++) {
        console.log(a);
    }
}
f9('voiture', 3);