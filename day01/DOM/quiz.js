// 유저에게 프롬프트 태그와 내용을 한번에 입력받고
// 없는 태그면 div 태그로 없는 태그 입력했습니다! 나오고
// 올바른 태그를 넣으면 태그와 내용 만들기

// ex) div 김치찌개
// const [user_tag, user_text] = prompt("태그와 내용을 입력하세요(빈칸으로 구분하셈)").split(" ");
// const element = document.createElement(user_tag);
// element.innerText = user_text;
// document.body.appendChild(element);

// 유저에게 내용을 프롬프트 한번에 입력받고
// 띄어쓰기 기준으로 해서 내용들을
// button 태그로 만들어서 나타내기
// ex) 김치 순대 떡볶이
const rest = prompt("내용 입력: (빈칸으로 구분)").split(" ");
const btns = rest.forEach((text) => {
  const btn = document.createElement("button");
  btn.innerText = text;
  document.body.appendChild(btn);
});
