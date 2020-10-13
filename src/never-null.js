
const noOp = () => {}

function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

/* Proxy function to ensure chained chalk calls never fail */
module.exports = function neverNull(obj) {
  function match(some, none = noOp) {
    if (obj !== null) return some(obj)
    return none()
  }
  return new Proxy((some, none) => {
    if (some) return some // has value return it with no chalk wrapper
    if (!some && !none) return obj
    return match(some, none)
  },
  {
    get: (target, key) => {
      const obj = target()
      if (isObject(obj)) return neverNull(obj[key])
      return neverNull()
    },
    set: (target, key, val) => {
      const obj = target()
      if (isObject(obj)) {
        obj[key] = val
      }
      return true
    },
  })
}
