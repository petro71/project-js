const ar1 = [8,7,9,6,18,44,5,7,6,8];
let s = 0;
console.log(`vsiogo elementiv`, ar1.length);
let kilc = ar1.length;
for (let j =0; j < kilc; j++){
    console.log(j+1, ` element is`, ar1[j]);
    s = s + ar1[j];
}

console.log (`summ =`, s);
