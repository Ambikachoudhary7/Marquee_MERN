let arr = [90, 67, 89, 98, 78, 88];
function avg(arr){
    let fullmarks = arr.length*100;
    let sum = 0;
    let count = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return (sum/fullmarks)*100;
}
console.log(avg(arr));