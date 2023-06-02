var shoppingCart = JSON.parse(localStorage.getItem("cart")) || []
shoppingCart.forEach(function (product, number) {
    console.log(product);
        var container = document.querySelector(".cartItemsContainer")
        container.innerHTML += `
        <section class="cartItem">
            <img src="${product.URL}">
            <h3>${product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick="removeItem(${number})"> Remove </button>
        </section>
        `
})
// removes the item from the cart, that is clicked on
function removeItem(number) {
    shoppingCart.splice(number, 1)
    localStorage.setItem("cart", JSON.stringify(shoppingCart))
    var container = document.querySelector(".cartItemsContainer")
    container.innerHTML = ""
    shoppingCart.forEach(function (product, number) {
        console.log(product);
            var container = document.querySelector(".cartItemsContainer")
            container.innerHTML += `
            <section class="cartItem">
                <img src="${product.URL}">
                <h3>${product.title}</h3>
                <p>Price: ${product.price}</p>
                <button onClick="removeItem(${number})"> Remove </button>
            </section>
            `
    })
}

// fjerner alle varer fra kurven
function removeAllItems() {
    var cartItems = document.querySelectorAll(".cartItem")
    
}