var readLineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1. Show All Student');
    console.log('2. Create New Student');
    console.log('3. Save & Exit');
    var option = readLineSync.question('> ');
    switch (option){
        case '1':
            showAllStudents();
            showMenu();
            break;
        case '2':
            createNewStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong Option');
            showMenu();
            break;
    }
}

function showAllStudents(){
    for (var student of students){
        console.log(`Name: ${student.name}, Age: ${student.age}`);
    }
}

function createNewStudent(){
    var name = readLineSync.question('Name: ');
    var age = readLineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content, {encoding: 'utf8'});
}

function main (){
    loadData();
    showMenu();
}

main();