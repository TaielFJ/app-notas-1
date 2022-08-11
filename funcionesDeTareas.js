const fs = require('fs');

let funcionesDeTareas = {
    leerJson: function () {
        let tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
        let tareasJs = JSON.parse(tareasJson);
        return tareasJs
    }
}

module.exports = funcionesDeTareas