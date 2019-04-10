const fs = require('fs');
listaCursos = [];
inscripciones = [];

const crear = (curso) => {
    listar();
    console.log(listaCursos);
    let cur = {
        id: curso.id,
        nombre: curso.nombre,
        descripcion: curso.descripcion,
        valor: curso.valor,
        modalidad: curso.modalidad,
        intensidad_horaria: curso.intensidad_horaria,
        estado: 'disponible',
    };
    let duplicado = listaCursos.find(curso_lista => curso_lista.id === cur.id)
    if (!duplicado) {
        listaCursos.push(cur);
        console.log('listacursos',listaCursos);
        guardar();
        return 'ok';
    } else {
        return 'ya_existe';
    }

}
const listar = () => {
    try {
        listaCursos = require('./cursos.json');
    } catch (error) {
        listaCursos = [];
    }
}
const guardar = () => {
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('./src/cursos.json', datos, (err) => {
        if (err) throw (err);
        return 'ok';
    })
}
const mostrar = () => {
    listar();
    console.log('notas de los estudiantes');
    listaCursos.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas ');
        console.log(' matematicas ' + estudiante.matematicas);
        console.log(' ingles ' + estudiante.ingles);
        console.log(' programacion ' + estudiante.programacion) + '\n';
        console.log(' \n');
    });
}
const actualizar = (nom, asignatura, calificacion) => {
    listar();
    let encontrado = listaEstudiantes.find(buscar => buscar.nombre === nom);
    if (!encontrado) {
        console.log('Estudiante no existe');
    } else {
        encontrado[asignatura] = calificacion;
        guardar();
    }
}
const eliminar = (nombre) => {
    listar();
    console.log(nombre);
    let nuevo = listaEstudiantes.filter(mat => mat.nombre != nombre);
    if (nuevo.length == listaEstudiantes.length) {
        console.log('ningun estudiante tiene ese nombre');
    } else {
        listaEstudiantes = nuevo;
        guardar();
    }
}

const registrar = (inscripcion) => {
    listarInscripciones();
    let insc = {
        curso_id: inscripcion.curso_id,
        cedula: inscripcion.cedula,
        nombre: inscripcion.nombre,
        correo: inscripcion.correo,
        telefono: inscripcion.telefono
    };
    let duplicado = inscripciones.find(inscripcion_lista => inscripcion_lista.curso_id === insc.curso_id && inscripcion_lista.cedula === insc.cedula)
    if (!duplicado) {
        inscripciones.push(insc);
        guardarInscripciones();
        return 'ok';
    } else {
        return 'ya_existe';
    }

}
const listarInscripciones = () => {
    try {
        inscripciones = require('./inscripciones.json');
    } catch (error) {
        inscripciones = [];
    }
}
const guardarInscripciones = () => {
    let datos = JSON.stringify(inscripciones);
    fs.writeFile('./src/inscripciones.json', datos, (err) => {
        if (err) throw (err);
        return 'ok';
    })
}
module.exports = {
    crear,
    mostrar,
    actualizar,
    eliminar,
    registrar,
    listarInscripciones
}