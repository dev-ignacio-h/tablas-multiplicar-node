const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Toma la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Establece un límite máximo de múltiplo'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error('La base tiene que ser un número');
    } else if (isNaN(argv.b)) {
      throw new Error('la opción hasta tiene que ser un número');
    }
    return true;
  }).argv;

module.exports = argv;
