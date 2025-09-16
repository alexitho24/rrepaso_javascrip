/*
1. crearun programa, haciendo uso de una funcion un contador de vocales, la funcion debera recibir un texto y la vocal a buscar y retorna la cantidad de veces que se encuentra dicha vocal.
hacer uso de los metodos para string
*/ 
function contadorVocales(texto, vocal) {
    let textoMinusculas = texto.toLowerCase();
    let vocalMinuscula = vocal.toLowerCase();
    let contador = 0;

    for (let i = 0; i < textoMinusculas.length; i++) {
        if (textoMinusculas[i] === vocalMinuscula) {
            contador++;
        }
    }
    return contador;
}
console.log(contadorVocales("hola estoy aprendiendo a programar con js xd aaaaaaa", "a"));

/*
2. crear un programa que haciendo uso de una funcion pueda escribir una lista de amigos y que retorne otra lista pero con los nombres en mayuscula
*/
function amigosEnMayuscula(amigos) {
    let amigosMayuscula = [];
    for (let i = 0; i < amigos.length; i++) {
        amigosMayuscula.push(amigos[i].toUpperCase());
    }
    return amigosMayuscula;
}
console.log(amigosEnMayuscula(["ashly", "lizbet", "alder", "Ana"]));  