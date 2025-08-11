//DOM SELECTION
const passwordLength = document.querySelector(".user-input");
const errorMsg = document.querySelector(".error-msg")
const includeLowercase = document.querySelector(".lowercase")
const includeUppercase = document.querySelector(".uppercase")
const includeNumbers = document.querySelector(".numbers")
const includeSymbols = document.querySelector(".symbols")
const generatedPassword = document.querySelector(".generated-password"); 
let password="";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols= "!@#$%^&*()_+-={}[]|\~?/>.<,:;";

let allowedChars = "";

function generatePassword(){
    generatedPassword.innerHTML = ""
    if(passwordLength.value < 5 || passwordLength.value>20){
        errorMsg.classList.remove("no-error")
        errorMsg.classList.add("error")
        errorMsg.innerHTML = "Password must be from 5-20 characters long"
    }
    else{
        errorMsg.classList.remove("error")
        errorMsg.classList.add("no-error")
        errorMsg.innerHTML = "Password generated successfully"
    }

    //SELECTING THE ALLOWED CHARACTERS FOR THE PASSWORD
    allowedChars += includeLowercase.checked?lowerCase:""
    allowedChars += includeUppercase.checked?upperCase:"";
    allowedChars += includeNumbers.checked?numbers:"";
    allowedChars += includeSymbols.checked?symbols:"";

    //DISPLAYING AN ERROR MSG IF NEITHER OF THE RADIO BUTTONS ARE SELECTED
    if(allowedChars === ""){
        errorMsg.classList.remove("no-error")
        errorMsg.classList.add("error")
        errorMsg.innerHTML = "At least one of the below options should be selected"
    }

    //GENRERATING THE PASSWORD IF THE CONDITIONS ARE SATISFIED
    else if(allowedChars !== "" && passwordLength.value>=5 && passwordLength.value<=20){
        for(let i=0;i<passwordLength.value;i++){
            let randomNumber = Math.floor(Math.random()*allowedChars.length);
            password += allowedChars[randomNumber] 
        }
        generatedPassword.innerHTML = password;
        console.log(password.length);
        password = "";
    }
}