var classes = [
    {
        id: 0,
        name: '1A',
        teacher: 0,
    },
    {
        id: 1,
        name: '2A',
        teacher: 1,
    },
    {
        id: 2,
        name: '3A',
        teacher: 2,
    },
    {
        id: 3,
        name: '4A',
        teacher: 3,
    },
    {
        id: 4,
        name: '5A',
        teacher: 4,
    },
]

var teachers = [
    {
        id: 0,
        name: 'Chinh',
        age: 30
    },
    {
        id: 1,
        name: 'Lan',
        age: 55
    },
    {
        id: 2,
        name: 'Hang',
        age: 41
    },
    {
        id: 3,
        name: 'Nga',
        age: 45
    },
    {
        id: 4,
        name: 'Hien',
        age: 25
    }
]

var students = [
    { id: 0, name: 'Minh', height: 120, class: 0 },
    { id: 1, name: 'Nam', height: 120, class: 0 },
    { id: 2, name: 'Luong', height: 120, class: 0 },
    { id: 3, name: 'Tu', height: 120, class: 0 },
    { id: 4, name: 'Hien', height: 120, class: 0 },
    { id: 5, name: 'Tuan', height: 130, class: 1 }
]

function getStudentsInClass(className) {
    var classObject = classes.find((x) => {
        return x.name === className;
    });

    var studentsInClass = students.filter((student) => {
        return student.class === classObject.id;
    })

    return studentsInClass;
}

console.log(getStudentsInClass('1A'));
console.log(getStudentsInClass('2A'));