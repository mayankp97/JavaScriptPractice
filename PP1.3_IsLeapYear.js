const prompt = require('prompt-sync')();

let year = prompt("Enter year : ");
let message = 'It\'s a leap year bro!';
year = Number(year);
if(year%400!=0 && (year%4!=0 || (year%4==0 && year%100==0))){
    message = 'It\'s not a leap year bro';
}
console.log(message);