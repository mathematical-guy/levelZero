// This is a demo javascript file to test the custom code

import 'React'



function nextDate(date){
    let month31 = [1, 3, 5, 7, 8, 10, 12];
    let month30 = [4, 6, 9, 11];
    let limit;
    date.day += 1;
    if(month31.indexOf(date.month)!== -1){
        limit = 31;
    }
    else if(month30.indexOf(date.month)!== -1){
        limit = 30;
    }
    else{
        limit = 28;
    }
    if(date.day > limit){
        date.day = 1;
        date.month += 1;
    }
    return date;
}

let date = {
    day: 02,
    month: 02,
    year: 2020,
}

for(let i = 0; i< 40; i++){
    console.log(date);
    date = nextDate(date)
}