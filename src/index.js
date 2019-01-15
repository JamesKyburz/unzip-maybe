const peek = require('peek-stream')
const through = require('through2')
const pumpify = require('pumpify')
const unzipper = require('unzipper')

const isZip = data => data[0] === 80 && data[1] === 75

const unzip = maxRecursion => {
  if (!(maxRecursion >= 0)) maxRecursion = 3
  return peek({ newline: false, maxBuffer: 10 }, (data, swap) => {
    if (isZip(data)) {
      swap(null, pumpify(unzipper.ParseOne(), unzip(maxRecursion - 1)))
    } else {
      swap(null, through())
    }
  })
}

module.exports = unzip
