const {cursos} = require('./cursos')
const fs = require('fs');
const express = require('express')
const app = express()


const opciones = {
    id_curso:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
}
const argv = require('yargs')
            .command('inscribir', 'Inscribirme en un cruso', opciones)
            .argv

//Arrow function para la creacion del archivo de inscripción
let mostrarWeb = (datos, curso_encontrado) => {
    let contenido = 'El estudiante ' + datos.nombre + ' con cédula número: ' + datos.cedula + '<br />' +
                    'se ha matriculado exitosamente en el curso "' + curso_encontrado.nombre + '"' + '<br />' +
                    'que tiene una duración de ' + curso_encontrado.duracion + ' meses y un valor de $' + curso_encontrado.valor;
    app.get('/', (req, res) => {
        res.send(contenido)
    })
    app.listen(3000)
}

// Función encargada del listado de cursos
function listarCursos() {
    console.log("---- Listado de Cursos ----");
    cursos.forEach((curso, index) => {
        setTimeout(() => {
            console.log('el curso "' + curso.nombre + '" con id: ' + curso.id + ' tiene una duración de ' + curso.duracion + ' meses y costo de $' + curso.valor);
        }, 2000 * (index));
    });
}

// Valida si existe algun comando a la hora de ejecutar la aplicación
if (argv._.length) {
    //Busqueda del curso de acuerdo al id pasado como parametro
    let curso_encontrado = cursos.find(curso => curso.id == argv.id_curso);
    
    if (curso_encontrado !== undefined) {
        mostrarWeb(argv, curso_encontrado);
    }else{
        console.log('No se ha encontrado ningún Curso con el ID ingresado');
        listarCursos();
    }    
}else{
    listarCursos();
}




