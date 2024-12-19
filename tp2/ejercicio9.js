//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

//3
//4 (Múltiplo de 4)
//5-
//————————————————————-

//6
//7
//8 (Múltiplo de 4)
//9 (Múltiplo de 9)i

let limite = 500

for (let i = 0; i <= limite ; i++)
    //escribir un numer
     { document.write(i)
    //identificar multiplo de 4
    if (i % 4 ===0) {
       document.write('(multiplo de 4)'); 
    }

     //identificar multiplo de 9
     if (i % 9 ===0) {
        document.write('(multiplo de 9)'); 
     }

     //salto de linea despues de cada numero
     document.write('<br>')

     //agregar una linea horizontal cada 5 lineas
      if (i % 5 === 0) {
        document.write('<hr>')
        
      }
}