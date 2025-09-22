// 자바스크립트로 버튼을 만들거임
const btn = document.createElement("button");
btn.innerText = "버튼";
btn.style.color = "#ef1234";
btn.style.backgroundColor = "pink";
document.body.appendChild(btn);

// div 태그로 내일은 화요일이다! 만드셈
const div = document.createElement("div");
div.innerText = "내일은 화요일 ㅠㅠ";
document.body.appendChild(div);

// a태그 만들어서 쿠팡 이동
const a = document.createElement("a");
a.innerText = "쿠팡 이동";
a.href =
  "https://www.coupang.com/?src=1042016&spec=10304903&addtag=900&ctag=HOME&lptag=%EC%BF%A0%ED%8C%A1&itime=20250922121746&pageType=HOME&pageValue=HOME&wPcid=17585110660808437151675&wRef=www.google.com&wTime=20250922121746&redirect=landing&gclid=EAIaIQobChMI1_fimrTrjwMV0oCmAx075SWaEAAYASAAEgJo__D_BwE&mcid=d9909600f7274e16be6dd6de04edcd0e&network=g";
document.body.appendChild(a);
