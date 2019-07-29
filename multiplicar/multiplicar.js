/*requireds */
const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {

    if (!Number(base) || !Number(limite)) {
        console.log('No se envió un número');
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.blue);
    }

}



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {


        if (!Number(base) || !Number(limite)) {
            reject('No se envio un número')
            return
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        /* const data = new Uint8Array(Buffer.from('Hello Node.js')); */
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });

}


module.exports = {
    crearArchivo,
    listarTabla
}