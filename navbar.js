const burger = document.getElementById('burger');
const navbarLinks = document.getElementsByClassName('navbar__links');
const navbar = document.getElementsByClassName('navbar');

burger.addEventListener('click', () => {
    const display = navbarLinks[0].style.display;

    if (display === 'flex') {
        navbarLinks[0].removeAttribute('style');
    } else {
        navbarLinks[0].style.display = 'flex';
    }
});
