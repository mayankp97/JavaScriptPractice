const Prompt = require('prompt-sync')();
let arr = [];
let num1 = Number(Prompt('Enter Number : '));
arr.push(num1);
let num2 = Number(Prompt('Enter Number : '));
arr.push(num2);
let num3 = Number(Prompt('Enter Number : '));
arr.push(num3);
let isum = 0;

arr.forEach(sum);

if(isum == 0)
    console.log('Sum is Zero');
else
    console.log('Sum is not zero.');
function sum(num){
    isum = isum+num;
}