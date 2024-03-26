// Get references to HTML elements
let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");

// Function to be debounced
const myFunc = function (e) {
  let val = e.target.value;
  console.log(val);
  btn.addEventListener("click", (et) => {
    e.target.value = "";
  });
};

// Add an input event listener with debouncing
inp.addEventListener("input", debounce(myFunc, 2000));

// Debounce function
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    btn.disabled = true;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      btn.disabled = false;
    }, delay);
  };
}
