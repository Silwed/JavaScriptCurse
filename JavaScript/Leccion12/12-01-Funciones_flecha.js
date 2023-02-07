// let miFuncionFlecha = () => {
//     console.log("saludos desde la funcion" );
// } 

//const miFuncionFlecha = () => console.log( "saludos desde mi funcion flecha");


//miFuncionFlecha();

// const saludar = () => {
//     return "Saludos desde funcion flecha";
// }

const saludar = () => "Saludos desde funcion flecha";

const regresarObjeto = () => ({ nombre: "Juan", apellido: "Lara"});

//const funcionConParametros = (mensaje) => console.log( mensaje );
const funcionConParametros = mensaje => console.log( mensaje );

//const funcionConParametros2 = (op1,op2) => op1 + op2;
const funcionConParametros2 = (op1,op2) =>{
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
console.log( funcionConParametros2(1,2));
console.log( regresarObjeto() );
console.log( saludar());
funcionConParametros("saludos a todos");