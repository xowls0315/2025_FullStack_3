const capitalList = document.querySelector(".capitalList");
const description = document.querySelector(".description");

const data = [
  { nation: "England", capital: "London" },
  { nation: "Japan", capital: "Tokyo" },
  { nation: "France", capital: "Paris" },
  { nation: "Korea", capital: "Seoul" },
  { nation: "Newzealand", capital: "WellingTone" },
];

data.forEach((v) => {
  const li = document.createElement("li");
  li.innerText = v.capital;
  li.style.cursor = "pointer";

  li.addEventListener("click", () => {
    document.querySelectorAll(".capitalList li").forEach((el) => {
      el.style.backgroundColor = "transparent";
    });

    li.style.backgroundColor = "#cccccc";
    // 기존 내용 제거 (누적 방지)
    description.innerText = "";

    const h3 = document.createElement("h3");
    const span = document.createElement("span");

    h3.innerText = v.capital;
    span.innerText = `${v.capital} is the capital city of ${v.nation}.`;

    description.appendChild(h3);
    description.appendChild(span);
  });

  capitalList.appendChild(li);
});
