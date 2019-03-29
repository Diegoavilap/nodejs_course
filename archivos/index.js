const { argv } = require('./yargs');
const funciones = require('./funciones');

let comando = argv._[0];

if (comando == 'crear') {
    funciones.crear(argv)
}