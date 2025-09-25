// const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// // arr -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// const quiz1 = arr.map((v, i) => i);
// console.log(quiz1);

import { keyframes, option } from "./animation.js";
import { boxes } from "./query.js";

boxes.forEach((v, i) => {
  v.animate(keyframes, { ...option, delay: i * 300 });
});
