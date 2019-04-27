#!/usr/bin/env node
const fs = require('fs')
fs.readFile('katakana.json', (err, data) => {
  const kana = JSON.parse(data.toString())
  const extended = kana.filter(x => x.type === 'extended')
  const unique = (v, i, a) => a.indexOf(v) === i
  const types = kana.map(x => x.type).filter(unique)
  console.log(types)
})