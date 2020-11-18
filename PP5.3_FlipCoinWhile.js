let countH = 0;
let countT = 0;
while(countH<=11 && countT<=11){
    let flip = Math.floor(Math.random()*10)%2;
    if(flip==1){
        countH++;
    }
    else
        countT++;
}
if(countH === 11){
    console.log('11 times Head');
}
else
    console.log('11 times Tails');