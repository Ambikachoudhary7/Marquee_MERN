function week(value){
    switch(true){
        case value == 1:
            console.log("Monday");
            break;
        case value == 2:
            console.log("Tuesday");
            break;
        case value == 3:
            console.log("Wednesday");
            break;
        case value == 4:
            console.log("Thursday");
            break; 
        case value == 5:
            console.log("Friday");
            break;
        case value == 6:
            console.log("Saturday");
            break;
        case value == 7:
            console.log("Sonday");
            break;  
        default : console.log("Good Morning");
    }
}
week(1);