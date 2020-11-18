const prompt = require('prompt-sync')();

let num = Number(prompt('Enter Number : '));
let numToWOrd = 'Zero';
if(num === 1)
    numToWOrd = 'One';
else if(num === 2)
    numToWOrd = 'Two';
else if(num === 3)
    numToWOrd = 'Three';
else if(num === 4)
    numToWOrd = 'Four';
else if(num === 5)
    numToWOrd = 'Five';
else if(num === 6)
    numToWOrd = 'Six';
else if(num === 7)
    numToWOrd = 'Seven';
else if(num === 8)
    numToWOrd = 'Eight';
else if(num === 9)
    numToWOrd = 'Nine';
console.log(numToWOrd);
