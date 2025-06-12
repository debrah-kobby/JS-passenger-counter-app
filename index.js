//DOM
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

//VARIABLES
let count = 0;

//FUNCTIONS
function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}
function decrement() {
  count -= 1;
  countEl.textContent = count;
  console.log(count);
}

function saveBtn() {
  let countstr = count + " - ";
  saveEl.textContent += countstr;
  countEl.textContent = 0;
  count = 0;
}

function clearBtn() {
  saveEl.textContent = "Previous Entries: ";
}
