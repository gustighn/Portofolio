// Interaktivitas pada tombol navigasi
const iconToggle = document.querySelector('.nav-icon');
const nav = document.querySelector('header');
iconToggle.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
})