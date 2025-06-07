const chalk = require('chalk')
const neverNull = require('./never-null')

/**
 * @typedef {import('chalk').Chalk} Chalk
 * @typedef {ReturnType<typeof neverNull>} NeverNullProxy
 */

/**
 * Chalk instance with conditional disable
 * @param {boolean} disableColors - disable chalk colors
 * @returns {Chalk | NeverNullProxy} - chalk instance or proxy noOp
 */
module.exports = function safeChalk(disableColors) {
  /* if no colors return proxy to chalk API */
  return (disableColors) ? neverNull(chalk) : chalk
}
