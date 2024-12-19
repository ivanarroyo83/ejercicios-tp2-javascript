//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//El algoritmo para calcular la letra del dni es el siguiente :

//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

//Ejemplo: 
//Input:  40773821 
//Output: ‘L’

let letrasDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

 

do {
// Pedir al usuario un número de DNI
 let input = prompt("ingresa un número entre 0 y 99999999");

// Si el usuario pulsa "Cancelar", salir del bucle
if (input === null) {
alert("no es un numero valido");
break;
}

// Intentar convertir el input a un número entero
let numeroDni = parseInt(input);

// Validar si el input no es un número o está fuera del rango permitido
if (isNaN(numeroDni) || numeroDni < 0 || numeroDni > 99999999) {
alert("Por favor, introduce un número válido entre 0 y 99999999.");
continue; // Volver a pedir el número
}

// Calcular el resto de la división entre el número y 23
let resto = numeroDni % 23;

// Obtener la letra correspondiente al resto
let letra = letrasDni[resto];
alert(`El DNI ${numeroDNI} tiene como letra: ${letra}`);
} while (true); 

