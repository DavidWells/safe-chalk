const noOp = () => {}

/**
 * @param {any} obj - Object to check
 * @returns {boolean} - Whether the value is a non-null object
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Creates a proxy that ensures chained property access never fails
 * @template T
 * @param {T} obj - The object to wrap in a never-null proxy
 * @returns {((some?: any, none?: () => any) => any) & { [key: string]: any }} - A callable proxy that recursively wraps all accessed properties
 */
module.exports = function neverNull(obj) {
  function match(some, none = noOp) {
    if (obj !== null) return some(obj)
    return none()
  }
  /** @type {((some?: any, none?: () => any) => any) & { [key: string]: any }} */
  const proxy = new Proxy((some, none) => {
    if (some) return some // has value return it with no chalk wrapper
    if (!some && !none) return obj
    return match(some, none)
  },
  {
    get: (target, key) => {
      /** @type {() => any} */
      const targetFn = target
      const obj = targetFn()
      if (isObject(obj)) return neverNull(obj[key])
      return neverNull(null)
    },
    set: (target, key, val) => {
      /** @type {() => any} */
      const targetFn = target
      const obj = targetFn()
      if (isObject(obj)) {
        obj[key] = val
      }
      return true
    },
  })
  return proxy
}
