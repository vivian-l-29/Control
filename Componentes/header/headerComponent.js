function header() {
    let header = document.createElement('header');
    header.className = 'header';

    let titulo = document.createElement('h1');
    titulo.className = 'titulo';
    titulo.innerText = 'ByVivian';

    let logo = document.createElement('img');
    logo.className = 'logo-img';
    logo.src = 'https://styles.redditmedia.com/t5_6i3dhn/styles/communityIcon_ot5j3jxoci491.png';
    logo.alt = 'Logo';

    header.appendChild(titulo);
    header.appendChild(logo);

    return header;
}

export { header }
