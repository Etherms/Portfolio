
var doValue = document.querySelector(".do-value");

function function1() {
  doValue.textContent = "Websites!";
}
function function2() {
  doValue.textContent = "Games!";
}
function function3() {
  doValue.textContent = "Software!";
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



var insideMenu = document.querySelector(".inside-menu");
var hamburgerMenu = document.querySelector(".ham");

function hideHamburger() {
  insideMenu.classList.add("hide")
}
function showOpacity(){
  insideMenu.style.opacity = "1";
}

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("active")) {
    insideMenu.classList.remove("hide");
    setTimeout(showOpacity,5);
  }
  else {
    insideMenu.style.opacity = "0";
    setTimeout(hideHamburger, 100);
  }   
});




