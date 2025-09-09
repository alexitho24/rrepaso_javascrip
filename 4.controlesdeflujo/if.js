// estructira de una condicion
//1. palabra reservada if
//2. condicion o expresion a evaluar (que debera ser siempre un tipo de dato booleano), la expresion o condicion debera estar entre parentesis ()
//3. el cuerpo que contendra el codigo a ejecutar en caso de que la condicion sea verdadera

//4. palabra reservada else 
//5. el cuerpo que contendra el codigo a ejecutar en caso de que la condicion sea falsa  
if (true) {
    let suma=24+45
    let divi=45/3
    console.log(suma,divi)
}else {
    console.log("la condicion es falsa")

};

// crear un programa que evalue si un numero es mayor al otro y si este numero es a la vez un numero par
let firstNumber=50;
let secondNumber=30;
if (firstNumber>secondNumber) {
    console.log("el numero es mayor")
    if (firstNumber % 2 === 0) {
        console.log("el numero es mayor y par")
    }else {
        console.log("el numero es mayor pero es impar")
    }
}else{
    console.log("el numero es menor ")

}
//crear un programa que me muestre el numero en texto
let number=5;
if (number === 1) {
    console.log("uno")
}else if (number === 2) {
    console.log("dos")
}else if (number === 3) {
    console.log("tres")
}else if (number === 4) {
    console.log("cuatro")
}else if (number === 5) {
    console.log("cinco")
}else {
    console.log("numero no encontrado")
}


// crear un programa que me muestre el numero en texto con switch
switch (number) {
    case 1:
        console.log("uno");
        break;
    case 2:
        console.log("dos");
        break;
    case 3:
        console.log("tres");
        break;
    case 4:
        console.log("cuatro");
        break;
    case 5:
        console.log("cinco");
        break;
    default:
        console.log("numero no encontrado");
}






