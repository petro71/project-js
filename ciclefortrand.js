const ar1 = [8,7,9,6,18,44,5,7,6,8];
let s = 0;
console.log(`vsiogo elementiv`, ar1.length);
let kilc = ar1.length;
(ar1[j], j, s) =>{
    for (let j =0; j < kilc; j++){
        let str0 = `${j+1} element is ${ar1[j]}`;
        console.log(str0);
        s = s + ar1[j];
    }

}
(ar1[j],j,s);
console.log (`summ =`, s);







