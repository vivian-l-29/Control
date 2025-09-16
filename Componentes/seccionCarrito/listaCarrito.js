import { obtenerProductos } from "../../control/miLocalStorage.js";
import { productos } from "../../database/productos.js";

export function listaCarrito() {
    let seccion = document.createElement('section');
    seccion.className = "carrito";

    let recuperarProductos = obtenerProductos();

    recuperarProductos.forEach((element, index) => {
        // div general para el producto
        let divProducto = document.createElement('div');
        divProducto.className = "producto";

        // div para la imagen
        let divImagen = document.createElement('div');
        divImagen.className = "producto-imagen";
        let img = document.createElement('img');
        img.src = element.image || "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png";
        img.alt = element.title;
        divImagen.appendChild(img);

        let nombre = document.createElement('p');
        nombre.className = "producto-nombre";
        nombre.textContent = element.nombre;

        let divPrecioEliminar = document.createElement('div');
        divPrecioEliminar.style.display = "flex";
        divPrecioEliminar.style.alignItems = "center";
        divPrecioEliminar.style.gap = "8px";

        let precio = document.createElement('p');
        precio.className = "producto-precio";
        precio.textContent = `Q${element.precio}`;

        // span para eliminar
        let eliminar = document.createElement('span');
        eliminar.className = "producto-eliminar";
        eliminar.textContent = "❌";
        eliminar.style.cursor = "pointer";

        eliminar.addEventListener("click", () => {
            let producto = obtenerProductos();
            productos.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(producto));
            divProducto.remove(); 
        });

        divPrecioEliminar.appendChild(precio);
        divPrecioEliminar.appendChild(eliminar);

        divProducto.appendChild(divImagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(divPrecioEliminar); 

        // añadir al section
        seccion.appendChild(divProducto);
    });

    return seccion;
}
