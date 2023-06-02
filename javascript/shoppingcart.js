document.addEventListener("DOMContentLoaded", function () {
    addProductsToCart()
})
var buyButton = document.getElementById("checkout")
buyButton.addEventListener("click", function () {  
    if (shoppingCart.length == 0) {
        alert("Du har ikke tilføjet nogen produkter til kurven")
    } else {
        redirect()
    }
})

var shoppingCart = JSON.parse(localStorage.getItem("cart")) || []
function addProductsToCart() {
    shoppingCart.forEach(function (product, number) {
        var container = document.querySelector(".cartItemsContainer")
        container.innerHTML += `
        <section class="cartItem">
            <img src="${product.URL}">
            <h3>${product.title}</h3>
            <p>Pris: ${product.price}</p>
            <button onClick="removeItem(${number})"> Fjern </button>
        </section>
        `
    })
    totalPrice()
}
// fjerner et produkt fra kurven
function removeItem(number) {
    shoppingCart.splice(number, 1)
    localStorage.setItem("cart", JSON.stringify(shoppingCart))
    var container = document.querySelector(".cartItemsContainer")
    // fjerner alle produkterne fra kurven, og sætter dem ind igen, men uden den varer der blev slettet
    container.innerHTML = ""
    addProductsToCart()
}

// Bliver kørt hver gang addProductsToCart bliver kørt
function totalPrice() {
    var totalPrice = 0
    shoppingCart.forEach(function (product) {
        totalPrice += product.price
        document.getElementById("totalPrice").innerText = totalPrice + " kr."
    }
    )
    if (totalPrice == 0) {
        document.getElementById("totalPrice").innerText = "0 kr."
    }
}

function redirect() {
    window.location.href = "buypage.html"
}