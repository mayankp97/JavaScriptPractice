const Prompt = require('prompt-sync')();

let num = Number(Prompt('Enter Number : '));

let i = 1;
while(i<256 && i<=2**num){
    i = i * 2;
    console.log(i);
}