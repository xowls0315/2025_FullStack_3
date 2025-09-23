const plus = document.querySelector("#plus");
const num = document.querySelector("#num");
const minus = document.querySelector("#minus");

plus.addEventListener("click", () => {
  num.innerText = parseInt(num.innerText) + 1;
  // plus.className = parseInt(num.innerText) >= 5 ? "myButton overFive" : "myButton";
  parseInt(num.innerText) >= 5 ? plus.classList.add("overFive") : plus.classList.remove("overFive");
});
minus.addEventListener("click", () => {
  num.innerText = parseInt(num.innerText) - 1;
  parseInt(num.innerText) >= 5 ? minus.classList.add("overFive") : minus.classList.remove("overFive");
});
