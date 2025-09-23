const screen = document.querySelector(".screen");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // screen.classList.contains("on") ? screen.classList.remove("on") : screen.classList.add("on");
  screen.classList.toggle("show");
});
