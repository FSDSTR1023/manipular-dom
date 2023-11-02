/*<div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class=" lh-1">Loerm ipsum dolor sit amet. <span class="text-muted">Lorem, ipsum
                        dolor.</span></h2>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reicie ndis optio maiores
                    deserunt minima perspiciatis dolore dolor quo fuga, voluptatum tenetur fugiat cum culpa qui est hic
                    adipisci vero obcaecati autem architecto aliquam asperiores. Atque adipisci provident nostrum
                    voluptas expedita suscipit optio, impedit laborum enim sed! Expedita temporibus sed similique?</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="img-thumbnail" src="img/flowers.jpg" alt="">
            </div>
        </div>/ */


       


       const seccion = document.querySelector('#customDOM')
       const lastbox = document.querySelector('.featurette')

       const caja = document.createElement('div')
       caja.classList.add('row')       
       caja.classList.add('featurette')

       seccion.appendChild(caja)

       seccion.insertBefore(caja, lastbox)

       const cajatexto = document.createElement('div')
       cajatexto.classList.add('col-md-7')
       cajatexto.classList.add('order-md-2')

       caja.appendChild(cajatexto)

       const h2 = document.createElement('h2')
       h2.classList.add('fw-normal')
       h2.classList.add('lh-1')
       h2.innerText = 'RECOGIENDO FLORECICAS H2'
       
       cajatexto.appendChild(h2)

       const parrafo = document.createElement('p')
       parrafo.classList.add('lead')
       parrafo.innerText = 'Lorem fistrum fistro pupita hasta luego Lucas. Va usté muy cargadoo te voy a borrar el cerito benemeritaar a gramenawer te va a hasé pupitaa amatomaa diodeno apetecan sexuarl qué dise usteer. A gramenawer a peich a gramenawer mamaar. Jarl qué dise usteer benemeritaar no te digo trigo por no llamarte Rodrigor pecador pupita amatomaa. De la pradera no te digo trigo por no llamarte Rodrigor va usté muy cargadoo está la cosa muy malar. Está la cosa muy malar jarl no puedor diodenoo. No puedor de la pradera pecador ese pedazo de al ataquerl por la gloria de mi madre ese que llega pupita tiene musho peligro.'
       
       cajatexto.appendChild(parrafo)

       const cajaimg = document.createElement('div')
       cajaimg.classList.add('col-md-5')
       cajaimg.classList.add('order-md-1')

       caja.appendChild(cajaimg)

       const imagen = document.createElement('img')
       imagen.classList.add('img-thumbnail')
       imagen.setAttribute('src', "img/flowers.jpg")

       cajaimg.appendChild(imagen)

       const separator = document.createElement("hr")
       seccion.appendChild(separator)
       seccion.insertBefore(separator, lastbox)


              


        
