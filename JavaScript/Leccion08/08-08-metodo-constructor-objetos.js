//funcion constructor del objeto persona
function Persona(nombre, apellido,email){

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+ " "+ this.apellido;
    }
}

let padre = new Persona("Juan", "Perez", "aoiweq@sda");
console.log( padre );
console.log( padre.nombreCompleto() );
let madre = new Persona("Maria","Perez","asdadaa");
console.log( madre );
padre.nombre = "carlos";
console.log( padre );
console.log( madre.nombreCompleto() );
// trabajar sin new
let miObjeto = new Object();
let miObjeto2 = {};//la mas recomendable
//formas de declarar variables primitivas (String, numeros,booleanos)
let miNumero = new Number(12); // sintaxis formal
let miNumero2 = 12; // sitaxis recomendada (simplificada)
//fomas de declarar arrays
let miArray = new Array();
let miArray2 = [];
//forma de difini funcion
let miFuncion = new Function(); //sintaxis formal
let miFuncion2 = function(){};  // sintaxis recomendada (simplificada)

