const newWrap = document.createElement("div");
const puntoRef = document.querySelector('br');
newWrap.classList = "row featurette";

const newDiv1 = document.createElement("div");
newDiv1.classList = "col-md-7 order-md-2";

const newH2 = document.createElement("h2");
newH2.classList = "fw-normal lh-1";
newH2.textContent = "Sistema de Producción:  ";

const newSpan = document.createElement("span");
newSpan.classList = "text-muted";
newSpan.textContent = "Cultivos de Asia";

const newP = document.createElement("p");
newP.classList = "lead";
newP.textContent =
  "Los principales cultivos son: el trigo y el maíz, con pequeñas áreas cultivadas con arroz, algodón, soya, camote y colza -dependiendo de la temperatura y condiciones hídricas- así como cítricos y algunas frutas de clima templado";

const newDiv2 = document.createElement("div");
newDiv2.classList = "col-md-5 order-md-1";
const newImg = document.createElement("img");
newImg.classList = "img-thumbnail";
newImg.src = "https://i.pinimg.com/1200x/24/c5/74/24c5749c9075df2f6379a7833fdf2380.jpg";

// inserta el nuevo div en la página.
newWrap.appendChild(newDiv1);
newDiv1.appendChild(newH2);
newH2.appendChild(newSpan);
newDiv1.appendChild(newP);

newWrap.appendChild(newDiv2);
newDiv2.appendChild(newImg);

const insertar = document.querySelector("#customDOM");
insertar.insertBefore(newWrap, puntoRef);

console.log(newWrap);
