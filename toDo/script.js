"use strict";

const task_array = [];

// lav en ting der skal lytte efter når der bliver klikket for at lave en ny task
// hvorefter som så går
//til denne function

makeNewTask();
makeNewTask();
makeNewTask();

function makeNewTask() {
  const task = { name: "Default name", done: false };
  task_array.push(task);
  console.log("task_array", task_array);
  filterAndSortList();
}

function filterAndSortList() {
  let listToShow;
  // filtrer og sortér listerne

  listToShow = task_array;
  showList();
}

function showList() {
  const tbody = document.querySelector("ul");
  tbody.innerHTML = "";
  task_array.forEach((task) => {
    const clone = document.querySelector("template").content.cloneNode(true);
    if (task.done) {
      clone.querySelector("header").textContent = "DONE";
    } else {
      clone.querySelector("header").textContent = "TO DO";
    }
    clone.querySelector("button").addEventListener("click", () => {
      console.log("klik");
      task.done = !task.done;
      filterAndSortList();
      console.log("task_array", task_array);
    });

    //  clone.querySelector("header").textContent = "task.name";
    tbody.appendChild(clone);
  });
}
