const content_div = document.querySelector("#content");

export function showMenu() {
  // console.log("menu button was clicked");
  // content_div.innerHTML = menu;

  let container_div = document.createElement('div');
  container_div.setAttribute("class", "container");
  let menu_div = document.createElement("div");
  menu_div.setAttribute("id","menu");
  content_div.appendChild(container_div);
  container_div.appendChild(menu_div);
  styleContainer(container_div);
  styleMenu(menu_div);  
  menu_div.appendChild(addItemToMenu("Dosa", 50));
  menu_div.appendChild(addItemToMenu("Maggi", 15));
  menu_div.appendChild(addItemToMenu("Cheese Maggi", 25));
  menu_div.appendChild(addItemToMenu("Poha", 25));

}

function addItemToMenu(item, price){
  let btn_item = document.createElement("button");
  btn_item.setAttribute("class", "item");
  btn_item.style.minHeight = "10vw";
  btn_item.style.width = "40%"
  btn_item.innerHTML = item;
  return btn_item;
}

function styleContainer( container ){
  container.style.border = "1rem solid purple";
}

function styleMenu( menu) {
  menu.style.margin = " 2rem ";
  menu.style.minHeight = "80vw";
  menu.style.border = " 0.5rem dotted gold"
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  menu.style.alignItems = "center";
}