let numeros=[3,4,7,8,5,4]
let[a,b]=numeros
console.log(a,b)

let[h,...reset]=numeros
reset

let alumno={
    nombre:"ronny",
    edad:20,
}
alumno["dni"]=23456789
//spread opation
let actualizAlumno={"id":1,...alumno,"t_sangre":"b+ "}
actualizAlumno
console.log(actualizAlumno)

let{t_sangre}=actualizAlumno
t_sangre

//agregar con el operador spread las letras faltantes de las vocales 
let vocales=["a","e"]
let nuevasVocales=[...vocales,"i","o","u"]
console.log(nuevasVocales)  


