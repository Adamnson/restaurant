const cart = "This is the cart";
const content_div = document.querySelector("#content");

export function showCart() {
  console.log("cart button was clicked");
  content_div.innerHTML = cart;
}

