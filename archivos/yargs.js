const nombre = {
    demand: true,
    alias: 'n'
}
const matematicas = {
    demand: true,
    alias: 'm'
}
const ingles = {
    demand: true,
    alias: 'i'
}
const programacion = {
    demand: true,
    alias: 'p'
}
const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}
const muestraEst = {
    nombre
}
const actualiza = {
    nombre,
    asignatura: {
        demand: true,
        alias: 'a'
    },
    calificacion: {
        demand: true,
        alias: 'c'
    }
}
const elimina = {
    nombre
}
const argv = require('yargs')
                .command('crear', 'Crear un estudiante', creacion)
                .command('mostrar', 'Lista los estudiantes')
                .command('mostrarEst', 'Lista los estudiantes', muestraEst )
                .command('actualizar', 'Actualiza la información de un curso', actualiza )
                .command('eliminar', 'Elimina la información de un estudiante', elimina )
                .argv;

module.exports = {
    argv
};
