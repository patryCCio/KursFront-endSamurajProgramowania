const howImages = 8;
const pathToSmallImage = 'img/';
const pathToBigImage = 'img/thumb';
const divImages = document.querySelector('.images');

function init(){
    createImages();
}

function createImages(){
    for(let x=0; x<howImages; x++){
        const image = document.createElement('a');
        const imageInnerA = document.createElement('img');

        imageInnerA.src = pathToBigImage + (x+1) + '.jpg';
        image.href = pathToSmallImage + (x+1) + '.jpg';
        image.dataset.lightbox = 'favourites';
        image.appendChild(imageInnerA);

        document.querySelector('.images').appendChild(image);
    }
    
}

