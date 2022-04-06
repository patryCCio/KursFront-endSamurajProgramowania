const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Jagienka', 'Ania', 'Daria', 'Asia', 'Marysia', 'Monika'];
const prefixes = ['Wydaje mi się', 'Jestem w 100% pewny', 'Nigdy się nie mylę więc myślę']


const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixes.length);

    div.textContent = `${prefixes[indexPrefix]}, że najlepsze będzie imię: ${names[index]}`;
}


btn.addEventListener('click', nameGenerator);

