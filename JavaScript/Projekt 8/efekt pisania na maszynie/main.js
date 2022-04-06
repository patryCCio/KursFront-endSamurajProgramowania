const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');

const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta asperiores cum rem eius ad sed omnis numquam, culpa inventore, illo repudiandae laudantium iste ut soluta unde. Nisi sapiente maxime repudiandae?'

let indexText = 0;
const time = 30;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length)clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, time);

setInterval(function(){
    spanCursor.classList.toggle('active');
}, 600)