import { presidents } from "./presidents";
import { DOM } from "./dom";

const president = {
  function() {
    forEach((presidents) =>
      DOM.box.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
          <h1>${presidents.name}</h1>
          <img src="${presidents.image}">
          <h2>${presidents.alive}</h2>
          <h2>${presidents.presidentnumber}</h2>
          <h2>${presidents.presidency}</h2>
          <h2>${presidents.militarybackground}</h2>
          <h2>${presidents.age}</h2>
          </div>`
      )
    );
  },
};

document.getElementById(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
