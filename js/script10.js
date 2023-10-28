const imgArray = ['img/countryside.jpg', 'img/women.jpg', 'img/flowers.jpg']
for (let i = 0; i < imgArray.length; i++) {
    const wrapper = document.createElement('div');
    wrapper.classList = 'row featurette';
    wrapper.innerHTML = `
    <div class="col-md-7">
        <h2 class="fw-normal lh-1">Lorem ipsum dolor sit amet. <span class="text-muted">Lorem, ipsum
            dolor.</span></h2>
    </div>`;
    const textP = document.createElement('p');
    textP.classList = 'lead';
    textP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis optio maiores'
    wrapper.querySelector('.col-md-7').appendChild(textP);
    const imgWrapper = document.createElement('div');
    imgWrapper.classList = 'col-md-5';
    const img = document.createElement('img')
    img.classList = 'img-thumbnail';
    img.src = imgArray[i];
    imgWrapper.appendChild(img);
    if (i % 2 === 0) {
        console.log(wrapper.children[0])
        wrapper.insertBefore(imgWrapper, wrapper.children[0]);
    } else {
        wrapper.appendChild(imgWrapper);
    }
    document.querySelector('#customDOM').appendChild(wrapper);
}