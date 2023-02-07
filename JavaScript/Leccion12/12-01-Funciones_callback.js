function miFuncion1(){
    console.log( "funcion 1");
}

function miFuncion2(){
    console.log( "funcion 2");
}

miFuncion1();
miFuncion2();
// funciones callback

function impromir( mensaje ) {
    console.log( mensaje );
}

function suma(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

suma(5,3 ,impromir);
//llamadas asincronas  con uso setTimeout

function miFuncionCallback(){
    console.log("saludos asincronos");
}

setTimeout(miFuncionCallback, 3000);
//usando una funcion flecha
setTimeout( () => console.log( "saludos asincrono en 4 seg"),4000);

