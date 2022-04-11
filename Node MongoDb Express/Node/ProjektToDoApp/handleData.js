const colors = require('colors');
const fs = require('fs');

const handleData = (type, title) => {
    // type - number (1 - add, 2 - remove, 3 - list)
    // title (string || null)


    const data = fs.readFileSync('data.json', 'utf-8');
    let tasks = JSON.parse(data)

    if (type === 1 || type === 2) {
        isExisted = tasks.find(task => task.title === title) ? true : false;
        if (type === 1 && isExisted) {
            return console.log("Takie zadanie już istnieje!".red);
        } else if (type === 2 && !isExisted) {
            return console.log("Takie zadanie nie istnieje!".red);
        }
    }

    let dataJSON;
    switch (type) {

        case 1:
            tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }));
            const id = tasks.length + 1;
            tasks.push({ id, title });
            dataJSON = JSON.stringify(tasks);
            fs.writeFileSync('data.json', dataJSON);
            console.log(`Dodałem zadanie: ${title}`.white.bgGreen);
            break;

        case 2:
            const index = tasks.findIndex(task => task.title === title);
            tasks.splice(index, 1);
            tasks = tasks.map((task, index) => ({ id: index + 1, title: task.title }));
            dataJSON = JSON.stringify(tasks);
            fs.writeFile('data.json', dataJSON, 'utf-8', (err) => {
                if (err) throw err;
                console.log(`Usunąłem zadanie: ${title}`.white.bgRed);
            });
            break;

        case 3:
            console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji. Do zrobienia masz:`);
            if (tasks.length) {
                tasks.forEach((task, index) => {
                    if (index % 2) return console.log(task.title.green);
                    return console.log(task.title.yellow);
                })
            }
            console.log('\n');
            break;

    }
}

module.exports = handleData;