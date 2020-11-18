let rupees = 100;
while(rupees>=0 && rupees<=200){
    let flip = Math.floor(Math.random()*10)%2;
    if(flip==0)
        rupees--;
    else
        rupees++;
}
if(rupees==0)
    console.log('Broke');
else
    console.log('Won');