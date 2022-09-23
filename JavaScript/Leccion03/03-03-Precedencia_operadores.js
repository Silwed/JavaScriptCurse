//Ejemplo de precedencia de operadores 
let a = 3, b = 2, c = 1, d= 4;

z = a * b + c / d;
console.log( z );
//primero realiza a*b despues el c/d y suma los resultados

z = c + a * b / d;
console.log( z );
//primero realiza el a*b el resultado lo divide /d y luego lo suma a c

z = ( c + a ) * b / c;
console.log( z );
//primero realiza la operacion que esta entre parentesis luego la multiplicacion y la divicion

