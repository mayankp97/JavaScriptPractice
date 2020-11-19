const Prompt = require('prompt-sync')();

let num1 = Number(Prompt('Enter Number One : '));
let num2 = Number(Prompt('Enter Number Two : '));
for(let j = num1; j<=num2;j++){
    let is_prime = true;
    for(let i =2; i<=Math.sqrt(j);i++){
        if(j%i===0)
            is_prime = false;
    }
    if(is_prime)
        console.log(j);
}

