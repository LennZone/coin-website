function toggleNavMenu() {
    document.getElementById('navbar-menu').classList.toggle('navbar-menu-open');
}

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
   toggleNavMenu();
});