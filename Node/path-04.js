const path = require('path');

const fpath = 'a/v/d/index.html';

const fullName = path.basename(fpath);
const nameWithExt = path.basename(fpath, '.html');

console.log(fullName);
console.log(nameWithExt);