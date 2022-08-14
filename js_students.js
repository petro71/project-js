alert( "HELLO TRAINER!!!");
const pupils = [
    {name: 'John', score: 2},
    {name: 'Pete', score: 10},
    {name: 'Mary', score: 8},
    {name: 'Max', score: 12}
];
const students = [
    {
        'id': 1,
        'f_name': 'Alex',
        'l_name': 'B',
        'gender': 'M',
        'married': false,
        'age': 22,
        'paid': 250,
        'courses': ['JavaScript', 'React']
    },
    {
        'id': 2,
        'f_name': 'Pete',
        'l_name': 'M',
        'gender': 'M',
        'married': true,
        'age': 32,
        'paid': 150,
        'courses': ['JavaScript', 'PWA']
    },
    {
        'id': 3,
        'f_name': 'Rubi',
        'l_name': 'S',
        'gender': 'F',
        'married': false,
        'age': 24,
        'paid': 350,
        'courses': ['Blogging', 'React', 'UX']
    },
    {
        'id': 4,
        'f_name': 'Zack',
        'l_name': 'F',
        'gender': 'M',
        'married': true,
        'age': 45,
        'paid': 250,
        'courses': ['Git', 'React', 'Branding']
    }
];
alert("Part I. React!!!");
console.log(`react: `);
let studentsReact = [];
students.forEach((el) => {
    let studentCourses =el.courses;
    studentCourses.forEach((elem) => {
        if (elem == 'React') {
            studentsReact.push(el.f_name);
        }
    });
});
console.log('students study the React. We have '+ studentsReact.length + ` students: `);
studentsReact.forEach((ele) => {
    console.log(ele);
});
console.log(`students in the array: ` + studentsReact);
alert( "Part II. Money!!!");
console.log(`money: `);
let allMoney = 0;
students.forEach((el) => allMoney = allMoney + el.paid);
console.log(`Money for education of all students are: ` + allMoney + ` UAH `);
alert( "Part III. Full name!!!");
console.log(`firstName + lastName: `);
students.forEach((el) =>{

})


console.log(`algoritms+: `);

console.log(`branding -: `);

console.log(`score: `);

console.log(`mySelf: `);

