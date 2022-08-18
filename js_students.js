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
studentsReact.forEach((ele) => console.log(ele));
console.log(`students in the array: ` + studentsReact);
alert( "Part II. Money!!!");
console.log(`money: `);
let allMoney = 0;
students.forEach((el) => allMoney = allMoney + el.paid);
console.log(`Money for education of all students are: ` + allMoney + ` UAH `);
alert( "Part III. Full name!!!");
let quantity = students.length;
console.log(`there are ` + students.length + ` students in total`);
console.log(`firstName + lastName: `);
let fullName = [];
students.forEach((el) =>{
    let fulln = el.f_name + ` ` + el.l_name;
    fullName.push(fulln);
});
console.log('full names of our students: (inline) ' + fullName);
console.log('full names of our students: (column) ');
fullName.forEach((el) => console.log(el));

let fullName1 = [];
students.forEach((el) =>{
    let fulln = el.f_name ;
    let fullna = el.l_name;
    fullName1.push(fulln, fullna);
});
console.log('full names of our students: ' + fullName1);
console.log(fullName1);

alert( "Part IV. algoritms+!!!");
console.log(`algoritms+: `);
let oldStudents = students.filter(el => (el.age > 25));
console.log(oldStudents);
oldStudents.forEach((el) => {
    el.courses.push(`Algoritms`);
    console.log(el.f_name, el.courses)

});
console.log(`Course 'Algorims' is recommended for students: `);
oldStudents.forEach((el) => {
    console.log(el.f_name + ` ` + el.l_name);
});
students.forEach((el) => {
      console.log(el.f_name, el.courses);
});


alert( "Part V. branding -");
console.log(`branding -: `);
let optim = students.filter((el) => {
    return el.courses.length > 3});
let optimL = optim.length;//змінна - кількість студентів з більш ніж 3 курсами
console.log(optimL + ` students have > 3 courses`);

students.forEach((el) => {
    console.log(el.f_name, el.courses);
});
optim.forEach((el) => {
    console.log(el.f_name, el.courses);
    let opti =el.courses;
    opti = opti.filter((n)  => {return n != 'Branding' })
    el.courses = opti;
    console.log(el.f_name, el.courses);
});

students.forEach((el) => {
    console.log(el.f_name, el.courses);
});



console.log(`score: `);

console.log(`mySelf: `);