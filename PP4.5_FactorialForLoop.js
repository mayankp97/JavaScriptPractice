const Prompt = require('prompt-sync')();

let num = Number(Prompt('Enter Number : '));
let fact = 1;
for(let i = 1;i<=num;i++){
    fact = fact * i;
}
console.log(fact);