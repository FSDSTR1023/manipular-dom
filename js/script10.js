
<div class="row featurette">
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
        </div>

        
    const wrapper = document.vcreateElement('div');
    wrapper.classList = 'row featurette'; 
    
    const wrapperText = document.createElement('div');
    wrapperText.classList = 'col-mdm7';

    const wrapperText = document.createElement('p');
    wrapperText.classList = 'lead';
    wrapperTextP.textContent = 'Soy el super texto nuevo que has creado pedazo de maquina'
    
    wrapper.appenChild(wrapperText);
    wrapperText.appenChild(wrapperTextP);
    
    const insertToDocument = document.querySelector('#customDOM');
    insertToDocument.appenChild(wrapper);
