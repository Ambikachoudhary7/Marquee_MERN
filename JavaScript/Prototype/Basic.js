// let res = function(){
//     return this.split("").reverse().join("");
// }
// console.log(res.call("Ambika"));

let names = (name)=> name.split("").join("*");
console.log(names("Ambika"));