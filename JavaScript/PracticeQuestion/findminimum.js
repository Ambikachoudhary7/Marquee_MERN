let arr = [45, 2, 3, 0, 90, -1];
let min = arr[0];
let min = function(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
console.log(min(arr));