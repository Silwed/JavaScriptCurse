let persona ={
    nombre: 'Juan',
    apellido: 'edad',
    email: 'asdasd',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido;
    }
}

console.log(persona.nombreCompleto())   

//this apunto a los objetos que estan dentro de la misma instancia
