// Creación del contenedor principal de la sección:
const sectionWrapper = document.createElement('div');
sectionWrapper.classList.add('row', 'featurette');

// Contenedor y contenido para la parte de texto:
const textWrapper = document.createElement('div');
textWrapper.classList.add('col-md-7');

const title = document.createElement('h2');
title.classList.add('fw-normal', 'lh-1');
title.textContent = " Pedazo Templo ";

const titleSpan = document.createElement('span');
titleSpan.classList.add('text-muted');
titleSpan.textContent = " Hay que ir a verlo ";
title.appendChild(titleSpan);

const text = document.createElement('p');
text.classList.add('lead');
text.textContent = "Este es el Templo de Angkor Wat.";

textWrapper.appendChild(title);
textWrapper.appendChild(text);

// Contenedor y contenido para la imagen:
const imgWrapper = document.createElement('div');
imgWrapper.classList.add('col-md-5');

const image = document.createElement('img');
image.classList.add('img-thumbnail');
image.src = "img/temple.jpg";
image.alt = "Templo de Angkor Wat";

imgWrapper.appendChild(image);

// Añadir los contenedores de texto e imagen al contenedor principal:
sectionWrapper.appendChild(textWrapper);
sectionWrapper.appendChild(imgWrapper);

// Inyectar el contenedor principal en el div con id "customDOM":
const customDOMDiv = document.querySelector('#customDOM');
customDOMDiv.appendChild(sectionWrapper);
