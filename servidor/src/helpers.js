const hbs = require('hbs');

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) =>{
    return (nota1, nota2, nota3)/3;
});

hbs.registerHelper('listar', () =>{
    listaEst = require('./listado.json');
    let texto = "<table class='table table-striped table-hover'>" +
                "<thead class='thead-dark'>"+
                "<th>Nombre </th>"+ 
                "<th>Matematicas </th>"+ 
                "<th>Ingles </th>"+
                "<th>Programación </th>"+
                "</thead>"+
                "<tbody>";

    listaEst.forEach(estudiante => {
        texto += '<tr>'+
                 '<td>' + estudiante.nombre + '</td>' +
                 '<td>' + estudiante.matematicas + '</td>' +
                 '<td>' + estudiante.ingles + '</td>' +
                 '<td>' + estudiante.programacion + '</td>'+
                 '</tr>';
    });
    texto += '</tbody>' +
             '</table>';
    return texto;
});


hbs.registerHelper('listar2', () =>{
    listaEst = require('./listado.json');
    let texto = '<div class="accordion" id="accordionExample">';
    i = 1;
    listaEst.forEach(estudiante => {
        texto += `<div class="card">
                    <div class="card-header" id="heading${i}">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapseOne">
                            ${estudiante.nombre}
                        </button>
                    </h2>
                    </div>

                    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                        <div class="card-body">
                            Tiene una nota en matematicas de ${estudiante.matematicas} <br/>
                            Tiene una nota en ingles de ${estudiante.ingles} <br/>
                            Tiene una nota en programacion de ${estudiante.programacion} <br/>
                        </div>
                    </div>
                </div>`;
                i++;
    });
    texto += '</div>';
    return texto;
});