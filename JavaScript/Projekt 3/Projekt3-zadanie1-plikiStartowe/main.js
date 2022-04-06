let fontIncrement = 10;
let displayNone = false;

const button = document.querySelector('button');
const allLi = document.querySelectorAll('li');

button.addEventListener('click', incrementFont)

function incrementFont(){
    if(displayNone){
        fontIncrement++;
    }else{
        displayNone = true;
        for (const iterator of allLi) {
            iterator.style.display = "block";
        }
    }
    for (const iterator of allLi) {
        iterator.style.fontSize = `${fontIncrement}px`;
    }
}