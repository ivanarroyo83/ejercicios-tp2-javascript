//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.


//Ejercicios con Math

let filas = parseInt(prompt('ingreese un numero de filas'));
let columnas = parseInt(prompt('ingrese un numero de columnas'));

// validar las entradas

if (isNaN(filas) || filas <= 0 || isNaN(columnas) <= 0 ) {
    alert('ingresa un numero valido mayor que 0')
    
} else {
    //calcular el valor total inicial
    let total = filas * columnas;
    //crear una tablas
     document.write('<table border="1" style="border-collapse; text-align: center;" >')

     for (let indiceFila = 0; indiceFila < filas; indiceFila++)
         { document.wrdiceColumnas('<tr>');
          for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
            document.write('<td>' + total + '</td>');
            
            document.write('</tr>')
          }
            
          }
          document.write('</table>');
        
     }





    
