"use script";

document.querySelectorAll("button").forEach((button) => {
  //ForEach - adder eventlistener for alle 3 knapper
  console.log(button);
  button.addEventListener("click", btnFilterEVTListener); //
});

function btnFilterEVTListener(evt) {
  // evt objekt bliver sat på når der er en eventlistener.
  console.log(evt.currentTarget.dataset.filter); //"dataset.filter" bliver sat på da vi har
  //sat datafilter på i html. Derfor kommer der kun det man har navngivet ud i konsollen.

  //currentTarget fortæller os hvilken knap der bliver trykket på så den adskiller dem.
}
