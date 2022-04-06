const users = [
    {id: 1, name: "Adam"},
    {id: 2, name: "Marysia"},
    {id: 3, name: "Waldemar"}
];

module.exports = {
    showUsers() {
        const names = users.map(users => users.name);
        console.log('Nasi użytkownicy to:');
        names.forEach(name => console.log(name));
    },
    showUserObj(id){
        console.log('Szukany użytkownik to:');
        const user = users.find(user => id === user.id);
        console.log(user);
    }
}