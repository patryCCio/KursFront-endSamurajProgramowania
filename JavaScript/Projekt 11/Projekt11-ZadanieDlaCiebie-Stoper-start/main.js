// http://websamuraj.pl/examples/js/projekt11/

const button = document.querySelector('button.main');
const resetButton = document.querySelector('.reset');
const timeArea = document.querySelector('.time div');

let startTime;
let time = 0;

function checkValue(){
    if(button.textContent === 'Start'){
        button.textContent = 'Pauza';
        startTime = setInterval(startStoper, 10);
    }else{
        button.textContent = 'Start';
        clearInterval(startTime);
    }
}
button.addEventListener('click', checkValue);

const startStoper = () => {
    time++;
    timeArea.textContent = (time/100).toFixed(2);
}

resetButton.addEventListener('click', function () {
    if(button.textContent == 'Pauza')return null;
    else{
        time = 0;
        timeArea.textContent = time.toFixed(2);
    }
})