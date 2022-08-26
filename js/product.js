const baseUrl = "https://rainydays.martemoslet.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
        <a href="products.html?id=${product.id}" class="card">
        <div class="product"><h3>${product.name}</h3>
        <div class="product-image" style="background-image: url('${product.images[0].src}')">
        </div>
        </a>`;
        
    })
}

getProducts(baseUrl);