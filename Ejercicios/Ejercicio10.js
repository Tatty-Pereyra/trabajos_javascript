/*    • Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse asi:

let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
*/
//Solicitar prompt-sync
const prompt = require('prompt-sync')();

//Pide al usuario que ingrese el precio original
let precioOriginal = parseFloat(prompt("Ingrese el precio aqui: "))

//Pide al usuario que ingrese el descuento
let porcentajeDescuento = parseFloat(prompt("Ingrese su descuento: "))

//Muestra el producto con el descuento aplicado
let montoDescuento = precioOriginal * (porcentajeDescuento / 100)
console.log("El precio final es: ", montoDescuento, ".")
