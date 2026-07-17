class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.cantidad=0;
  }
  sumariva() {
    return this.precio * 0.19;
  }
}

const productosclass = [];

productosclass.push(new Producto(1, "Camara Nikon", 30000, 12));
productosclass.push(new Producto(2, "Teclado mecanico", 20000, 20));
productosclass.push(new Producto(3, "Mouse inalambrico", 15000, 25));
productosclass.push(new Producto(4, "Monitor 24 pulgadas", 40000, 10));
productosclass.push(new Producto(5, "Notebook", 100000, 5));
productosclass.push(new Producto(6, "Tablet", 50000, 8));

document.getElementById("h2-1").innerHTML = productosclass[0].nombre;
document.getElementById("precio-1").innerHTML =
  "Precio: $" +
  productosclass[0].precio +
  " + IVA: $" +
  productosclass[0].sumariva();
document.getElementById("stock-1").innerHTML =
  "Stock: " + productosclass[0].stock;

document.getElementById("h2-2").innerHTML = productosclass[1].nombre;
document.getElementById("precio-2").innerHTML =
  "Precio: $" +
  productosclass[1].precio +
  " + IVA: $" +
  productosclass[1].sumariva();
document.getElementById("stock-2").innerHTML =
  "Stock: " + productosclass[1].stock;

document.getElementById("h2-3").innerHTML = productosclass[2].nombre;
document.getElementById("precio-3").innerHTML =
  "Precio: $" +
  productosclass[2].precio +
  " + IVA: $" +
  productosclass[2].sumariva();
document.getElementById("stock-3").innerHTML =
  "Stock: " + productosclass[2].stock;

document.getElementById("h2-4").innerHTML = productosclass[3].nombre;
document.getElementById("precio-4").innerHTML =
  "Precio: $" +
  productosclass[3].precio +
  " + IVA: $" +
  productosclass[3].sumariva();
document.getElementById("stock-4").innerHTML =
  "Stock: " + productosclass[3].stock;

document.getElementById("h2-5").innerHTML = productosclass[4].nombre;
document.getElementById("precio-5").innerHTML =
  "Precio: $" +
  productosclass[4].precio +
  " + IVA: $" +
  productosclass[4].sumariva();
document.getElementById("stock-5").innerHTML =
  "Stock: " + productosclass[4].stock;

document.getElementById("h2-6").innerHTML = productosclass[5].nombre;
document.getElementById("precio-6").innerHTML =
  "Precio: $" +
  productosclass[5].precio +
  " + IVA: $" +
  productosclass[5].sumariva();
document.getElementById("stock-6").innerHTML =
  "Stock: " + productosclass[5].stock;

function sumar(id){

   let producto = productosclass.find(p => p.id === id);

    if(producto.stock > 0){

        producto.stock--;

        producto.cantidad++;

        actualizarProducto(producto);

    }

}
function restar(id){

    let producto = productosclass.find(p => p.id === id);

    if(producto.cantidad > 0){

        producto.stock++;

        producto.cantidad--;

        actualizarProducto(producto);

    }

}
function actualizarProducto(producto){

    document.getElementById("stock-" + producto.id).textContent =
        "Stock: " + producto.stock;

    document.getElementById("cantidad-" + producto.id).textContent =
        producto.cantidad;

}
let carrito = [];

function agregarAlCarrito(id){

    let producto = productosclass.find(p => p.id === id);

    if(producto.cantidad == 0){
        alert("Primero seleccioná una cantidad.");
        return;
    }

    let existe = carrito.find(p => p.id === id);

    if(existe){

        existe.cantidad += producto.cantidad;

    }else{

        carrito.push({

            id: producto.id,
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            precio: producto.precio

        });

    }

    producto.cantidad = 0;

    actualizarProducto(producto);

    actualizarTabla();

}
function actualizarTabla(){

    let tabla = document.getElementById("tabla-carrito");

    tabla.innerHTML = "";

    carrito.forEach(producto=>{

        tabla.innerHTML += `

        <tr>

            <td>${producto.nombre}</td>

            <td>${producto.cantidad}</td>

            <td>$${(producto.precio*1.19)*producto.cantidad}</td>

        </tr>

        `;

    });

}
localStorage.setItem("carrito", JSON.stringify(carrito));

actualizarTabla();