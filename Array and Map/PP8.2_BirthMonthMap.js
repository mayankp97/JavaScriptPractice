let map = new Map();
for(let i=1;i<=50;i++){
    let bMonth = Math.floor(Math.random() * 11);
    bMonth++;
    if(map.has(bMonth)){
        map.get(bMonth).push(i);
    }
    else{
        map.set(bMonth,[i]);
    }
}
for(let [key,value] of map){
    console.log('People having Birthdays in Month '+key+' : '+String(value));
}