{/* 
<div class="row featurette">
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
        </div> 

<!-- - `createElement` -->
<!-- - `classList` -->
<!-- - `textContent`  para el texto de la caja-->
<!-- - `src` para la imagen -->
<!-- - `appendChild` -->
<!-- - `querySelector` -->
<!-- - `insertBefore` para elegir dónde en el archivo se coloca -->
<!-- - `children` -->
*/}

const wrapperHr = document.createElement('hr');
const wrapperBr = document.createElement('br');

const wrapper = document.createElement('div');
wrapper.classList = 'row featurette';

const wrapperText = document.createElement('div');
wrapperText.classList = 'col-md-7 order-md-2';

const wrapperTextH = document.createElement('h2');
wrapperTextH.classList = 'fw-normal lh-1';
wrapperTextH.textContent = 'Este es el título del bloque.';

const wrapperTextP = document.createElement('p');
wrapperTextP.classList = 'lead';
wrapperTextP.textContent = 'Este es el texto que tiene que aparecer en el navegador si consigo que funcione :D';

const wrapperImage = document.createElement('div');
wrapperImage.classList = 'col-md-5 order-md-1';

const wrapperImageImg = document.createElement('img');
wrapperImageImg.classList = 'img-thumbnail';
wrapperImageImg.src = 'img/flowers.jpg';

wrapper.appendChild(wrapperHr);
wrapper.appendChild(wrapperBr);
wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTextH);
wrapperText.appendChild(wrapperTextP);
wrapper.appendChild(wrapperImage);
wrapperImage.appendChild(wrapperImageImg);

const insertToDocument = document.querySelector('#customDOM');
insertToDocument.insertBefore(wrapper, insertToDocument);