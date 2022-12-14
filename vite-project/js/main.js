import { presidents } from "./presidents";

// presidents
//   .filter((presidents) => presidents.presidency <= 1800)
//   .foreach((presidents) => {
//     console.log(presidents.name);
//   });

const presidents = {
  Creation: function () {
    Array.forEach((presidents) =>
      DOM.Box.insertAdjacentHTML(
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
