const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'aplication/json' });
//     let salida = {
//         nombre: 'Barbaro',
//         edad: 32,
//         url: req.url
//     }
//     res.write(JSON.stringify(salida));
//     res.end();

// }).listen(8080);

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('A PP vamos a hacer grandes cosas');
})

app.listen(3000);

console.log('Tdos perfecto, escuchando por el puesto 8080');