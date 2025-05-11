const myInput = document.getElementById("myInput");
const toFaurenheite = document.getElementById("toFaurenheite");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function Convert()
{
    if(toFaurenheite.checked)
    {
        temp = Number(myInput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "℉";
    }
    else if(toCelsius.checked)
    {
        temp = Number(myInput.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "℃";
    }
    else
    {
        result.textContent = "Select a Unit !";
    }
}