import { current_menu, cart } from "./page_setup.js"

export function showCart() {
  console.log("cart button was clicked");
  let names = [];
  current_menu.forEach(item =>{ 
    names.push(item.name.split(" ").join("-"));
  })
  let table = buildBillTable()
  showTotal(names,table)
}

function buildBillTable(){
  let content_div = document.querySelector("#content");
  content_div.innerHTML = "";
  let bill_table = document.createElement("table");
  let heading1 = document.createElement("th");
  let heading2 = document.createElement("th");
  let heading3 = document.createElement("th");
  let heading4 = document.createElement("th");
  heading1.innerHTML = "Dish";
  heading2.innerHTML = "Quantity";
  heading3.innerHTML = "Unit Price";
  heading4.innerHTML = "Total";
  bill_table.appendChild(heading1);
  bill_table.appendChild(heading2);
  bill_table.appendChild(heading3);
  bill_table.appendChild(heading4);
  content_div.appendChild(bill_table);
  return bill_table
}

function showTotal(names,table){
  let sum_total = 0;
  for(let i = 0; i < names.length; i++){
    if(cart[names[i]]){
      console.log(`${current_menu[i].name} : ${cart[names[i]]} => ${cart[names[i]] * current_menu[i].price}`)
      let table_row = document.createElement('tr');
      let dish_name = document.createElement('td');
      let dish_price = document.createElement('td');
      let dish_qty = document.createElement('td');
      let dish_total = document.createElement('td');
      dish_name.innerHTML = current_menu[i].name;
      dish_price.innerHTML = current_menu[i].price
      dish_qty.innerHTML = cart[names[i]];
      dish_total.innerHTML = cart[names[i]] * current_menu[i].price;
      sum_total += cart[names[i]] * current_menu[i].price;
      table_row.appendChild(dish_name);
      table_row.appendChild(dish_qty);
      table_row.appendChild(dish_price);
      table_row.appendChild(dish_total);
      table.appendChild(table_row);
    }
  }
  let final_row = document.createElement('tr');
    for(let j = 0;j<3; j++){
      final_row.appendChild(document.createElement('td'));
    }
    let total_price = document.createElement('td');
    total_price.innerHTML=sum_total;
    final_row.appendChild(total_price);
    table.appendChild(final_row);
}
