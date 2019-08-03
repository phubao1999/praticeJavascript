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
const axios = require('axios');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

// readFilePromise('song1.txt')
//     .then((song1) => {
//         console.log(song1);
//         return readFilePromise('song2.txt');
//     })
//     .then((song2) => {
//         console.log(song2);
//         return readFilePromise('song3.txt');
//     })
//     .then((song3)=> {
//         console.log(song3);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

Promise.all([
    readFilePromise('song1.txt'),
    readFilePromise('song2.txt'),
    readFilePromise('song3.txt')
]).then( (values) => {
    console.log(values);
}).catch((err) => {
    console.log(err);
})

    