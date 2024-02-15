const splitTargets = document.querySelectorAll("[data-split]");

splitTargets.forEach((target) => {
  const content = target.textContent;

  const splittedText = splitIntoChars(content);

  target.innerHTML = splittedText;
});

function splitIntoChars(string) {
  return string.split("").map(wrapInSpan).join("");
}

function wrapInSpan(node, i) {
  return `<span class="char" style="--i: ${i}">${node}</span>`;
}

// "use strict";

// // splitte teksten split('')

// // loope

// // giv class til hvad der skal animere

// const splitTargets = document.querySelectorAll("[data-split]");

// splitTargets.forEach((target) => {
//   const content = target.textContent;

//   const splittedtext = splitIntoChars(content);
//   // split content
//   target.innerHTML = splittedtext;
// });

// function splitIntoChars(string) {
//   return string.split("").map(wrapInSpan).join("");
// }

// function wrapInSpan(node, i) {
//   return ` <span class="char" style="--i; ${i}">${node}</span>`;
// }
