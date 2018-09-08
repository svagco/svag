const { debuglog } = require('util');

const LOG = debuglog('@svag/svag')

/**
 * The ultimate collection of SVaG elements.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
               async function svag(config) {
  const {
    type,
  } = config
  LOG('@svag/svag called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */


module.exports = svag
//# sourceMappingURL=index.js.map