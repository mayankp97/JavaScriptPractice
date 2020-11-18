const prompt = require('prompt-sync')();

let num = Number(prompt('Enter Number : '));
let numToWOrd = 'Zero';
switch(num){
    case 1:
        numToWOrd = 'One';
        break;
    case 2:
        numToWOrd = 'Two';
        break;
    case 3:
        numToWOrd = 'Three';
        break;
    case 4:
        numToWOrd = 'Four';
        break;
    case 5:
        numToWOrd = 'Five';
        break;
    case 6:
        numToWOrd = 'Six';
        break;
    case 7:
        numToWOrd = 'Seven';
        break;
    case 8:
        numToWOrd = 'Eight';
        break;
    case 9:
        numToWOrd = 'Nine';
        break;
    default:
        numToWOrd = 'Wrong Input';
        break;
    
}
console.log(numToWOrd);