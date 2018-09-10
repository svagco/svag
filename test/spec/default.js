import { ok } from 'zoroaster/assert'
import Context from '../context'
import { Window, Toolbar, Shadow } from '../../src'
import { makeElement, roundedCorner, minify, svg, rect } from '../../src/lib'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'exports a window'() {
    const res = Window({
      content: '<test/>',
      width: 100,
      height: 100,
    })
    ok(typeof res, 'string')
  },
  'exports components'() {
    ok(typeof Toolbar, 'function')
    ok(typeof Shadow, 'function')
  },
  'exports lib methods'() {
    ok(typeof makeElement, 'function')
    ok(typeof roundedCorner, 'function')
    ok(typeof minify, 'function')
    ok(typeof svg, 'function')
    ok(typeof rect, 'function')
  },
}

export default T