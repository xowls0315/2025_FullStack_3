const sidebarMenu = document.querySelector(".sidebar__menu");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.remove("show");
//   hamburger.classList.add("hidden");
//   sidebarMenu.classList.remove("hidden");
//   sidebarMenu.classList.add("show");
// });
// close.addEventListener("click", () => {
//   hamburger.classList.remove("hidden");
//   hamburger.classList.add("show");
//   sidebarMenu.classList.remove("show");
//   sidebarMenu.classList.add("hidden");
// });

hamburger.addEventListener("click", () => {
  sidebarMenu.classList.add("is-open");
  hamburger.classList.add("is-hidden");
});

close.addEventListener("click", () => {
  sidebarMenu.classList.remove("is-open");
  hamburger.classList.remove("is-hidden");
});
