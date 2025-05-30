/*    • Ejercicio 6 - Comparaciones y Operadores Lógicos: 
Declara dos variables con valores numéricos. Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10 y muestra el resultado en la consola.

Pasos a seguir:
Declaración y Asignación de Variables:
    1. Declara dos variables y asígnales valores numéricos de tu elección.
Operadores de Comparación y Lógicos:

    2. Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores que 10.
Mostrar Resultado en la Consola:

    3. Utiliza console.log() para mostrar el resultado de la comparación.
Pista: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual vamos a hacer referencia.
Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, ===, !==. El operador lógico "&&" (y lógico) se utiliza para combinar condiciones y todas deben cumplirse para que el resultado sea verdadero.
*/


//Declaración y Asignación de Variables:
//1. Declara dos variables y asígnales valores numéricos de tu elección.
let variable1 = 5
let variable2 = 94


//Operadores de Comparación y Lógicos:
// 2. Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores que 10.
// 3. Utiliza console.log() para mostrar el resultado de la comparación.
if (variable1 > 10 && variable2 > 10) {
    console.log("Ambos numeros son mayores a 10.")
}else if (variable1 > 10 && variable2 < 10 ) {
    console.log("LA VARIABLE 1 es mayores a 10.")
} else if (variable1 < 10 && variable2 > 10) {
    console.log("LA VARIABLE 2 es mayores a 10.")
} else {
    console.log("Las 2 variables  son menores a 10.")
}
    
