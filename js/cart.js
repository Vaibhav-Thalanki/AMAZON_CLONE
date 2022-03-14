// START OF PUFFYFISH edits








// END OF Puffyfish'S EDITS
document.addEventListener("DOMContentLoaded", (event) => {
  let items = document.getElementsByClassName("cart-row");

  let buttons = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove_element);
  }
  function remove_element(event) {
    let parent = this.parentElement.parentElement;
    window.alert(
      "Deleting " +
        parent.querySelector(".cart-item-desc>p.item-name").textContent
    );
    console.log(
      "Deleting " +
        parent.querySelector(".cart-item-desc>p.item-name").textContent
    );
    this.parentElement.parentElement.parentElement.remove();
  }
  (function change_quantity(global) {
    let inputs = document.querySelectorAll(".quantity-container>input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", (event) => {
        if (inputs[i].value <= 0) {
          inputs[i].value = 1;
        }
      });
    }
  })(window);
});
