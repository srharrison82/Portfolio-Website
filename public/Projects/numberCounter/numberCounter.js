//Nav

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("links")[0];

toggleButton.addEventListener("click", function () {
  links.classList.toggle("active");
});


//Counter 

let count = 0; 

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
    })
})

