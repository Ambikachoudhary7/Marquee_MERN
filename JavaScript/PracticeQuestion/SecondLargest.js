let arr = [45, 2, 3, 0, 90, 80];
let lmax = arr[0];
let smax = lmax;
let max = function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>lmax){
            smax = lmax;
            lmax = arr[i];
        }else if(arr[i] > smax && arr[i]!=lmax){
            smax = arr[i];
        }
    }
    return smax;
}
console.log(max(arr));