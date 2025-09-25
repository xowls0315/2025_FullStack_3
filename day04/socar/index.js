const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // 자동 재생 설정
  autoplay: {
    delay: 2000, // 2초마다 자동 전환 (단위: ms)
    disableOnInteraction: false, // 사용자가 조작해도 자동재생 유지
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
