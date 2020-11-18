const prompt = require('prompt-sync')();

let input = Number(prompt('Enter Number : '));

let num = 2;
for(let i = 2 ;i<=2**input;i=i*2)
    console.log(i);