const prompt = require('prompt-sync')();

let num = Number(prompt('Enter Number : '));
let week;
switch(num){
    case 1:
        week = 'Monday';
        break;
    case 2:
        week = 'Tuesday';
        break;
    case 3:
        week = 'Wednesday';
        break;
    case 4:
        week = 'Thursday';
        break;
    case 5:
        week = 'Friday';
    case 6 : 
        week = 'Saturday';
        break;
    case 7 :
        week = 'Sunday';
        break;
    default:
        week = 'Wrong Input';

}
console.log(week);