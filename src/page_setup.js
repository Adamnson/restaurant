import dosaPic from "./dosa.jpg"
import vadaPavPic from "./vada_pav.jpg"
import pizzaPic from "./pizza.jpg"
import pohaPic from "./poha.jpg"

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
let cart = {};
current_menu.forEach( dish => {
cart[dish.name.split(" ").join("-")] = 0;
} )

export {current_menu, cart};
