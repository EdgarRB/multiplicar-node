/*requireds -- son como los imports por lo que parece */
/* const fileSys = require('fs');
const fileSys = require('fs');
const fileSys = require('fs'); */


/**
 * Esto se importara a partir de otro archivo para mejorar la claridad del codigo
 */

/* const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de múltiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: false,
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Guarda en un txt la tabla de múltiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: false,
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
 */

//console.log(module);


const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.green)).catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log('comando no reconocido');


}
//let base = 7;

///Esto da todo tipo de informacion del ordenador
//console.log(process);

//console.log(process.argv);

/*Lo de parametro es para que recoja lo que escribimos a traves de la terminal */
/* let argv = process.argv; */
/* let argv2 = process.argv; */

/* console.log(`${argv.base}  ${argv.limite}`); */
/* console.log(argv2); */


/* let parametro = argv[2]; */
/*Si por ejemplo paso base = 5 es para que solo coja el 5 */
/* let base = parametro.split('=')[1]; */

/* console.log(base); */

//console.log(multiplicar);


/* let data = '';

for (let i = 1; i < 11; i++) {
    data += (`${base} * ${i} = ${base * i} \n`);
}

/* const data = new Uint8Array(Buffer.from('Hello Node.js')); */
/* fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado!');
}); */