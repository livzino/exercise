"use strict";

const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
  en: {
    texts: [
      { text: "boat", location: ".header" },
      { text: "Robot", location: ".footer" },
    ],
  },
};
let locale = "da";

changeLanguage("da");

function changeLanguage(locale) {
  texts[locale].texts.forEach((each) => {
    document.querySelector(each.location).textContent = each.text;
  });
}

selectElement.addEventListener("change", (event) => {
  console.log(event.target.value);
  changeLanguage(event.target.value);
});

//console.log(texts[locale].texts[0].text);

// console.log(each.location);

//console.log(document.querySelector(each.location));
//console.log(texts["de"].texts[0].text);
