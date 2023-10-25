/*<div class="row featurette">
<div class="col-md-7 order-md-2">
    <h2 class="fw-normal lh-1">Lorem ipsum dolor sit amet. <span class="text-muted">Lorem, ipsum
            dolor.</span></h2>
    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reicie ndis optio maiores
        deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic
        adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum
        voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?</p>
</div>
<div class="col-md-5 order-md-1">
    <img class="img-thumbnail" src="img/flowers.jpg" alt="">
</div>
</div>*/



/*Crea una sección que contenga una imagen, un título h2 y un texto.*/
const wrapper = document.createElement('div');
wrapper.classList.add('row', 'featurette');

const wrapperText = document.createElement('div');
wrapperText.classList.add('col-md-7','order-md-2');
const h2 = document.createElement('h2');
h2.textContent = 'Soy el supuesto título h2.';
h2.classList.add('fw-normal','lh-1');

const span = document.createElement('span');
span.classList.add('text-muted');
span.textContent = ' Soy el span, que me ha dado un "ipsun dolor"';
h2.appendChild(span);

wrapperText.appendChild(h2);
console.log(wrapperText);


const wrapperTextP = document.createElement('p');
wrapperTextP.classList = 'lead';
wrapperTextP.textContent = 'Soy el nuevo Chiquitexto. Lorem fistrum llevame al sircoo está la cosa muy malar amatomaa. Hasta luego Lucas llevame al sircoo me cago en tus muelas fistro ese hombree. Pecador ese que llega quietooor me cago en tus muelas se calle ustée torpedo.  Condemor te va a hasé pupitaa caballo blanco caballo negroorl torpedo caballo blanco caballo negroorl ese hombree va usté muy cargadoo de la pradera benemeritaar tiene musho peligro';

console.log(wrapperTextP);

wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTextP);
console.log(wrapper);

const wrapperImagen = document.createElement('div');
wrapperImagen.classList.add('col-md-5','order-md-1');

wrapper.appendChild(wrapperImagen);


const img = document.createElement("img");
img.classList= 'img-thumbnail';
img.src = "img/women.jpg";
img.alt = "Niña feliz";



wrapperImagen.appendChild(img);
console.log(wrapperImagen);








const insertToDocument = document.querySelector('#customDOM');
const hr =document.querySelector('hr');

insertToDocument.insertBefore(wrapper, hr);











/*Dicha sección ha de seguir los estilos y la estructura de los elementos que ya existen.

Inserta la sección de manera que siga la disposición lógica en relación a la ordenación del bloque de texto y la imagen.

Tendréis que utilizar el siguiente div para "inyectar" el código que vosotros créis:*/


