// Function to reverse the input string
function reverseString(string){
    let reversed_string = '';
    for(let i = string.length - 1; i >= 0; i--){
        reversed_string += string[i];
    }
    return reversed_string;
}

// =================================================================================================

// Function to check whether the date is palindrome or not
function isPalindrome(birthDate){
    let day, month, year;
    if(birthDate.day < 10){
        day = '0' + birthDate.day.toString();
    }
    else{
        day = birthDate.day.toString();
    }
    if(birthDate.month < 10){
        month = '0' + birthDate.month.toString();
    }
    else{
        month = birthDate.month.toString();
    }
    year = birthDate.year.toString();
    let string = day + month + year;
    let reversed_string = reverseString(string);
    return reversed_string === string;
}

// =================================================================================================

// Funtion to check leap year
function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}   

// =================================================================================================

// Function to Generate next date
function generateNextDate(date) {
    let month31 = [1, 3, 5, 7, 8, 10, 12];
    let month30 = [4, 6, 9, 11];
    let limit;
    date.day += 1;
    if (month31.indexOf(date.month) !== -1) {           // check for month of 31 days
        limit = 31;
    }
    else if (month30.indexOf(date.month) !== -1) {      // check for month of 30 days
        limit = 30;
    }
    else {                                              // month is february
        if (checkLeapYear(date.year)) {
            limit = 29;                                 // leap year
        }
        else {
            limit = 28;                                 // not a leap year
        }
    }
    if (date.day > limit) {                             // month changes
        date.day = 1;
        date.month += 1;
    }
    if (date.month > 12) {                              // year changes
        date.day = 1;
        date.month = 1;
        date.year += 1;
    }
    return date;
}

// =================================================================================================


// Function to generate next palindrome date
function generateNextPalindromeDate(date) {
    let counter = 0;
    let nextDate = generateNextDate(date);
    while (true) {
        if (isPalindrome(nextDate)) {
            break;
        }
        nextDate = generateNextDate(nextDate);
        counter += 1;
    }
    return [counter, nextDate];
}

// =================================================================================================


// Main Function
function main(){
    if(inputDate.value !== ''){
        let ddmmyyyy = inputDate.value.split("-").reverse();
        let birthDate = {
            day: Number(ddmmyyyy[0]),
            month: Number(ddmmyyyy[1]),
            year: Number(ddmmyyyy[2])
            }
        Text = `Your birthdate is ${birthDate.day}/${birthDate.month}/${birthDate.year}`;
        if(isPalindrome(birthDate)){
            Text += ` \nCongrats! 🥳 Your birthdate is a palindrome`;
        }
        else{
            let [counter, nextDate] = generateNextPalindromeDate(birthDate);
            Text += ` \nSorry! 😢 Your birthdate is not a palindrome.\nNext palindrome date is ${nextDate.day}/${nextDate.month}/${nextDate.year} which is ${counter} days after`;
            console.log(nextDate);
        }
        result.innerText = Text;
    }
    else{
        result.innerText = `Please enter birthdate`;
    }
    body.style.height = "350px";      
}

// =================================================================================================


let inputDate = document.getElementById('date');
let submit = document.getElementById('check-btn');
let result = document.getElementById("result");
let body = document.getElementById("main-body");
submit.addEventListener("click", main);


