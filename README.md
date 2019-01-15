# unzip-maybe

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![build status](https://api.travis-ci.org/JamesKyburz/unzip-maybe.svg)](https://travis-ci.org/JamesKyburz/unzip-maybe)
[![downloads](https://img.shields.io/npm/dm/unzip-maybe.svg)](https://npmjs.org/package/unzip-maybe)
[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/unzip-maybe.svg)](https://greenkeeper.io/)

Transform stream that unzips a zip or returns a through stream if not.

Thanks to [gunzip-maybe!](https://github.com/mafintosh/gunzip-maybe)

### usage

```javascript
const unzip = require('unzip-maybe')
source.pipe(unzip()).pipe(destination)
```

# license
[Apache License, Version 2.0](LICENSE)
