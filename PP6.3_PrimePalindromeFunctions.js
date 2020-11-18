const { connected } = require('process');

const Prompt = require('prompt-sync')();
let num = Number(Prompt('Enter Number : '));
if(isPrime(num)){
    console.log('Number Is Prime');
    let pal = getPalindrome(num);
    if(isPrime(pal))
        console.log('Its Palndrome is also prime');
    else
        console.log('Its palindrome is not Prime');
}
else
    console.log('Number is not prime');

function getPalindrome(num){
    let snum = String(num);
    let pal = snum[snum.length-1];
    for(let len = 1;len<snum.length;len++){
        pal = pal.concat(snum.charAt(snum.length-1-len));
    }
    return Number(pal);
}

function isPrime(num){
    let is_prime = true;
    for(let i =2; i<=Math.sqrt(num);i++){
        if(num%i===0)
            is_prime = false;
    
    }
    return is_prime;
}