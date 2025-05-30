/*    • Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de conversión es: 

Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
	Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi: 
let fahrenheit = celsius * 9 / 5 + 32; 
*/

//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Pedir al usuario que ingrese la temperatura en Celsius
let tempCelsius = parseFloat(prompt("Ingrese la temperatura en Celcius: "))

//Muestra el resultado en Fahrenheit
let fahrenheit = (tempCelsius * 9 / 5 + 32)
console.log("El resultado en Fahrenheit es: ", fahrenheit)