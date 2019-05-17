const header = require('./header');
const cmdFlagInfo = require('./cmdFlagInfo');
const start = require('./generator/start');

module.exports = () => {
  const cmd = (process.argv.slice(2)[0] || '').trim();

  header();

  if (cmd === '' || cmd.charAt(0) === '-') {
    cmdFlagInfo(cmd);
  } else {
    start(cmd);
  }
};