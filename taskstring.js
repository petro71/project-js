console.log(`task width string`);

const str = 'Hello world!';
const b1 = str.indexOf('l');
const b2 = str.length;
const b3 = str.replaceAll('world', 'js');
const b4 = str.slice(0, 6);
const b5 = str.charAt(2);
console.log(str, b1, b2, b3, b4, b5);




const str0 = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?`;
console.log(str0);
const str00 = str0.length;
console.log(str00);

const str1 = str0.replaceAll("who", "WHICH");
console.log(str1);
const str10 = str1.length;
console.log(str10);

const str2 = `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`
const str20 = str2.length;
const str21 = str0.indexOf(str2);
const str22 = str1.slice(0, str21 + 1);
const str23 = str1.slice(str21+ 1 + str20 + 3, str10);
const str24 = str22+str23;
const str25 = str24.length;

console.log(str2);
console.log(str20);
console.log(str21);
console.log(str22);
console.log(str23);
console.log(str24);
console.log(str25);

const str3 = `agriculture`;
const str31 = str0.indexOf(str3);
console.log(str3, str31);
const str32 = `INSERT THIS`;

const str33 = str24.charAt(120);
const str34 = 'INSERT THIS';
console.log(str33);
console.log(str34);

const str35 = str24.slice(0, 120);
const str36 = str24.slice(121, str10);
if (str31 == -1) {
    const str37 = str35 + str34 + str36;
    console.log(str37);
} else {
    console.log(str3, ` in the text`);
}