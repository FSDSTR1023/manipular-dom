//<div id="customDOM" class="container">

{/*     <div class="row featurette">
            <div class="col-md-7">
                <h2 class="fw-normal lh-1">Lorem ipsum dolor sit amet. <span class="text-muted">Lorem, ipsum
                        dolor.</span></h2>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores
                    deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic
                    adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum
                    voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?</p>
            </div>
            <div class="col-md-5">
                <img class="img-thumbnail" src="img/women.jpg" alt="">
            </div>
        </div>

        <hr></hr> */}

let contenedorPrincipal = document.createElement('div');
contenedorPrincipal.classList.add('row', 'featurette');

let contenedorTexto = document.createElement('div');
contenedorTexto.classList.add('col-md-7', 'order-md-2');

let titulo = document.createElement('h2');
titulo.classList.add('fw-normal', 'lh-1');
titulo.innerHTML='Lorem ipsum dolor sit amet. <span class="text-muted">Lorem, ipsumdolor.</span>';

let parrafo = document.createElement('p');
parrafo.classList.add('lead');
parrafo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores'+
    'deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic'+
    'adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum'+
    'voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?';

contenedorTexto.appendChild(titulo);
contenedorTexto.appendChild(parrafo);
console.log(contenedorTexto);


let contenedorImagen = document.createElement('div');
contenedorImagen.classList.add('col-md-5', 'order-md-1');

let imagen = document.createElement('img');
imagen.classList.add('img-thumbnail');
imagen.setAttribute('src', 'img/flowers.jpg');
imagen.setAttribute('alt', '');

contenedorImagen.appendChild(imagen);


contenedorPrincipal.appendChild(contenedorTexto);
contenedorPrincipal.appendChild(contenedorImagen);

console.log(contenedorPrincipal);

let separadorFinal = document.createElement('hr');
let contenedorGeneral = document.querySelector('#customDOM');

let separadorDelFormulario = document.querySelector('br');
// let listaHtml = contenedorGeneral.children;
// console.log(listaHtml);
// let separadorDelFormulario;
// for (let i=0; i<listaHtml.length; i++) {
//     if (listaHtml[i].outerHTML==='<hr>'){
//         separadorDelFormulario = listaHtml[i];
//         break;
//     }
// }
// console.log(separadorDelFormulario);


contenedorGeneral.insertBefore(contenedorPrincipal, separadorDelFormulario);
contenedorGeneral.insertBefore(separadorFinal, separadorDelFormulario);