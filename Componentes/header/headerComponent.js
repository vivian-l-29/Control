// Función que crea dinámicamente un encabezado <header> con un logo y un título
function header() {
    // Crea el elemento <header> y le asigna una clase para estilos
    let header = document.createElement('header');
    header.className = 'header';

    // Crea un contenedor interno para el logo y el título (alineados juntos)
    let leftSection = document.createElement('div');
    leftSection.className = 'left-section';

    // Crea una imagen que servirá como logo
    let img = document.createElement('img');
    img.className = 'logo-img'; // Clase para estilos del logo
    img.src = 'https://styles.redditmedia.com/t5_6i3dhn/styles/communityIcon_ot5j3jxoci491.png'; // Ruta de la imagen del logo
    img.alt = 'Logo'; // Texto alternativo por accesibilidad

    // Crea el título del sitio
    let title = document.createElement('h1');
    title.className = 'site-title'; // Clase para estilos del título
    title.textContent = 'Byviusk'; // Texto que se mostrará como título

    // Agrega la imagen y el título dentro del contenedor izquierdo
    leftSection.appendChild(img);
    leftSection.appendChild(title);

    // Agrega el contenedor con el logo y el título al header principal
    header.appendChild(leftSection);

    // Retorna el encabezado completo para insertarlo en el DOM
    return header;
}

// Exporta la función para poder usarla en otros archivos (como main.js)
export { header };
