const Prompt = require('prompt-sync')();
console.log('Choices :\n1.Fahrenheit to Celsius\n2.Celsius to Fahrenheit');
let choice = Number(Prompt('Enter Choice : '));
let value = Number(Prompt('Enter Value : '));

console.log(Convertor(value,choice));

function Convertor(value,choice){
    let message ;
    switch(choice){
        case 1:
            if(value < 32 || value > 212)
                message = 'Temp. not in range';
            else
                message = String((value - 32) * (5/9)).slice(0,5)+ ' Celsius';
            break;
        case 2:
            if(value < 0 || value > 100)
                message = 'Temp. not in range';
            else
                message = String(value * (9/5)+32).slice(0,5) + ' Fahrenheit';
            break;
    }
    return message;
}
