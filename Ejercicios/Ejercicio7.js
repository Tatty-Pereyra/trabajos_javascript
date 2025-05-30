/*Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
*/

//Declaro dos variables 
let a = 10
let b = 20

//Muestro el valor antes del intercambio 
console.log("Antes del intercambio:");
console.log("a : ", a);
console.log("b : ", b);

// Intercambio usando una variable temporal
let temp = a;
a = b;
b = temp;

//Muestro el valor despues del intercambio
console.log("Después del intercambio")
console.log("a : ",a)
console.log("b : ",b)