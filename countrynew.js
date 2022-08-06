let task = `country`;
console.log(task);
let count = new Array('Austria', 'Belguim', 'Bilorussia', 'Germany', 'France', 'Poland', 'Switzerland','Slovenia', 'Slovakia', 'Serbia', 'Ukraine', 'Uganda');
console.log(count);
let countnew = [];
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
console.log(countnew);