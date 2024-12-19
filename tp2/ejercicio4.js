 
//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 let Suma = '0'

 do {
    let numero = prompt('ingrese un numero') 

    if (numero === null) {
        break

    } else if(!isNaN(numero) && numero.trim !== '' ) {
        numero += +(numero);
    } else {
        alert(`${numero} no es un numero valido` )
    }
 } while (true)

    document.write('total ' + Suma)