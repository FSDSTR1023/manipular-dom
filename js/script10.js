// 1. createElement
// 2. classList
// 3. appendChild
const wrapper = document.createElement("div");
wrapper.classList = "row featurette";
console.log(wrapper, "wrapper row");

const wrapperText = document.createElement("div");
wrapperText.classList = "col-md-7 order-md-2";
wrapper.appendChild(wrapperText);
console.log(wrapperText , "wrapper column");

const wrapperH2 = document.createElement("h2");
wrapperH2.classList = "fw-normal lh-1";
// 4. textContent
wrapperH2.textContent = "Soy el titulo nuevo! "
wrapperText.appendChild(wrapperH2);
console.log(wrapperH2, "wrapper h2");

const wrapperSpan = document.createElement("span");
wrapperSpan.classList = "text-muted";
wrapperSpan.textContent = "soy el span"
wrapperH2.appendChild(wrapperSpan);
console.log(wrapperSpan, "wrapper span");

const wrapperTextP = document.createElement("p");
wrapperTextP.classList = "lead";
wrapperTextP.textContent = "soy el texto nuevo - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?"
wrapperText.appendChild(wrapperTextP);
console.log(wrapperTextP, "wrapper P");

const wrapperImage = document.createElement("div");
wrapperImage.classList = "col-md-5 order-md-1";
wrapper.appendChild(wrapperImage);
console.log(wrapperImage , "wrapper image");

const image = document.createElement("img");
image.classList = "img-thumbnail";
// 5. src
image.src = "img/countryside.jpg";
wrapperImage.appendChild(image);
console.log(image , "imagen");

const container = document.createElement("div");
container.classList = "container";
console.log(container , "contenedor principal");

// Adding classnames
wrapper.classList.add('blue');

// 6. children
const children = wrapper.children;
console.log(children , "soy los children");
const firstChild = wrapperH2.firstChild;
console.log(firstChild, "soy el primer hijo");


// 7. querySelector - inserting wrapper.
const insertToDocument = document.querySelector("#customDOM");
insertToDocument.appendChild(wrapper);


// 8. insertBefore
const mb3Element = document.querySelector('.mb-3');
insertToDocument.insertBefore(wrapper, mb3Element);

const hrElement = document.createElement('hr');
const brElement = document.createElement('br');

insertToDocument.appendChild(hrElement, brElement);
insertToDocument.insertBefore(hrElement, mb3Element);
insertToDocument.insertBefore(brElement, mb3Element);

