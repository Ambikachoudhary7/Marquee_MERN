// let isPrime = function(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i==0) return false;
//     }
//     return true;
// }
// console.log(isPrime(29));

// solve using second method
let isPrime = function(num){
    if(num<=1) return false;
    for(let i=2; i<num; i++){
        if(i%2==0) return false;
    }
    return true;
}
console.log(isPrime(2)); 
