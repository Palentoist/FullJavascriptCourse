const includeLowercase = document.getElementById("incLower");
const includeUppercase = document.getElementById("incUpper");
const includeNumbers = document.getElementById("incNumber");
const includeSymbols = document.getElementById("incSymbol");
const myButton = document.getElementById("myButton");
const myResult = document.getElementById("myResult");
const passLength = document.getElementById("passLength");

function generatePassword() 
{
    const length = parseInt(passLength.value);
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers = "0123456789";
    const Symbols = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    if (includeLowercase.checked) 
    {
        allowedChars += lowerCase;
    }
    if (includeUppercase.checked) 
    {
        allowedChars += upperCase;
    }
    if (includeNumbers.checked) 
    {
        allowedChars += Numbers;
    }
    if (includeSymbols.checked) 
    {
        allowedChars += Symbols;
    }

    if (length <= 0) 
    {
        myResult.textContent = "Password Length Must be at least 1";
        return;
    }

    if (allowedChars.length === 0) 
    {
        myResult.textContent = "At least 1 character type needs to be selected";
        return;
    }

    for (let i = 0; i < length; i++) 
    {
        const RandomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[RandomIndex];
    }

    myResult.textContent = password;
}

myButton.addEventListener("click", generatePassword);