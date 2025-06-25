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

  let container_div = document.createElement('div');
  container_div.setAttribute("class", "container");
  let menu_div = document.createElement("div");
  menu_div.setAttribute("class","items-menu");
  content_div.appendChild(container_div);
  container_div.appendChild(menu_div);
  menu_div.appendChild(addItemToMenu("Dosa", 50, dosaPic));
  menu_div.appendChild(addItemToMenu("Vada Pav", 15, vadaPavPic));
  menu_div.appendChild(addItemToMenu("Pizza Slice", 30, pizzaPic));
  menu_div.appendChild(addItemToMenu("Poha", 25, pohaPic));

}

function addItemToMenu(item, price, img){

  let item_container = document.createElement('div');
  item_container.setAttribute('class', "itemContainer");
  let btn_plus = document.createElement("button");
  btn_plus.setAttribute('class', "plus");
  btn_plus.innerHTML = "+";
  btn_plus.addEventListener("click", () => {updateItemInCart(menu_item_btn.id, "+")});
  let btn_minus = document.createElement("button");
  btn_minus.setAttribute('class', "minus");
  btn_minus.innerHTML = "-";
  btn_minus.addEventListener("click", () => {updateItemInCart(menu_item_btn.id, "-")});

  let menu_item_btn = document.createElement("button");
  menu_item_btn.setAttribute("class", "item");
  menu_item_btn.setAttribute("id", item.split(" ").join("-"))
  cart[item.split(" ").join("-")] = 0;

  let image_placeholder = document.createElement('div');
  image_placeholder.setAttribute('class',"image");
  image_placeholder.classList.add( item.split(" ").join("-"));;
  let img_el = document.createElement("img");
  img_el.src = img;
  img_el.style.width = "100%";
  img_el.style.maxHeight = "15vw";
  img_el.style.borderRadius = "0.5rem";
  img_el.style.marginTop = "0.1rem";
  image_placeholder.appendChild(img_el);


  let dish_div = document.createElement('div');
  dish_div.setAttribute("class", "dish");
  dish_div.classList.add(item.split(" ").join("-"));;

  let btn_item = document.createElement("div");
  btn_item.setAttribute('class',"name")
  btn_item.classList.add( item.split(" ").join("-"));
  btn_item.innerHTML = item;

  let price_item = document.createElement("div");
  price_item.classList.add( item.split(" ").join("-"));  price_item.innerHTML = price;
  
  menu_item_btn.appendChild(image_placeholder);
  dish_div.appendChild(btn_item);
  dish_div.appendChild(price_item);
  menu_item_btn.appendChild(dish_div);
  // menu_item_btn.addEventListener('click', () => {updateItemInCart(menu_item_btn.id) });
  
  item_container.appendChild(btn_minus);
  item_container.appendChild(menu_item_btn);
  item_container.appendChild(btn_plus);
  return item_container;
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
    circle.style.display = 'none';
  }
}