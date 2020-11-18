const prompt = require('prompt-sync')();

let a = Number(prompt('Enter Number : '));
let b = Number(prompt('Enter Number : '));
let c = Number(prompt('Enter Number : '));
let op = a+b*c;
op = op > c+a/b ? op : c+a/b > a*b+c ? c+a/b : a*b+c > a%b+c ? a*b+c : a%b+c;
console.log(op);