// es la nueva version de ecmascript 6para la creacion de funciones, el objetivo de esta funcion es facilitar la creacion de funcion y que el codigo sea legible
const suma=(a, b) => {
    return a + b;
}
console.log(suma(23, 45));


const saludonombre= (nombre)=> {let mensaje=`Hola ${nombre}, bienvenido`;
    return mensaje;
}
console.log(saludonombre("Alex Flores"));


const saludo=()=> {
    return "Hola";
}
 console.log(saludo());
 