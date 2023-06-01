const products = [
    {
        URL: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        color: "yellow",
        title: "banana",
        price: 499
    },
    {
        URL: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
        color: "cyan",
        title: "apple",
        price: 449
    },
    {
        URL: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        color: "blue",
        title: "grape",
        price: 399
    },
    {
        URL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        color: "yellow",
        title: "banana",
        price: 599
    },
    {
        URL: "https://images.unsplash.com/photo-1549326483-d8ecdf9611c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        color: "blue",
        title: "banana",
        price: 499
    },
    {
        URL: "https://images.unsplash.com/photo-1535368459444-9bcff7349a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "grapefruit",
        price: 299
    },
    {
        URL: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "pineapple",
        price: 699
    },
    {
        URL: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        color: "orange",
        title: "pear",
        price: 499
    },
    {
        URL: "https://images.unsplash.com/photo-1520931061294-db3e762a9273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1200&q=60",
        color: "orange",
        title: "blueberry",
        price: 499
    },  
]

// jeg henter item nummeret i url'en, og laver den om til et tal så jeg kan hente et specifikt produkt i blocken
var url = new URL(window.location.href)
var item = parseInt(url.searchParams.get("item"))
console.log(item);

// Sætter det rigtige billede
var image = document.getElementById("display")
image.src = products[item].URL

// sætter titlen 
var title = document.getElementById("itemName")
title.innerText = products[item].title

// sætter prisen
var price = document.getElementById("itemPrice")
price.innerText = products[item].price + " kr."

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", addToCart);

function addToCart() {
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (!cartItems.includes(item)) {
    cartItems.push(item);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } else {
    addToCartButton.innerText = "Produkt er allerede i kurven"
  }
  console.log(cartItems);

}

// Slet alt i kurven



// viser kurven
function displayCart() {
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cart = document.getElementById("shoppingCart");
    var cartItemsHTML = "";
    for (let i = 0; i < cartItems.length; i++) {
        cartItemsHTML += `
        <div class="cartItem">
        <img src="${products[cartItems[i]].URL}" alt="${products[cartItems[i]].title}">
        <h3 class="asd">${products[cartItems[i]].title}</h3>
        <h3 class="zxc">${products[cartItems[i]].price} kr.</h3>
        <button class="removeItem" onclick="removeItem(${i})">Fjern</button>
        </div>
        `;
    }
    cart.innerHTML = cartItemsHTML;
    }
// fjerner et item fra kurven
function removeItem(i) {   
    cartItems.splice(i, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCart();
    }
    
document.getElementById("cart").addEventListener("click", function() {
    displayCart()
});

//skjuler kurven hvis man klikker på den igen
document.getElementById("cart").addEventListener("click", function() {
    var cart = document.getElementById("shoppingCart");
    if (cart.style.display === "block") {
        cart.style.display = "none";
    } else {
        cart.style.display = "block";
    }
    menu.style.display = "none";
}   );