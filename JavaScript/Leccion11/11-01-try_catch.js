"use strict"

//try {
  //  let x = 0;
    
//} catch (error) {
    //console.log( error);    
 //}
//finally{
  //   console.log( "termina la revicion ");    
//}

//console.log( "continuando ");  


let resultado = -1;

try {
    let x = 10;
    if( isNaN(resultado)) throw "no es un numero";
    else if( resultado == "") throw "cadena vacia";
    else if( resultado >= 0 ) throw " valor positivo";
    else if( resultado < 0 ) throw " valor negativo";

} catch (error) {
    console.log( error );
    //console.log( error.name );
    //console.log( error.message );
}