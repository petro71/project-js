function calc(a1,a2,operation) {
    let rezult;
    if ((typeof (a1) =="number") && (typeof (a2) == "number")){
        if (operation == `sum`){
            rezult = a1 + a2;
            console.log(rezult);
        }
        else if (operation == `sub`){
            rezult = a1 - a2;
            console.log(rezult);
        }
        else if (operation == `multi`){
            rezult = a1 * a2;
            console.log(rezult);
        }
        else if (operation == `div`){
            rezult = a1 / a2;
            console.log(rezult);
        }
        else {
            console.log(`uncorrect operation`)
        }
    }
    else {
        console.log(`uncorrect type of parameter`);
    }


}
calc(2,5,`div`);
calc(2,5,`sub`);
calc(2,5,`sum`);
calc(2,5,`multi`);
calc(2,5,`divo`);
calc(true,7,`sum`);
//alert(`hello world`);
//confirm(`do you want to exit`);
//let a3;
//a3 = confirm(`do you speak english`);
/*console.log(a3);
let a4;
a4 = prompt(`how years old?`);
alert(a4 +` years`);
console.log(`5` === 5);
console.log(`5` == 5);*/
const array1 = [4, `f`, false];
array1.forEach(element => console.log(`your elem ` + element));
array1.forEach(function (el, ind) {
    console.log(ind+1 + ` element ` + el);
})
console.log(Math.PI);