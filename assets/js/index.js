class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    sumariva(){
        return this.precio * 0.19;
    }
}

const productosclass = [];

productosclass.push(new Producto(1, "Camara web", 30000, 12));
console.log(productosclass);