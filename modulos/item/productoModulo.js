import { guardarProducto, obtenerProductos } from "../../control/miLocalStorage.js";
import { listaDeCompras } from "../../main.js";

export function item(titulo, urlImg, desc,price) {
    let item = document.createElement('div');
    item.className = "item";

    let tit = document.createElement('p');
    tit.className = "tit";
    tit.innerText = titulo;
    item.appendChild(tit);

    let img = document.createElement('img');
    img.className = "item-img";
    img.src = urlImg;
    item.appendChild(img);

    let descripcion = document.createElement('p');
    descripcion.className = "descrip";
    descripcion.innerText = desc;
    item.appendChild(descripcion);

    let precio = document.createElement('p');
    precio.className = "price";
    precio.innerText = `$${price}`;
    item.appendChild(precio);
    

    item.addEventListener('click', () => {
        let carritoLocalStorage = obtenerProductos();
        console.log("carrito: ", carritoLocalStorage)

        carritoLocalStorage.push({precio:price,nombre:titulo, img});
        guardarProducto(carritoLocalStorage);
        console.log("Producto en LocalStorang");
        location.reload();
    });
    return item;
}
