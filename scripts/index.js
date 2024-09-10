// Selecting DOM elements
const counterDisplay = document.getElementById("counter");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");
const btnReset = document.getElementById("reset");

// Variable to store the counter value
let counter = 0;

// Function to update the displayed counter value
function updateDisplay() {
  counterDisplay.textContent = counter;
}

// Adding click events
btnIncrement.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

btnDecrement.addEventListener("click", () => {
  if (counterDisplay.textContent > 0) {
    counter--;
  }
  updateDisplay();
});

btnReset.addEventListener("click", () => {
  counter = 0;
  updateDisplay();
});
