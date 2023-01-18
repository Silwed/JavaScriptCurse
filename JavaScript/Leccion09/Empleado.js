class Empleado extends Persona{

    static contadorEmp = 0;
    constructor(sueldo, nombre, apellido, edad){
        super( nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmp;
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
        return `${super.toString()} ${this._sueldo} ${this._idEmpleado}`;
    }

}

let emp1 = new Empleado(500, "Juana", "del Arco", 45);
console.log(emp1.toString())