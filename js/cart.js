const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;
cartItems.forEach(function(cartElement){
    total += cartElement.price;
    cartContainer.innerHTML +=
    `<div class="cart-item">
    <h4>${cartElement.name}</h4>
    <img src="images/jacket.jpg" alt="Jacket" class="cart-image" />
    </div> 
    `
})
totalContainer.innerHTML = `Total: ${total}`;