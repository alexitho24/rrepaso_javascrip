//crear funciones para el manejo de opadores aritmeticos 
// let numerouno=34;
// let numerodos=37;
// let suma=numerouno+numerodos;
// console.log(suma)

// let numemerouno1=36;
// let numerodos2=67;
// let suma2=numemerouno1-numerodos2;
// console.log(suma2)

// funcion por declaracion
function sumaDeDosNumeros(a, b) {
    return a + b;
}
//llamar la funcion con argumentos posicionales
console.log(sumaDeDosNumeros(34, 37));
console.log(sumaDeDosNumeros(36, 67));
//lamada de funcion con argumentos nominales
console.log(sumaDeDosNumeros(b = 56, a = 45));