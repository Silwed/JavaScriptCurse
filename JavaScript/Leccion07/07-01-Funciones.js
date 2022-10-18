//Declaracion de funcion
function miFuncion(a ,b){
console.log("Resultado suma: "+ (a + b));

}

// se manda ha llamar

miFuncion(10,14);

//funcion con return

function sumaNumero( a, b ){

    return (a + b);    
}

console.log("resultado: "+ sumaNumero(10,14));
let resuldo = sumaNumero(10,24);
console.log("resultado: "+ resuldo);

//funcion de tipo exprecion o anonimas

let sumar = function (a, b) { return a + b};

let x = sumar(10,24);
console.log("resultado: " + x);
console.log("resultado: "+ sumar(10,24));
