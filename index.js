const { tsNamespaceExportDeclaration } = require("@babel/types");

// Code your solutions in this file

function writeCards(name, eventName) {
    let arr = [];
    for (let i = 0; i < name.length; i++) {
         arr.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }
    return arr;
}
function countDown(number) {
    let countDown = number;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}