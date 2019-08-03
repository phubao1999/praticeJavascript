// var fs = require('promise-fs');

// function onDone(song) {
//     console.log(song);
// }

// function onError(err) {
//     console.log(err)
// }

// function readFile(path) {
//     return fs.readFile(path, { encoding: 'utf8' })
// }

// readFile('./song1.txt')
//     .then(onDone) 
//     .then(() => {
//         return readFile('./song2.txt');
//     })
//     .then(onDone)
//     .catch(onError);

var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

readFilePromise('song1.txt')
    .then((song1) => {
        console.log(song1);
    })
    .catch((err) => {
        console.log(err);
    });

readFilePromise('song2.txt')
    .then((song2) => {
        console.log(song2);
    })
    .catch((err) => {
        console.log(err);
    });