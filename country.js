let task = `country`;
console.log(task);
let count = new Array('Austria', 'Belguim', 'Bilorussia', 'Germany', 'France', 'Poland', 'Switzerland','Slovenia', 'Slovakia', 'Serbia', 'Ukraine', 'Uganda');
console.log(count);
let countnew = [];

count.forEach(el => el ? console.log(el): console.log(1));

console.log(`new country`);

count.forEach((el, numb) => {
    if (el == 'Germany') {
        countnew.unshift(el)
        }
    else if (el == 'France') {
        countnew.unshift(el)
            }
        else if (el == 'Switzerland') {
                countnew.unshift(el)
                }
            else {
                    countnew.push(el);
            }
});
countnew.forEach((el, numb) => {
    let str0 = `${numb} element is  ${el}`;
    console.log(str0);
});

//  не працює          if ((el !== 'Switzerland') || (el !== 'France') || (el !== 'Germany')) {

countnew.forEach(el => el ? console.log(el): console.log(1));



console.log(countnew);
