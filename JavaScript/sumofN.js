function Sum(value){
    let sum = 0;
    for(let i=1; i<=value; i++){
        sum+=i;
    }
    return sum;
}
console.log(Sum(3));