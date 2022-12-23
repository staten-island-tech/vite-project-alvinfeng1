import { presidents } from "./presidents";
import { DOM } from "./dom";

president();
function president() {
  presidents.forEach((president) => {
    DOM.box.insertAdjacentHTML(
      "beforeend",
      `<div class="Card">
        <h2>${president.name}</h2>
        <img src="${president.image}">
        <h2>${president.alive}</h2>
        <h2>${president.price}</h2>
        <h3>${president.presidentnumber}</h3>
        <h3>${president.presidency}</h3>
        <h4>${president.militarybackground}</h4>
        <h5>${president.age}</h5>
        </div>`
    );
  });
}

function all() {
  presidents.forEach((president) => {
    DOM.box.insertAdjacentHTML(
      "beforeend",
      `<div class="Card">
          <h2>${president.name}</h2>
          <img src="${president.image}">
          <h2>${president.alive}</h2>
          <h2>${president.price}</h2>
          <h3>${president.presidentnumber}</h3>
          <h3>${president.presidency}</h3>
          <h4>${president.militarybackground}</h4>
          <h5>${president.age}</h5>
          </div>`
    );
  });
}

document.querySelector("#allBtn").addEventListener("click", function () {
  DOM.box.innerHTML = ``;
  all(presidents);
});

document.getElementById("btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("dark");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("dark");
  }
});

const presidentsDiv = document.querySelector(".box");

document.querySelector("#aliveBtn").addEventListener("click", function () {
  presidentsDiv.innerHTML = ``;
  presidents
    .filter((president) => president.alive === "Alive")
    .forEach((president) => {
      DOM.box.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
            <h2>${president.name}</h2>
            <img src="${president.image}">
            <h2>${president.alive}</h2>
            <h2>${president.price}</h2>
            <h3>${president.presidentnumber}</h3>
            <h3>${president.presidency}</h3>
            <h4>${president.militarybackground}</h4>
            <h5>${president.age}</h5>
            </div>`
      );
    });
});

document.querySelector("#deadBtn").addEventListener("click", function () {
  presidentsDiv.innerHTML = ``;
  presidents
    .filter((president) => president.alive === "Dead")
    .forEach((president) => {
      DOM.box.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
            <h2>${president.name}</h2>
            <img src="${president.image}">
            <h2>${president.alive}</h2>
            <h2>${president.price}</h2>
            <h3>${president.presidentnumber}</h3>
            <h3>${president.presidency}</h3>
            <h4>${president.militarybackground}</h4>
            <h5>${president.age}</h5>
            </div>`
      );
    });
});

document.querySelector("#militaryBtn").addEventListener("click", function () {
  presidentsDiv.innerHTML = ``;
  presidents
    .filter(
      (president) =>
        president.militarybackground === "Military Background: true"
    )
    .forEach((president) => {
      DOM.box.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
            <h2>${president.name}</h2>
            <img src="${president.image}">
            <h2>${president.alive}</h2>
            <h2>${president.price}</h2>
            <h3>${president.presidentnumber}</h3>
            <h3>${president.presidency}</h3>
            <h4>${president.militarybackground}</h4>
            <h5>${president.age}</h5>
            </div>`
      );
    });
});

document.querySelector("#bornBtn").addEventListener("click", function () {
  presidentsDiv.innerHTML = ``;
  presidents
    .filter((president) => president.presidency <= "1900")
    .forEach((president) => {
      DOM.box.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
            <h2>${president.name}</h2>
            <img src="${president.image}">
            <h2>${president.alive}</h2>
            <h2>${president.price}</h2>
            <h3>${president.presidentnumber}</h3>
            <h3>${president.presidency}</h3>
            <h4>${president.militarybackground}</h4>
            <h5>${president.age}</h5>
            </div>`
      );
    });
});

all();
