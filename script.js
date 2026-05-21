const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {

    menu.classList.toggle('active');

});

/* FECHAR MENU AO CLICAR */

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {

    link.addEventListener('click', () => {

        menu.classList.remove('active');

    });

});

/* POPUP CONTATO */

const contactBtn = document.getElementById('contact-btn');

const popup = document.getElementById('contact-popup');

const closePopup = document.getElementById('close-popup');

contactBtn.addEventListener('click', (e) => {

    e.preventDefault();

    popup.style.display = 'flex';

});

closePopup.addEventListener('click', () => {

    popup.style.display = 'none';

});
