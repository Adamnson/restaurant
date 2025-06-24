import dosaPic from "./dosa.jpg"

const content_div = document.querySelector("#content");

export function showContact() {
  console.log("conatact button was clicked");
  content_div.innerHTML = "";
  console.log(dosaPic);
  let img = document.createElement("img");
  img.src = dosaPic;
  content_div.appendChild(img);
}
