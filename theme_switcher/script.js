"use strict";

document.querySelector("#themes").addEventListener("click", theChange);

function theChange(evt) {
  document.querySelector("body").dataset.filter = evt.target.value;
}
