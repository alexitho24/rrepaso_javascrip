/*
sintaxys de for
primero el keyword,
primero el keyword, condicion de inicio, condicion, cuerpo partes de la condicion - expresion inicial, condiciones, expresion final
*/
// suma normal inicial=inicial+1
// incremento inicial++
// inicial+=1
for (let inicial = 1; inicial < 10; inicial++) {
    console.log("hola")
}
// for es usado para acceder o recorrer (iterar) los elementos de una lista o diccionario
let amigos=["juan","pedro","maria","luis"]
console.log(amigos)
console.log(amigos[3])
//existe un metodo para saber la cantidas de elemtos que tiene una lista length
console.log(amigos.length)
// para acceder al ultimo elemnto podemos hacer uso del metodo length y restar 1
console.log(amigos[amigos.length-1])
//ejercicio recorrer o iterar o iterar la lista de amigos y mostrar cada uno de los elementos en consola
for (let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}

let frutas = ["manzana", "piña", "sandía", "pera", "plátano", "cereza"];

for (let i = frutas.length - 3; i < frutas.length; i++) {
    console.log(frutas[i])
}


for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "manzana" || frutas[i] === "pera" || frutas[i] === "cereza") {
        console.log(frutas[i])
    }
}

let fruta_Buscada = "pera";
let fruta_Encontrada = false;
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === fruta_Buscada) {
        fruta_Encontrada = true;
        break;
    }
}
if (fruta_Encontrada) {
    console.log("La fruta existe:", fruta_Buscada);
} else {
    console.log("La fruta no existe:", fruta_Buscada);
    }
