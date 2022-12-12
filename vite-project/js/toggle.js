// const DOM = {
//   submit: document.querySelector("#"),
//   box: document.querySelector("#"),
//   imput: document.querySelector("."),
// };

// export { DOM };

const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("input", (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
});
