// <div class="row featurette">
// <div class="col-md-7">
//   <h2 class="fw-normal lh-1">
//     Lorem ipsum dolor sit amet.
//     <span class="text-muted">Lorem, ipsum dolor.</span>
//   </h2>
//   <p class="lead">
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
// reiciendis optio maiores deserunt minima perspiciatis dolore dolor
// quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci
// vero obcaecati autem architecto aliquam asperiores. Atque adipisci
// provident nostrum voluptas expedita suscipit optio, impedit laborum
// enim sed! Expedita temporibus sed similique?
//   </p>
// </div>
// <div class="col-md-5">
//   <img class="img-thumbnail" src="img/countryside.jpg" alt="" />
// </div>
// </div>

console.log("hello");

const wrapper = document.createElement("div");
wrapper.classList = "row featurette";

const wrapperText = document.createElement("div");
wrapperText.classList = "col-md-7 order-md-2";

wrapper.appendChild(wrapperText);

const wrapperTexth2 = document.createElement("h2");
wrapperTexth2.classList = "fw-normal lh-1";
wrapperTexth2.textContent = "tonebonedev strikes again hehe.";

const wrapperTexth2span = document.createElement("span");
wrapperTexth2span.classList = "text-muted";
wrapperTexth2span.textContent = "Lorem ipsum, dolor.";

wrapperTexth2.appendChild(wrapperTexth2span);

const wrapperTextp = document.createElement("p");
wrapperTextp.classList = "lead";

wrapperText.appendChild(wrapperTexth2);
wrapperText.appendChild(wrapperTextp);
wrapperTextp.textContent =
  "Dios finalmente lo tengo!!! Vivamizzle tellivizzle maurizzle eget nisi check it out the bizzle. Pot sizzle amizzle lacizzle. Nizzle eu my shizz egizzle fo shizzle auctor feugizzle. Praesent rizzle crunk shizznit. Curabitizzle tellivizzle arcu. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?";

const wrapperImg = document.createElement("div");
wrapperImg.classList = "col-md-5 order-md-1";
wrapper.appendChild(wrapperImg);

const img = document.createElement("img");
img.classList = "img-thumbnail";
img.src = "http://127.0.0.1:3000/img/women.jpg";
wrapperImg.appendChild(img);

console.log(wrapper);
const placeItem = document.querySelector("#insertBefore");
const insertInDoc = document.querySelector("#customDOM");
insertInDoc.insertBefore(wrapper, placeItem);

const lineBreak = document.createElement("hr");
insertInDoc.insertBefore(lineBreak, wrapper);
