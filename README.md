# Safe Chalk

Wrapper for `chalk` package with easy enable/disable option.

## Usage

Import `safe-chalk` set enabled/disabled &

```js
const safeChalk = require('safe-chalk')

console.log(chalk.red.bold('Hello'))
/* Normal chalk instance prints red bold "Hello" text */

/* In app code conditionally disable ... */
const foo = 'bar'
const disableColors = (foo === 'bar') ? true : false
const chalk = safeChalk(disableColors)

console.log(chalk.red.bold('Hello'))
/* Never-null chalk instance prints "Hello" text with no colors */
```

**Real world example:**

```js
const safeChalk = require('safe-chalk')
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))

// If --json flag disable chalk colors
const DISABLE_COLORS = argv.json || process.env.NO_COLORS

// Export chalk instance for usage in CLI
module.exports = safeChalk(DISABLE_COLORS)
```

Now if the `--json` flag is passed into the CLI command, chalk colors will be disabled

```bash
my-cli --json
# No colors!
```

## How it works.

If chalk is disabled the chalk instance will be wrapped in a never null proxy.

This means chalk won't throw for chained calls.

## Alternative Approaches

[chalk](https://github.com/chalk/chalk) supports `env` variables `process.env.FORCE_COLOR=0` to disable colors.

If the `environment` variable works for your use case, use `chalk`.

**Why this package?**

The env var must be set before chalk is imported, this can be tricky in certain cases. The env variable can also conflict with other packages using chalk.
