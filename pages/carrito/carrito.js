import { header } from "../../Componentes/header/headerComponent.js"
import { listaCarrito } from "../../Componentes/seccionCarrito/listaCarrito.js";

let seccionCarrito = document.createElement('section');

//carga header 
seccionCarrito.appendChild(header());

seccionCarrito.appendChild(listaCarrito());

document.body.appendChild(seccionCarrito);