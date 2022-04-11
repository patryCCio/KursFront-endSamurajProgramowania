const handleData = require('./handleData');

const handleCommand = ({ add, remove, list }) => {
    if (add) {
        if (typeof add != 'string') {
            return console.log('Wpisz nazwę dodawanego zadania (tekst!)'.red);
        } else if (add.length < 7) {
            return console.log('Nazwa zadania musi mieć przynajmniej 7 znaków!'.red);
        }
        handleData(1, add);
    } else if (remove) {
        if (typeof remove != 'string' || remove.length < 7) {
            return console.log('Wpisz nazwę usuwanego zadania. Musi być to tekst i mieć więcej niż 6 znaków!'.red);
        }
        handleData(2, remove);
    } else if (list || list === '') {
        handleData(3, null);
    } else {
        console.log('Nie rozumiem polecenia! Dostępne własności to: --add="nazwa zadania", --remove="nazwa zadania" oraz --list'.yellow);
    }
}

module.exports = handleCommand;