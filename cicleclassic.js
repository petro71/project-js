const ar1 = new Array(8,7,9,6,18,44,5,7,6,8);
let s = 0;
console.log(`vsiogo elementiv`, ar1.length);
ar1.forEach(function (el, numb){
 console.log(numb+1, `element is `, el);
    s = s + el;
})
console.log (`summ =`, s);
