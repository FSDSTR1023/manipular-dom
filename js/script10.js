
/*<div class="row featurette">
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
        </div>*/
        
const container = document.querySelector('#customDOM');
const before = document.querySelector(".featurette")

const containertxt = document.createElement("div")
containertxt.classList.add("row")
containertxt.classList.add("featurette")
container.appendChild(containertxt)
container.insertBefore(containertxt, before)

const divtxt = document.createElement("div")
divtxt.classList.add("col-md-7")
divtxt.classList.add("order-md-2")
containertxt.appendChild(divtxt)
/*containertxt.children(divtxt)*/

const title = document.createElement("h2")
title.innerText = "Lorem ipsum dolor sit amet."
title.classList.add("fw-normal")
title.classList.add("lh-1")
divtxt.appendChild(title)
/*divtxt.children(title)*/

const txt = document.createElement("p")
txt.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reicie ndis optio maiores deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?"
txt.classList.add("lead")
divtxt.appendChild(txt)
/*divtxt.children(txt)*/

const divImg = document.createElement("div")
divImg.classList.add("col-md-5")
containertxt.appendChild(divImg)
/*containertxt.children(divImg) */

const img = document.createElement("img")
img.classList.add("img-thumbnail")
img.setAttribute("src", "img/flowers.jpg")
divImg.appendChild(img)
/*divImg.children(img) */

const separator = document.createElement("hr")
container.appendChild(separator)
container.insertBefore(separator, before)