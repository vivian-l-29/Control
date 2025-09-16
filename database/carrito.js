import { header } from "../Componentes/header/headerComponent.js";
import { listaCarrito } from "../Componentes/seccionCarrito/listaCarrito.js";
import { nav } from "../Componentes/navegador/navegadorComponent.js";

let seccionCarrito = document.createElement('section');
seccionCarrito.appendChild(header());

seccionCarrito.appendChild(listaCarrito());

