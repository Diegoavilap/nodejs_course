const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion,
    };
    listaEstudiantes.push(est);

    console.log(listaEstudiantes);
    guardar();
}
const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw(err);
        console.log('Archivo creado exitosamente');
    })
}
module.exports = {
    crear
}