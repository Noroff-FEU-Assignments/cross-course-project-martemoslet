const details = document.querySelector(".details");
const queryString = document.location.search;

const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rainydays.martemoslet.one/wp-json/wc/store/products/" + id

async function getData() {
    try {
        const response = await fetch(url);
        const product = await response.json();
        details.innerHTML = "";

        details.innerHTML = `<h1>${product.name}</h1>
                            <div class="details-image" style="background-image: url('${product.images[0].src}')"></div>
                            <ul>
                            <li>${product.description}</li>
                            <li>${product.prices.price} ${product.prices.currency_code}</li>
                            </ul>
                            <button class="product-button cta-cart" data-product="${product.id}"">Add to cart</button>
                            `
    }
    
   catch(error) {
        console.log("An error occorred");
        details.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getData();

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

