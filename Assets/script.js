
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



var insideMenu = document.querySelector(".inside-menu");
var hamburgerMenu = document.querySelector(".ham");

function hidehamburger() {
  insideMenu.classList.add("hide")
}
function showopacity(){
  insideMenu.style.opacity = "1";
}

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("active")) {
    insideMenu.classList.remove("hide");
    setTimeout(showopacity,5);
  }
  else {
    insideMenu.style.opacity = "0";
    setTimeout(hidehamburger, 100);
  }   
});



// Ajax for contact us form 


var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Your message was sent successfully";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)



