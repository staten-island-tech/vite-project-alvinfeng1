import { presidents } from "./presidents";
import { DOM } from "./dom";

function pres() {
  presidents.forEach((president) => {
    DOM.box.insertAdjacentHTML(
      "beforeend",
      `<div class="Card">
          <h2>${president.name}</h2>
          <img src="${president.image}">
          <h2>${president.alive}</h2>
          <h3>${president.presidentnumber}</h3>
          <h3>${president.presidency}</h3>
          <h4>${president.militarybackground}</h4>
          <h5>${president.age}</h5>
          </div>`
    );
  });
}

pres();
document.getElementById("btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
