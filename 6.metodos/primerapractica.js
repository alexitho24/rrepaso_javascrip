// crear una lista de objetos de 5 vehiculos que tengan informacion como marca, modelo, año de fabricacion, precio,numero de placa.
//crear funciones para cada uno de estas acciones.
//actualizar el valor de una de sus caracteristicas 
//agregar un nuevo vehiculo
//eliminar un vehiculo
//poder filtar los vehiculos por año de fabricacion
//buscar un vehiculo por su numero de placa 

let vehiculos=[
    {marca:"toyota", modelo:"corolla", año:2020, precio:20000, placa:"ABC123"},
    {marca:"honda", modelo:"civic", año:2019, precio:22000, placa:"DEF456"},
    {marca:"ford", modelo:"focus", año:2018, precio:18000, placa:"GHI789"},
    {marca:"chevrolet", modelo:"malibu", año:2021, precio:25000, placa:"JKL012"},
    {marca:"nissan", modelo:"altima", año:2022, precio:27000, placa:"MNO345"}
]
function actualizarPrecio(placa, nuevoPrecio) {
    let vehiculo = vehiculos.find(v => v.placa === placa);  
    if (vehiculo) {
        vehiculo.precio = nuevoPrecio;
        console.log(`Precio del vehiculo con placa ${placa} actualizado a ${nuevoPrecio}`);
    } else {
        console.log(`Vehiculo con placa ${placa} no encontrado`);
    }           
}   
actualizarPrecio("DEF456", 23000);

function agregarVehiculo(nuevoVehiculo) {
    vehiculos.push(nuevoVehiculo);


    console.log("Nuevo vehiculo agregado:", nuevoVehiculo);
}   
agregarVehiculo({marca:"mazda", modelo:"3", año:2023, precio:28000, placa:"PQR678"});

function eliminarVehiculo(placa) {  
    let indice = vehiculos.findIndex(v => v.placa === placa);
    if (indice !== -1) {
        let vehiculoEliminado = vehiculos.splice(indice, 1);
        console.log("Vehiculo eliminado:", vehiculoEliminado[0]);
    } else {
        console.log(`Vehiculo con placa ${placa} no encontrado`);
    }
}
eliminarVehiculo("GHI789");

function filtrarPorAño(año) {   
    let vehiculosFiltrados = vehiculos.filter(v => v.año === año);
    return vehiculosFiltrados;
}
console.log("Vehiculos del año 2020:", filtrarPorAño(2020));

function buscarPorPlaca(placa) {
    let vehiculo = vehiculos.find(v => v.placa === placa);
    return vehiculo ? vehiculo : `Vehiculo con placa ${placa} no encontrado`;
}
console.log("Busqueda por placa DEF456:", buscarPorPlaca("DEF456"));























    








    



