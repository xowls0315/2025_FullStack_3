// load: 모든 리소스가 다 로드되었을때, [이미지,css,js] 파일로딩이 다 끝났을때!

const loading = document.querySelector("#loading");

window.addEventListener("load", () => {
  loading.style.transition = "all 2s ease";
  loading.style.opacity = "0";
});
