const Prompt = require('prompt-sync')();

let num = Number(Prompt("Enter a Number : "));
let message = 0;
for(let i = 1; i<=num;i++){
    message += 1/i;
}
console.log(message);