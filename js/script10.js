{/* <div class="row featurette">
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
</div> */}


const wrapper = document.createElement('div');
wrapper.classList= 'row featurette';

const wrapperText = document.createElement('div');
wrapperText.classList = 'col-md-7';
console.log(wrapperText);

const wrapperTitle = document.createElement('h2');
wrapperTitle.classList = 'fw-normal';
wrapperTitle.textContent = 'Título';
console.log(wrapperTitle)

const wrapperTextP = document.createElement('p');
wrapperTextP.classList = 'lead';
wrapperTextP.textContent = 'Soy el texto nuevo';
console.log(wrapperTextP);

const wrapperImage = document.createElement('div');
wrapperImage.classList = 'col-md-5';

const image = document.createElement('img');
image.classList = 'img-thumbnail';
image.src = 'https://www.pexels.com/photo/full-length-of-man-on-water-247597/';


wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTitle);
wrapperTitle.appendChild(wrapperTextP);
wrapperTextP.appendChild(wrapperImage);
wrapperImage.appendChild(image);


console.log(wrapper);




// let existingElement = document.getElementsByClassName('mb-3');
// // let theFirstChild = existingElement.firstChild;

// existingElement.insertBefore(wrapper, existingElement);


const insertToDocument = document.querySelector('#customDOM');
insertToDocument.appendChild(wrapper);

