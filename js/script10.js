const customDOM = document.querySelector('#customDOM');
const hr = document.querySelector('hr');
let container = document.createElement('div');
container.classList.add('row', 'featurette');

customDOM.append(container);

container.innerHTML = `<div class="col-md-7 order-md-2">
                <h2 class="fw-normal lh-1">¿Que es el arroz? <span class="text-muted">El arroz en la historia</span></h2>
                <p class="lead">El arroz es la semilla de la planta Oryza sativa o de Oryza glaberrima. Se trata de un cereal considerado alimento básico en muchas gastronomías del mundo.​El arroz es el segundo cereal más producido en el mundo, por detrás del maíz y por delante del trigo.​</p>
            </div>
            <div class="col-md-5">
                <img class="img-thumbnail" src="img/foto.jpg" alt="man colecting rice">
            </div>`;

customDOM.insertBefore(container, hr);
console.log(customDOM);
