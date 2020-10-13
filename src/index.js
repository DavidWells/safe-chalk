const chalk = require('chalk')
const neverNull = require('./never-null')

/**
 * Chalk instance with conditional disable
 * @param  {boolean} noColors - disable chalk colors
 * @return {object} - chalk instance or proxy noOp
 */
module.exports = function safeChalk(disableColors) {
  /* if no colors return proxy to chalk API */
  return (disableColors) ? neverNull(chalk) : chalk
}
