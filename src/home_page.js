const content_div = document.querySelector("#content");

export function showHome() {

  content_div.innerHTML = " ";
  let line1 = document.createElement("p");
  let line2 = document.createElement("p");
  let line3 = document.createElement("p");
  let welcome_div = document.createElement("div"); 


  line1.setAttribute('id', "line-1");
  line2.setAttribute('id', "line-2");
  line3.setAttribute('id', "line-3");
  welcome_div.setAttribute("class", "welcome-container");
  line1.innerHTML = "Welcome to";
  line2.innerHTML = "Keerti";
  line3.innerHTML = "Snacks Corner";
  welcome_div.appendChild(line1);
  welcome_div.appendChild(line2);
  welcome_div.appendChild(line3);

  content_div.appendChild(welcome_div);
}