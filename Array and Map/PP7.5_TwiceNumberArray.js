arr = [];
for(let i = 0;i<100;i++){
    if(Math.floor(i/10) == Math.floor(i%10))
        arr.push(i);
}
console.log(arr);