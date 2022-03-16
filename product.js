const carts = document.querySelectorAll(".addBtn");

let products = [
  {
    name: "Asus Vivobook Laptop",
    price: 890,
    inCart: 0
  },
  {
    name: "Asus White Laptop",
    price: 699,
    inCart: 0
  },
  {
    name: "Asus Black Laptop",
    price: 799,
    inCart: 0
  },
  {
    name: "Asus Red Laptop",
    price: 899,
    inCart: 0
  },
  {
    name: "Asus Green Laptop",
    price: 999,
    inCart: 0
  },
  {
    name: "Asus Yellow Laptop",
    price: 900,
    inCart: 0
  }
]

for (let n = 0; n < carts.length; n++) {
   carts[n].addEventListener('click', ()=> {
   cartNumbers(products[n]);
   totalCost(products[n]);
});
}

// does not work in Edge, USE CHROME
function onLoadCartNumbers () {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('#cartSpan').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('#cartSpan').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#cartSpan').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
    if(cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]:product
      }
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]:product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  console.log("my cartCost is", cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  console.log(cartItems);
  if(cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product-title">
      <i class="fa fa-times-circle"></i>
      <img src="./assets/accessories.jpg">
      <span>${item.name}</span>
      </div>
      <div class="cost">$${item.price},00</div>
      <div class="quantity">
        <i class="fa fa-chevron-circle-left"></i>
        <span>${item.inCart}</span>
        <i class="fa fa-chevron-circle-right"></i>
      </div>
      <div class="total">
        $${item.inCart * item.price},00
      </div>
      `;
    });

    productContainer.innerHTML += `
    <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">Basket Total
        </h4>
        <h4 class = "basketTotal">
        $${cartCost},00
        </h4>
        </div>
        `;
  }
}

  onLoadCartNumbers ();
  displayCart();
