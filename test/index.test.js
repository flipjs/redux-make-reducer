import test from 'ava'
import makeReducer from '../src'

test('makeReducer', (t) => {
  t.same(makeReducer(), undefined)
})

