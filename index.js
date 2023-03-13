const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const resetkey = document.getElementById("reset");
const delKey = document.getElementById("del");
const equalkey = document.getElementById("equal-to");
let display = document.getElementById("display");

let currentVal = "0";
display.value = currentVal;

numbers[0].addEventListener("click", ()=>{
    addToDisplay("7");
});
numbers[1].addEventListener("click", ()=>{
    addToDisplay("8");
});
numbers[2].addEventListener("click", ()=>{
    addToDisplay("9");
});
numbers[3].addEventListener("click", ()=>{
    addToDisplay("4");
});
numbers[4].addEventListener("click", ()=>{
    addToDisplay("5");
});
numbers[5].addEventListener("click", ()=>{
    addToDisplay("6");
});
numbers[6].addEventListener("click", ()=>{
    addToDisplay("1");
});
numbers[7].addEventListener("click", ()=>{
    addToDisplay("2");
});
numbers[8].addEventListener("click", ()=>{
    addToDisplay("3");
});
numbers[9].addEventListener("click", ()=>{
    addToDisplay('.');
});
numbers[10].addEventListener("click", ()=>{
    addToDisplay("0");
});

operators[0].addEventListener("click", ()=>{
    addToDisplay("+");
});
operators[1].addEventListener("click", ()=>{
    addToDisplay("-");
});
operators[2].addEventListener("click", ()=>{
    addToDisplay("/");
});
operators[3].addEventListener("click", ()=>{
    addToDisplay("*");
});

resetkey.addEventListener("click", clearDisplay);

delKey.addEventListener("click", backspace);

equalkey.addEventListener("click", calculate);



// function to add value to the display 

function addToDisplay(value) {
    if (currentVal === "0") {
        currentVal = value;
    } else {
        currentVal += value;  
    }
    display.value = currentVal;
}

// function to clear the display

function clearDisplay() {
    currentVal ="0"
    display.value = currentVal;
}

// function to remove the last character from the display 

function backspace() {
    currentVal = currentVal.slice(0, -1)
    if (currentVal ==="") {
        currentVal = "0"
    }
    display.value = currentVal;
}

// Function to perform the calculation
function calculate() {
    if (currentVal === "0") {
        display.value = currentVal;  
    }
    let evaluate = eval(display.value);
    currentVal = evaluate;
    display.value = currentVal;  
}

// Function to perform the calculation
// function calculate() {
//     if (previousVal === null) {
//       previousVal = parseFloat(currentVal);
//     } else {
//       let current = parseFloat(currentVal);
//       switch (operator) {
//         case "+":
//           previousVal += current;
//           break;
//         case "-":
//           previousVal -= current;
//           break;
//         case "*":
//           previousVal *= current;
//           break;
//         case "/":
//           previousVal /= current;
//           break;
//       }
//     }
// }
