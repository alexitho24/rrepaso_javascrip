# TALLER DE REPASO DE JAVASCRIP
  > [!WARNING]
  obserbacion: Quokka se debe ejecutar en cada archivo
  >[!TIP]
  quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder la consola en vivo
## 1. tipos de datos
en java scrip se clasifican en dos grandes grupos 
[!TIP] javascript tiene funciones predeterminadas por ejemplo para mostrar un mensaje por consola `console.log()`, para poder vereficar que tipo de dato estamos manejando en java scrip tambien tenemos una funcion por defecto llamada typeof()
### primitivos

son datos que siempre exisitiran 
1. numericos
    - enteros positivos
    - enteros negativos 
    - decimal positivo
    - decimal neagativo
    - NaN (not a number)
2. texto
    - caracteres                 -   10001001 - 97 - A
    - simbolos especiales    - 01001001 010100101 -256 - @
    - string 
3. booleanos 
    - true   - 1
    - false  - 0
### estructurados
1. Array (lista)
   - array de tipo numerico
   - array de tipo string
   - arrar de tipo mixto
 - como esta estructuradi una array en javasript
2. objetos (diccionariio)
   son simoilares a ñas listas con la unica diferencia que en vez de tener valor e indice sus elemtos trabajan con clave.valor
- como esta estructurado un objeto en javascript
  ![alt text] 
## 2. variables (enlaces, binding)
es la tecnica que se usa para poder apuntar a una direcccion en memoria y al valor o dato relacionado o que se encuentre almacenado en ese momento
tenemos dos pasos para crear una variable/constante
1. primero declarar la variable/constante
2. segun inicializar la variable/constante
**OBSERVACION** para crear una variable primero tenemos que crear un enlace luego darle el nombre de la variable/constante:para las variables tenemos las palabras reservadas ` keyword `-`let`-`var` pra las constantes tenemos la palabra resrvada `keyword`- `const`
**RECOMENDACIONES** 
`Led` usar cuado el valor tendra que variar 
`const` usar cuando el valor sera el mismo siempre 
`var` evitar usar
`let`,`var` ambos nos permiten crear variables su unica diferencia es el alcanse ambito o `scope`
(averiguar)
## 3. operadores
su clasificacion general se divide en 3 
1. operadores promarios 
 son aquellos que estan ubicados a la izquierda del valor y que retornan en nuevo valor.
2. operadores binarios
   son aquellos que estan en medio de dos valores y que retornan un unico valor 
   - operadores de comparacion
   - operadores aritmeticos
   - operadores logicos
3. operadores terciarios
   son aquellos que evaluan tres valores y que retornan un solo valor 
   - operador condicional
## 4. controles de flujo
Nuestros programas en javascrip contienen mas de una sentencia y las sentencias son ejecutadas una a una como si fuera una historia, de arriba hacia abajo como un camino recto.

### 1. control de decicione (if-else)
javascrip nos permite crear caminos alternativos en nuestros programas dependiendo de una decision a esto se le conoce como caminos o ejecucion condicional. que ejecutara una sentencia u otros teniendo en cuenta la condicion asi podemos crear multiples caminos u opciones en nuestro programas
si tenemos una condicion verdadera se ejecutara una sentencia totalmente distinta.
**observacion** la ejecucion condicional rompe el flujo normal de un programa 
### 2. bucles (for)
- tarea con susu ejemplos 
  
### 3. bucles (while)
- tarea con sus ejemplos
  
  while (condición) {
  // código a ejecutar mientras la condición sea verdadera
}
## 5. funciones 
las funciones en javascripson bloques de codigo que se ejecuta de manera independiente, podemos decir tambien que son mini programs que toman datos como entrada y retornan otros datos como salida. 
las funciones son fundamentales para el correcto ordenamiento de nuestro codigo ademas que nos permiten separa de una manera mas ordenada nuestra logica y evitar repetir el codigo muchas veces.
existen 3 tipos de funciones 
### tipos de funciones 
#### 1. funciones por declaracion
este tipo de funciones es la mas conocida y la mas usada y su estructura es la siguiente:
![alt text](image.png)
#### 2 funciones por exprecion 
Función para calcular el cuadrado de un número
`js
const cuadrado = function(num) {
  return num * num;
};
`

 Función para calcular el cubo de un número
 `js
const cubo = function(num) {
  return num * num * num;
};
`
 Uso de las funciones
 `js
let numero = 3;
console.log("El cuadrado de", numero, "es:", cuadrado(numero)); // 9
console.log("El cubo de", numero, "es:", cubo(numero));       // 27
`
#### 3 funcion flecha (arrow punction)
1. Función flecha para sumar dos números
`js
const sumar = (a, b) => a + b;
`
 2. Función flecha para verificar si un número es par
 `js
const esPar = num => num % 2 === 0;
`
3. Función flecha para convertir una cadena a mayúsculas
 `js
const convertirMayusculas = texto => texto.toUpperCase();
`
Uso de las funciones
`js
console.log(sumar(5, 7));                  // 12
console.log(esPar(10));                     // true
console.log(convertirMayusculas("hola"));  // HOLA

## 6. metodos para trabajar con datos estructurados 
los metodos son funciones que dan funcionalidades extras a los tipos de datros en los cuales se aplican. es un metodo es antesecido por un tipo de dato y un punto.
**ejemplo**
el ejemplo mas claro de un metodo es el ´length´ - estrte metodo nos permite o nos retorno la cantidad de caracteres de un string o la cantidad de elementos de una lista.
```js
"hola".length // 4 
[2,5,4,6,7]. length // 5  
```
> [!TIP] los metodos en su mayoria solo se aplican a tipo de datos estring, listas y objetos, en su gran parte son aplicados para la lista.
### 6.1 metodos para estring - cadenas de texto 
#### length
devuelve la longitud de una cadena 
```js
let mensaje="hola como estas"
console.long(mensaje.lenhth)
//retorna -> 15
```
#### toLowerCase
devuelve una cadena en minusculas
```js
let mensaje="HOLA"
console.long(texto.toLowerCase())
//retorna -> hola
```
#### toUpperCase
devuelve una cadena en mayusculas
```js
let mensaje="hola"
console.long(texto.toUpperCase())
//retorna -> HOLA
```
#### concat
combina el texto de dos o mas cadenas 
```js
let nombre="kcapa"
let saludo="hola"
//let concatenado=nombre+saludo
console.long(saludo.concat(nombre))

let cad1="oh"
let cad2="me"
let cad3="vengo"
console.long(cad1.concat(cad2,cad3))
// retorna -> ho me vengo
```
### 6.2 metodos para listas - arrays 
  ### 1.acceder
  ### 2.modifica
  ### 3.crear
  ### 4.insertar
  ### 5.eliminar
  ### 6.ordenar
### 6.3 metodos para objetos 
## 7. DOM

