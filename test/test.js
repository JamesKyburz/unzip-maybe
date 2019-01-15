const { test } = require('tap')
const unzip = require('..')
const fs = require('fs')

const fixtureText = fs.readFileSync(require.resolve('./fixture.txt'))

const concat = async stream => {
  let data = ''
  return new Promise((resolve, reject) => {
    stream.on('data', chunk => (data += chunk))
    stream.on('error', reject)
    stream.on('end', () => resolve(Buffer.from(data)))
  })
}

test('through', async t => {
  const stream = fs
    .createReadStream(require.resolve('./fixture.txt'))
    .pipe(unzip())
  const result = await concat(stream)
  t.same(result, fixtureText)
})

test('unzip', async t => {
  const stream = fs
    .createReadStream(require.resolve('./fixture.txt.zip'))
    .pipe(unzip())
  const result = await concat(stream)
  t.same(result, fixtureText)
})
