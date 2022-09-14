//Nav

const toggleButton = document.getElementsByClassName("nav__toggle-btn")[0];
const links = document.getElementsByClassName("nav__links")[0];

toggleButton.addEventListener("click", function () {
  links.classList.toggle("active");
});


//Carousel

const carousel = [
    {
        id: 1,
        location: 'West Sussex, England',
        date: 'June 2020',
        info: 'Taking a walk down by the beach.',
        img: '../../Images/me1.jpeg',
    },
    {
        id: 2,
        location: 'Vancouver, Canada',
        date: 'July 2018',
        info: 'On a trail in northern Vancouver whilst traveling.',
        img: '../../Images/me2.jpeg',
    },
    {
        id: 3,
        location: 'Chichester Volleyball',
        date: 'Feb 2018',
        info: 'Played volleyball for the 2nd team.',
        img: '../../Images/me3.jpeg',
    },
    {
        id: 4,
        location: 'Montreal, Canada',
        date: 'June 2018',
        info: 'Worked as a camp counsellor for the summer.',
        img: '../../Images/me4.jpeg',
    },
]

const img = document.getElementById('location-img');
const place = document.getElementById('location');
const date = document.getElementById('date');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPhoto();
})

function showPhoto() {
    const item = carousel[currentItem];
    img.src = item.img;
    place.textContent = item.location;
    date.textContent = item.date;
    info.textContent = item.info;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > carousel.length - 1) {
        currentItem = 0
    }  
    showPhoto();
})

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = carousel.length - 1;
    }
    showPhoto();
})

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * carousel.length);
    showPhoto();
})
