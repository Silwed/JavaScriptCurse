//forma antigua de declarar areglos
let autos = new Array('BMW','KIA','Toyota');
console.log(autos); 

//forma actual de trabajar arreglos
const autos2 = ['BMW','KIA','Toyota'];
console.log( autos2 );

//forma de acceder a los elementos de un array

// de forma individual
console.log( autos2[0] );
console.log( autos2[3] );

//recorriendo el areglo 
for (let index = 0; index < autos2.length; index++) {
     console.log(index + ": "+ autos2[index] );
    
}

// modificar un elemento del arreglo
autos2[1] = "KiaMotors";
console.log( autos2);

//agregar un nuevo elemento
autos2.push("Audi");
console.log( autos2 );

//nuevas formas pero son de tener cuidado

//primera forma utilizando .length
autos2[autos2.length]  = "Nissan";
console.log( autos2);

//segund forma utilizando un index mayor (puede dejar index vacios)
autos2[7] = "purshe";
console.log( autos2 );

//identificar un arreglo
console.log( Array.isArray(autos2) );
console.log( autos2 instanceof Array);
