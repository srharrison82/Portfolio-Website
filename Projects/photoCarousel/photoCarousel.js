const carousel = [
    {
        id: 1,
        location: 'Location',
        date: 'Date',
        info: 'What did I do?',
        img: '../../Images/me1.jpeg',
    },
    {
        id: 2,
        location: 'Location2',
        date: 'Date',
        info: 'What did I do?',
        img: '../../Images/me2.jpeg',
    },
    {
        id: 3,
        location: 'Location3',
        date: 'Date',
        info: 'What did I do?',
        img: '../../Images/me3.jpeg',
    },
    {
        id: 4,
        location: 'Location4',
        date: 'Date',
        info: 'What did I do?',
        img: '../../Images/colour-green-square.png',
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
