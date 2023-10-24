
const wrapper = document.createElement('div');
wrapper.classList = 'row featurette';

const wrapperText = document. createElement('div');
wrapperText.classList = 'col-md-7 order-md-2';


const wrapperTextH = document. createElement('h2');
wrapperTextH.classList = 'fw-normal lh-1';
wrapperTextH.textContent = "Lorem ipsum dolor sit amet."
const wrapperTextH2 = document.createElement ('span');
wrapperTextH2.classList = 'text-muted';
wrapperTextH2.textContent = " Lorem, ipsum, dolor."


const wrapperTextP = document. createElement('p');
wrapperTextP.classList = 'lead';
wrapperTextP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?"


const wrapperText2 = document.createElement('div');
wrapperText2.classList = 'col-md-5 order-md-1';

const img = document.createElement('img');
img.classList = 'img-thumbnail';
img.src = 'img/countryside.jpg';
document.body.appendChild(img);

wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTextH);
wrapperTextH.appendChild(wrapperTextH2);
wrapperText.appendChild(wrapperTextP);
wrapper.appendChild(wrapperText2)
wrapperText2.appendChild(img)



const insertToDocument = document.querySelectorAll('hr');
const lastHR = insertToDocument [insertToDocument.length -2];
lastHR.after(wrapper);