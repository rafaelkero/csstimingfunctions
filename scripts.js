const switchButton = document.querySelector(".switchButton")
const switchArea = document.querySelector(".switch")
let effectCircle = document.querySelectorAll(".effectCircle")

switchButton.addEventListener("click", () => {
    switchArea.classList.toggle("switchOn")
    effectCircle.forEach((e) => {
        // for each element inside effecCircle toggle the class name
        e.classList.toggle("infinite")
    })
})
