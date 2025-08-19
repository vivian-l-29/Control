export function item(titulo, urlImg, desc) {
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

    item.addEventListener('click', () => {
        item.classList.add("verde");
        let rHeader = document.querySelector('.header');
        rHeader.classList.add("ocultar");
    });

    return item;
}
