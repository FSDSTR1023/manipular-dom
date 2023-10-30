{
  /* <div class="row featurette">
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
}
// creamos elemento div 'row featurette'
const wrapper = document.createElement("div");
wrapper.classList = "row featurette";
console.log(wrapper);

//creamos elemento div 'col-md-7'
const wrapperText = document.createElement("div");
wrapperText.classList = "col-md-7";
console.log(wrapperText);

// organizamos e introduciomos el hijo 'col-md-7' al contenedor padre 'row featurette'
wrapper.appendChild(wrapperText);
console.log(wrapper);

// creamos el elemento h2 'fw-normal lh-1'
const wrapperTextH2 = document.createElement("h2");
wrapperTextH2.classList = "fw-normal lh-1";
wrapperTextH2.textContent ="holaaaaaaaaa soy h222222";

console.log(wrapper)

// organizamos e introduciomos el hijo 'h2' al contenedor padre 'col-md-7'
wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTextH2);
console.log(wrapper);

// creamos el atributo span 'text-muted'
const wrapperTextSpan = document.createElement("span");
wrapperTextH2.classList = "text-muted";
wrapperTextH2.textContent ="<span>'Holaaaaaaaaaa, soyyy span'</span>"
console.log(wrapper)
// organizamos e introduciomos el hijo 'spa' al contenedor padre 'h2'
wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTextH2);
wrapperTextH2.appendChild(wrapperTextSpan);
console.log(wrapper);
// ponemos h2 delante de span
document.class="col-md-7".insertBefore(wrapperTextH2, wrapperTextSpan)
console.log(wrapperText)
 

// creamos el elemento p
const wrapperTextP = document.createElement("p");
wrapperTextP.classList = "lead";
wrapperTextP.textContent =
  "Holaaaaaaaaa ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?";

  // organizamos e introduciomos el hijo 'p' al contenedor padre 'col-md-7'
wrapper.appendChild(wrapperText);
wrapperText.appendChild(wrapperTextP);
console.log(wrapperTextP);




// creamos el elemento div 'col-md-5'
const imagen = document.createElement("div");
imagen.classList = "col-md-5";

// creamos el atributo img
const scr = document.createElement("scr");
imagen.classList = "col-md-5";



const insertDocument = document.querySelector(`#customDOM`);
insertDocument.appendChild(wrapper);