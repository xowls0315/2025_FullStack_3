const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const screen = document.querySelector("#screen");

const albums = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

const screenChange = (imgNumber) => {
  screen.textContent = "";
  const screenImg = document.createElement("img");
  screenImg.src = imgNumber.src;
  screenImg.style.width = "100%";
  screenImg.style.height = "100%";
  screenImg.style.objectFit = "cover";
  screen.appendChild(screenImg);
};

albums.forEach((v) => {
  v.img.addEventListener("click", () => {
    screenChange(v.img);
  });
});
