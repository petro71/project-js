console.log(`task width string`);
const str0 = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?`;
const str1 = str0.replaceAll("who", "WHICH");
console.log(str1);
const str10 = str1.length;
const str2 = `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.`
const str20 = str2.length;
const str21 = str0.indexOf(str2);
const str22 = str1.slice(0, str21 + 1);
const str23 = str1.slice(str21+ 1 + str20 + 3, str10);
const str24 = str22+str23;
const str25 = str24.length;
console.log(str24);
const str3 = `agriculture`;
const str31 = str0.indexOf(str3);
const str32 = `INSERT THIS`;
const str33 = str24.charAt(120);
console.log(`index number 120 is `, str33);
const str35 = str24.slice(0, 120);
const str36 = str24.slice(121, str10);
if (str31 == -1) {
    const str37 = str35 + str32 + str36;
    console.log(str37);
} else {
    console.log(str3, ` in the text`);
}
