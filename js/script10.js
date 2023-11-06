
const contenedor = document.createElement("div");
contenedor.classList = "row featurette";

const contenedorTexto = document.createElement("div");
contenedorTexto.classList = "col-md-7";

const contenedorTextoH2 = document.createElement("h2");
contenedorTextoH2.classList = "fw-normal lh-1";
contenedorTextoH2.textContent = "Lorem ipsum dolor sit amet.";

const contenedorTextoH2Span = document.createElement("span");
contenedorTextoH2Span.classList = "text-muted";
contenedorTextoH2Span.textContent = "Loren, ipsum dolor.";

const contenedorTextoP = document.createElement("p");
contenedorTextoP.classList = "lead";
contenedorTextoP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?";

const contenedorImagen = document.createElement("div");
contenedorImagen.classList = "col-md-5";

const imagen = document.createElement ("img");
imagen.classList = "img-thumbnail";
imagen.src = "img/countryside.jpg";


//anidando los elementos//


contenedor.appendChild(contenedorTexto);

contenedorTexto.appendChild(contenedorTextoH2);
contenedorTextoH2.appendChild(contenedorTextoH2Span);

contenedorTexto.appendChild(contenedorTextoP);

//al contenedor principal se le añade el contenedor de imagen//

contenedor.appendChild(contenedorImagen);
contenedorImagen.appendChild(imagen);

//agregando al Documento//

const insertarEnDocumento = document.querySelector(contenedor);

insertarEnDocumento.appendChild(contenedor);

insertarEnDocumento.insertBefore(contenedor, insertarEnDocumento.children);
console.log(contenedor);





