let persona ={
    nombre: 'Juan',
    apellido: 'edad',
    email: 'asdasd',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    }
}

//agregando atributo  telefono
persona.telefono = "79846546";
console.log(persona);

//modificar un valor de un atributo

persona.telefono = "865498796";
console.log(persona);

//borrar un atributo del objeto
delete persona.telefono;

console.log(persona);
