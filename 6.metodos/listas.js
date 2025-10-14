let lista=[]
lista[0]="manzana"


//1. crear una lista vacia y agregar de manera automatica los numeros pares que existen entre el 0 y el 20 
let lista2=[]
for (let i = 2; i <= 20; i += 2) {
    lista2[lista2.length] = i
}
console.log(lista2) 

let numberpars=[]
for (let i = 0; i <=20; i++) {
    if (i%2==0) 
        numberpars.push(i) 
      i
    }
console.log(numberpars)







let amigos=[`e`,`i`,`o`]
amigos.unshift(`a`) //agrega al inicio
amigos.push(`u`) //agrega al final
console.log(amigos)

let texto=["hola","como"," ", "estas"]
delete texto[2]
console.log(texto)


let vocales=[`a`,`e`,`e`,`i`,`o`,`u`]
vocales.splice(2,1)
console.log(vocales)

let friends=[]
let amigosprimaria=["choco","manuel","parra"]
let amigossecundaria=["jhon","jose","henrry"]
let amigossuperior=["ashly","lizbeth","ronny"]
friends=amigosprimaria.concat(amigossecundaria,amigossuperior)
console.log(friends)



let numeros=[1,2,3,4,5,6]
numeros.forEach(n=>{console.log(n+1)})


let numeros2=[1,2,3,4,5,6]
let newnumeros=numeros.map(n=>{return n+1})
console.log(newnumeros) 

