// http://numbersapi.com/random/year?json
import fetch from "node-fetch";

// const year = process.argv[2] || Math.floor(Math.random() * 2023);
// // console.log(year);


// fetch(`http://numbersapi.com/${year}/year?json`)
// .then(response => {
//     // console.log(response.status);
//     // console.log(response.ok);
//     return response.json();
// })
// .then(data => console.log(data.text))
// .catch(error => console.log("Error: ", error));


//Example 2
// `http://numbersapi.com/${number}/${type}?json`

const arg = process.argv[2];
let type = '';

if (arg.indexOf('--year') === 0){
    console.log('Szukamy informacji o roku ...');
    type = 'year';
} else if (arg.indexOf('--math') === 0){
    console.log('Szukamy informacji o liczbie ...');
    type = 'math';
} else if (arg.indexOf('--trivia') === 0){
    console.log('Szukamy informacji o ciekawostce ...');
    type = 'trivia';
}

const equalSign = arg.search('=');

if(equalSign === -1) console.log('nie wpisałeś liczby!');

const number = arg.slice(equalSign+1);
console.log(type, number);
console.log(`http://numbersapi.com/${number}/${type}?json`);

fetch(`http://numbersapi.com/${number}/${type}?json`)
.then(response =>  response.json())
.then(data => console.log(data.text))
.catch(err => console.log('Błąd: ' + err));