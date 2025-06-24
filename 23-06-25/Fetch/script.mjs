fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    const productsContainer = document.getElementById("products");
    const products = data.products;
    const cartA = [];
    const cartW = [];

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product-element");

      const productTitle = document.createElement("p");
      productTitle.textContent = product.title;
      productTitle.classList.add("title");

      const productImage = document.createElement("img");
      productImage.src = product.thumbnail;
      productImage.classList.add("product-image");

      const wishandcart = document.createElement("div");
      wishandcart.classList.add("wishAndCart");

      const cartButton = document.createElement("button");
      cartButton.classList.add("cartButton");
      cartButton.textContent = "Add To Cart";
      cartButton.dataset.productId = product.id; 

      cartButton.addEventListener("click", () => {
        const productID = parseInt(cartButton.dataset.productId);
        const existingProduct = cartA.find(item => item.productID === productID);

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cartA.push({ productID, quantity: 1 });
        }

        console.log(cartA);
      });

      wishandcart.appendChild(cartButton);

      const wish = document.createElement("button");
      wish.classList.add("wishButton");
      wish.textContent = "Wishlist";
      wish.dataset.productId = product.id; 

      wish.addEventListener("click", () => {
        const productID = parseInt(wish.dataset.productId);
        const existingProduct = cartW.find(item => item.productID === productID);

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cartW.push({ productID, quantity: 1 });
        }

        console.log(cartW);
      });
      wishandcart.appendChild(wish);

      productElement.appendChild(productImage);
      productElement.appendChild(productTitle);
      productElement.appendChild(wishandcart);
      productsContainer.appendChild(productElement);
    });
  })
  .catch((error) => {
    console.log("Data fetching failed");
    console.log("this is the error", error);
  });