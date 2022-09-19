/*
    Ejemplo de tipo de Datos en JavaScript
*/

//Ejemplo de tipo de dato String
var cadena = "Prueba string";
console.log(cadena);

//Ejemplo que la varibles se puede cambiar de atributo de foma dinamica
cadena = 10;
console.log(cadena);
//para saber que tipo de dato es la variable
console.log(typeof cadena);


//Ejemplo de tipo de dato Numerico
var numero = 1000;
console.log(numero);
//los float se manejan con el mismo tipo
var numero = 10.55;
console.log(numero);

//Ejemplo de tipo de dato Objeto
var objeto = {
    nombre :   "Juan",
    apellido : "Moz",
    telefono :  "456513218"

}

console.log(objeto);

// Ejemplo tipo boolean (true/false) simpre estas variables se usan como banderas
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Las funciones pueden ser utilizadas como tipo de dato
function miFuncion() {} 
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato simbolo (es tema avanzado)
var simbolo = Symbol();
console.log(simbolo);
var simbolo2 = Symbol("mi simbolo");
console.log(simbolo2);
console.log(typeof simbolo);
console.log(typeof simbolo2);

//Tipo de clase(las clases son funciones)
class persona{

constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
} 

}

console.log(persona);
console.log(typeof  persona);

//Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);

var x = undefined ;
console.log(x);
console.log(typeof x);

//Tipo null;
var n = null;
console.log(n);
console.log(typeof n);

//Declaracion de arreglo y su tipo
var autos = ["BMW","KIA","Nissan","Toyota"];
console.log(autos);
console.log(typeof autos);

//Cadena vacia
var cade = "";
console.log(cade);
console.log(typeof cade);
