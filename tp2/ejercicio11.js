//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

//Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nombre1 = prompt("Introduce el primer nombre:");
let edad1 = parseInt(prompt("Introduce la edad de " ));

let nombre2 = prompt("Introduce el segundo nombre:");
let edad2 = parseInt(prompt("Introduce la edad de " ));

let nombre3 = prompt("Introduce el tercer nombre:");
let edad3 = parseInt(prompt("Introduce la edad de " ));


if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3)) {
    console.log("Por favor, introduce edades válidas.");
} else {
    
    let mayorEdad = Math.max(edad1, edad2, edad3);
    let nombreMayor;

  if (mayorEdad === edad1) {
        nombreMayor = nombre1;
    } else if (mayorEdad === edad2) {
        nombreMayor = nombre2;
    } else {
        nombreMayor = nombre3;
    }

    console.log("La persona mayor es: " + nombreMayor + " con " + mayorEdad + " años.");
}