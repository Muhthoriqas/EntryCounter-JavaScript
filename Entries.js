let countEL = document.getElementById("count-el");
let countEntries = document.getElementById("count-2");
let resetEntries = document.getElementById("delete-btn");
let resetSaveEntries = document.getElementById("deleteSave-btn");

let count = 0;
function increment() {
  count += 1;
  countEL.innerText = count;
}

function save() {
  let countStr = count + " - ";
  countEntries.innerText += countStr;
}

function reset() {
  count = 0;
  countEL.innerText = count;
}

let welcome1 = document.getElementById("welcome");

let nama = "Riq";
let greeting = "Welcome Back ";

nama = nama + " 😎";
welcome1.innerText = greeting + nama;

function resetSave() {
  countEntries.innerText = "Save Entries: ";
}
