const products = [
    {
        URL: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        color: "yellow",
        title: "Danmark",
        price: 499
    },
    {
        URL: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
        color: "cyan",
        title: "Sverige",
        price: 449
    },
    {
        URL: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        color: "blue",
        title: "Norge",
        price: 599
    },
    {
        URL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        color: "yellow",
        title: "Egypten",
        price: 599
    },
    {
        URL: "https://images.unsplash.com/photo-1549326483-d8ecdf9611c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        color: "blue",
        title: "Nord Korea",
        price: 499
    },
    {
        URL: "https://images.unsplash.com/photo-1535368459444-9bcff7349a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "Syd Korea",
        price: 1099
    },
    {
        URL: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "Japan",
        price: 699
    },
    {
        URL: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        color: "orange",
        title: "Kina",
        price: 499
    },
    {
        URL: "https://images.unsplash.com/photo-1520931061294-db3e762a9273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1200&q=60",
        color: "orange",
        title: "Indien",
        price: 499
    },
    {
        URL: "https://plus.unsplash.com/premium_photo-1684407617180-02d36c20a687?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "yellow",
        title: "USA",
        price: 749
    },
    {
        URL: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "blue",
        title: "Mexico",
        price: 499
    },
    {
        URL: "https://images.unsplash.com/photo-1534082753658-1dcb40af5719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvbG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
        color: "green",
        title: "Canada",
        price: 249
    },
    {
        URL: "https://images.unsplash.com/photo-1623410439349-c8b831666e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNvbG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
        color: "blue",
        title: "Finland",
        price: 149
    },
    {
        URL: "https://images.unsplash.com/photo-1607513746994-51f730a44832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3461&q=80",
        color: "yellow",
        title: "Island",
        price: 899
    },
    {
        URL: "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "Serbien",
        price: 599
    },
    {
        URL: "https://images.unsplash.com/photo-1547496832-84e64458210a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "Syd Afrika",
        price: 99
    }
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
    
}   );