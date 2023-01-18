class Persona{
    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    get idPersona(){
        return this._idPersona;
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido( apellido ){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }

    set edad( edad ){
        this._edad = edad;
    }

    get edad(){
        return this._edad; 
    }

    nombreCompleto(){
        return this._nombre + " "+ this._apellido;
    }

    toString(){
        return this._idPersona + " "+ this.nombreCompleto()+ " "+ this._edad;
    }

}

class Empleado extends Persona{

    constructor(sueldo, nombre, apellido, edad){
        super( nombre, apellido, edad);
        this._idEmpleado = Persona.contadorPersona;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }

    toString(){
        return super.toString() + " " + this._sueldo;
    }

}

class Cliente extends Persona{


    constructor( nombre, apellido, edad ){
        super( nombre, apellido, edad);

        this._idCliente = Persona.contadorPersona;
        this._fecha = new Date();

    }

    get idCliente(){
        return this._idCliente;
    }

    get fecha(){
        return this._fecha;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    toString(){
        return super.toString() + " " + this._fecha;
    }

    
}

let persona1 = new Persona("Juan","Perez",12);
console.log( persona1.toString()); 

let emp1 = new Empleado(500, "Juana", "del Arco", 45);
console.log(emp1.toString())

let clint1 = new Cliente("Marcos", "Antonio", 64);
console.log(clint1.toString());