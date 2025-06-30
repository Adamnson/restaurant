import "./home-page.css"

const content_div = document.querySelector("#content");

export function showHome() {

  content_div.innerHTML = " ";
  let line1 = document.createElement("p");
  let line2 = document.createElement("p");
  let line3 = document.createElement("p");
  let welcome_div = document.createElement("div"); 
  let text_div = document.createElement("div");


  line1.setAttribute('id', "line-1");
  line2.setAttribute('id', "line-2");
  line3.setAttribute('id', "line-3");
  welcome_div.setAttribute("class", "welcome-container");
  text_div.setAttribute("class", "welcome-text");
  line1.innerHTML = "Welcome to";
  line2.innerHTML = "Delight";
  line3.innerHTML = "Food Experience Center";
  text_div.appendChild(line1);
  text_div.appendChild(line2);
  text_div.appendChild(line3);
  welcome_div.appendChild(text_div);

  content_div.appendChild(welcome_div);
}