const details = document.querySelector(".details");
const queryString = document.location.search;
const jacketsimages = document.querySelector(".jacketsimages");

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rainydays.martemoslet.one/wp-json/wc/store/products/" + id

async function getData() {
    try {
        const response = await fetch(url);
        const product = await response.json();
        details.innerHTML = "";
        jacketsimages.innerHTML = "";

        details.innerHTML = `<h1>${product.name}</h1>
                            <div class="details-image" style="background-image: url('${product.images[0].src}')"></div>
                            <ul>
                            <li>${product.description}</li>
                            <li>${product.prices.price} ${product.prices.currency_code}</li>
                            </ul>`
    }
    
   catch(error) {
        console.log("An error occorred");
        details.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getData();

