// Importa la función header desde el archivo indicado
import { header } from "./Componentes/header/headerComponent.js"; 
import { seccion1 } from "./Componentes/seccion1/seccionComponent.js"; 

// Función que crea una sección con un encabezado, un título y un párrafo
function seccion() {
    // Crea un elemento HTML llamado <section>
    let seccion = document.createElement('section');

    // Inserta el encabezado (header) dentro de la sección
    seccion.appendChild(header());
    seccion.appendChild(seccion1());


    // Retorna la sección completa para insertarla en el documento
    return seccion;
}

// Agrega la sección creada al <body> del documento
document.body.appendChild(seccion());
