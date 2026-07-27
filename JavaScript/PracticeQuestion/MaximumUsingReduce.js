let arr = [10, 50, 30, 90, 20];
// const max = arr.reduce((acc, curr)=>{
//     if(acc<curr){
//         acc = curr;
//     }
//     return acc;
// }, arr[0]);
// console.log(max);

// find min using reduce
const min = arr.reduce((acc, curr)=>{
    if(acc>curr){
        acc = curr;
    }
    return acc;
}, arr[0]);

console.log(min);