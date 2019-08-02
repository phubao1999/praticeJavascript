/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: console.log(String.fromCharCode(97)) sẽ hiển thị ra màn hình chữ "a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
//122
// var alpha = () => {
//     var a = 97;
//     var b = 123;

//     for (k = a; k < b; k++) {
//         var str = String.fromCharCode(k);
//         console.log(str);
//     }
// }
// console.log(alpha());
// =====================================
// var members = [
//   	{ name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
// ];

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// function isFemale(arr) {
//     return arr.filter(ar => ar.gender == 'female');
// }
// function moreThanFive(arr){
//     return arr.filter(ar => ar > 5);
// }
// function isWithTwo(arr){
//     return arr.filter(ar => ar % 2 == 0);
// }
// console.log(isWithTwo(numbers));
// console.log(isFemale(members));
// console.log(moreThanFive(numbers));
// ===============================
// var array1 = [3,5,9,7];
// var array2 = [2,4,5,8,10];
// function isDevided(arr){
//     var found = arr.find(element => element %2 == 0)
//     if (typeof found === 'number'){
//         return found
//     }
//     else {
//         return 'undefined'
//     }
// }

// console.log(isDevided(array1));
// console.log(isDevided(array2));
// ==================================
// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];


// function totalVotes(arr){
//     const isVoted = arr.filter(ar => ar.voted == true);
//     return isVoted.length;
// }

// console.log(totalVotes(voters));
// console.log('===================');
// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// function shoppingSpree(arr){
//     const item = arr.map(ar => ar.price);
//     const reducer = (a, b) => a + b;
//     return item.reduce(reducer); 
// }

// console.log(shoppingSpree(wishlist));
// =======================================
// function flatten(arr) {
//     const reducer = (a, b) => a + b;
//     return arr.reduce(reducer, 0);
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays));
// =========================================
// function sortNumbers(arr) {
//     const smallToBigNumbers = arr.sort((a,b) => b - a);
//     return smallToBigNumbers;
// }

// console.log(sortNumbers([1,4,2,6,3,7,5,9,10,14,11]));
// console.log('================');
// function lengthSort(arr) {
//     const lessToMuchLength = arr.sort((a,b) => a.length - b.length);
//     return lessToMuchLength;
// }
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
// console.log('================');
// function alphabetical(arr) {
//     const alphabeti = arr.sort();
//     return alphabeti;
// }
// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten", "ann"]));
// console.log('===================');
// function byAges(arr){
//     const smallAgeToGreaterAge = arr.sort((a, b) => a.age - b.age);
//     return smallAgeToGreaterAge;
// }

// var byAge = ([
//   {
//     name: "Quiet Samurai",
//     age: 22
//   },
//   {
//     name: "Arrogant Ambassador",
//     age: 100
//   },
//   {
//     name: "Misunderstood Observer",
//     age: 2
//   },
//   {
//     name: "Unlucky Swami",
//     age: 77
//   }
// ]);
// console.log(byAges(byAge));
// console.log('==================');
// var students = [
//   { name: 'A', score: 100 },
//   { name: 'B', score: 10 },
//   { name: 'C', score: 101 },
//   { name: 'D', score: 50 },
//   { name: 'E', score: 75 }
// ];
// function getTopStudents(students) {
//     const threeStudent = students.slice(2);
//     const topScore = threeStudent.sort((a,b) => b.score - a.score);
//     return topScore;
// }

// console.log(getTopStudents(students));
// =======================================
// function powerup(arr) {
//     let divededOfTwo = arr.filter(ar => ar % 2 == 0);
//     let square = divededOfTwo.map(num => num * num);
//     return square;
// }

// console.log(powerup([1,2,3,4,5,6,7,8]));
// console.log('=========================');
// function average(arr) {
//     let numbers = arr.map(num => Math.round(num));
//     let averageNumber = numbers.reduce((a,b) => a + b);
//     return Math.ceil(averageNumber / numbers.length);
// }
// console.log(average([8, 8 , 6.75]));
// console.log('============================');
// function positiveNumber(arr) {
//   let moreThanZero = arr.map(num => Math.abs(num));
//   return moreThanZero;
// }
// console.log(positiveNumber([-2, 3, -4, -7, 10]));
// console.log('===============================');
// console.log((Math.floor(Math.random() * 100) + 1));
// console.log('================================');
// function circleMachine(num){
//     let s = num * Math.PI;
//     let d = num * 2 * Math.PI;
//     return `Dien tich la ${s} va Chu Vi la ${d}`
// }
// console.log(circleMachine(3));
// console.log('================================');
// function sinCosTan(num){
//     let sin = Math.sin(num * Math.PI / 180);
//     let cos = Math.cos(num * Math.PI / 180);
//     let tan = sin / cos;
//     return `Sin Is ${sin}, Cos Is ${cos} Finally Tan Is ${tan}`;
// }
// console.log(sinCosTan(45));
// =======================================
// let student1 = {
//     name: 'Herry',
//     gender: 'Male',
//     age: 18
// }

// function showInfo(obj) {
//     this.obj = obj;
//     return obj;
// }

// console.log(showInfo(student1));
// console.log('===========================');
// var student2 = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// function updateObj(name ,sclass) {
//     this.name = name;
//     this.sclass = sclass;
// }

// var updatedObj = new updateObj('david rayy', 'VI');
// console.log(updatedObj);
// ==========================================
function Student(name, level) {
    this.name = name;
    this.level = level;
}
Student.prototype.school = 'I Love Coder Tokyo';


var student1 = new Student("Herry", "01");
var student2 = new Student("Nancy", "02");

console.log(student1, student1.school);
console.log(student2, student2.school);
console.log('=========================');
function Studenta(diemToan, diemLy, diemHoa) {
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
}
Studenta.prototype.average = function (){
    console.log(this);
}

var student3 = new Studenta(6, 7, 7);
var student4 = new Studenta(8, 9, 6);

console.log(student3.average()); // 7
console.log(student4.average()); // 8

