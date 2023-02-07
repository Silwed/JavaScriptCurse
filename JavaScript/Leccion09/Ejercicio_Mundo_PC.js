class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;

    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada( tipoEntrada ){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca( marca ){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRaton = 0;

    constructor(tipoEntrada , marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRaton;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}, 
                TipoEntrada: ${this._tipoEntrada},
                Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `ID-Teclado: ${this._idTeclado}, 
                TipoEntrada: ${this._tipoEntrada}, 
                Marca: ${this._marca}`;
    }
}

class Monitor{

    static contadorMonitor = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    } 

    set marca( marca ){
        this._marca = marca;
    }

    get marca(){
        return this._marca;
    }

    set tamaño( tamaño ){
        this._tamaño = tamaño;
    }

    get tamaño(){
        return this._tamaño;
    }

    toString(){
        return `ID-Monitor: ${this._idMonitor},
                Marca: ${this._marca}, 
                Tamaño: ${this._tamaño}`;
    }

}

class Computadora{

    static contadorComputadora = 0;

    constructor( nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
    return `Computadora: ${this._idComputadora},
            Nombre: ${this._nombre}, \n 
            Monitor: ${this._monitor}, \n
            Raton: ${this._raton},\n
            Teclado: ${this._teclado}`;
    }
}

class Orden{

    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(  computadora ){
        this._computadoras.push( computadora);
    }

    mostrarOrden(){
        let computadorasOrden = "";
        for( let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`;
        }
        console.log( `Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}


let raton1 = new Raton("USB", "HP");
console.log( raton1.toString());

let teclado1 = new Teclado("USB", "HP");
console.log( teclado1.toString());

let monitor1 = new Monitor("vizta", "17");
console.log( monitor1.toString());

let compu1 = new Computadora("HP", monitor1, raton1, teclado1);
console.log( compu1.toString() );

let compu2 = new Computadora("Lenovo", monitor1, raton1, teclado1);
console.log( compu2.toString() );

let orden1 = new Orden();
orden1.agregarComputadora(compu1);
orden1.agregarComputadora(compu2);
orden1.agregarComputadora(compu1);
orden1.mostrarOrden();
