/*<div class="row featurette">
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
</div>*/

const wrapper = document.createElement('div');
wrapper.classList = 'row featurette';

const wrapperText = document.createElement('div');
wrapperText.classList = 'col-md-7';
wrapper.appendChild(wrapperText);

const cardTittle = document.createElement('h2');
cardTittle.classList = 'fw-normal lh-1';
wrapperText.appendChild(cardTittle);
cardTittle.textContent = 'Lorem ipsum dolor sit amet.';

const cardTittleSpan = document.createElement('span');
cardTittleSpan.classList.add('text-muted');
cardTittle.appendChild(cardTittleSpan);
cardTittleSpan.textContent = 'Lorem, ipsum dolor.';

const cardText = document.createElement('p');
cardText.classList = 'lead';
wrapperText.appendChild(cardText);
cardText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?';

const wrapperImg = document.createElement('div');
wrapperImg.classList = 'col-md-5';
wrapper.appendChild(wrapperImg);

const cardImg = document.createElement('img');
cardImg.classList = 'img-thumbnail';
wrapperImg.appendChild(cardImg);
cardImg.setAttribute('src', 'https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9');
cardImg.setAttribute('alt', 'arrozales')


const insertToDocument = document.querySelector('#customDOM');
insertToDocument.appendChild(wrapper);

const existingElement = document.querySelector('.mb-3');
insertToDocument.insertBefore(wrapper, existingElement);

const hrElement = document.createElement('hr');
const brElement = document.createElement('br');

insertToDocument.appendChild(hrElement, brElement);
insertToDocument.insertBefore(hrElement, existingElement);
insertToDocument.insertBefore(brElement, existingElement);



console.log(existingElement);