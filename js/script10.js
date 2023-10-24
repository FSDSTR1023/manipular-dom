// Create elements
        
const wrapper = document.createElement('div');
wrapper.classList = 'row featurette'; 

const wrapperText = document.createElement('div');
wrapperText.classList = 'col-md7 order-md-2';

const titleText = document.createElement('h2');
titleText.classList = 'fw-normal lh-1';
titleText.textContent = 'Lorem ipsum dolor sit amet.';

const spanText = document.createElement('span');
spanText.classList = 'text-mute';
spanText.textContent = "Lorem, ipsum dolor.";

const paragraphText = document.createElement('p');
paragraphText.classList = 'lead';
paragraphText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reicie ndis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hicadipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?'

const wrapperImage = document.createElement('div');
wrapperImage.classList = 'col-md-5 order-md-1';

const image = document.createElement('img');
image.classList = 'img-thumbnail';
image.setAttribute('src', 'img/flowers.jpg');

// Build element tree

wrapper.appendChild(wrapperText);
wrapper.appendChild(wrapperImage);

wrapperText.appendChild(titleText);
wrapperText.appendChild(paragraphText);

titleText.appendChild(spanText);

wrapperImage.appendChild(image);

// Instert elements in the document
    
const insertToDocument = document.querySelector('#customDOM');

const refNode = insertToDocument.querySelector("div.mb-3")

insertToDocument.insertBefore(wrapper, refNode);
