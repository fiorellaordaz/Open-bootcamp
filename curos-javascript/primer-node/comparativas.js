//comparaciones 

//igualdad
let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == solo compara el valor
// === compara el valor y el tipo4

if (a == b) {
    console.log("a es igual a b debil");
}
if (a === b) {
    console.log("a es igual a b fuerte");
}


// desigualdad 
let c = 4;
let d = "4";

if (c != d){
console.log("c es diferente a d - devil");
}

if (c !== d){
    console.log("c es diferente a d - fuerte");
}
// comparaciones mayor quee -- menor que

let max = 10;
let min = 5;
console.log("max es mayor que min");

if (max > min){
    console.log("max es mayor que min");
}
if (max >= 10){
    console.log("max es mayor o igual que 10");
}
if (min < max){
    console.log("min es menor que max");
}
if (min <= max){
    console.log("min es menor o igual que max");
}




