function Persona(nombre, apellido,email){

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+ " "+ this.apellido;
    }
}

Persona.prototype.telfono = "78946546";
let padre = new Persona("Juan", "Perez", "aoiweq@sda");
console.log( padre.telfono );
padre.telfono = "98746543";
console.log( padre.telfono );

let madre = new Persona("Maria","Perez","asdadaa");
console.log( madre.telfono );
madre.telfono = "8794613";
console.log( madre.telfono );

