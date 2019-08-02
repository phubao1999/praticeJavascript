const path = require('path');
const fs = require('fs');
const text = fs.readFileSync('./song.txt', {encoding: 'utf8'});
fs.writeFileSync('./song.txt', 'I Trying To Become Mern or Mean Full Stack Developer');
console.log(path.extname('index.css'));
console.log(text);