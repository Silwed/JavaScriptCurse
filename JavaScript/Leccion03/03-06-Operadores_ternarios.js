//Operadores Logicos
let n = 5;
let valMin = 0, valMax = 10;

//Operador AND (&&)
if( n >= valMin && n <= valMax  ){
    console.log( "esta dentro del rango" );
}
else {
    console.log( "esta fuera del rango" );
}

//Operador OR (||)
let vacaciones = false, dialibre = false;
 if( vacaciones || dialibre ){
    console.log( "puede asistir" );
 }
 else{
    console.log( "tiene dia ocupado" );
 }

 //Operador ternario

 let variable = ( 1 < 2 ) ? "verdadeor" : "falso";
 console.log( variable ); 

 let variable2 = ( 2 < 1 ) ? 1 : 0;
 console.log( variable2 ); 

 let num = 9;
 let resultado = ( 9 % 2 == 0) ? "es par" : "es impar";
 console.log( resultado );