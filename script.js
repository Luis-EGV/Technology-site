const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

let index = 0;

function showSlide() {
    const slides = document.getElementById('slides');
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index++;

    if(index > 2){
        index = 0;
    }

    showSlide();
}

function prevSlide() {
    index--;

    if(index < 0){
        index = 2;
    }

    showSlide();
}

setInterval(nextSlide, 5000);
