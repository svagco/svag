import { ok } from 'zoroaster/assert'
import Context from '../context'
import { Window } from '../../src'

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
}

export default T