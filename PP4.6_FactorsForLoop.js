const Prompt = require('prompt-sync')();

let num = Number(Prompt('Enter Number : '));
let is_prime = true;
for(let i =2; i<=num;i++){
    if(num%i===0)
    {
        if(isPrime(i))
            console.log(i);
    }
}

function isPrime(num){
    let is_prime = true;
    for(let i =2; i<=Math.sqrt(num);i++){
        if(num%i===0)
            is_prime = false;
    
    }
    return is_prime;
}