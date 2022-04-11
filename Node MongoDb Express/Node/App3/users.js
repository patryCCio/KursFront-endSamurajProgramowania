const users = [
    {id: 1, name: 'Adam'},
    {id: 2, name: 'Marysia'},
    {id: 3, name: 'Paweł'}
];

module.exports = {
    showUsers() {
        const names = users.map(user => user.name);
        console.log('\nNasi użytkownicy to: ')
        names.forEach(name => console.log(name));
    },

    showUserObj(id) {
        console.log('Szukany użytkownik to: ');
        const user = users.find(user => id === user.id)
        console.log(user);
    },

    userListLength: users.length
}