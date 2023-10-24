// este es el div donde incorporar el ejercicio
//<div id="customDOM" class="container"></div>

/* <hr>   <-- esto es lo que tenemos que crearen el DOM

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="fw-normal lh-1">Lorem ipsum dolor sit amet. <span class="text-muted">Lorem, ipsum
                        dolor.</span></h2>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores
                    deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic
                    adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum
                    voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?</p>
            </div>
            <div class="col-md-5">
                <img class="img-thumbnail" src="img/countryside.jpg" alt="">
            </div>
        </div>

        <hr>
*/

const customDOM = document.querySelector('#customDOM');
const hr = document.querySelector('hr');
let container = document.createElement('div');
container.classList.add('row', 'featurette');

customDOM.append(container);

container.innerHTML = `<div class="col-md-7 order-md-2">
                <h2 class="fw-normal lh-1">El arroz y el Campo. <span class="text-muted">Recolectando lo sembrado.</span></h2>
                <p class="lead">El arroz es un alimento básico en muchas culturas. Es versátil y nutritivo, rico en carbohidratos y bajo en grasa. Puede ser el acompañamiento perfecto para platos principales o protagonizar recetas como el arroz frito o la paella. Su cultivo es fundamental para la seguridad alimentaria global y su historia se remonta a miles de años.</p>
            </div>
            <div class="col-md-5">
                <img class="img-thumbnail" src="img/arroz.jpg" alt="man colecting rice">
            </div>`;

customDOM.insertBefore(container, hr);
console.log(customDOM);
