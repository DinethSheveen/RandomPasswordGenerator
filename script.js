const passwordLength = document.querySelector(".user-input");
const errorMsg = document.querySelector(".error-msg")
const includeLowercase = document.querySelector(".lowercase")
const includeUppercase = document.querySelector(".uppercase")
const includeNumbers = document.querySelector(".numbers")
const includeSymbols = document.querySelector(".symbols")


const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols= "!@#$%^&*()_+-={}[]|\~?/>.<,:;";

let allowedChars = "";

function generatePassword(){
    if(passwordLength.value < 5){
        errorMsg.classList.remove("no-error")
        errorMsg.classList.add("error")
        errorMsg.innerHTML = "Password must be atleast 5 characters long"
    }
    else{
        errorMsg.classList.remove("error")
        errorMsg.classList.add("no-error")
        errorMsg.innerHTML = "Password generated successfully"
    }

    allowedChars += includeLowercase.checked?lowerCase:""
    allowedChars += includeUppercase.checked?upperCase:"";
    allowedChars += includeNumbers.checked?numbers:"";
    allowedChars += includeSymbols.checked?symbols:"";

    if(allowedChars === ""){
        errorMsg.classList.remove("no-error")
        errorMsg.classList.add("error")
        errorMsg.innerHTML = "At least one of the below options should be selected"
    }
}