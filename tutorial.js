/* function firstFunc(a, b) {
  console.log(a + b);
}

firstFunc(5, 4);

function secondFunc(a, b) {
  console.log(a - b + 7);
}
secondFunc(1, 3);

function thirdFunc(a, b) {
  console.log(a / b - 3);
}
thirdFunc(4, 1);

function minusSeven(num) {
  return num - 7;
} */

/* var myArray = [50, "people"];
var ourArray = myArray[0];
console.log(ourArray); */

/* var myDetails = [
  "Prince Sam",
  "bessahsam0277@gmail.com",
  "0536769784",
  "intokalcartwego",
];

var removedPassword = myDetails.unshift(["Welcomee"]);
console.log(removedPassword);
 */

/* function signUpPageForm() {
  myName = "Prince Sam";
  console.log(myName);
}

signUpPageForm();

function logInPageForm() {
  console.log(myName);
}
logInPageForm(); */

/* function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10)); */

/* var sum = 5;
function myMultiple() {
  sum += 5;
  console.log(sum);
}

myMultiple(); */

/* var password = 4;

function passwordChanged(num) {
  return (num * 5) / 3;
}
console.log(passwordChanged(10));
password = passwordChanged(5);
console.log(password); */

/* function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [50, 40, 30, 20, 10];

console.log(nextInLine(testArr, 0));
console.log(testArr); */
/* var isItTrue = 0;
function firstIfFunc(isItTrue) {
  if (isItTrue) {
    return "Yes It is True ";
  }
  return "No it is false";
}

console.log(firstIfFunc(true)); */

/* function testOne(val) {
  if (val != 7) {
    return "Val is not equal";
  }
  return "Val is equal ";
}
console.log(testOne("8")); */
/* 
function testAnd(val) {
  if (val <= 50 && val >= 25) {
    return "It is greater or equal to 25 but less or equal to 50";
  }
  return "It doesnt satisfy the condition";
}

console.log(testAnd(25)); */
/* 
function testOr(val) {
  if (val < 10 || val > 20) {
    return "True";
  }
  return "False";
}

console.log(testOr(21)); */
/* function testElse(val) {
  if (val > 5) {
    return "Greater than 5";
  } else {
    return "Less or Wqual to 5";
  }
}
console.log(testElse(5)); */

/* function testChainIf(val) {
  if (val < 5) {
    return "Tiny";
  } else if (val < 10) {
    return "Small";
  } else if (val < 15) {
    return "Medium";
  } else if (val < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testChainIf(21 )); */

/* var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Borgey",
];
function golfStrokesAndPars(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  }
}
console.log(golfStrokesAndPars(3, 2)); */

/* function testSwitch(val) {
  switch (val) {
    case 1:
      return "Alpha";
      break;
    case 2:
      return "Beta";
      break;
    case 3:
      return "Gamma";
      break;
    case 4:
      return "Delta";
      break;
    default:
      return "Stuff";
      break;
  }
}

console.log(testSwitch(8)); */

/* function multipleInputSwitch(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "All in first three cases";
      break;
    case 4:
    case 5:
      return "in case 4 and 5";
      break;
    default:
      return "In None of the cases";
      break;
  }
}
console.log(multipleInputSwitch(9)); */

/* function replaceChainIfWithSwitch(val) {
  switch (val) {
    case "bob":
      return "Marley";
      break;
    case 42:
      return "The Answer";
      break;
    case 1:
      return "There is no #1";
      break;
    case 99:
      return "Missed me by this much!";
      break;
  }
}

console.log(replaceChainIfWithSwitch("bob")); */

/* function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 11 )); */

/* var testObj = {
  hat: "ballcap",
  shoe: "Nike",
};

var hatValue = testObj.hat;
console.log(hatValue); */

/* function phoneticLookUp(val) {
  var result = "";

  var objectLookup = {
    alpha: "adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
  };
  result = objectLookup[val];
  return result;

  return objectLookup[val];
}
console.log(phoneticLookUp("echo")); */

/* function checkObj(checkprop) {
  var myObj = {
    you: "are",
    me: "is",
    he: "are",
  };
  if (myObj.hasOwnProperty(checkprop)) {
    return myObj[checkprop];
  } else {
    return false;
  }
}

console.log(checkObj("hello")); */

/* var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray); */

/* var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray); */

/* var myArray = [];

for (var i = 1; i != 0 && i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray); */

/* var contacts = [
  {
    firstname: "Prince",
    lastname: "Sam",
    number: "0536769673",
    email: "bessahsam0277@gmail.com",
    schools: ["UPSA", "UG", "UMAT", "GT"],
  },
  {
    firstname: "Prince",
    lastname: "Sam",
    number: "0536769673",
    email: "bessahsam0277@gmail.com",
    schools: ["UPSA", "UG", "UMAT", "GT"],
  },
  {
    firstname: "Stephen",
    lastname: "Parry",
    number: "0536764373",
    email: "parry77@gmail.com",
    schools: ["UG", "UMAT", "GT"],
  },
  {
    firstname: "Kwamena",
    lastname: "Bainn",
    number: "0533311673",
    email: "bainn@gmail.com",
    schools: ["UG", "UMAT"],
  },
];

function profileLookup(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstname === name) {
      return contacts[i][prop] || "No Such Property";
    }
  }
  return "No such contact";
}

console.log(profileLookup("Kwamena", "email")); */

/* let myAge = 18;
let humanDogRatio = myAge * 7;
let myDogAge = humanDogRatio;

console.log("My Dog age is: " + myDogAge); */

/* function increment() {
  console.log("The button was clicked");
}

increment(); */
/* let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function addLaps() {
  console.log(lap1 + lap2 + lap3);
}

addLaps(); */

/* let lapsCompleted = 0;

function allLapsCompleted() {
  lapsCompleted = lapsCompleted + 1;
}
allLapsCompleted();
allLapsCompleted();
allLapsCompleted();
console.log(lapsCompleted); */

/* let welcomePg = document.getElementById("welcome-paragraph");

let name = "Prince";
let greetings = "Welcome to Kalcart";
let nameAndGreetings = greetings + ", " + name;

function funcForWelcome() {
  welcomePg.innerText = nameAndGreetings;
  console.log(welcomePg); }*/

//DOM
/* let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el"); */

//VARIABLES
/* let count = 0; */

//FUNCTIONS
/* function increment() {
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
 */
