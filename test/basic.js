var config = require('../')
var test = require('tape')

test('test basic properties of config', (t) => {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.rules))
  t.end()
})

const isObject = (obj) => typeof obj === 'object' && obj !== null