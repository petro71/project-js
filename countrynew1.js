let task = `country`;
console.log(task);
let count = new Array('Austria', 'Belguim', 'Bilorussia', 'Germany', 'France', 'Poland', 'Switzerland','Slovenia', 'Slovakia', 'Serbia', 'Ukraine', 'Uganda');
console.log(count);
let countnew = [];
let countnew1 = [];
console.log(`new country`);
count.forEach((el, numb) => {
    if (el == 'Germany') {
        countnew.unshift(el);
    }
    else if (el == 'France') {
        countnew.unshift(el);
    }
    else if (el == 'Switzerland') {
        countnew.unshift(el);
    }
    else {
        countnew.push(el);
    }
});
console.log(countnew);

count.forEach((el) =>{
    'Germany' ? countnew1.unshift(el) : 'France' ? countnew1.unshift(el) : 'Switzerland' ? countnew1.unshift(el) : countnew1.push(el)

});
console.log(countnew1);