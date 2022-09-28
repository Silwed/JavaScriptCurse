let numero = "10";

let edad = Number(numero);

if(isNaN(edad)){    //este if es para verificar si es un numero o que no sea NaN
    console.log("la variable edad no es un numero");
}
else{

if( edad >= 18){
    console.log("es mayor de edad");
}
else{
    console.log("es menor de edad");
}

let ternario = (edad >= 18) ? "es mayor" : "Es menor";
console.log(ternario);
}
//Ejemplo de Variable NaN (Not a Number)
let ejem = "a10";
let numero2 = Number(ejem);
console.log(numero2)