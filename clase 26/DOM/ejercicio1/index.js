const button = document.querySelector(".btn-simple");
const div = document.querySelector("div");
// console.log(button);
// console.log(div);

button.addEventListener("click", () => {
  div.style.color = div.style.color == "green" ? "black" : "green";
});
