const myBtn = document.getElementById("myBtn");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

const min = 1;
const max = 6;

let RandomNumber1;
let RandomNumber2;
let RandomNumber3;

myBtn.onclick = function()
{
    RandomNumber1 = Math.floor(Math.random() * max) + min;
    Label1.textContent = RandomNumber1;

    RandomNumber2 = Math.floor(Math.random() * max) + min;
    Label2.textContent = RandomNumber2;

    RandomNumber3 = Math.floor(Math.random() * max) + min;
    Label3.textContent = RandomNumber3;
}