import { obtenerProductos } from "../../control/miLocalStorage.js";

export function nav() {
    let nav = document.createElement("div");
    addEventListener
    nav.className = "navegador";
  
    let icon1 = document.createElement("div");
    icon1.className = "nav-btn";
    icon1.innerHTML = "🏠";
  
    let icon2 = document.createElement("div");
    icon2.className = "nav-btn";
    icon2.innerHTML = "📦";
  
    let icon3 = document.createElement("div");
    icon3.className = "nav-btn";
    icon3.innerHTML = "❓";
  
    let icon4 = document.createElement('a');
    icon4.href = "pages/carrito/carrito.html"
    icon4.className = "nav-item nav-carrito";
    icon4.innerHTML = "🛒";

    let divItem = document.createElement('div');
    divItem.className = "div-item";

    //Cuantos elementos hay en el carrito
    let totalcarrito = obtenerProductos();
    divItem.textContent = totalcarrito.lenght;

    


    if (obtenerProductos()!="") {
      icon4.appendChild(divItem);
    }

    let divUsuario = document.createElement('div');
    divUsuario.className = "nav-item";
  
    nav.appendChild(icon1);
    nav.appendChild(icon2);
    nav.appendChild(icon3);
    nav.appendChild(icon4);
  
    return nav;
  }
  