const fs = require('fs');
const colors = require('colors');

let salida,
  consola = '';

const crearArchivo = async (base = 5, list = false, hasta = 10) => {
  try {
    salida = `====================\n    Tabla del: ${base}\n====================\n\n`;
    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${'x'.yellow} ${i} ${'='.cyan} ${colors.magenta(base * i)}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log('===================='.yellow);
      console.log('   Tabla del:'.magenta, colors.blue(base));
      console.log('====================\n'.yellow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo
};
