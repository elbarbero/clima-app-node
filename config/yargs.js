const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciuidad para obtener el clima',
        demand: true
    },
    pais: {
        alias: 'p',
        desc: 'Nombre del pais',
        demand: false
    }
}).argv;

module.exports = {
    argv: argv
}