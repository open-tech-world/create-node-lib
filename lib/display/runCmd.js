const header = require('./header');
const usage = require('./usage');
const error = require('../utils/error');
const { version } = require('../../package.json');

module.exports = cmd => {
  switch (cmd) {
    case '':
    case '-h':
    case '--help':
      header();
      usage();
      break;
    case '-v':
    case '--version':
      console.log(`v${version}`);
      break;
    default:
      error(`"${cmd}" is not a valid command!`);
  }
};