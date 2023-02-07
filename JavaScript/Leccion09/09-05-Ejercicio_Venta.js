class Producto{
    static contadorProducto = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio; 
    }

    get idProducto(){
        return this._idProducto;
    }

    set nombre( nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set precio( precio ){
        this._precio = precio;
    }

    get precio(){
        return this._precio;
    }

    toString(){
        return `idPrducto: ${this._idProducto}, 
                Nombre: ${this._nombre}, 
                Precio: ${this._precio}`;
    }

}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;

    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto( producto ){
        if(this._productos.length < Orden.MAX_PRODUCTOS ){
                this._productos.push( producto );
                //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log( "No se puede agregar producto");
        }

    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos ){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";
        for (let producto of this._productos ){
            productosOrden += "\n{" + producto.toString() + " } "; 
        }

        console.log( `Orden: ${this._idOrden}
                     Total: ${this.calcularTotal()}, 
                     Produtos: ${productosOrden}` );
    }
}

let produc1 = new Producto("Teclado", 40);
let product2 = new Producto("Raton", 12);
console.log( produc1.toString() );

let orden1 = new Orden();
orden1.agregarProducto( produc1 );
orden1.agregarProducto( product2 );
orden1.mostrarOrden();

let orden2 = new Orden();
let produc3 = new Producto("Teclado", 53);
let product4 = new Producto("Raton", 24);
orden2.agregarProducto( produc1 );
orden2.agregarProducto( product2 );
orden2.agregarProducto( produc3 );
orden2.agregarProducto( product4 );
orden2.mostrarOrden();
orden2.agregarProducto( produc1 );
