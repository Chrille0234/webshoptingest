const button = document.getElementById("primaryNav__toggle")
const menu = document.getElementById("primaryMenu__ul")


var toggled = false // used to keep track of if menu has display flex
button.addEventListener("click", () => {
    // if not toggled, give display flex, if toggled, give display none
    toggled == false ? menu.style.display = "flex" : menu.style.display = "none"
    // if not toggled, set toggle to true, if it is toggled, set it to false
    toggled == false ? toggled = true : toggled = false
})