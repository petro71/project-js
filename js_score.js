alert( "HELLO TRAINER!!!");
const pupils = [
    {name: 'John', score: 2},
    {name: 'Pete', score: 10},
    {name: 'Mary', score: 8},
    {name: 'Max', score: 12}
];
console.log(pupils);
let high = pupils.filter(el => el.score > 9);
let high1 = [];
high.forEach((el) => high1.push(el.name));
console.log(high);
console.log(`High level consists of ` + high1.length + ` pupils: ` + high1);
alert(`High level consists of ` + high1.length + ` pupils: ` + high1);
let adequate = pupils.filter(el => (el.score < 10)&&(el.score > 6));
let adequate1 = [];
adequate.forEach((el) => adequate1.push(el.name));
console.log(adequate);
console.log(`Adequate level consists of ` + adequate1.length + ` pupils: ` + adequate1);
alert(`Adequate level consists of ` + adequate1.length + ` pupils: ` + adequate1);
let medium = pupils.filter(el => (el.score > 3)&&(el.score < 7));
let medium1 = [];
medium.forEach((el) => medium1.push(el.name));
console.log(medium);
console.log(`Medium level consists of ` + medium1.length + ` pupils: ` + medium1);
alert(`Medium level consists of ` + medium1.length + ` pupils: ` + medium1);
let low = pupils.filter(el => el.score <4);
let low1 = [];
low.forEach((el) => low1.push(el.name));
console.log(low);
console.log(`Low level consists of ` + low1.length + ` pupils: ` + low1);
alert(`Low level consists of ` + low1.length + ` pupils: ` + low1);
alert('Good night, trainer! I tried!');