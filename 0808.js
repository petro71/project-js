const menu = {
    width: 300,
    height: 200,
    title: "Menu",

};
for (let key in menu) {
   alert( "Key: " + key + " value: " + menu[key] );
}

Object.keys(menu);
console.log(Object.keys(menu));

Object.values(menu);
console.log(Object.values(menu));

Object.getOwnPropertyNames(menu);
console.log(Object.getOwnPropertyNames(menu));

menu.hasOwnProperty('dd');
console.log(menu.hasOwnProperty('dd'));

menu.hasOwnProperty('title');
console.log(menu.hasOwnProperty('title'));

let numbers = [1,2,3,4];
numbers = numbers.filter((n) => {return n != 3});
console.log(numbers); // [1,2,4]



const person = {
    name: 'Sam',
    greet: function() { console.log('hello',  this.name) }
}

person.greet();

