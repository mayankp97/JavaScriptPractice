const Prompt = require('prompt-sync')();

let num = Number(Prompt('Enter Number : '));

let n = 1;
while(num!=n){
    if(n > num/2){
        n = num/2;
    }
    else if(n < num/2){
        n++;
    }
}

