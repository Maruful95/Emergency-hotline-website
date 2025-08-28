// function to get number
function getNumber(id) {
    const Number = parseInt(document.getElementById(id).innerText)
     return Number
}

// function to set value
function setValue(value) {
    document.getElementById("heart-count").innerText = value
}



document.querySelectorAll(".heart-icon").forEach(icon => {
    icon.addEventListener("click", function (e) {
        
        const heartCount = getNumber("heart-count")
        const newHeartCount = heartCount + 1

        setValue(newHeartCount)
    });
});