const home = "This is the Home page";
const content_div = document.querySelector("#content");

export function showHome() {
  console.log("home button was clicked");
  content_div.innerHTML = home;
}