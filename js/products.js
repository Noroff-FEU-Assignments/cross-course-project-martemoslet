import { productArray } from "./constants/productList.js";
const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

productArray.forEach(function(product){
    productsContainer.innerHTML +=
    `
    <div class="product">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <div class="product-price">${product.price}</div>
        <button class="product-button cta-cart" data-product="${product.id}"">Add to cart</button>
    </div>
    `
})

const button = document.querySelector("button");

    button.onclick = function(event){
        const itemToAdd = productArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        showCart(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
    }

function showCart(cartItems){
    cart.style.display = "block";
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement){
        total += cartElement.price;
        cartList.innerHTML +=
        `<div class="cart-item">
        <h4>${cartElement.name}</h4>
        <img src="images/jacket.jpg" alt="Jacket" class="cart-image" />
        </div> 
        `
    })
    totalContainer.innerHTML = `Total: ${total}`;
}