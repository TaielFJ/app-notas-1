const process = require('process');
const funcionesDeTareas = require('./funcionesDeTareas.js');
let argument = process.argv[2];

switch(argument){
    case 'listar':
        console.log(funcionesDeTareas.leerJson())
        break;
    case undefined:
        console.log('Atencion - Tenes que pasar una accion');
        break;
    default:
        console.log('No entiendo que queres hacer.')
} 
