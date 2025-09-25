const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,
  slidesPerView: 1,
  speed: 700, // 전환 속도 (ms)
  resistanceRatio: 0, // 당겼다 튕김 느슨함 제거 → 스냅 느낌 선명
  mousewheel: {
    forceToAxis: true, // 세로로만 휠 이동
    releaseOnEdges: true, // 맨 위/아래에서 일반 스크롤 허용 (필요하면 false)
    sensitivity: 1, // 휠 민감도
  },
});
