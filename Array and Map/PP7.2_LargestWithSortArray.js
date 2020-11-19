let arr = [];
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*(999-100))+100;
    arr.push(num);
}
arr.sort();
console.log(arr);
console.log('2nd largest : ',arr[8]);
console.log('2nd smallest : ',arr[1]);