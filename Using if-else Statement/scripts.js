mysubmit = document.getElementById("mysubmit");
myLabel = document.getElementById("myLabel");
myInput = document.getElementById("myInput");

let age;

mysubmit.onclick = function()
{
    age = myInput.value;
    age = Number(age);

    if(age > 20)
    {
        ResultElement.textContent = "Come to the Party Bro !!";
    }
    else if(age < 18)
    {
        ResultElement.textContent = "Too Young to Come to the Party Bro !!";
    }
    else if(age > 30)
    {
        ResultElement.textContent = "Come OLD UNCLE !!";
    }
}