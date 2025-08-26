import { header } from "./Componentes/header/headerComponent.js"; 
import { seccion1 } from "./Componentes/seccion1/seccionComponent.js"; 
import {nav} from "./Componentes/navegador/navegadorComponent.js"

function seccion() {
    let seccion = document.createElement('section');

    seccion.appendChild(header());
    seccion.appendChild(seccion1());

    return seccion;
}

document.body.appendChild(seccion());
document.body.appendChild(nav());
