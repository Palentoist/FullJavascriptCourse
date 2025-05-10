const IncreaseBtn = document.getElementById("IncreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const DecreaseBtn = document.getElementById("DecreaseBtn");
const LabelCounter = document.getElementById("labelCounter");

let count = 0;

IncreaseBtn.onclick = function()
{
    count++;
    LabelCounter.textContent = count;
}

DecreaseBtn.onclick = function()
{
    count--;
    LabelCounter.textContent = count;
}

ResetBtn.onclick = function()
{
    count = 0;
    LabelCounter.textContent= count;
}