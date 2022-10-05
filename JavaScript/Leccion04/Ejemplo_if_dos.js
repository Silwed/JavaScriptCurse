/* Ejercicio de horas
    6 a 11 --- Buenos dias
    12 a 18 --- Buenas tardes
    19 a 24 ---- Buenas noches
    0 a 6   ----- Esta durmiendo
    */

    let hora = 6;

    if ( hora >= 6 && hora <= 11) {
        console.log( "Buenos dias");
    }   
     else if (hora >= 12 && hora <= 18) {
        console.log( "Buenas tardes");   
     }
     else if (hora >= 19 && hora <= 24) {
        console.log("Buenas noches");
     }
     else if (hora >= 0 && hora < 6) {
        console.log("esta durmiendo");
     }
     else{
        console.log("no coincide la hora");
     }
        
    