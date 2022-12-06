import presidents from "./presidents.js";

function display() {
  presidents;
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class = "display-card"> 
      <h2> Type:${h1}</h2>
      <br>
      <h2> Flavor:${h2}</h2>
      <br>
      <h2> Brand:${h3}</h2>
      <br>
      </div>
         `
  );
}
