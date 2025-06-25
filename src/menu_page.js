import "./menu_style.css"
import dosaPic from "./dosa.jpg"
import vadaPavPic from "./vada_pav.jpg"
import pizzaPic from "./pizza.jpg"
import pohaPic from "./poha.jpg"

const content_div = document.querySelector("#content");
let cart = {};
export function showMenu() {
  // console.log("menu button was clicked");
  // content_div.innerHTML = menu;
  class Dish {
    constructor(name, price, image_link) {
      this.name = name
      this.price = price
      this.image = image_link
    }
  }

  let dosa = new Dish("Dosa", 50, dosaPic);
  let vadaPav = new Dish("Vada Pav", 15, vadaPavPic);
  let pizza = new Dish("Pizza Slice", 35, pizzaPic);
  let poha = new Dish("Poha", 25, pohaPic);

  let current_menu = [dosa, vadaPav, pizza, poha];


  let menu_div = document.createElement("div");
  menu_div.setAttribute("class","items-menu");
  content_div.appendChild(menu_div);

  current_menu.forEach(el => { menu_div.appendChild(addItemToMenu(el))})

}

function addItemToMenu(dish){

  let dashJoinedName = dish.name.split(" ").join("-");
  /* the outter most container */
  let item_container = document.createElement('div');
  item_container.setAttribute('class', "item-container");
  /* plus button */
  let btn_plus = document.createElement("button");
  btn_plus.setAttribute('class', "plus");
  btn_plus.innerHTML = "+";
  btn_plus.addEventListener("click", () => {updateItemInCart(menu_item_btn.id, "+")});
  /* minus button */
  let btn_minus = document.createElement("button");
  btn_minus.setAttribute('class', "minus");
  btn_minus.innerHTML = "-";
  btn_minus.addEventListener("click", () => {updateItemInCart(menu_item_btn.id, "-")});
  /* central button with details of the dish*/
  let menu_item_btn = document.createElement("button");
  menu_item_btn.setAttribute("class", "item");
  menu_item_btn.classList.add(dashJoinedName);
  menu_item_btn.setAttribute("id", dashJoinedName)
  menu_item_btn = addImagePriceName(dish, menu_item_btn)

  cart[dashJoinedName] = 0;
  
  item_container.appendChild(btn_minus);
  item_container.appendChild(menu_item_btn);
  item_container.appendChild(btn_plus);
  return item_container;
}

function addImagePriceName(dish, menu_item_btn){

  let item = dish.name;
  let price = dish.price;
  let img = dish.image;
  let dashJoinedName = item.split(" ").join("-");

  let image_placeholder = document.createElement('div');
  image_placeholder.setAttribute('class',"image");
  image_placeholder.classList.add(dashJoinedName);
  let img_el = document.createElement("img");
  img_el.src = img;
  image_placeholder.appendChild(img_el);

  let dish_div = document.createElement('div');
  dish_div.setAttribute("class", "dish");
  dish_div.classList.add(dashJoinedName);

  let btn_item = document.createElement("div");
  btn_item.setAttribute('class',"name")
  btn_item.classList.add(dashJoinedName);
  btn_item.innerHTML = item;

  let price_item = document.createElement("div");
  price_item.classList.add(dashJoinedName);
  price_item.innerHTML = price;
  
  menu_item_btn.appendChild(image_placeholder);
  dish_div.appendChild(btn_item);
  dish_div.appendChild(price_item);
  menu_item_btn.appendChild(dish_div);

  return menu_item_btn;
}

function updateItemInCart(item_id, sign){
  if (sign === "+"){
    cart[item_id]++;
    console.log(`1 more ${item_id} was added to cart`);
  }else if (sign === "-"){
    if (cart[item_id]){
      cart[item_id]--;
      console.log(`1 ${item_id} was removed from cart`);
    }
    else {
      console.log(`no more ${item_id} in cart`);
    }
  }
  console.log(cart) 
  dispalyItemNumberCircle(item_id);
}

function dispalyItemNumberCircle(item_id){
  let circle = document.querySelector(`#${item_id} .quantity`);
  if (cart[item_id]) {
    if (circle){
      circle.style.display = "";
      circle.innerHTML = cart[item_id];
    }
    else{
      let circle = document.createElement('div');
      circle.setAttribute("class", "quantity");
      circle.innerHTML = cart[item_id];
      let el = document.querySelector(`#${item_id}`);
      el.appendChild(circle);
    }
  }else {
    if(circle){
      circle.style.display = 'none';
    }
  }
}