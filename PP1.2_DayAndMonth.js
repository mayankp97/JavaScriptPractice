const prompt = require('prompt-sync')();
let day = prompt("Enter day :");
let month = prompt("Enter month : ");
let result = false;
if(month>=3 && month <=6)
{
    if((month==3 && day<20) || (month==6 && day>20))
        result = false;
    else
        result = true; 
}
console.log(result);
    
    
