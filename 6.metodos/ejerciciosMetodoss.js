let persona = {
    nombre: "Alex",
    apellido: "Flores",
};

// Agregar edad y sexo
persona.edad = 30;
persona.sexo = "masculino";

// Actualizar el apellido
persona.apellido = "Ortiz";

// Eliminar sexo
delete persona.sexo;

console.log(persona);

let alumnos=[
    {"nombre":"ruth","edad":19, "cui":2344234233},
    {"nombre":"flor","edad":18, "cui":2344342343},
    {"nombre":"ashly","edad":19, "cui":234348933}
]
let listamenores=alumnos.filter(al=>al.edad<19)
console.log(listamenores)

//  quiero actualizar que son genero femeninos a todos.
alumnos.forEach(alumno => {
    alumno.genero = "femenino";
});
console.log(alumnos)









