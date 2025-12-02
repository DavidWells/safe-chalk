// Types for safe-chalk - wrapper around chalk with easy enable/disable option

import chalk = require('chalk')

/**
 * Creates a chalk instance with optional color disabling
 * @param disableColors - When true, returns a no-op proxy that strips colors
 * @returns A chalk instance or chalk-compatible proxy
 */
declare function safeChalk(disableColors: boolean): chalk.Chalk

declare namespace safeChalk {
  export import Chalk = chalk.Chalk
  export import Level = chalk.Level
  export import Options = chalk.Options
  export import Instance = chalk.Instance
  export import ColorSupport = chalk.ColorSupport
  export import ChalkFunction = chalk.ChalkFunction
}

export = safeChalk
