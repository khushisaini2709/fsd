const prodContainer = document.getElementById("product-container");
let products = [];

const showProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    products = data.products;

    products.forEach((product) => {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;

        const title = document.createElement("h2");
        title.innerText = product.title;

        const price = document.createElement("p");
        price.innerText = `$${product.price}`;

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const span = document.createElement("span");
        span.innerText = "0";

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        let counter = 0;

        incrementBtn.addEventListener("click", () => {
            counter++;
            span.innerText = counter;
        });

        decrementBtn.addEventListener("click", () => {
            if (counter > 0) {
                counter--;
                span.innerText = counter;
            }
        });

        div.append(img, title, price, decrementBtn, span, incrementBtn);
        prodContainer.appendChild(div);
    });
};

showProducts();