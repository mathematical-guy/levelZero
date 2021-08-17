function calulateSum(date) {
    let sum = 0;
    for(let i = 0; i<date.length; i++){
        if(date[i] !== '-'){
            sum += Number(date[i]);
        }
    }
    return sum;
}



function checkForLuck(sum, lucky_number){
    lucky_number = Number(lucky_number);
    // console.log(lucky_number);
    if(sum % lucky_number === 0){
        return "Your Birth date is lucky 🤩";
    }
    return "Sorry your birthday is not lucky 😟";
}



function main() {
    birthDate = dateOfBirth.value;
    lucky_number = luckynumber.value;
    let text;
    if(birthDate !== '' && luckynumber !== ''){
        let sum = calulateSum(birthDate);
        text = checkForLuck(sum, lucky_number);
    }
    else{
        text = "Please enter in both fields"
    }
    result.innerText = text;
}





let dateOfBirth = document.getElementById('birthDate');
let luckynumber = document.getElementById('luckyNumber');
let submitBtn = document.getElementById('submitBtn');
let result = document.getElementById('result');

submitBtn.addEventListener("click", main);