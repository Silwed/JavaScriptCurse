let persona ={
    nombre: 'Juan',
    apellido: 'edad',
    email: 'asdasd',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    }
}

//forma comun de acceder a los atributos de un objeto es "persona."+ atributo
console.log(persona.nombreCompleto());   

//otra forma persona["atributo"] (con esta forma no se puede mostrar las funciones solo atributos primitivos)
console.log(persona["nombre"]);

// utilizando un for in
for( personaPropiedad in persona){

    console.log(personaPropiedad);
    console.log(persona[personaPropiedad])
}