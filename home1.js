const age1 = 51;
const firstName1 = `Petro`;
const lastName = `Savytsky`;
let isTeacher = true;
let subject = `Informatics`;
let teacher1 = {
    age : age1,
    firstName : firstName1,
    lastName : lastName,
    isTeacher : isTeacher,
    subject : subject
};
console.log(teacher1);
console.log(teacher1.subject)
const teacher2 = {};
teacher2.age = 52;
teacher2.firstName = `Tetiana`;
teacher2.lastName = `Savytska`;
teacher2.isTeacher = true;
teacher2.subject = `Khemics`;
console.log(teacher2);
console.log(typeof (teacher1));

greet();
function greet(){
    return console.log(`hello world`);
}

console.log(`test`);


const greet1 = function (){
    return console.log(`hello2 world2`);
}
greet1();
const greet3 = () => console.warn(`second hand`);
greet3();
console.log(typeof (greet3));

const age = 20;
(age < 18) ? console.log(`young`) : console.log(`old`);

let a1 = 3;
let a2 = 5;
let operation = `sum`
function calc(a1,a2,operation) {
    if (operation = `sum`){
        let rezult = a1 + a2
        console.log(rezult)
    }
    else if (operation = `sub`){
        let rezult = a1 - a2
        console.log(rezult)
    }
    else if (operation = `multi`){
        let rezult = a1 * a2
        console.log(rezult)
    }
    else if (operation = `div`){
        let rezult = a1 / a2
        console.log(rezult)
    }
    else {
        console.log(`uncorrect operation`)
    }
}
calc(2,5,`saum`);