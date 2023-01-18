let persona1 = {
    nombre : "Juan",
    apellido : "Guarnizo",
    nombreCompleto: function(titulo, tel){
        return titulo+" "+ this.nombre+ " "+ this.apellido+ " "+ tel;
    }

}

let persona2 = {
    nombre : "Carlos",
    apellido : "Morales"
}

//Uso de call para usar el metodo persona1.nombreCompleto
//con los datos de perosna2

console.log( persona1.nombreCompleto("Lic.","5746579") );

console.log( persona1.nombreCompleto.call( persona2, "Ing.","78984654" ));