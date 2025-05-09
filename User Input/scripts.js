let username;

document.getElementById("my-input").onclick = function() 
{
    username = document.getElementById("my-text").value; 
    document.getElementById("heading").textContent = `Hello ! ${username}`; 
};