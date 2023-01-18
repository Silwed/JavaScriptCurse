class Persona {

    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
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
    return this.nombreCompleto(); 
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
//no es posible usar desde un objeto el metodo estatico
//console.log( persona1.saludar() );
// pero si se puede desde la clase, el resultado se mira en consola
 Persona.saludar() ;
 Persona.saludar2(persona1);

let emp1 = new Empleado("MAria","Franco","Finanzas");
console.log( emp1 );
emp1.nombre = "Maria Jose";
console.log( emp1.nombre );
console.log( emp1.nombreCompleto());
console.log( emp1.toString() );

//metodo de llamada a una variable estatica
console.log( persona1.contadorObjetosPersona);
//los estaticos solo estan relacionados con la clase y no objetos
console.log( Persona.contadorObjetosPersona);
console.log( Empleado.contadorObjetosPersona);
