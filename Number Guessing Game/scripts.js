myButton = document.getElementById("myButton");
myInput = document.getElementById("myInput");
result = document.getElementById("result");
let attempts = 0;

document.getElementById("myAttempts").textContent = `Attempts :  ${attempts}`;

const minNumber = 1;
const maxNumber = 50;
let guess;
let running = true;

const Answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;


myButton.onclick = function() 
{
    guess = myInput.value;
    guess = Number(guess);

    if (isNaN(guess)) 
    {
        result.textContent = "Guess a Valid Number!";
    } 
    else if (guess < minNumber || guess > maxNumber) {
        result.textContent = "Enter The Number between 1 - 50!";
    } 
    else 
    {
        if (guess < Answer) 
        {
            result.textContent = "TOO LOW! TRY AGAIN!!!";
            attempts++;
        } 
        else if (guess > Answer) 
        {
            result.textContent = "TOO HIGH! TRY AGAIN!!!";
            attempts++;
        } 
        else 
        {
            result.textContent = `The Number was ${Answer}! You Guessed Correct!`;
            attempts++;
        }
        document.getElementById("myAttempts").textContent = `Attempts : ${attempts}`;
    }
}




