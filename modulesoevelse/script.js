import { getRandomNumber } from "../utils/numbers";
import { getRandomHSLColor } from "../utils/colors";
import { $, $$ } from "../utils/dom.js";
//function getRandomNumber(max) {
//return Math.floor(Math.random() * max + 1);
//}

const h1 = document.querySelector("h1");

const ps = $$("p");
const btn = $("button");
h1.textContent = `Random number: ${getRandomNumber(100)}`;

console.log(getRandomHSLColor());
h1.style.backgroundColor = getRandomHSLColor();

function callback() {
  ps.forEach((p) => {
    p.textContent = `Random number: ${getRandomNumber(100)}`;
    p.style.color = getRandomHSLColor();
  });

  Btn.addEventlistener("click", callback);
}
