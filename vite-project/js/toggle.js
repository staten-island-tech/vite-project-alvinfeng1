document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classlist.contains?.("cool")) {
    document.body.classlist.add("warm");
    document.body.classlist.remove("cool");
  } else {
    document.body.classlist.add("cool");
    document.body.classlist.remove("warm");
  }
});

// const DOM = {
//   submit: document.querySelector("#"),
//   box: document.querySelector("#"),
//   imput: document.querySelector("."),
// };

// export { DOM };
