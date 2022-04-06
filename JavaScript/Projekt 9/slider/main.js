const slideList = [{
    img: 'images/img1.jpg',
    text: 'Pierwszy tekst'
}, 
{
    img: 'images/img2.jpg',
    text: 'Drugi tekst'
}, 
{
    img: 'images/img3.jpg',
    text: 'Trzeci tekst'
}]
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const sliderDots = [...document.querySelectorAll('.dots span')];

//Interfejs
const time = 2000;
let active = 0;

const changeDot = () => {
    const activeDot = sliderDots.findIndex(dot => dot.classList.contains('active'));
    sliderDots[activeDot].classList.remove('active');
    sliderDots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if(active === slideList.length) active = 0;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let slideInterval = setInterval(changeSlide, time);

//Implementacja

const keyChangeSlides = (e) => {

    if(e.keyCode == 37 || e.keyCode == 39){
        clearInterval(slideInterval);
        e.keyCode == 37 ? active-- : active++;
        
        if(active < 0){
            active = slideList.length - 1;
        }else if(active === slideList.length){
            active = 0;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        slideInterval = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlides);