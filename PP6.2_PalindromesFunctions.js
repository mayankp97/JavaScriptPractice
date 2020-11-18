
const Prompt = require('prompt-sync')();
let num1 = Number(Prompt('Enter Number one : '));
let num2 = Number(Prompt('Enter Number Two : '));

console.log(IsPalindrome(num1,num2));
function IsPalindrome(num1,num2){

    let snum1 = String(num1);
    let snum2 = String(num2);
    if(snum1.length!=snum2.length)
        return false;
    let isPal = true;
    for(let len = 0; len <snum1.length;len++){
        if(snum1[len]!=snum2[snum2.length-len-1])
            isPal=false;
    }
    return isPal;
    
}