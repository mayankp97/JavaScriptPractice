let arr = [];
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*(999-100))+100;
    arr.push(num);
}
let max1 = 0;
let max2 = 0;
let min1 = 1000;
let min2 = 1000;
for(let item of arr){
    if(item >= max2){
        if(item >= max1){
            max2 = max1;
            max1 = item;
        }
        else
            max2 = item;
    }
    if(item <= min2){
        if(item <= min1){
            min2 = min1;
            min1 = item;
        }
        else
            min2 = item;
        
    }
}
console.log(arr);
console.log('2nd largest : ',max2);
console.log('2nd smallest : ',min2);