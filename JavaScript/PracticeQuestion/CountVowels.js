let str = "Ambaekidou";
let ans = "aeiou";
let count = 0;
let vowels = function(str){
    for(let i=0; i<str.length; i++){
        if(ans.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(vowels(str));