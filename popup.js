document.getElementById("popup").style.display = "block";

document.getElementById("popup-close").addEventListener("click", closePopup); 
document.getElementById("openPopup").addEventListener("click", openPopup); 


function closePopup()
{
    document.getElementById("popup").style.display = "none";
}
function openPopup()
{    
    document.getElementById("popup").style.display = "block";
}
