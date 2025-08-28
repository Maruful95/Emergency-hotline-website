const callData = []

// function to get text
function getText(id) {
    const text = document.getElementById(id).innerText
     return text
}

// function to get number
function getNumber(id) {
    const number = parseInt(document.getElementById(id).innerText)
     return number
}



// heart icon functionality
document.querySelectorAll(".heart-icon").forEach(function(icon) {
    icon.addEventListener("click", function (e) {
        
        const heartCount = getNumber("heart-count")
        const newHeartCount = heartCount + 1

        document.getElementById("heart-count").innerText = newHeartCount
    })
})


// hotline number copy on click
document.querySelectorAll(".hotline-number").forEach(function (text) {
    text.addEventListener("click", function () {
        const hotline = text.innerText.trim()
        navigator.clipboard.writeText(hotline)
    })
})

// copy button functionality
const button = document.querySelectorAll(".copy-button")
const hotline = document.querySelectorAll(".hotline-number")

button.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        const copyHotline = btn.parentElement.parentElement.querySelector(".hotline-number").innerText.trim();
        navigator.clipboard.writeText(copyHotline)

        alert("Number copied: " + copyHotline)

        const copyCount = getNumber("copy-count")
        const newCopyCount = copyCount + 1
        document.getElementById("copy-count").innerText = newCopyCount
    })
})

// call button functionality
document.querySelectorAll(".call-button").forEach(function(btn) {
    btn.addEventListener("click", function (e) {

        const coinCount = getNumber("coin-count")
        if (coinCount < 20) {
            alert("You don't have enough coins. You need at least 20 coins.")
            return
        }
        const serviceName = btn.parentElement.parentElement.querySelector(".service-name").innerText.trim()
        const hotlineNumber = btn.parentElement.parentElement.querySelector(".hotline-number").innerText.trim()
        alert("Calling " + serviceName + ": " + hotlineNumber)

        const newCoinCount = coinCount - 20

        document.getElementById("coin-count").innerText = newCoinCount

        // send data to history
        const name = btn.parentElement.parentElement.querySelector(".name").innerText.trim()
        const data = {
            name: name,
            number: hotlineNumber,
            date:new Date().toLocaleTimeString()
        }
        callData.push(data)
    })
})

// call history 
document.querySelectorAll(".call-button").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const callHistory = document.getElementById("history")
        callHistory.innerHTML = ""

        for (const data of callData) {
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="mb-2 p-3 flex justify-between items-center bg-[#f5f5f5cf] rounded-[12px]">
                <div>
                <h1 class="font-inter font-semibold text-[15px] ">${data.name}</h1>
                <p class="font-hind font-normal text-[17px] text-[#5C5C5C]">${data.number}</p>
                </div>
                <p class="whitespace-nowrap font-hind font-normal text-[14px]">${data.date}</p>
            </div> 
            `

            callHistory.appendChild(div)
        }
    })
})