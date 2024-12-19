//15- Realiza un script que cuente el número de vocales que tiene un texto.

function contarVocales(texto) {
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    
    texto = texto.toLowerCase();

    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

const texto = "hola mundo";
const numeroDeVocales = contarVocales(texto);
console.log(`El número de vocales en el texto es: ${numeroDeVocales}`);
