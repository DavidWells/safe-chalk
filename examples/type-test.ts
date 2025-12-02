// Type verification for safe-chalk

import safeChalk = require('../types')

const chalk = safeChalk(false)

// Basic colors - should all be typed as Chalk
chalk.green('text')
chalk.red('text')
chalk.blue('text')

// Chained styles
chalk.bold.underline('text')
chalk.red.bgWhite('text')

// Methods that return Chalk
chalk.hex('#ff6600')('text')
chalk.rgb(255, 136, 0)('text')

// Access chalk types via namespace
type MyChalk = safeChalk.Chalk
type MyLevel = safeChalk.Level

const level: MyLevel = 2
