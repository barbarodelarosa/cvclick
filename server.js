const express = require('express');
const app = express();
const hbs = require('hbs');


app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000
    // Express HBS
hbs.registerPartials(__dirname + '/views/partials');
require('./hbs/helpers');
app.set('view engine', 'hbs');
let urlhome = '/';
let urlabout = '/about';


app.get(urlhome, (req, res) => {
    // let salida = {
    //     nombre: 'Barbaro',
    //     edad: 32,
    //     url: req.url
    // }
    // res.send(salida);
    res.render("home", {
        page: 'Home',
        nombre: "Barbaro de la rosa",
        anio: new Date().getFullYear()
    });
})
app.get(urlabout, (req, res) => {
    // let salida = {
    //     nombre: 'Barbaro',
    //     edad: 32,
    //     url: req.url
    // }
    // res.send(salida);
    res.render("about", {
        page: 'About',
        nombre: "Barbaro de la rosa",
        anio: new Date().getFullYear()
    });
})


app.listen(port, () => {
    console.log(`Tdos perfecto, escuchando por el puesto ${ port }`);
});