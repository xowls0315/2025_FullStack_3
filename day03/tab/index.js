const menu = document.querySelector(".menu");
const description = document.querySelector(".description");

const data = [
  { color: "#f54336", content: "Home", sentences: "Home is where the heart is.." },
  { color: "#03ab6d", content: "News", sentences: "Some news this fine day!" },
  { color: "#2294f2", content: "Contact", sentences: "Get in touch, or swing by for a cup of coffee." },
  { color: "#ff5521", content: "About", sentences: "Who we are and what we do." },
];

data.forEach((v) => {
  const li = document.createElement("li");
  li.innerText = v.content;
  li.style.cursor = "pointer";

  li.addEventListener("click", () => {
    document.querySelectorAll(".menu li").forEach((el) => {
      el.style.backgroundColor = "transparent";
      el.style.color = "black";
    });

    li.style.backgroundColor = v.color;
    li.style.color = "white";
    // 기존 내용 제거 (누적 방지)
    description.innerText = "";
    description.style.backgroundColor = v.color;

    const h3 = document.createElement("h3");
    const span = document.createElement("span");

    h3.innerText = v.content;
    span.innerText = v.sentences;

    h3.style.fontSize = "40px";
    h3.style.color = "white";
    span.style.color = "white";

    description.appendChild(h3);
    description.appendChild(span);
  });

  menu.appendChild(li);
});
