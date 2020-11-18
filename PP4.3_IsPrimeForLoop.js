const Prompt = require('prompt-sync')();

let num = Number(Prompt('Enter Number : '));
let is_prime = true;
for(let i =2; i<=Math.sqrt(num);i++){
    if(num%i===0)
        is_prime = false;
}
if(is_prime)
    console.log('It is Prime Bro');
else
    console.log('Not Prime Bro!');
