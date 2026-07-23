let arr = [45, 2, 3, 0, 90, -1];
let max = function(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(max(arr));