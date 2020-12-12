/*
    ------------------------
    ------ Variables -------
    ------------------------
*/

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('menu');
const navItems = navMenu.querySelectorAll('.nav__item');

const hamburgerIcon = "url(../../assets/icon/hamburger.svg)";
const closeIcon = "url(../../assets/icon/close.svg)";

let menuIsOpen = false;

/*
    ------------------------
    ------ Functions -------
    ------------------------
*/

function toggleMenu(){

    navMenu.classList.toggle('show-mobile-menu');

    if (menuIsOpen){
        navToggle.style.backgroundImage = hamburgerIcon;
    } else {
        navToggle.style.backgroundImage = closeIcon;
    }

    menuIsOpen = !menuIsOpen;
}

function setActive(){
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');

    // Close Mobile Menu after clicking Nav Item
    toggleMenu();
}

/*
    ------------------------
    ------ Main -------
    ------------------------
*/

navToggle.addEventListener('click', toggleMenu);

navItems.forEach(item => item.addEventListener('click', setActive))