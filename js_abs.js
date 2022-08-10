console.log(`0808task1`);
const numbers =  [1, -2, 3, 0, 4, -5, 6, -11];
console.log(`elements of numbers are ` + numbers);
console.log(`variant 1`);
const numbers0 = numbers.filter(el => (el > 0));
console.log(`numbers0 is ` + numbers0);
const numbers1 = numbers0.map(el=> (Math.pow(el, 2)));
console.log(`numbers1 is ` + numbers1);
console.log(`variant 2`);
const numbers00 = [];
numbers.forEach((el) => {
    if (el >0) {
        numbers00.push(el);
    }
});
console.log(`numbers > 0 is ` + numbers00);
const numbers01 = [];
numbers00.forEach((el) => numbers01.push(el**2))
console.log(`numbers1 is square ` + numbers01);