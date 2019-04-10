const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const funciones = require('./funciones');

const directorioPublico = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname, '../partials');

const dirNode_modules = path.join(__dirname, '../node_modules')

require('./helpers')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));

app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

app.use(express.static(directorioPublico));

hbs.registerPartials(directorioPartials);

app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/crearCursos', (req, res) => {
    res.render('crear_cursos',{
        success: 'false'
    });
});
app.post('/crearCursos', (req, res) => {
    
    res.render('crear_cursos', {
        success: funciones.crear(req.body)
    });
});

app.get('/listarCursos', (req, res) => {
    res.render('listar');
});

app.get('/registro', (req, res) => {
    res.render('registro', {
        success: 'false'
    });
});

app.post('/registro', (req, res) => {

    res.render('registro', {
        success: funciones.registrar(req.body)
    });
});

app.get('/verInscritos', (req, res) => {
    res.render('inscritos');
});

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});