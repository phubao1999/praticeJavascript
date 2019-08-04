// Node co
// Async Await

var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// co(function* () {
//     var song1 = yield readFilePromise('./song1.txt');
//     var song2 = yield readFilePromise('./song2.txt');
//     var song3 = yield readFilePromise('./song3.txt');
//     return [song1, song2, song3];
// }).then((values) => {
//     console.log(values)
// }).catch((err) => {
//     console.log(err)
// });

async function run () {
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    var song3 = await readFilePromise('./song3.txt');
    return  [song1, song2, song3]
}

run().then((values) => {
    console.log(values);
}).catch((err) => {
    console.log(err);
})