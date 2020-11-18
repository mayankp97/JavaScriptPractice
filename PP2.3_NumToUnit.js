const prompt = require('prompt-sync')();

let num = Number(prompt('Enter Number : '));
let unit = 'ones';
if(num % 1000 === 0)
    unit = 'Thousand';
else if(num % 100 ===0)
    unit = 'Hundred';
else if(num % 10 === 0)
    unit = 'Ten';
console.log(unit);
