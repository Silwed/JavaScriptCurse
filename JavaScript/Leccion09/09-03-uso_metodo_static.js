class Persona {

    static contadorPersona = 0;

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if( Persona.contadorPersona < Persona.MAX_OBJ ){
        this.idPersona = ++Persona.contadorPersona;
    }else{
        console.log("Se han terminado el maximo de objetos permitidos");
    }
   }

   get nombre(){
    return this._nombre;
   }

   set nombre(nombre){
    this._nombre = nombre;
   }

   get apellido(){
    return this._apellido;
   }

   set apellido( apellido){
    this._apellido = apellido;

   }

   nombreCompleto(){
    return this._nombre + " " + this._apellido;
   }
   toString(){
    return this.idPersona + " "+ this.nombreCompleto(); 
}

static saludar(){
    console.log("Laudos");
}

static saludar2(persona){
    console.log( "saludos "+persona._nombre);

}
}


class Empleado extends Persona{
    
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //llamar al cosntructori de la clase padre
        this._departamento = departamento; 
    }
    get departamento(){
        return this._departamento;
    }
    set departamento( departamento ){
        this._departamento = departamento;
    }
//sobre escritura
    nombreCompleto(){
        return super.nombreCompleto() +" " + this._departamento; 
    }

    
}

let persona1 = new Persona("Juan", "Perez");
console.log( persona1.toString() );

let emp1 = new Empleado("MAria","Franco","Finanzas");
console.log( emp1.toString() );

