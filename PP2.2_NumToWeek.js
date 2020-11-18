const prompt = require('prompt-sync')();

let num = Number(prompt('Enter Number : '));
if(num === 1)
    numToWOrd = 'Sunday';
else if(num === 2)
    numToWOrd = 'Monday';
else if(num === 3)
    numToWOrd = 'Tuesday';
else if(num === 4)
    numToWOrd = 'Wednesday';
else if(num === 5)
    numToWOrd = 'Thursday';
else if(num === 6)
    numToWOrd = 'Friday';
else if(num === 7)
    numToWOrd = 'Saturday';
else if(num === 8)
    numToWOrd = 'Sunday';
console.log(numToWOrd);