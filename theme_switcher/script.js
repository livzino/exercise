"use strict";

const themes = document.querySelector("#themes");
let currenTheme = "light";

themes.addEventListener("click", theChange);

function theChange(evt) {
  document.querySelector("body").dataset.filter = evt.target.value;
}
