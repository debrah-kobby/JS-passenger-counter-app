let num_1 = document.getElementById("num_1");
let num_2 = document.getElementById("num_2");

let result = document.getElementById("results");

let assignedNum_1 = (document.getElementById("num_1").textContent =9 );

let assignedNum_2 = (document.getElementById("num_2").textContent =7 );

function addBtn() {
  let addition = Number(assignedNum_1) + Number(assignedNum_2);
  result.textContent = "Sum : " + addition;
}

function subtractBtn() {
  let subtraction = Number(assignedNum_1) - Number(assignedNum_2);
  result.textContent = "Difference: " + subtraction;
}

function divideBtn() {
  let division = Number(assignedNum_1) / Number(assignedNum_2);
  result.textContent = "Quotient: " + division;
}

function multiplyBtn() {
  let multiplication = Number(assignedNum_1) * Number(assignedNum_2);
  result.textContent = "Product: " + multiplication;
}
