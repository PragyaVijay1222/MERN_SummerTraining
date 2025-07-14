fetch('http://localhost:8080/data')
.then(response => response.json())
.then(data => {
    // document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    const productsContainer = document.getElementById("output");
    const products = data.products;

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-element");

        const productTitle = document.createElement("h3");
        productTitle.classList.add("name");
        productTitle.textContent = product.name;

        const productImage = document.createElement("img");
        productImage.classList.add("image");
        productImage.src = product.image;

        const productPrice = document.createElement("p");
        productPrice.classList.add("price");
        productPrice.textContent = product.price;

        const productDes = document.createElement("p");
        productDes.classList.add("des");
        productDes.textContent = product.description;

        productElement.appendChild(productTitle);
        productElement.appendChild(productImage);
        productElement.appendChild(productPrice);
        productElement.appendChild(productDes);

        productsContainer.appendChild(productElement);
    })
})
.catch(error => {
    console.log('Error fetching data: ', error);
});