let persona ={
    nombre: 'Juan',
    apellido: 'edad',
    email: 'asdasd',
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase(); //pasar la cadena a mayuculas
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();

    },
    get nombreCompleto(){
        return this.nombre +" "+ this.apellido;
    }
}
// utilizar el metodo get
console.log( persona.nombreCompleto );
//uso de get y set en idioma
console.log( persona.lang );
persona.lang = "US";
console.log( persona.lang );
persona.lang = "EN";
console.log( persona.lang );
console.log( persona.idioma );
