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

    //uso del template string para hacer el metodo toString()
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`; 
    }

   // toString(){
     //   return this._idPersona + " "+ this.nombreCompleto()+ " "+ this._edad;
   // }

}

let persona1 = new Persona("Juan","Perez",12);
console.log( persona1.toString()); 