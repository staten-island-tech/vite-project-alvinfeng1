import { presidents } from "./presidents.js";

// function paintings() {
//   presidents.display.insertAdjacentHTML(
//     "afterbegin",
//     `<div class = "display-card">
//   <h2> Type:${h1}</h2>
//   <br>
//   <h2> Flavor:${h2}</h2>
//   <br>`
//   );
// }

presidents
  .filter((presidents) => presidents.presidency <= 1800)
  .foreach((presidents) => {
    console.log(presidents.name);
  });
