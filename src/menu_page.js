import "./menu_style.css"

const content_div = document.querySelector("#content");

export function showMenu() {
  // console.log("menu button was clicked");
  // content_div.innerHTML = menu;

  let container_div = document.createElement('div');
  container_div.setAttribute("class", "container");
  let menu_div = document.createElement("div");
  menu_div.setAttribute("class","items-menu");
  content_div.appendChild(container_div);
  container_div.appendChild(menu_div);
  menu_div.appendChild(addItemToMenu("Dosa", 50));
  menu_div.appendChild(addItemToMenu("Maggi", 15));
  menu_div.appendChild(addItemToMenu("Cheese Maggi", 25));
  menu_div.appendChild(addItemToMenu("Poha", 25));

}

function addItemToMenu(item, price){

  let menu_item_div = document.createElement("div");
  menu_item_div.setAttribute("class", "item");
  let image_placeholder = document.createElement('div');
  image_placeholder.setAttribute('class',"image");
  let dish_div = document.createElement('div');
  dish_div.setAttribute("class", "dish");
  let btn_item = document.createElement("button");
  btn_item.innerHTML = item;
  let price_item = document.createElement("div");
  price_item.innerHTML = price;
  
  menu_item_div.appendChild(image_placeholder);
  dish_div.appendChild(btn_item);
  dish_div.appendChild(price_item);
  menu_item_div.appendChild(dish_div);
  return menu_item_div;
}

