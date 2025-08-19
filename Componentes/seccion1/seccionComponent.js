import { item } from "../../modulos/item/itemModulo.js";
import { productos } from "../../database/productos.js";

export function seccion1() {
    
let seccion = document.createElement('section-1');
seccion.className = "seccion-1"

productos.forEach(element => {
    seccion.appendChild(item(element.title,element.image,element.description));
});        

    return seccion;
}