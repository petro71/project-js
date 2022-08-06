function calc(a1, a2, oper) {
    let rezult;
    if (oper == `+`) {
        rezult = a1 + a2;
    } else if (oper == `-`) {
        rezult = a1 - a2;
    } else if (oper == `*`) {
        rezult = a1 * a2;
    } else {
        rezult = a1 / a2;
    }
    alert(`РезультаТ: `/* , a1, ` `, oper, ` `, a2,` = `*/, rezult);
    alert(rezult);
}
alert(`Привіт!!! Це є калькулятор!!`);
let iswork;
iswork = confirm(`Попрацюємо?`);
if (iswork == true) {
    let a1, a2, oper;
    a1 = Number(prompt(`Перше число: `));
    if (typeof (a1) == NaN) {
        alert(`Це не число і не перше/ restart webpage please`);
    }
    a2 = Number(prompt(`Друге число: `));
    if (a2== false) {
        alert(`Це не число і не друге/ restart webpage please`);
    }
    oper = prompt(`Арифметична дія (+,-,*,/): `);
    if ((oper === `+`)||(oper ===`-`)||(oper ===`*`)||(oper ===`/`)) {
        calc(a1, a2, oper);
    }
    else {
        alert(`я ж просив ввести якусь одну з чотирьох дій uncorrect operation / restart webpage please`);
    }



}
else{
    alert(`Good buy!`);
}