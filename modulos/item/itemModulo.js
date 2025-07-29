export function item() {
    
    let item = document.createElement('div');
    item.className = "item"

    let tit = document.createElement('text')
    tit.className = "tit"
    tit.innerText = "The Weekdnd"
    item.appendChild(tit);

    let img = document.createElement('img');
    img.className = "item-img";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6MQd71YqnJIL4EQrTUjScMehB6nKlCOffg&s"
    item.appendChild(img);
    
    let descripcion = document.createElement('descripcion');
    descripcion.className = "descrip";
    descripcion.innerText = "The Weeknd es el nombre artístico de Abel Makkonen Tesfaye, es un cantante, compositor y productor musical canadiense nacido el 16 de febrero de 1990 en Toronto, Canadá."
    item.appendChild(descripcion);

    


    return item;
}