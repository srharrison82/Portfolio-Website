//Nav

const toggleButton = document.getElementsByClassName("nav__toggle-btn")[0];
const links = document.getElementsByClassName("nav__links")[0];

toggleButton.addEventListener("click", function () {
  links.classList.toggle("active");
});
