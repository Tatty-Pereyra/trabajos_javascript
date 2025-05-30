/*     • Ejercicio 2 – Usando las variables: 
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.

Desglosando el ejercicio deberás:
    1. Pide al usuario que ingrese su nombre.
    2. Pide al usuario que ingrese su edad.
    3. Pide al usuario que ingrese su peso.
    4. Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. Ahora nos toca pedir datos al usuario, por lo que usaremos prompt-sync para solicitar esta información. 
*/ 

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

// Pedir al usuario que ingrese su nombre 
let nombre = prompt("Ingrese su nombre: ")

//Pedir al usuario que ingrese su edad
let edad = prompt("Ingrese su edad: ")

//Pedir al usuario que ingrese su peso
let peso = prompt("Ingrese su peso: ")

//Ingrese un mensaje personalizado 
let mensaje = "Hola " + nombre + ", tu edad es: " + edad + ", y tu peso es: " + peso + "."

console.log(mensaje)