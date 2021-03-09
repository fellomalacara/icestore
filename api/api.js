require('./config/config');

const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const app = express();
const http = require('http');
const path = require('path');

app.use(fileUpload());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.static('public/dist'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());
//recibe las peticiones de cualquier cliente

app.use(require("./routes/indexRoutes"));
//Directorio publish


app.use(express.static('public'))

app.get('/api/usuario', function(req, res) {
    res.render("hola")
});
app.get('*', (req, res) => {
        res.sendfile(path.resolve(__dirname, 'public/index.html'))
    })
    /// CONEXION A LA BASE DE DATOS DE MONGOOSE ////
mongoose.connect('mongodb+srv://admin:rTa2e8pAdiTHuOWn@icecreamstore.d0aav.mongodb.net/IceCreamStore?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Se conecto");
});
//configuracion del motor de la API
app.listen(process.env.PORT, function() {
    console.log('API EN LINEA');
})