let persona1 = {
    nombre : "Juan",
    apellido : "Guarnizo",
    nombreCompleto: function(titulo){
        return  titulo+" "+ this.nombre+ " "+ this.apellido;
    }

}

let persona2 = {
    nombre : "Carlos",
    apellido : "Morales"
}

//Uso de call para usar el metodo persona1.nombreCompleto
//con los datos de perosna2

console.log( persona1.nombreCompleto("Lic.") );

let arreblo = ["Ing."];
console.log( persona1.nombreCompleto.apply( persona2, arreblo ));