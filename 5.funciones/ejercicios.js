// crear una funcion que resiba por parametros una lista y un elemeto a encontrar retornar si el elemento fue encontrado o no
function encontrarElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return true; 
        }
    }
    return false;
}
console.log(encontrarElemento([23, 45, 67, 89, 90], 67));

//
