{/* 
<div id="customDOM" class="container">

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

    <hr>
</div> 
*/}

const fragment = document.createDocumentFragment();
const customDOM = document.querySelector('#customDOM');
const sibling = document.querySelector('.row.featurette');

const create = (elem = '', classes = []) => {
    const myDiv = document.createElement(elem);
    myDiv.classList.add(...classes);
    return myDiv;
};

const rowFeaturette = create('div', ['row', 'featurette']);
const colMd7 = create('div', ['col-md-7', 'order-md-2']);
const fwNormalLh1 = create('h2', ['fw-normal', 'lh-1']);
const textMuted = create('span', ['text-muted']);
const lead = create('p', ['lead']);
const colMd5 = create('div', ['col-md-5', 'order-md-1']);
const imgThumbnail = create('img', ['img-thumbnail']);
const hr = document.createElement('hr');

lead.textContent = '[Custom] Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reicie ndis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?'

textMuted.textContent = '[Custom] Lorem, ipsum dolor.'

fwNormalLh1.textContent = '[Custom] Lorem ipsum dolor sit amet. '

fwNormalLh1.appendChild(textMuted);

colMd7.appendChild(fwNormalLh1);
colMd7.appendChild(lead);

imgThumbnail.src = 'img/flowers.jpg'
colMd5.appendChild(imgThumbnail);

rowFeaturette.appendChild(colMd7);
rowFeaturette.appendChild(colMd5);

fragment.appendChild(rowFeaturette);
fragment.appendChild(hr)

customDOM.insertBefore(fragment, sibling);

console.log(rowFeaturette.children);