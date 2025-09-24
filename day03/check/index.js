const checkbox = document.querySelector("#checkbox");
const submitBtn = document.querySelector("#submit");

checkbox.addEventListener("click", () => {
  checkbox.checked == true ? (submitBtn.disabled = false) : (submitBtn.disabled = true);
});
