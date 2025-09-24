const london = document.querySelector(".london");
const paris = document.querySelector(".paris");
const tokyo = document.querySelector(".tokyo");
const description = document.querySelector(".description");

const tabs = [london, paris, tokyo];

function showCity(cityEl, title, text) {
  description.innerHTML = "";

  tabs.forEach((tab) => (tab.style.backgroundColor = "transparent"));

  cityEl.style.backgroundColor = "#cccccc";

  const h3 = document.createElement("h3");
  h3.innerText = title;
  const p = document.createElement("p");
  p.innerText = text;
  description.appendChild(h3);
  description.appendChild(p);
}

london.addEventListener("click", () => showCity(london, "London", "London is the capital city of England."));
paris.addEventListener("click", () => showCity(paris, "Paris", "Paris is the capital of France."));
tokyo.addEventListener("click", () => showCity(tokyo, "Tokyo", "Tokyo is the capital of Japan."));

// london.addEventListener("click", () => {
//   description.innerHTML = "";
//   london.style.backgroundColor = "#cccccc";
//   paris.style.backgroundColor = "transparent";
//   tokyo.style.backgroundColor = "transparent";
//   const h3 = document.createElement("h3");
//   h3.innerText = "London";
//   const p = document.createElement("p");
//   p.innerText = "London is the captial city of England.";
//   description.appendChild(h3);
//   description.appendChild(p);
// });
// paris.addEventListener("click", () => {
//   description.innerHTML = "";
//   paris.style.backgroundColor = "#cccccc";
//   london.style.backgroundColor = "transparent";
//   tokyo.style.backgroundColor = "transparent";
//   const h3 = document.createElement("h3");
//   h3.innerText = "Paris";
//   const p = document.createElement("p");
//   p.innerText = "Paris is the capital of France.";
//   description.appendChild(h3);
//   description.appendChild(p);
// });
// tokyo.addEventListener("click", () => {
//   description.innerHTML = "";
//   tokyo.style.backgroundColor = "#cccccc";
//   london.style.backgroundColor = "transparent";
//   paris.style.backgroundColor = "transparent";
//   const h3 = document.createElement("h3");
//   h3.innerText = "Tokyo";
//   const p = document.createElement("p");
//   p.innerText = "Tokyo is the capital of Japan.";
//   description.appendChild(h3);
//   description.appendChild(p);
// });
