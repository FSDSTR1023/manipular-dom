{/* <div id="customDOM" class="container">
<div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="fw-normal lh-1">Lorem ipsum dolor sit amet. <span class="text-muted">Lorem, ipsum
                        dolor.</span></h2>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reicie ndis optio maiores
                    deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hi
                    adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum
                    voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="img-thumbnail" src="img/flowers.jpg" alt="">
            </div>
        </div>

        <hr> */}

        const contenedorDom = document.querySelector("#customDOM");
        const hr =document.querySelector("hr");
        let container = document.createElement("div")
        container.classList.add('row', 'featurette')
        
        contenedorDom.append(container)

        container.innerHTML = `<div class="col-md-7 order-md-2">
        <h2 class="fw-normal lh-1">holaaaa h222222222. <span class="text-muted">Holaaaaa span.</span></h2>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores
        deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic
        adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum
        voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?</p>
        </div>
        <div class="col-md-5">
        <img class="img-thumbnail" src="img/flowers.jpg" alt= "foto flores"> 
        </div>`

        ejercicioDom.insertBefore(container, hr)
       
