const contact = "This is the contact us page";
const content_div = document.querySelector("#content");

export function showContact() {
  console.log("conatact button was clicked");
  content_div.innerHTML = contact;
}
