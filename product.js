const carts = document.querySelectorAll(".addBtn");

for (let c of carts) {
c.addEventListener('click', () =>{
  console.log("clicked!");
});
}

for (let n = 0; n < carts.length; n++) {
   carts[n].addEventListener('click', ()=> {
   cartNumbers();
});
}

// does not work in Edge, USE CHROME
function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
  } else {
    localStorage.setItem('cartNumbers', 1);
  }

}
