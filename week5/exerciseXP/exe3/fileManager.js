const fs = require('fs')

function readFile(path) {
  return fs.readFileSync(path, 'utf8')
}

function writeFile(path, content) {
  return fs.writeFileSync(path, content)
}

module.exports = { readFile, writeFile }
