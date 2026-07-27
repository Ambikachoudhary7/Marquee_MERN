let arr = [2, 5, 8, 0, 45, 2, 9];
const sum = arr.reduce((acc, curr)=>{
    return acc+curr;
},0);
console.log(sum);