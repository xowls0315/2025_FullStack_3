// const heading = document.querySelector("#heading");

// heading.animate(
//   {
//     color: ["#efbfdd", "#c3e9d7"],
//     rotate: ["x 360deg", 0],
//   },
//   {
//     duration: 3000,
//     easing: "ease",
//   }
// );

const heading = document.querySelector("#heading");
const detail = document.querySelector("#detail");
heading.animate(
  {
    transform: ["translateY(200px)", "translateY(0)"],
    opacity: [0, 1], // 페이드 인 효과도 추가
  },
  {
    duration: 500, // 1초
    easing: "ease",
  }
);
detail.animate(
  {
    transform: ["translateY(200px)", "translateY(0)"],
    opacity: [0, 1],
  },
  {
    duration: 500,
    easing: "ease",
  }
);
