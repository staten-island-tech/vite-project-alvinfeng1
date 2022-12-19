import { presidents } from "./presidents";
import { DOM } from "./dom";

  function pres() {
    presidents.forEach((president) =>{
      DOM.box.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
          <h1>${president.name}</h1>
          <img src="${president.image}">
          <h2>${president.alive}</h2>
          <h2>${president.presidentnumber}</h2>
          <h2>${president.presidency}</h2>
          <h2>${president.militarybackground}</h2>
          <h2>${president.age}</h2>
          </div>`
      );
      }),
    };
    
pres()
document.getElementById("btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add ("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
