const passwordLength = document.querySelector(".user-input");
const errorMsg = document.querySelector(".error-msg")
const includeLowercase = document.querySelector(".lowercase")
const includeUppercase = document.querySelector(".uppercase")
const includeNumbers = document.querySelector(".numbers")
const includeSymbols = document.querySelector(".symbols")


function generatePassword(passwordLength){
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
}