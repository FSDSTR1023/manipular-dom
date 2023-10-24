{
    /*
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
        */
}

const wrapper = document.createElement('div');
wrapper.classList = 'row featurette';

const wrapperText = document.createElement('div');
wrapperText.classList = 'col-md-7';

const wrapperTextH = document.createElement('h2');
wrapperTextH.classList = 'fw-normal lh-1';
wrapperTextH.textContent = 'Lorem ipsum dolor sit amet. ';

const wrapperTextSpan = document.createElement('span');
wrapperTextSpan.classList = 'text-muted';
wrapperTextSpan.textContent = 'Lorem, ipsum dolor.';

const wrapperTextP = document.createElement('p');
wrapperTextP.classList = 'lead';
wrapperTextP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?';

const wrapperImage = document.createElement('div');
wrapperImage.classList = 'col-md-5';

const wrapperImageImg = document.createElement('img');
wrapperImageImg.classList = 'img-thumbnail';
wrapperImageImg.src = 'img/countryside.jpg';
wrapperImageImg.alt = '';

const wrapperhr = document.createElement('hr');
const wrapperbr = document.createElement('br');

wrapper.appendChild(wrapperImage);
wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTextH);
wrapperTextH.appendChild(wrapperTextSpan);
wrapperText.appendChild(wrapperTextP);
wrapperImage.appendChild(wrapperImageImg);
wrapper.appendChild(wrapperhr);
wrapper.appendChild(wrapperbr);

const insertToDocument = document.querySelector('.mb-3');
insertToDocument.parentNode.insertBefore(wrapper, insertToDocument);
