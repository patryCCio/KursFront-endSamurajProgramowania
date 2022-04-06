const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const name = input.value;
    if(input.value.length) {
        for (const tabName of names) {
            if(tabName === name){
                alert("Taka wartość już istnieje!");
                input.value = '';
                return;
            }
        }

        names.push(name);
        div.textContent += name + ', ';
        input.value = '';
    }
    
}

document.querySelector('button').addEventListener('click', addName);