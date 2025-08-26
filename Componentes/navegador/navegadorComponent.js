export function nav() {
    let nav = document.createElement("div");
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
  
    let icon4 = document.createElement("div");
    icon4.className = "nav-btn";
    icon4.innerHTML = "🛒";
  
    nav.appendChild(icon1);
    nav.appendChild(icon2);
    nav.appendChild(icon3);
    nav.appendChild(icon4);
  
    return nav;
  }
  