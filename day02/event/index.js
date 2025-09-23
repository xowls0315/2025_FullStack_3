// const btn = document.createElement("button");
// btn.innerText = "테스트";
// btn.addEventListener("click", () => {
//   alert("클릭했습니다!");
// });

// document.body.appendChild(btn);

// div 태그 만들고
// 내용은 점메추 만들고
// 클릭하면 콘솔로그로 오늘의 점심메뉴는 마라탕입니다!

// const div = document.createElement("div");
// div.innerText = "점메추";
// div.addEventListener("click", () => {
//   console.log("오늘의 점심메뉴는 짜장");
// });

// document.body.appendChild(div);

// // 버튼 태그 만들고
// // 안에 콜라 내용 넣고
// // 클릭하면 콜라가 사이다로 변하도록 하기
// const btn = document.createElement("button");
// btn.innerText = "콜라";
// btn.addEventListener("click", () => {
//   btn.innerText == "콜라" ? (btn.innerText = "사이다") : (btn.innerText = "콜라");
// });
// document.body.appendChild(btn);

// // 버튼 만들고
// // 버튼 내용: 😀 <-> 😍
// const btn = document.createElement("button");
// btn.innerText = "😀";
// btn.addEventListener("click", () => {
//   btn.innerText == "😀" ? (btn.innerText = "😍") : (btn.innerText = "😀");
// });
// document.body.appendChild(btn);

// const btn = document.createElement("button");
// btn.innerText = "✔";
// btn.style.backgroundColor = "white";
// btn.style.borderRadius = "5px";
// btn.style.border = "1px solid gray";
// btn.style.color = "gray";
// btn.addEventListener("click", () => {
//   btn.style.backgroundColor == "white" ? ((btn.style.backgroundColor = "#4f54b0"), (btn.style.color = "white")) : ((btn.style.backgroundColor = "white"), (btn.style.color = "gray"));
// });
// document.body.appendChild(btn);

const num = document.querySelector(".num");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

function updateColor() {
  const value = parseInt(num.innerText);
  if (value <= 10) {
    num.style.color = "black";
  } else {
    num.style.color = "blue";
  }
}
updateColor();

plus.addEventListener("click", () => {
  num.innerText = parseInt(num.innerText) + 1;
  updateColor();
});
minus.addEventListener("click", () => {
  if (parseInt(num.innerText) > 0) {
    num.innerText = parseInt(num.innerText) - 1;
  }
  updateColor();
});
