// Función que crea el encabezado con el título a la izquierda y logo a la derecha
function header() {
    // Crea el elemento <header> y le asigna una clase para aplicar estilos
    let header = document.createElement('header');
    header.className = 'header';

    // Crea el título del sitio, que irá al lado izquierdo
    let titulo = document.createElement('h1');
    titulo.className = 'titulo';
    titulo.innerText = 'ByVivian';

    // Crea el logo que irá en la esquina derecha
    let logo = document.createElement('img');
    logo.className = 'logo-img';
    logo.src = 'https://styles.redditmedia.com/t5_6i3dhn/styles/communityIcon_ot5j3jxoci491.png';
    logo.alt = 'Logo';

    // Agrega primero el título (izquierda) y luego el logo (derecha)
    header.appendChild(titulo);
    header.appendChild(logo);

    return header;
}

export { header }
