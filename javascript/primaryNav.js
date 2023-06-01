const button = document.getElementById("primaryNav__toggle")
const menu = document.getElementById("primaryMenu__ul")


var toggled = false // Holder styr på om menuen er åben eller lukket
button.addEventListener("click", () => {
    // Hvis den er lukket, så vis den, hvis den er åben, så skjul den
    toggled == false ? menu.style.display = "flex" : menu.style.display = "none"
    // Skift toggled til det modsatte af hvad den var før
    toggled == false ? toggled = true : toggled = false
})