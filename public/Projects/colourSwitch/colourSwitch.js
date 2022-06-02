//Nav

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("links")[0];

toggleButton.addEventListener("click", function () {
  links.classList.toggle("active");
});


//Colour Switch

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const colour = document.querySelector('.colour-text');

btn.addEventListener('click', function() {
    let hexColour = '#';
    for(let i = 0; i < 6; i++) {
        hexColour += hex[getRandomNumber()]; 
    }

    document.body.style.backgroundColor = hexColour;
    colour.textContent = hexColour;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}