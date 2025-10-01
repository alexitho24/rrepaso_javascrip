// crear una lista de objetos de 5 vehiculos que tengan informacion como marca, modelo, año de fabricacion, precio,numero de placa.
//crear funciones para cada uno de estas acciones.
//actualizar el valor de una de sus caracteristicas 
//agregar un nuevo vehiculo
//eliminar un vehiculo
//poder filtar los vehiculos por año de fabricacion
//buscar un vehiculo por su numero de placa

let vehiculos=[
    {marca:"Toyota", modelo:"Corolla", anio:2020, precio:20000, placa:"ABC123"},
    {marca:"Honda", modelo:"Civic", anio:2019, precio:22000, placa:"DEF456"},   
    {marca:"Ford", modelo:"Focus", anio:2018, precio:18000, placa:"GHI789"},
    {marca:"Chevrolet", modelo:"Malibu", anio:2021, precio:25000, placa:"JKL012"},
    {marca:"Nissan", modelo:"Sentra", anio:2017, precio:17000, placa:"MNO345"}
]
//funcion para actualizar el precio de un vehiculo
function actualizarPrecio(placa, nuevoPrecio) {
    let vehiculo = vehiculos.find(v => v.placa === placa);  

    if (vehiculo) {
        vehiculo.precio = nuevoPrecio;
        console.log(`El precio del vehiculo con placa ${placa} ha sido actualizado a ${nuevoPrecio}`);
    } else {
        console.log(`Vehiculo con placa ${placa} no encontrado.`);
    }                                                                                                    
}
actualizarPrecio("DEF456", 23000)       


//funcion para agregar un nuevo vehiculo
function agregarVehiculo(nuevoVehiculo) {
    vehiculos.push(nuevoVehiculo);
    console.log("Nuevo vehiculo agregado:", nuevoVehiculo);
}
agregarVehiculo({marca:"Mazda", modelo:"3", anio:2022, precio:27000, placa:"PQR678"})
console.log(vehiculos)

//funcion para eliminar un vehiculo
function eliminarVehiculo(placa) {
    let indice = vehiculos.findIndex(v => v.placa === placa);
    if (indice !== -1) {
        let vehiculoEliminado = vehiculos.splice(indice, 1);
        console.log("Vehiculo eliminado:", vehiculoEliminado[0]);
    } else {
        console.log(`Vehiculo con placa ${placa} no encontrado.`);
    }
}
eliminarVehiculo("GHI789")
console.log(vehiculos)

//funcion para filtrar vehiculos por año de fabricacion
function filtrarPorAnio(anio) {
    let vehiculosFiltrados = vehiculos.filter(v => v.anio === anio);
    console.log(`Vehiculos fabricados en el año ${anio}:`, vehiculosFiltrados);
}
filtrarPorAnio(2020)
//funcion para buscar un vehiculo por su numero de placa
function buscarPorPlaca(placa) {
    let vehiculo = vehiculos.find(v => v.placa === placa);
    if (vehiculo) {
        console.log("Vehiculo encontrado:", vehiculo);
    } else {
        console.log(`Vehiculo con placa ${placa} no encontrado.`);
    }      
}
buscarPorPlaca("JKL012")    
buscarPorPlaca("XYZ999")

    








    



