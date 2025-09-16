import { header } from "./Componentes/header/headerComponent.js"; 
import { seccion1 } from "./Componentes/seccion1/seccionComponent.js"; 
import { nav } from "./Componentes/navegador/navegadorComponent.js";

// Declaración en el ámbito del módulo
let listaDeCompras = JSON.parse(localStorage.getItem("carrito")) || [];

function seccion() {
    let seccion = document.createElement('section');

    // Inicializar localStorage si está vacío
    if (!localStorage.getItem("carrito")) {
        localStorage.setItem("carrito", JSON.stringify(listaDeCompras));
    } 
    console.log(listaDeCompras);

    seccion.appendChild(header());
    seccion.appendChild(seccion1());

    return seccion;
}

document.body.appendChild(seccion());
document.body.appendChild(nav());

export { listaDeCompras };
