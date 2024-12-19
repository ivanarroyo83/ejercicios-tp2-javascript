//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let texto = prompt("Introduce una cadena de texto:");
let cadenas = []; 
let continuar = true;

        while (continuar) {
           
            if (texto !== null && texto.trim() !== "") {
                cadenas.push(texto.trim()); 
            }
            continuar = confirm("¿Deseas ingresar otra cadena?");
        }
        console.log("Cadenas concatenadas: " + cadenas.join("-"));
        