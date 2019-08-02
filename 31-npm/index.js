var readLineSync = require('readline-sync');
var generatePassword = require('password-generator');
console.log(generatePassword(8));

var pet = {}

var name = readLineSync.question('What Your Pet Name; ');
var gender = readLineSync.question('Your Pet Gender(Male/Female): ');
var weight = readLineSync.question('Weight?');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);