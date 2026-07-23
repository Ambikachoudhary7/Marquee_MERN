let str = "Ambika";
let rev = function(str){
    let ans = "";
    for(let i=str.length-1; i>=0; i--){
       ans+=str[i];
    }
    return ans;
}
console.log(rev(str));