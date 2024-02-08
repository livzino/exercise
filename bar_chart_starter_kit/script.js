//const list = document.querySelector("ul");
const valueArr = [];
//const li = document.createElement("li");
//li.style.setProperty("--height", "30");
//list.appendChild(li);

//valueArr.myMethod=function

setInterval(generatesoejle, 1000);

function generatesoejle() {
  //valueArr.push(Math.round(Math.random() * 100));
  valueArr.push(getRandoNum());
  document.querySelectorAll("li").forEach((li, i) => {
    li.style.setProperty("--height", valueArr[i]);
  });

  if (valueArr.length > 20) {
    valueArr.shift();
  }
}

function getRandoNum() {
  return Math.round(Math.random() * 100);
}

//   console.log(valueArr);
//   const li = document.createElement("li");
//   li.style.setProperty("--height", "30");
//   list.appendChild(li);
//   console.log(valueArr.length);
//   console.log("generatesoejle");
// }
//
