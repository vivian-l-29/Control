// Importa la función header desde el archivo indicado
import { header } from "./Componentes/header/headerComponent.js"; 

// Función que crea una sección con un encabezado, un título y un párrafo
function seccion() {
    // Crea un elemento HTML llamado <section>
    let seccion = document.createElement('section');

    // Inserta el encabezado (header) dentro de la sección
    seccion.appendChild(header());

    // Crea un título <h1> con la clase "titulo" y el texto "Hola mundo"
    let h1 = document.createElement('h1');
    h1.className = "titulo";
    h1.innerText = "Hola mundo";
    seccion.appendChild(h1);

    // Crea un párrafo <p> con texto introductorio
    let p = document.createElement('p');
    p.innerText = "Introducción a JavaScript";
    seccion.appendChild(p);

    // Mensaje en la consola (solo para verificar que la función se ejecutó)
    console.log("Hola Mundo");

    // Retorna la sección completa para insertarla en el documento
    return seccion;
}

// Agrega la sección creada al <body> del documento
document.body.appendChild(seccion());
