let arr = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
let max = arr[0] > arr[1] ? arr[0] : arr[1] > arr[2] ? arr[1] : arr[2];
let min = arr[0] < arr[1] ? arr[0] : arr[1] < arr[2] ? arr[1] : arr[2];
console.log('numbers :',arr[0],arr[1],arr[2]);
console.log(min);
console.log(max);
