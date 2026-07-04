// function divisible(){
//     for(let i=1; i<15; i++){
//         if(i%3==0 || i%5==0){
//             console.log(i);
//         }
//     }
// }
// divisible();

//q5
function divisible(){
    for(let i=1; i<30; i++){
        if(i%3==0){
            continue;
        }else{
            console.log(i);
        }
    }
}
divisible();
