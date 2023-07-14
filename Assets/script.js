
var Dovalue = document.querySelector(".do-value");

function function1() {
    Dovalue.textContent = "Websites!";
}
function function2() {
    Dovalue.textContent = "Games!";
}
function function3() {
    Dovalue.textContent = "Software!";
}

var functions = [function1, function2, function3];
var index = 0;

var intervalId = setInterval(function() { 
  functions[index](); // Call the function at the current index

  index++; // Move to the next index
  if (index >= functions.length) {
    index = 0; // Reset the index if it exceeds the array length
  }
}, 3000);