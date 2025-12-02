// Example usage of safe-chalk

const safeChalk = require('../src')

const chalk = safeChalk(false)

// Basic colors
console.log(chalk.green('green text'))
console.log(chalk.red('red text'))
console.log(chalk.blue('blue text'))

// Chained styles
console.log(chalk.bold.underline('bold underline'))
console.log(chalk.red.bgWhite('red on white'))

// Hex and RGB
console.log(chalk.hex('#ff6600')('orange hex'))
console.log(chalk.rgb(255, 136, 0)('orange rgb'))

// Disabled colors - returns plain strings
const noColor = safeChalk(true)
console.log(noColor.green('no color green'))
console.log(noColor.bold.red('no color bold red'))
