"use strict";

const curseWords = [
  {
    bad: "var",
    good: "const",
  },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("pointerdown", checkIfSentenceContain);

function checkIfSentenceContain() {
  let theText = document.querySelector("p").textContent;
  curseWords.forEach((wordsObj) => {
    theText = theText.replaceAll(wordsObj.bad, wordsObj.good);
  });

  console.log("hej", theText);
  document.querySelector("p").textContent = theText;
}

function isItSafe() {
  return !curseWords.some((item) => theText.includes(item.bad));
}
