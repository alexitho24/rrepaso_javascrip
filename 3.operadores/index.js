 // operadores unarios
 // operador de negacion
 //operador esta a la izquierda del valor y como resultado obtenemos otro valor
 let negacion=!false
 //expresion es un valor complejo que sera solucionado y nos produira y retornara un nuevo valor
 console.log(negacion)

 // operadores binarios
 // son los que evaluan dos valores y nos dan como resultado de un nuevo valor 
 let suma=34+20
 console.log(suma)
 let resta=4-2
 let producto=4*5
 let divicion=3/3
 let potencia=3**2
 let reiduo=10%3
 // tarea operadores de comparacion:
 // operadores logicos
 let edad = 20;
let tieneDNI = true;

console.log("\n== Operadores Lógicos ==");
console.log("¿Es mayor de edad y tiene DNI?:", edad >= 18 && tieneDNI); 
console.log("¿Es menor de edad o tiene DNI?:", edad < 18 || tieneDNI);  
console.log("¿No tiene DNI?:", !tieneDNI);  

 //operadores terniarios
 console.log("\n== Operador Ternario ==");
let mensaje = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log(mensaje); 
 
//1. el primer valor debe ser un valor boleano
//2. el segundo valor es el resultado si el primer valor es verdadero
//3. el tercer valor es el resultado si el primer valor es falso

let ternario = true ? "verdadero" : "falso";
console.log(ternario);


