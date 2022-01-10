// alert("bonjour"); // affiche une allerte

// console.log("bonjour"); affiche dans la console

// var variable; // premiere ancienne methode pour declarer une var
// let variableModerne; // deuxieme(moderne) methode pour creer une var

function somme(a, b) {
  return a + b;
}
function soustraction(a, b) {
  return a - b;
}
function division(a, b) {
  return a / b;
}
function multiplication(a, b) {
  return a * b;
}

let a = 4;
let b = 6;
let som = somme(a, b);
let sous = soustraction(a, b);
let mul = multiplication(a, b);
let div = division(a, b);
console.log("la somme de " + a + " et " + b + " est :" + som);
console.log("la soustraction de " + a + " et " + b + " est :" + sous);
console.log("la multiplication de " + a + " et " + b + " est :" + mul);
console.log("la division de " + a + " et " + b + " est :" + div);
