function header() {
    const header = document.createElement('header');
    header.className = 'header';
  
    const leftSection = document.createElement('div');
    leftSection.className = 'left-section';
  
    const img = document.createElement('img');
    img.className = 'logo-img';
    img.src = 'https://styles.redditmedia.com/t5_6i3dhn/styles/communityIcon_ot5j3jxoci491.png'; 
    img.alt = 'Logo';
  
    const title = document.createElement('h1');
    title.className = 'site-title';
    title.textContent = 'Byviusk';
  
    leftSection.appendChild(img);
    leftSection.appendChild(title);
    header.appendChild(leftSection);
  
    return header;
  }
  
  export { header };
  