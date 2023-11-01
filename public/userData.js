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

let slider = document.getElementById("starSlider");
//get hold of the DIV element
let starsContainer = document.getElementById("stars");
console.log(starsContainer);
//target class ""star-icon"
let icon = document.querySelector(".star-icon");
// add starts / or append children

function adjustStars() {
  //remove stars
  starsContainer.innerHTML = null;
  for (let i = 1; i <= slider.value; i++) {
    const star = icon.cloneNode(true);
    starsContainer.appendChild(star);
  }
}

slider.addEventListener("input", adjustStars);
