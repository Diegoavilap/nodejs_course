const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion,
    };
    let duplicado = listaEstudiantes.find( nombre => nombre.nombre === estudiante.nombre)
    if (!duplicado) {
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }else{
        console.log('Ya existe otro estudiante con este nombre');
    }
    
}
const listar = () => {
    try{
        listaEstudiantes = require('./listado.json');
    }catch(error){
        listaEstudiantes = [];
    }
}
const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado exitosamente');
    })
}
const mostrar = () =>{
    listar();
    console.log('notas de los estudiantes');
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas ');
        console.log(' matematicas ' + estudiante.matematicas);
        console.log(' ingles ' + estudiante.ingles);
        console.log(' programacion ' + estudiante.programacion) + '\n';        
        console.log(' \n');        
    });
}

const mostrarEst = (nombre) => {
    listar();
    let est = listaEstudiantes.find(buscar => buscar.nombre === nombre)
    if (!est) {
        console.log('No existe un estudiante con este nombre');
    } else {
        console.log(est.nombre);
        console.log('notas ');
        console.log(' matematicas ' + est.matematicas);
        console.log(' ingles ' + est.ingles);
        console.log(' programacion ' + est.programacion) + '\n';
        console.log(' \n');
    }
}

const mostrarMat = () =>{
    listar();
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if (ganan.length == 0) {
        console.log('ningun estudiante ha ganado');
    }else{
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('notas ');
            console.log(' matematicas ' + estudiante.matematicas);
            console.log(' \n');
        });
    }
}
const actualizar = (nom, asignatura, calificacion) =>{
    listar();
    let encontrado = listaEstudiantes.find(buscar => buscar.nombre === nom);
    if (!encontrado) {
        console.log('Estudiante no existe');
    }else{
        encontrado[asignatura] = calificacion;
        guardar();
    }
}
const eliminar = (nombre) =>{
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
module.exports = {
    crear,
    mostrar,
    mostrarEst,
    mostrarMat,
    actualizar,
    eliminar
}