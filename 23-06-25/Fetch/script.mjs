fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then((data) => {
                const productsContainer = document.getElementById("products");

                console.log(data);
                const products = data.products;

                products.forEach((product) => {
                        const productElement = document.createElement("div");
                        productElement.classList.add("product-element");

                        const productTitle = document.createElement("p");
                        productTitle.textContent= product.title;
                        productTitle.classList.add("title");

                        const productImage = document.createElement("img");
                        productImage.src = product.thumbnail;
                        productImage.classList.add("product-image");
                        
                        const wishandcart = document.createElement("div");
                        wishandcart.classList.add("wishAndCart");

                        const cart = document.createElement("button");
                        cart.classList.add("cartButton");
                        cart.textContent = "Add To Cart";
                        wishandcart.appendChild(cart);

                        const wish = document.createElement("button");
                        wish.classList.add("cartButton");
                        wish.textContent = "Wishlist";
                        wishandcart.appendChild(wish);

                        productElement.appendChild(productImage);
                        productElement.appendChild(productTitle);
                        productElement.appendChild(wishandcart);
                        productsContainer.appendChild(productElement);

                });
        })
        .catch((error) =>{
                console.log("Data fetching failed");
                console.log("this is the error", error);
        })