let localUsername = localStorage.getItem("username");
let localImg = localStorage.getItem("img");

document.getElementById(
  "user-info"
).innerHTML = `<p id="username">${localUsername}</p>
<a href="user-page.html"><div id="profile-pic"></div></a>`;

document.getElementById("userImage").innerHTML = `#profile-pic{
    background-image: url('${localImg}');
}`;

//add functionality to logout button

function logOut() {
  localStorage.clear();
}
//assigning stars value to rating of frontend
let sliderFrontend = document.getElementById("fe-starSlider");
//get hold of the DIV element
let starsContainerFrontend = document.getElementById("fe-stars");
console.log(starsContainerFrontend);
//target class ""star-icon"
let icon1 = document.querySelector(".star-icon1");
// add starts / or append children

function adjustStarsFrontend() {
  //remove stars
  starsContainerFrontend.innerHTML = null;
  for (let i = 1; i <= sliderFrontend.value; i++) {
    const star = icon1.cloneNode(true);
    starsContainerFrontend.appendChild(star);
  }
  // Store the frontend slider value in localStorage
  localStorage.setItem("feSliderValue", sliderFrontend.value);
}
sliderFrontend.addEventListener("input", adjustStarsFrontend);
// Retrieve the frontend slider value from localStorage and set it
const savedFeSliderValue = localStorage.getItem("feSliderValue");
if (savedFeSliderValue !== null) {
  sliderFrontend.value = savedFeSliderValue;
  adjustStarsFrontend(); // Update stars based on the stored value
}

//assigning stars value to rating of backend
let sliderBackend = document.getElementById("be-starSlider");
//get hold of the DIV element
let starsContainerBackend = document.getElementById("be-stars");
console.log(starsContainerBackend);
//target class ""star-icon"
let icon2 = document.querySelector(".star-icon2");
// add starts / or append children

function adjustStarsBackend() {
  //remove stars
  starsContainerBackend.innerHTML = null;
  for (let i = 1; i <= sliderBackend.value; i++) {
    const star = icon2.cloneNode(true);
    starsContainerBackend.appendChild(star);
  }
  // Store the backend slider value in localStorage
  localStorage.setItem("beSliderValue", sliderBackend.value);
}
sliderBackend.addEventListener("input", adjustStarsBackend);
const savedBeSliderValue = localStorage.getItem("beSliderValue");
if (savedBeSliderValue !== null) {
  sliderBackend.value = savedBeSliderValue;
  adjustStarsBackend(); // Update stars based on the stored value
}

//assigning stars value to rating of ui/ux
let sliderUI = document.getElementById("ui-starSlider");
//get hold of the DIV element
let starsContainerUI = document.getElementById("ui-stars");
console.log(starsContainerUI);
//target class ""star-icon"
let icon3 = document.querySelector(".star-icon3");
// add starts / or append children

function adjustStarsUI() {
  //remove stars
  starsContainerUI.innerHTML = null;
  for (let i = 1; i <= sliderUI.value; i++) {
    const star = icon3.cloneNode(true);
    starsContainerUI.appendChild(star);
  }
  localStorage.setItem("uiSliderValue", sliderUI.value);
}

sliderUI.addEventListener("input", adjustStarsUI);

const savedSliderValue = localStorage.getItem("uiSliderValue");
if (savedSliderValue !== null) {
  sliderUI.value = savedSliderValue;
  adjustStarsUI(); // Update stars based on the stored value
}
