const http = require('http');

const port = process.env.PORT || 3000;


http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if(req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1>Strona główna</h1>');
    }
    else {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1>Podstrona</h1>');
    }
    // res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    // res.write("<h1>Cześć</h1>");
    res.end(`<h1>${req.url}</h1>`);
}).listen(port, '127.0.0.1', () => {
    console.log('Nasz serwer nasłuchuje na porcie: ' + port);
});