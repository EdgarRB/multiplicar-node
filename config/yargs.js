const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de múltiplicar', opciones)
    .command('crear', 'Guarda en un txt la tabla de múltiplicar', opciones)
    .help()
    .argv;


module.exports = argv