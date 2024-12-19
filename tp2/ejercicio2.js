//Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

//0-2: Muy deficiente
//3-4: Insuficiente
//5-6: Suficiente
//7: Bien
//8-9: Notable
//10: Sobresaliente

//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let numeroCalificacion = parseInt(prompt('ingrese un numero de nota'))

let nota = ''

if (isNaN(numeroCalificacion)) { 
    console.log( 'no ingreso un numero');
} else if (numeroCalificacion < 0 || numeroCalificacion > 10) {
    console.log('ingrese un numero valido');
}
 if (numeroCalificacion >= 0 && numeroCalificacion <=2) {
     nota = 'muy deficiente'
 } else if (numeroCalificacion >= 3 && numeroCalificacion <= 4) {
    nota = 'insuficiente'
} else if (numeroCalificacion >= 5 && numeroCalificacion <= 6) {
    nota = 'suficiente'
} else if (numeroCalificacion === 7) {
    nota = 'notable'
} else if (numeroCalificacion >= 8 && numeroCalificacion <= 9) {
    nota = 'notable'
} else if (numeroCalificacion === 10 ) {
    nota = 'sobresaliente'
}
console.log(`nota ${nota}`);
